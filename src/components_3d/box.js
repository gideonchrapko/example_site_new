import * as THREE from 'three'
import { render } from 'react-dom'
import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import useCache from './useCache'
import './styles.css'

function Box(props) {
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(false)
    const ref = useRef()
    useFrame(() => (ref.current.rotation.y += 0.01))
    return (
      <mesh
        {...props}
        ref={ref}
        scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <MaterialCache hovered={hovered} color={hovered ? 'hotpink' : 'red'} />
      </mesh>
    )
  }

  export default Box;