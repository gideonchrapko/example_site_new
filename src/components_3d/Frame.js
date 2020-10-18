/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

// import * as THREE from 'three'
import React, { useRef, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco, Html } from 'drei';

import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

export default function Frame(props) {

  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const animatedProps = useSpring({
    hovered: expand ? [2.5, 2.5, 2.5] : [2, 2, 2],
  });

  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/frame.glb', draco('/draco-gltf/'))
  return (
    <group ref={group} {...props} dispose={null}>
      <a.mesh
        material={materials['initialShadingGroup.001']}
        geometry={nodes.g_PictureFrame001.geometry}
        position={[4, -0.5, 1.8]}
        rotation={[1.67, 0.2, 0.1]}
        scale={animatedProps.hovered}
        onPointerOver={() => setExpand(true)}
        onPointerOut={() => setExpand(false)}
      />
        <Html scaleFactor={5} position={[4, -3, 1.8]}>
          <h1 style={{ color: 'white', opacity: '0.2' }}>Gallery</h1>
        </Html>
    </group>
  )
}
