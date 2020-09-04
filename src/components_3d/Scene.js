import React, { useLayoutEffect, useRef } from "react"
import { useThree } from "react-three-fiber"
import Jacket from './Jacket'

export default function Scene() {
  const { camera } = useThree()
  const ambientLightRef = useRef()
  const spotLightRef = useRef()

  useLayoutEffect(() => {
    camera.layers.enable(1)
    camera.layers.enable(2)
    camera.layers.enable(3)
    // ambientLightRef.current.layers.enable(1)
    // ambientLightRef.current.layers.enable(2)
    // ambientLightRef.current.layers.enable(3)
    spotLightRef.current.layers.enable(1)
    spotLightRef.current.layers.enable(3)
  }, [])

  return (
    <group>
      {/* <ambientLight ref={ambientLightRef} color="white" intensity={0.25} /> */}
      <spotLight
        ref={spotLightRef}
        position={[15, 40, 50]}
        angle={Math.PI / 4}
        penumbra={0.5}
        decay={2}
        distance={200}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* ground */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow={true}>
        <planeBufferGeometry attach="geometry" args={[2000, 2000]} />
        <meshPhongMaterial attach="material" color={0x808080} dithering={true} />
      </mesh>

      {/* 3 cubes */}
      <mesh position={[20, 2, 0]} castShadows layer={2}>
        <boxBufferGeometry attach="geometry" args={[3, 1, 2]} />
        <meshPhongMaterial attach="material" color={0x4080ff} dithering={true} />
      </mesh>

      <mesh position={[40, 2, 0]} castShadow layers={1}>
        <boxBufferGeometry attach="geometry" args={[3, 1, 2]} />
        <meshPhongMaterial attach="material" color={0x4080ff} dithering={true} />
      </mesh>
    </group>
  )
}
