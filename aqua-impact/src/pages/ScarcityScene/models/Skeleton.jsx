import { useGLTF } from '@react-three/drei'

const Skeleton = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/Skeleton.glb')
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Skeleton.geometry}
          material={materials.Atlas_Diffuse}
        />
      </group>
    )
}

useGLTF.preload('/models-3d/desert/Skeleton.glb');
export default Skeleton;