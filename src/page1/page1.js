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
      // camera={{ position: [0, 0, 6.5] }}
      gl={{ antialias: false }}
      onCreated={({ gl, scene, camera, spotlight, lighthelper }) => {
        scene.add( camera )
        camera.position.set(0, 0, 6.5)
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputEncoding = THREE.sRGBEncoding
        scene.background = new THREE.Color('#373737')
        spotlight = new THREE.SpotLight( 0xffffff, 1 );
				spotlight.position.set( 0, 10, -20 );
				spotlight.angle = Math.PI / 4;
				spotlight.penumbra = 0.05;
				spotlight.decay = 2;
				spotlight.distance = 200;
				spotlight.castShadow = true;
				spotlight.shadow.mapSize.width = 1024;
				spotlight.shadow.mapSize.height = 1024;
				spotlight.shadow.camera.near = 10;
				spotlight.shadow.camera.far = 200;
        scene.add( spotlight );

				lighthelper = new THREE.SpotLightHelper( spotlight );
				scene.add( lighthelper );
        //scene.background.convertSRGBToLinear()
      }}>
      {/* <Lights /> */}
      {/* <pointLight position={[0, 10, -10]} intensity={2} /> */}
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
        <mesh receiveShadow>
          <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
          <meshStandardMaterial attach="material" color="#A2ACB6" roughness={1} />
        </mesh>
        <Effects />
      </Suspense>
    </Canvas>
  )
}
