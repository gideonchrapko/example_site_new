import React, { useState } from 'react';
import Suzanne from './Suzanne';
import { a, useSpring } from 'react-spring/three';
import { Html } from 'drei';

const Suzannes = () => {
    const [rotation, setRotation] = useState(false)
    const animatedProps = useSpring ({
      hovered: rotation ? [0, 3, 0] : [0, 6, 0],
    });

    return (
        <>
        <a.group 
            rotation={animatedProps.hovered}
            onClick={() => setRotation(!rotation)} >
            <Suzanne
                position={[0, -1, -5]}
                rotation={[0, 3, 0]}
            />
            <Suzanne 
                position={[4, -1, 2]}
                rotation={[0, 1, 0]}
            />
            <Suzanne
                position={[-5, -1, 2]}
                rotation={[0, 5, 0]}
            />
        </a.group>
        </>
    )
}


export default Suzannes