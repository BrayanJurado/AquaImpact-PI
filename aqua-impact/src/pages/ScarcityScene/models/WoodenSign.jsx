import { useGLTF } from '@react-three/drei'

const WoodenSign = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/desert/WoodenSign.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={2200}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign4_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign4_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign4_3.geometry}
          material={materials.Rocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign4_4.geometry}
          material={materials.Herbs}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/desert/WoodenSign.glb');
export default WoodenSign;