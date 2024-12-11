import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const TrashBag = ({ position, onRemove, onScore }) => {
  const bagRef = useRef();
  const { nodes, materials } = useGLTF("/models-3d/quiz/TrashBag.glb");

  return (
    <RigidBody
      mass={0.1}
      ref={bagRef}
      type="dynamic"
      position={position}
      onCollisionEnter={(other) => {
        // Check collision with the bucket
        if (other.rigidBodyObject?.name === "goal") {
          onScore(-500); // Subtract 500 points
          onRemove(); // Remove the bag
        }

        // Check collision with the ground
        if (other.rigidBodyObject?.name === "ground") {
          onRemove(); // Remove the bag
        }
      }}
    >
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group104413426.geometry}
          material={materials.mat17}
          scale={5}
        />
      </group>
    </RigidBody>
  );
};

useGLTF.preload("/models-3d/quiz/TrashBag.glb");
export default TrashBag;
