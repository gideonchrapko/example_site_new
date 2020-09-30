import React from 'react';
import Suzanne from './Suzanne';
import { a, useSpring } from '@react-spring/three';


const Objects = ({ click }) => {

    const [spring, set] = useSpring(() => ({
        rotation: [...rotation],
        config: { mass: 3, friction: 40, tension: 800 }
      }));
    
    let rotation = [0, 1, 0];
    const isClicked = click;
    if (isClicked === "right") {
        rotation[1] -= 1;
        set({ rotation: [...rotation] });
    } if (isClicked === "left") {
        rotation[1] += 1;
        set({ rotation: [...rotation] });
    }
    return (
        <>
            {/* <a.group> */}
            <a.group {...spring}>
                <Suzanne
                    position={[0, -1, -5]}
                    rotation={[0, 3, 0]}
                />
                {/* <Shirt /> */}
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

export default Objects