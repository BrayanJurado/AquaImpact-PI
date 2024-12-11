import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';

const TrashBag = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/quiz/TrashBag.glb')
  return (
    <RigidBody>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group104413426.geometry}
        material={materials.mat17}
        scale={5}
      />
    </group>
    </RigidBody>
  )
  

}

useGLTF.preload('/models-3d/quiz/TrashBag.glb');
export default TrashBag;