import { useGLTF } from '@react-three/drei'

const Waterdrop = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/quiz/Waterdrop.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere4.geometry}
        material={materials.lambert2}
        scale={.2}
      />
    </group>
  )

}

useGLTF.preload('/models-3d/quiz/Waterdrop.glb');
export default Waterdrop;