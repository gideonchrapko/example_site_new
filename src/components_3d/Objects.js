import React,{ forwardRef, useRef, useImperativeHandle } from 'react';
import { useSpring, a } from '@react-spring/three';
import Suzanne from './Suzanne';
import Shirt from './shirt';
import Frame from './Frame';

let rotation = [0, 1, 0];
const Objects = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            onClick() {
                rotation[1] -= 1.8;
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
                <Shirt />
                <Frame />
                {/* <Suzanne 
                    position={[4, -1, 2]}
                    rotation={[0, 1, 0]}
                /> */}
                <Suzanne
                    position={[-5, -1, 2]}
                    rotation={[0, 5, 0]}
                />
            </a.group>
        </>
    )
})

export default Objects;