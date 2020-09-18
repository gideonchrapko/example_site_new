import * as THREE from 'three';
import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { PerspectiveCamera, Html } from 'drei';
import { useSpring } from "react-spring";

import Controls from '../components_3d/Controls';
import Lights from '../components_3d/Lights';
import Environment from '../components_3d/Environment';
import Suzanne from '../components_3d/Suzanne';
import Shadow from '../components_3d/Shadow';
import Branding from '../images/wccMin.png';
import Suzannes from '../components_3d/Suzannes';
import MenuRight from './Menu';

const RthreeF = () => {
  const [active, set] = useState(false)
  
  const [rightMenuVisible, setRightMenuVisible] = useState(false);
  const rightMenuAnimation = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
  });

  return (
    <>
      <div style={{ position: "absolute", zIndex: "9" }}>
        <img src={Branding} alt="logo" style={{ height: "20vh" }} />
      </div>
      <button
          className="menu-button"
          onClick={() => setRightMenuVisible(!rightMenuVisible)}
        >
          {rightMenuVisible ? "Close" : "Side Menu"}
        </button>
        <MenuRight style={rightMenuAnimation}/>
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
            <Suzannes />
            {/* <Suzanne
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
              /> */}
              <Environment />
            </group>
          <PerspectiveCamera makeDefault position={[1, 1, -15]}>
            <Lights />
            <Shadow />
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
    </>
    );
}

export default RthreeF;