import React,{ forwardRef, useImperativeHandle } from 'react';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

import Car from './Car';
import ShirtModel from './ShirtModel';
import Frame from './Frame';
import Sphere from './Sphere';



let rotation = [0, 2, 0];

const Objects = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            onClick() {
                rotation[1] -= 2.1;
                set({ rotation: [...rotation] });
              }
        }),
    )
      const [spring, set] = useSpring(() => ({
        rotation: [...rotation],
        config: { mass: 3, friction: 40, tension: 400 }
      }))

    return (
        <>
            <a.group {...spring}>
                <Sphere />
                <ShirtModel />
                <Frame />
                <Car />
            </a.group>
        </>
    )
})

export default Objects;