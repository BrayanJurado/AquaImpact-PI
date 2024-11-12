import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Seaweed = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/acidification/Seaweed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane7_sw02mat_0.geometry}
          material={materials.sw02mat}
          position={[-290.031, -1.851, -45.296]}
        />
      </group>
    </group>
  )
}
export default Seaweed;
useGLTF.preload('/models-3d/acidification/Seaweed.glb')