import { useGLTF } from '@react-three/drei'

const CactusFlowers = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/CactusFlowers.glb')
    return (
      <group {...props} dispose={null} scale={15}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CactusFlowers_5_1.geometry}
            material={materials.Pink}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CactusFlowers_5_2.geometry}
            material={materials.Green}
          />
        </group>
      </group>
    )
}

useGLTF.preload('/models-3d/desert/CactusFlowers.glb');
export default CactusFlowers;