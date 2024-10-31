import { useGLTF } from '@react-three/drei'

const Cactus = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/Cactus.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Saguaro_mesh.geometry}
        material={materials.Saguaro_mat}
      />
    </group>
  )

}

useGLTF.preload('/models-3d/Cactus.glb');
export default Cactus;