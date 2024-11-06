import { useGLTF } from '@react-three/drei'

const DesertPillar = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/DesertPillar.glb')
    return (
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Node.geometry} material={materials.mat18}/>
      </group>
    )
}

useGLTF.preload('/models-3d/desert/DesertPillar.glb');
export default DesertPillar;