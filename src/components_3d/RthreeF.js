import * as THREE from 'three'
import React, { Suspense, useState, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import Controls from './Controls'
import Lights from './Lights'
import Environment from './Environment'
import Suzanne from './Suzanne'
import Shadow from './Shadow'
import Jacket from './Jacket'
import Sphere from './Sphere'
import { a } from 'react-spring'

import { PerspectiveCamera, Html } from 'drei'

const RthreeF = () => {
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
            scene.background = new THREE.Color('black')
            }}
        >
        <Controls disable={set} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <fog attach="fog" args={["black", 10, 20]} />
          <Suzanne
                  position={[0, -1, -7]}
                  rotation={[0, 3, 0]}
                  onPointerUp={() => window.appHistory.push("/shop")}
                  color='white'
            />
            <Suzanne 
                  position={[6, -1, 4]}
                  rotation={[0, 1, 0]}
                  onPointerUp={() => window.appHistory.push("/gallery")}
                  color='red'
            />
            <Suzanne 
                  position={[-7, -1, 4]}
                  rotation={[0, 5, 0]}
                  onPointerUp={() => window.appHistory.push("/gallery")}
                  color='green'
            />
          <PerspectiveCamera makeDefault position={[1, 1, -15]} >
              <Lights />
              <Environment />
              <Shadow />
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
      )
}

export default RthreeF 