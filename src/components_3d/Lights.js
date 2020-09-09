import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import Shadow from './Shadow'
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
        <Shadow renderOrder={10} color="white" stop={0.1} scale={[10, 10, 10]} position={[0, -2, -3]} rotation={[-Math.PI / 2, 0, 0]} />

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
