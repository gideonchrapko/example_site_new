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
import Car from './Car'

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
        <Suspense fallback={<Html center style={{ color: 'white' }}>Loading...</Html>}>
          <fog attach="fog" args={["black", 10, 20]} />
          {/* <Sphere 
            position={[0, -1, -2]}
          /> */}
          {/* <Jacket 
           /> */}
          {/* <Car 
            onPointerUp={() => window.appHistory.push("/gallery")}          
          /> */}
          <Suzanne
                  position={[0, -1, -5]}
                  rotation={[0, 3, 0]}
                  onPointerUp={() => window.appHistory.push("/shop")}
                  color='white'
            />
            <Suzanne 
                  position={[4, -1, 2]}
                  rotation={[0, 1, 0]}
                  onPointerUp={() => window.appHistory.push("/gallery")}
                  color='red'
            />
            <Suzanne 
                  position={[-5, -1, 2]}
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