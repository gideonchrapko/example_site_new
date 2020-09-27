import * as THREE from 'three';
import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { PerspectiveCamera, Html } from 'drei';
import { useSpring } from "react-spring";

import Controls from '../components_3d/Controls';
import Lights from '../components_3d/Lights';
import Environment from '../components_3d/Environment';
// import Suzanne from '../components_3d/Suzanne';
import Effects from '../components_3d/Effects'
import Shadow from '../components_3d/Shadow';
import Objects from '../components_3d/Objects';
import MenuRight from './Menu';
import Loading from '../Loading';

import Close from "../images/Close.svg";
import Open from "../images/Open.svg";
import Branding from '../images/wccMin.png';
import Left from '../images/arrowRight.svg';
import Right from '../images/arrowLeft.svg';


const RthreeF = () => {
  
  const [rotation, setRotation] = useState(false)
  const [active, set] = useState(false)
  const [rightMenuVisible, setRightMenuVisible] = useState(false);

  const rightMenuAnimation = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
  });

  return (
    <>
      <div style={{ position: "absolute", zIndex: "9", padding: "25px" }}>
        <img src={Branding} alt="logo" style={{ height: "10vh" }} />
      </div>
      <div style={{ marginRight: "0px", top: "50vh", position: "absolute", zIndex: "9", }}>
        <img
          src={Right}
          alt="right"
          onClick={() => setRotation(!rotation)}
          style={{ right: "20px", position: "fixed", height: "60px", opacity: "0.4" }}
        />
        <img
          src={Left}
          alt="left"
          onClick={() => setRotation(!rotation)}
          style={{ left: "20px", position: "fixed", height: "60px", opacity: "0.4" }}
        />
      </div>
      <img 
        className="menu-button"
        onClick={() => setRightMenuVisible(!rightMenuVisible)}
        src={rightMenuVisible ? Close : Open}
        style={{ height: "20px"}}
      />
      <MenuRight style={rightMenuAnimation}/>
      <Canvas style={{ position: "absoulte", zIndex: "999999999" }}
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
        <Suspense fallback={<Html><Loading /></Html>}>
        <fog attach="fog" args={["black", 10, 20]} />
          <group>
            <Objects rotation={rotation} />
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