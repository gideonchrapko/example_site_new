import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import Shadow from './Shadow'

import volumetricSpotlight from './VolumetricSpotlight'

export default function Lights() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.0))
  return (
    <>
      {/* <pointLight position={[1, 1, -1]} intensity={4} castShadow /> */}
      <group ref={ref} >
        <pointLight 
          intensity={4} 
          position={[1, 1, 1]} 
          castShadow
        >
          <mesh position={[0, 1, 0]} >
            <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
            <meshBasicMaterial attach="material" color="white" />
          </mesh>
        </pointLight>
        <Shadow renderOrder={10} color="white" stop={0.1} scale={[10, 10, 10]} position={[1, -2, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </>
      // <>
      //        <pointLight position={[1, 1, -1]} intensity={4} castShadow />
      //       <spotLight
      //   castShadow
      //   // ref={spotlight}
      //   intensity={2}
      //   angle={0.3}
      //   penumbra={0.8}
      //   distance={60}
      //   color={'white'}
      // />

      // <mesh position={12, 15, 0}>
      //   <coneGeometry args={[10, 40, 64, 30, 40, true]} attach="geometry" />

      //   <volumetricSpotlight
      //     attach="material"
      //     uniforms-lightColor-value={"#ff6b81"}
      //     uniforms-attenuation-value={24}
      //     uniforms-anglePower-value={8}
      //   />
      // </mesh>
      // </>
  )
}
