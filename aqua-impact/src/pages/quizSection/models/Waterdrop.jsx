import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Waterdrop = ({ position, onRemove, onScore }) => {
  const dropRef = useRef();
  const { nodes, materials } = useGLTF("/models-3d/quiz/Waterdrop.glb");

  return (
    <RigidBody
      gravityScale={.7}
      mass={0.1}
      ref={dropRef}
      type="dynamic"
      position={position}
      onCollisionEnter={(other) => {
        // Check collision with the bucket
        if (other.rigidBodyObject?.name === "goal") {
          onScore(100); // Add 100 points
          onRemove(); // Remove the drop
        }

        // Check collision with the ground
        if (other.rigidBodyObject?.name === "ground") {
          onRemove(); // Remove the drop
        }
      }}
    >
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere4.geometry}
          material={materials.lambert2}
          scale={0.2}
        />
      </group>
    </RigidBody>
  );
};

useGLTF.preload("/models-3d/quiz/Waterdrop.glb");
export default Waterdrop;
