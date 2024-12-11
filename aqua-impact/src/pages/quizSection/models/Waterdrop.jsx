import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';

const Waterdrop = ({ position, onRemove, onScore, props }) => {
    const { nodes, materials } = useGLTF('/models-3d/quiz/Waterdrop.glb')
  return (
    <RigidBody type='dynamic'>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere4.geometry}
        material={materials.lambert2}
        scale={.2}
      />
    </group>
    </RigidBody>
  )

}

useGLTF.preload('/models-3d/quiz/Waterdrop.glb');
export default Waterdrop;