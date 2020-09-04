import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import Controls from '../components_3d/Controls'
import Lights from '../components_3d/Lights'
import Environment from '../components_3d/Environment'
import Suzanne from '../components_3d/Suzanne'
import Sphere from '../components_3d/Sphere'

import Effects from '../components_3d/Effects'
import Shadow from '../components_3d/Shadow'
import Jacket from '../components_3d/Jacket'
// import Scene from '../components_3d/Scene'

import { PerspectiveCamera } from 'drei'

export default function Page1() {
  // Controls disable pointerevents on movement to save some CPU cost
  const [active, set] = useState(false)
  
  return (
    <Canvas
    concurrent
    noEvents={active}
    pixelRatio={window.devicePixelRatio}
    camera={{ position: [0, 0, 6.5] }}
    gl={{ antialias: false }}
    onCreated={({ gl, scene }) => {
      gl.toneMapping = THREE.ACESFilmicToneMapping
      gl.outputEncoding = THREE.sRGBEncoding
      scene.background = new THREE.Color('#242424')
      }}>
      <Controls disable={set} />
      <Suspense fallback={<Dom center>Loading...</Dom>}>
      {/* <pointLight position={[0, 10, -10]} intensity={2} /> */}
      <fog attach="fog" args={["#242424", 10, 20]} />
      <Suzanne 
            position={[5, -1, -4]} 
            rotation={[0, -4, 0]}
            onClick={() => window.appHistory.push("/page2")}
          />
          <Sphere 
            position={[-5, -1, -4]} 
            onClick={() => window.appHistory.push("/page2")}
          />
      <PerspectiveCamera
          makeDefault
          // default={false}
          position={[1, 1, -15]}
        >
          <Lights />
          <Environment />
          <Effects />
      </PerspectiveCamera>
      </Suspense>
    </Canvas>
  )
}