import * as THREE from 'three'
import React, { useRef, useState, useEffect, useMemo } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Shadow from './Shadow'

function Sphere(props) {
  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, '/flakes.png')
  const normalMap = useMemo(() => {
    const clone = texture.clone(true)
    clone.needsUpdate = true
    return clone
  }, [texture])


    const [active, setActive] = useState(false)

  return (
    <group {...props} ref={ref}>
      <mesh
      scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      >
        <sphereBufferGeometry attach="geometry" args={[1.5, 64, 64]} />
        <meshPhysicalMaterial
          attach="material"
          clearcoat={1.0}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.1}
          color='white'
          normalMap={normalMap}
          normalScale={[0.3, 0.3]}
          normalMap-wrapS={THREE.RepeatWrapping}
          normalMap-wrapT={THREE.RepeatWrapping}
          normalMap-repeat={[20, 20]}
          //normalMap-anisotropy={16}
        />
      </mesh>
      <Shadow position={[0, -2, 0]} scale={[4, 4, 1]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default Sphere;