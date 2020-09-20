import React from 'react';
import Suzanne from './Suzanne';
import Shirt from './Shirt'
import { a, useSpring } from 'react-spring/three';

const Objects = ({ rotation }) => {
    const animatedProps = useSpring ({
      clicked: rotation ? [0, 2, 0] : [0, 6, 0],

    });
    console.log(rotation);
    return (
        <>
        <a.group 
            rotation={animatedProps.clicked} 
        >
            <Suzanne
                position={[0, -1, -5]}
                rotation={[0, 3, 0]}
            />
            <Shirt />
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
}


export default Objects