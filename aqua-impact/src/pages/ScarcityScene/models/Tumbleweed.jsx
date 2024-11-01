import { useGLTF } from '@react-three/drei'

const Tumbleweed = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/Tumbleweed.glb')
    return (
      <group {...props} dispose={null}  scale={3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tumbleweed.geometry}
          material={materials.None}
        />
      </group>
    )
}

useGLTF.preload('/models-3d/desert/Tumbleweed.glb');
export default Tumbleweed;