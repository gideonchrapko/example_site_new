/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/
// import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco, Html } from 'drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

export default function ShirtModel(props) {

  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const animatedProps = useSpring({
    hovered: expand ? [0.035, 0.035, 0.035] : [0.03, 0.03, 0.03],
  });

  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/shirt.glb', draco('/draco-gltf/'))
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <a.mesh
          position={[0, -2.5, -4.5]}
          onPointerOver={() => setExpand(true)}
          onPointerOut={() => setExpand(false)}
          scale={animatedProps.hovered}
          material={materials.Material}
          geometry={nodes['T-Shirt'].geometry}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <Html scaleFactor={5} position={[0, -3, -4.5]}>
          <h1 style={{ color: 'white', opacity: '0.2' }}>Shop</h1>
        </Html>
    </group>
  )
}
