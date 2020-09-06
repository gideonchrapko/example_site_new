import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import Controls from '../components_3d/Controls'
import Lights from '../components_3d/Lights'
import Environment from '../components_3d/Environment'
import Suzanne from '../components_3d/Suzanne'
import Effects from '../components_3d/Effects'

import Sphere from '../components_3d/Sphere'


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
          camera={{ position: [0, 0, 10] }}
          gl={{ antialias: false }}
          onCreated={({ gl, scene }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
            scene.background = new THREE.Color('#242424')
            }}
        >
        <Controls disable={set} />
        <Suspense fallback={<Dom center>Loading...</Dom>}>
          <fog attach="fog" args={["#242424", 10, 20]} />
        <Suzanne
                position={[0, -1, -7]}
                rotation={[0, 3, 0]}
                onPointerUp={() => window.appHistory.push("/shop")}
          />
          <Suzanne 
                position={[6, -1, 4]}
                rotation={[0, 1, 0]}
                onPointerUp={() => window.appHistory.push("/gallery")}
          />
          <Suzanne 
                position={[-7, -1, 4]}
                rotation={[0, 5, 0]}
                onPointerUp={() => window.appHistory.push("/gallery")}
          />
          <PerspectiveCamera makeDefault position={[1, 1, -15]} >
              <Lights />
              <Environment />
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
      )
}