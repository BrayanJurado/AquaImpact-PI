import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Starfish = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/acidification/Starfish.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="starfishobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.lambert2SG}
            />
            <mesh
              name="Object_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.lambert3SG}
            />
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.lambert4SG}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Starfish;

useGLTF.preload('/models-3d/acidification/Starfish.glb')
