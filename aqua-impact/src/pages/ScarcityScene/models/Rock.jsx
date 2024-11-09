import { useGLTF } from '@react-three/drei'

const Rock = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/Rock.glb')
    return (
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.rock.geometry} material={materials.None}/>
      </group>
    )
}

useGLTF.preload('/models-3d/desert/Rock.glb');
export default Rock;