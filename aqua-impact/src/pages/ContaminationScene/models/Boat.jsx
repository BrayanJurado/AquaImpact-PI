import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

const Boat = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/Boat.glb')
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Boat.geometry}
          material={materials.lambert3SG}
          frustumCulled={false}
        />
      </group>
    )
}

export default Boat
useGLTF.preload("/models-3d/Boat.glb")