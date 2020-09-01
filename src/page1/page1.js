import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import Controls from '../components_3d/Controls'
// import Lights from '../components_3d/Lights'
import Environment from '../components_3d/Environment'
import Suzanne from '../components_3d/Suzanne'
import Sphere from '../components_3d/Sphere'
import Effects from '../components_3d/Effects'
import Shadow from '../components_3d/Shadow'

export default function Page1() {
  // Controls disable pointerevents on movement to save some CPU cost
  // const [active, set] = useState(false)
  return (
    <Canvas
      concurrent
      // noEvents={active}
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 0, 6.5] }}
      gl={{ antialias: false }}
      onCreated={({ gl, scene }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputEncoding = THREE.sRGBEncoding
        scene.background = new THREE.Color('#373737')
        //scene.background.convertSRGBToLinear()
      }}>
      {/* <Lights /> */}
      {/* <pointLight position={[0, 10, -10]} intensity={2} /> */}
      <pointLight intensity={1} position={[0, 10, 10]} />
      <Shadow renderOrder={10} color="white" stop={0.1} scale={[8, 8, 1]} position={[0, -1.49, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Controls disable={set} /> */}
      <Controls />
      <Suspense fallback={<Dom center>help me...</Dom>}>
        <Environment />
        <Sphere position={[-2, 0, -1]} />
        <Suzanne 
          position={[2, 0, 1]} 
          rotation={[0, -0.8, 0]}
          onClick={() => window.appHistory.push("/page2")}
          />
        <Effects />
      </Suspense>
    </Canvas>
  )
}
