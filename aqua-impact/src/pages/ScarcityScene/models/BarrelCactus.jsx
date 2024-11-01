import { useGLTF } from '@react-three/drei'

const BarrelCactus = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/BarrelCactus.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BarrelCactus_mesh.geometry}
        material={materials.BarrelCactus_mat}
        scale={1}
      />
    </group>
  )

}

useGLTF.preload('/models-3d/desert/BarrelCactus.glb');
export default BarrelCactus;