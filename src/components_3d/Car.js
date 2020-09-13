/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Shadow from './Shadow'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/Car.glb')

  const [hovered, set] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
      <group 
        position={[0, -1.2, -5]} 
        scale={hovered ? [0.05, 0.05, 0.05] : [0.04, 0.04, 0.04]}
        rotation={[0, 3, 0]}
        >
        <group position={[0, 5.44, 0]} scale={[0.23, 0.23, 0.23]}>
          <group position={[0.02, -32.53, -344.49]}>
            <mesh
              material={materials.Plastic}
              geometry={nodes.Back_license_plate_black.geometry}
              position={[124.54, 83.37, 502.04]}
              rotation={[1.37, 0, -Math.PI / 2]}
            />
            <mesh
              material={materials.licanse_plate}
              geometry={nodes.Back_license_plate2.geometry}
              position={[124.54, 83.37, 502.04]}
              rotation={[1.37, 0, -Math.PI / 2]}
            />
            <mesh
              material={materials.licanse_plate_2}
              geometry={nodes.Back_license_plate_white.geometry}
              position={[124.54, 83.37, 502.04]}
              rotation={[1.37, 0, -Math.PI / 2]}
            />
          </group>
          <group position={[0.02, -72.02, 349.89]}>
            <mesh
              material={materials.Plastic}
              geometry={nodes.plate_black.geometry}
              position={[-124.54, -14.6, -507.81]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              material={materials.licanse_plate}
              geometry={nodes.front_Car_license_plate1.geometry}
              position={[-128.94, -14.6, -507.81]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              material={materials.licanse_plate_2}
              geometry={nodes.front_plate_white.geometry}
              position={[-124.54, -14.6, -507.81]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
          </group>
          <group position={[0, -38.22, 343.2]}>
            <mesh
              material={materials.Front_up_light_glass}
              geometry={nodes.Front_up_light_glass.geometry}
              position={[-124.51, -82.77, -509.3]}
              rotation={[1.5, 0, Math.PI / 2]}
            />
            <mesh
              material={materials.Front_light_lamp}
              geometry={nodes.Front_up_light_lamp.geometry}
              position={[-124.51, -82.77, -508.76]}
              rotation={[1.5, 0, Math.PI / 2]}
            />
            <mesh
              material={materials.Chrome_2}
              geometry={nodes.ilkin.geometry}
              position={[-124.51, -82.77, -508.76]}
              rotation={[1.5, 0, Math.PI / 2]}
            />
          </group>
          <group position={[16.31, 25.77, 184.36]} rotation={[1.31, 0, 0]}>
            <mesh material={materials.Plastic} geometry={nodes.Cylinder005.geometry} position={[43.77, -3.31, 5.85]} />
            <mesh material={materials.Chrome} geometry={nodes.Line015.geometry} position={[-16.3, 2.28, -6.81]} />
            <mesh material={materials.Plastic_2} geometry={nodes.Line016.geometry} position={[-16.3, -1.69, -6.81]} />
            <mesh material={materials.Plastic} geometry={nodes.Line017.geometry} position={[-16.3, -1.18, -6.81]} />
            <mesh material={materials.Plastic_2} geometry={nodes.Line018.geometry} position={[-16.3, 0.32, -6.81]} />
            <mesh material={materials.Plastic} geometry={nodes.Line019.geometry} position={[-16.3, -2.51, -6.81]} />
            <mesh material={materials.Plastic_2} geometry={nodes.Line020.geometry} position={[-16.3, 2.34, -6.81]} />
          </group>
          <group position={[-64.35, 27.29, 188.17]} rotation={[1.31, 0, 0]}>
            <mesh material={materials.Plastic} geometry={nodes.Cylinder004.geometry} position={[43.77, -3.31, 5.85]} />
            <mesh material={materials.Chrome} geometry={nodes.Line009.geometry} position={[-16.3, 2.28, -6.81]} />
            <mesh material={materials.Plastic_2} geometry={nodes.Line010.geometry} position={[-16.3, -1.69, -6.81]} />
            <mesh material={materials.Plastic} geometry={nodes.Line011.geometry} position={[-16.3, -1.18, -6.81]} />
            <mesh material={materials.Plastic_2} geometry={nodes.Line012.geometry} position={[-16.3, 0.32, -6.81]} />
            <mesh material={materials.Plastic} geometry={nodes.Line013.geometry} position={[-16.3, -2.51, -6.81]} />
            <mesh material={materials.Plastic_2} geometry={nodes.Line014.geometry} position={[-16.3, 2.34, -6.81]} />
          </group>
          <mesh
            material={materials.Chrome}
            geometry={nodes.Back_edge.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Chrome}
            geometry={nodes.Back_light_edge_chrome.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Chrome}
            geometry={nodes.Backwindow_edge_chrome.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Chrome}
            geometry={nodes.Carbody_edge_line.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Chrome}
            geometry={nodes.doorhandle.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Chrome}
            geometry={nodes.Front_edge.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Chrome}
            geometry={nodes.sidewindow_edge.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[-124.51, -86.62, -174.64]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <mesh material={materials.Chrome} geometry={nodes['Mesh.064_0'].geometry} />
            <mesh material={materials.Plastic} geometry={nodes['Mesh.064_1'].geometry} />
          </group>
          <mesh
            material={materials.Plastic}
            geometry={nodes.Back_light_edge_black.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Plastic}
            geometry={nodes.Back_plate_edge_black.geometry}
            position={[-124.51, -85.78, -169.43]}
            rotation={[1.55, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Plastic}
            geometry={nodes.Backwindow_edge_black.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Plastic}
            geometry={nodes.Front_down_light_edge.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[-124.51, -86.62, -159.06]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <mesh material={materials.Chrome} geometry={nodes['Mesh.059_0'].geometry} />
            <mesh material={materials.Plastic} geometry={nodes['Mesh.059_1'].geometry} />
          </group>
          <mesh
            material={materials.Plastic}
            geometry={nodes.front_up_light_edge_black.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[-124.51, -86.62, -170.52]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <mesh material={materials.Plastic} geometry={nodes['Mesh.049_0'].geometry} />
            <mesh material={materials.Chrome} geometry={nodes['Mesh.049_1'].geometry} />
          </group>
          <mesh
            material={materials.Plastic}
            geometry={nodes.Side_light_edge.geometry}
            position={[-133.62, -15.77, 326.17]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.window}
            geometry={nodes.Back_glass.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.window}
            geometry={nodes.Front_glass.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.window}
            geometry={nodes.Sideglass.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Back_light}
            geometry={nodes.Back_light.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[8.73, 2.27, 118.65]} rotation={[Math.PI, -0.04, Math.PI]} scale={[131.84, 131.84, 131.84]}>
            <mesh material={materials.Plastic_2} geometry={nodes['Mesh.023_0'].geometry} />
            <mesh material={materials.Chrome} geometry={nodes['Mesh.023_1'].geometry} />
          </group>
          <mesh
            material={materials.Plastic_2}
            geometry={nodes.Car_under_black.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[-56.45, -94.48, -317.47]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[1.91, 1.91, 1.91]}>
            <mesh material={materials.Chrome} geometry={nodes['Mesh.026_0'].geometry} />
            <mesh material={materials.Plastic_2} geometry={nodes['Mesh.026_1'].geometry} />
          </group>
          <mesh
            material={materials.Plastic_2}
            geometry={nodes.Front_midle_black.geometry}
            position={[-66.98, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Plastic_2}
            geometry={nodes.Hood_up_black.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Plastic_2}
            geometry={nodes.Sidewindow_edge_black.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Car_paint_material}
            geometry={nodes.Car_body.geometry}
            position={[-124.51, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Car_paint_material}
            geometry={nodes.Car_body__Side_little_piece.geometry}
            position={[-124.38, -86.62, -170.52]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            material={materials.Front_down_light}
            geometry={nodes.Front_down_light.geometry}
            position={[-124.51, -86.62, -172.08]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[-0.98, 109.67, -15.79]} rotation={[-2.81, 0, Math.PI]} scale={[144.71, 160.95, 89.17]}>
            <mesh material={materials.Chrome} geometry={nodes['Mesh.024_0'].geometry} />
            <mesh material={materials.Red} geometry={nodes['Mesh.024_1'].geometry} />
          </group>
          <group position={[-135.66, 18.88, 141.89]}>
            <mesh material={materials.Plastic} geometry={nodes['Mesh.053_0'].geometry} />
            <mesh material={materials.Chrome} geometry={nodes['Mesh.053_1'].geometry} />
            <mesh material={materials.Mirror} geometry={nodes['Mesh.053_2'].geometry} />
            <mesh material={materials.Plastic_2} geometry={nodes['Mesh.053_3'].geometry} />
          </group>
          <mesh
            material={materials.Side_light}
            geometry={nodes.Side_light.geometry}
            position={[-131.97, -15.77, 326.17]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
        </group>
        <group position={[28.96, -16.07, -40.8]} rotation={[Math.PI, 0, 0]} scale={[-0.23, -0.23, -0.23]}>
          <group position={[-0.86, -0.01, 0]}>
            <mesh
              material={materials.Chrome}
              geometry={nodes.Object054.geometry}
              position={[-6.22, -9.01, 0.76]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              material={materials.Rim}
              geometry={nodes.Cylinder008.geometry}
              position={[-9.93, 0, 0]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
          </group>
          <mesh material={materials.Tire_black} geometry={nodes.rub_tire3.geometry} position={[0.28, 54.28, -14.57]} />
        </group>
        <group position={[-28.92, -16.07, -40.8]} scale={[0.23, 0.23, 0.23]}>
          <group position={[-0.86, -0.01, 0]}>
            <mesh
              material={materials.Chrome}
              geometry={nodes.Object053.geometry}
              position={[-6.22, -9.01, 0.76]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              material={materials.Rim}
              geometry={nodes.Cylinder007.geometry}
              position={[-9.93, 0, 0]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
          </group>
          <mesh material={materials.Tire_black} geometry={nodes.rub_tire4.geometry} position={[0.28, 54.28, -14.57]} />
        </group>
        <group position={[28.96, -16.07, 57.26]} rotation={[Math.PI, 0, 0]} scale={[-0.23, -0.23, -0.23]}>
          <group position={[-0.86, -0.01, 0]}>
            <mesh
              material={materials.Chrome}
              geometry={nodes.Object052.geometry}
              position={[-6.22, -9.01, 0.76]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              material={materials.Rim}
              geometry={nodes.Cylinder006.geometry}
              position={[-9.93, 0, 0]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
          </group>
          <mesh material={materials.Tire_black} geometry={nodes.rub_tire1.geometry} position={[0.28, 54.28, -14.57]} />
        </group>
        <group position={[-28.92, -16.07, 57.26]} scale={[0.23, 0.23, 0.23]}>
          <group position={[-0.86, -0.01, 0]}>
            <mesh
              material={materials.Chrome}
              geometry={nodes.Object049.geometry}
              position={[-6.22, -9.01, 0.76]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              material={materials.Rim}
              geometry={nodes.Cylinder003.geometry}
              position={[-9.93, 0, 0]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
          </group>
          <mesh material={materials.Tire_black} geometry={nodes.rub_tire2.geometry} position={[0.28, 54.28, -14.57]} />
        </group>
      </group>
      <Shadow position={[0, -2, -0.1]} scale={[4, 1, 1]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
    
  )
}