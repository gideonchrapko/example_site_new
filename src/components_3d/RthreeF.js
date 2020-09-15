import * as THREE from 'three';
import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from './Controls';
import Lights from './Lights';
import Environment from './Environment';
import Suzanne from './Suzanne';
import Shadow from './Shadow';
import { PerspectiveCamera, Html } from 'drei';
import Branding from '../images/wccMin.png';
import { a, useSpring } from 'react-spring/three';


export default function RthreeF() {
  const [active, set] = useState(false)

  // const [rotation, setRotation] = useState(false)
  // const animatedProps = useSpring ({
  //   hovered: rotation ? [0, 3, 0] : [0, 6, 0],
  // });

  return (
    <>
        <div style={{ position: "absolute", zIndex: "9"}}>
        <img src={Branding} alt="logo" style={{ height: "20vh" }} />
        <button style={{ left: "0" }}>
          left
        </button>
        <button style={{ right: "0" }}>
          right
        </button>
      </div>
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
            <group>
            <Suzanne
                    position={[0, -1, -5]}
                    rotation={[0, 3, 0]}
                    // rotation={animatedProps.clicked}
                    onPointerUp={() => window.appHistory.push("/shop")}
              />
              <Suzanne 
                    position={[4, -1, 2]}
                    rotation={[0, 1, 0]}
                    onPointerUp={() => window.appHistory.push("/gallery")}
              />
              <Suzanne 
                    position={[-5, -1, 2]}
                    rotation={[0, 5, 0]}
                    onPointerUp={() => window.appHistory.push("/gallery")}
              />
              <Environment />
            </group>
          <PerspectiveCamera makeDefault position={[1, 1, -15]}>
            <Lights />
            <Shadow />
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
    </>
    )
}