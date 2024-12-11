import { useGLTF } from '@react-three/drei'

const Bucket = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/quiz/Bucket.glb')
    return (
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Bucket.geometry} material={materials.Mat} scale={0.05}/>
      </group>
    )

}

useGLTF.preload('/models-3d/quiz/Bucket.glb');
export default Bucket;