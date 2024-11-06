import { useGLTF } from "@react-three/drei";

const PuddleMold = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/desert/PuddleMold.glb");
  return (
      <mesh
        {...props}
        dispose={null}
        castShadow
        receiveShadow
        geometry={nodes.mesh1758577294_1.geometry}
        material={materials.mat20}
      />
  );
};

useGLTF.preload("/models-3d/desert/PuddleMold.glb");
export default PuddleMold;
