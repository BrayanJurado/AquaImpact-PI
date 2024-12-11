import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { forwardRef } from "react";

const Bucket = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models-3d/quiz/Bucket.glb");
  return (
    <RigidBody colliders="trimesh" ref={ref}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bucket.geometry}
          material={materials.Mat}
          scale={0.05}
        />
      </group>
    </RigidBody>
  );
});

useGLTF.preload("/models-3d/quiz/Bucket.glb");
export default Bucket;
