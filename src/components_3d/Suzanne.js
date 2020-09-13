/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Shadow from './Shadow'
import { a, useSpring } from 'react-spring/three'
import { Html } from 'drei'

export default function Suzanne(props, color) {
  const group = useRef()
  const texture = useLoader(THREE.TextureLoader, '/flakes.png')
  const { nodes } = useLoader(GLTFLoader, '/suzanne-draco.glb', loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })

  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const animatedProps = useSpring({
    hovered: expand ? [2.5, 2.5, 2.5] : [2, 2, 2],
  });

  // const [hovered, set] = useState(false)
  // useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
      <a.mesh
        scale={animatedProps.hovered}
        position={[0, -0.75, 0]}
        geometry={nodes.Suzanne.geometry}
        rotation={[-0.61, 0, 0]}
        onPointerOver={() => setExpand(!expand)}>
        <meshStandardMaterial
          attach="material"
          metalness={0.5}
          roughness={0.4}
          color={color}
          normalMap={texture}
          normalScale={[0.5, 0.5]}
          normalMap-wrapS={THREE.RepeatWrapping}
          normalMap-wrapT={THREE.RepeatWrapping}
          normalMap-repeat={[40, 40]}
        />
      </a.mesh>
      <Html scaleFactor={5} position={[ 0, -2.5, 0 ]}>
        <h1 style={{ color: 'white', opacity: '0.2' }}>Title</h1>
      </Html>
      <Shadow renderOrder={2} position={[0, -2.5, -0.1]} scale={[4, 1, 1]} rotation={[-Math.PI / 2, 0, 0]} />
      <Shadow renderOrder={1} stop={0.5} opacity={0.6} position={[0, -2.5, 1.5]} scale={[2.6, 1, 1]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}
