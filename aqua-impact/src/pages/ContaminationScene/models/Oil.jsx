import React from 'react'
import { useGLTF } from '@react-three/drei'

const Oil = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/oil.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.material} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.OILDRUM} />
        </group>
      </group>
    </group>
  )
}

export default Oil;
useGLTF.preload('/oil.glb')
