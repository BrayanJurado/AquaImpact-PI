import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Tumbleweed = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/desert/Tumbleweed.glb");
  return (
    <RigidBody colliders="ball">
      <group {...props} dispose={null} scale={3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tumbleweed.geometry}
          material={materials.None}
        />
      </group>
    </RigidBody>
  );
};

useGLTF.preload("/models-3d/desert/Tumbleweed.glb");
export default Tumbleweed;