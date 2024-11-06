import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Rowboat = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Rowboat.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Rowboat.geometry} material={materials.Mat} />
    </group>
  )
}

export default Rowboat
useGLTF.preload('/models-3d/Rowboat.glb')