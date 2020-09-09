import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Shadow from './Shadow'
import { useSpring, a } from 'react-spring'

export default function Sphere(props, color) {
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
    scale: expand ? [2, 2, 2] : [2.2, 2.2, 2.2],
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <a.mesh
        onClick={() => setExpand(!expand)}
        scale={animatedProps.scale}
        position={[0, -0.75, 0]}
        geometry={nodes.Suzanne.geometry}
        rotation={[-0.61, 0, 0]}>
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
      <Shadow renderOrder={2} position={[0, -2.5, -0.1]} scale={[4, 1, 1]} rotation={[-Math.PI / 2, 0, 0]} />
      <Shadow renderOrder={1} stop={0.5} opacity={0.6} position={[0, -2.5, 1.5]} scale={[2.6, 1, 1]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}








// export default function Sphere(props) {
//   const texture = useLoader(THREE.TextureLoader, '/flakes.png')
//   const normalMap = useMemo(() => {
//     const clone = texture.clone(true)
//     clone.needsUpdate = true
//     return clone
//   }, [texture])

//   return (
//     <group {...props}>
//       <mesh >
//         <sphereBufferGeometry attach="geometry" args={[1.5, 64, 64]} />
//         <meshPhysicalMaterial
//           attach="material"
//           clearcoat={1.0}
//           clearcoatRoughness={0}
//           metalness={0.9}
//           roughness={0.1}
//           color='white'
//           normalMap={normalMap}
//           normalScale={[0.3, 0.3]}
//           normalMap-wrapS={THREE.RepeatWrapping}
//           normalMap-wrapT={THREE.RepeatWrapping}
//           normalMap-repeat={[20, 20]}
//           //normalMap-anisotropy={16}
//         />
//       </mesh>
//       <Shadow position={[0, -2, 0]} scale={[4, 4, 1]} rotation={[-Math.PI / 2, 0, 0]} />
//     </group>
//   )
// }
