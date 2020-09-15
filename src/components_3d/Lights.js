import * as THREE from "three";
import React from 'react';
import { useThree, extend, useResource } from 'react-three-fiber';
import Shadow from './Shadow';
import { Box, Plane } from "drei";
import VolumetricSpotlight from "./volumetric-spotlight";


extend({
  VolumetricSpotlight
});

function MyVolSpotlight(props) {
  const vs = React.useRef();
  const spotlight = React.useRef();
  const { scene } = useThree();

  const {
    angle = 0.3,
    penumbra = 0.1,
    distance = 60,
    color='#3396dd',
    intensity= 2,
    position = [-15, 6, 12],
    target
  } = props;


  return (
    <>
      <spotLight
        castShadow
        ref={spotlight}
        intensity={intensity}
        angle={angle}
        penumbra={penumbra}
        distance={distance}
        color={color}
      />

      <mesh position={position} >
        <coneGeometry args={[100, 100, 100, 100, 100, true]} attach="geometry" />

        <volumetricSpotlight
          attach="material"
          uniforms-lightColor-value={color}
          uniforms-attenuation-value={24}
          uniforms-anglePower-value={8}
        />
      </mesh>
    </>
  );
};


export default function Lights() {

  return (
    <>
        <pointLight position={[0, 10, -10]} intensity={2} />
        <pointLight intensity={3} position={[0, 4, -10]} />
          {/* <mesh position={[0, 0, 0]} >
            <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
            <meshBasicMaterial attach="material" color="white" />
          </mesh>
        </pointLight> */}
         <MyVolSpotlight penumbra={0.5}  />
        <Shadow renderOrder={10} color="white" stop={0.1} scale={[10, 10, 10]} position={[0, -2, -3]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  );
};
