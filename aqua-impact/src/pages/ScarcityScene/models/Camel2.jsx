import { useGLTF, useAnimations } from "@react-three/drei";
import { useCallback, useEffect, useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";

const Camel2 = (props) => {
  const camelRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models-3d/desert/Camel2.glb"
  );
  const { actions } = useAnimations(animations, camelRef);

  console.log(actions);

  useEffect(() => {
    actions["Bactrian_Camel_Idle"].play();
    return () => actions["Bactrian_Camel_Idle"].stop();
  }, [actions]);

  // const SCALE = 20;

  return (
    <>
      <RigidBody
        colliders="cuboid"
        position={[0, 19, -28]}
        type="fixed" // Cambia a 'fixed' si el hitbox debe ser estático
      >
        <mesh visible={true}>
          <boxGeometry args={[12, 37, 45]} /> {/* Hitbox cúbico */}
          <meshBasicMaterial transparent opacity={0} /> {/* Invisible */}
        </mesh>
      </RigidBody>

      <group ref={camelRef} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={18}
          >
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Bacreian_Armature_59" scale={0.01}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.Bactria_camel_mat}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <group name="bactrian_camel_58" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
};

useGLTF.preload("/models-3d/desert/Camel2.glb");
export default Camel2;
