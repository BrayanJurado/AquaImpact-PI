import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { forwardRef } from "react";

const Bucket = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models-3d/quiz/Bucket.glb");
  return (
    <>
    {/* <RigidBody ref={ref} name="goal">
        <group {...props} dispose={null}>
        <mesh position={[0,5,0]}>
            <boxGeometry/>
            <meshStandardMaterial/>
        </mesh>
        </group>
    </RigidBody> */}
    <RigidBody colliders="trimesh" ref={ref} name="bucket">
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
    </>
  );
});

useGLTF.preload("/models-3d/quiz/Bucket.glb");
export default Bucket;
