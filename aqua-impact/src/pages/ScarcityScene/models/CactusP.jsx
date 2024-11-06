import { useGLTF } from '@react-three/drei'

const CactusP = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/CactusP.glb')
    return (
      <group {...props} dispose={null} scale={20}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh'].geometry}
          material={materials.mat9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_1'].geometry}
          material={materials.mat22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_2'].geometry}
          material={materials.mat7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_3'].geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_4'].geometry}
          material={materials.mat12}
        />
      </group>
    )

}

useGLTF.preload('/models-3d/desert/CactusP.glb');
export default CactusP;