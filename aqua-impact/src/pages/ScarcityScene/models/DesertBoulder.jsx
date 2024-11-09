import { useGLTF } from '@react-three/drei'

const DesertBoulder = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/DesertBoulder.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1446250878.geometry}
        material={materials.mat18}
        scale={10}
        position={[0,5,0]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/desert/DesertBoulder.glb');
export default DesertBoulder;