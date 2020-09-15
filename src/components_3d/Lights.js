import * as THREE from "three";
import React, { useRef, useEffect } from 'react';
import { useThree, extend, useFrame } from 'react-three-fiber';
import Shadow from './Shadow';
import VolumetricSpotlight from "./volumetric-spotlight";

extend({
  VolumetricSpotlight
});

const MyVolSpotlight = React.forwardRef(function MyVolSpotlight(props, ref) {
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

  useEffect(() => {
    scene.add(spotlight.current.target);

    const geometry = vs.current.geometry;

    geometry.applyMatrix4(
      new THREE.Matrix4().makeTranslation(0, -geometry.parameters.height / 2, 0)
    );
    geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

    vs.current.material.uniforms.spotPosition.value = vs.current.position;

    spotlight.current.position.copy(vs.current.position);
  }, [scene, color, position]);

  useFrame(({ clock }) => {
    spotlight.current.position.copy(vs.current.position);
    // @todo fix this
    vs.current.material.uniforms.lightColor.value = spotlight.current.color;

    if (target && target.current) {
      vs.current.lookAt(target.current.position);
      spotlight.current.target.position.copy(target.current.position);
    }
  });

  const setRef = React.useCallback(function setRef(el) {
    vs.current = el;

    if (ref) {
      ref.current = el;
    }
  }, []);

  // maps spotlight angle to volueme cylinder every frame
  // it would be better to do it on a need-to basis
  // but it doesn't play nice with react-spring
  useFrame(() => {
    const angle = spotlight.current.angle;

    vs.current.scale.set(6 * angle, 6 * angle, 1);
  });

  // const setRef = React.useRef();

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

      <mesh position={position} ref={setRef}>
        <coneGeometry args={[10, 40, 64, 30, 40, true]} attach="geometry" />

        <volumetricSpotlight
          attach="material"
          uniforms-lightColor-value={color}
          uniforms-attenuation-value={24}
          uniforms-anglePower-value={8}
        />
      </mesh>
    </>
  );
});


export default function Lights() {

  const ref = React.useRef();
  const target = React.useRef();
  return (
    <>
        <pointLight position={[0, 10, -10]} intensity={2} />
        <pointLight intensity={3} position={[0, 4, -10]} />
          {/* <mesh position={[0, 0, 0]} >
            <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
            <meshBasicMaterial attach="material" color="white" />
          </mesh>
        </pointLight> */}
         <MyVolSpotlight penumbra={0.5} target={target} />
        <Shadow renderOrder={10} color="white" stop={0.1} scale={[10, 10, 10]} position={[0, -2, -3]} rotation={[-Math.PI / 2, 0, 0]} ref={target} />
    </>
  );
};
