
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Smallrocks = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/acidification/Smallrocks.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smallrock1_smallrocks_0.geometry}
          material={materials.smallrocks}
          position={[-111.116, 8.956, -10.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smallrock2_smallrocks_0.geometry}
          material={materials.smallrocks}
          position={[-85.588, 15.41, -110.309]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smallrock3_smallrocks_0.geometry}
          material={materials.smallrocks}
          position={[-24.984, 14.356, -46.889]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smallrock4_smallrocks_0.geometry}
          material={materials.smallrocks}
          position={[73.528, 16.068, -43.583]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smallrock5_smallrocks_0.geometry}
          material={materials.smallrocks}
          position={[30.753, 21.995, -141.267]}
        />
      </group>
    </group>
  )
}
export default Smallrocks;


useGLTF.preload('/models-3d/acidification/Smallrocks.glb')