import React from 'react'
import { useGLTF } from '@react-three/drei'

const PileTrash = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/pileTrash.glb')
  return (
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials.Material__25} 
        position={[-0.376, 0.33, -0.021]} 
        scale={4}  // Escala 3.5x en las tres dimensiones
      />
    </group>
  )
}

export default PileTrash;
useGLTF.preload('/pileTrash.glb')
