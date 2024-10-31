import { useGLTF } from "@react-three/drei";

const Ocean2 = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/Ocean2.0.glb')
    return (
        <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Node.geometry}
          material={materials.OceanMaterial}
          scale={1}
        />
      </group>
    )
}

export default Ocean2
useGLTF.preload("/models-3d/Ocean2.0.glb")