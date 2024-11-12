import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Fishes = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/acidification/Fishes.glb')
  const { actions } = useAnimations(animations, group)

  // Iniciar la animación al montar el componente
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play() // Inicia cada animación
      })
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.063}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal3_7">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_156"
                      geometry={nodes.Object_156.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_156.skeleton}
                    />
                    <skinnedMesh
                      name="Object_159"
                      geometry={nodes.Object_159.geometry}
                      material={materials.material_1}
                      skeleton={nodes.Object_159.skeleton}
                    />
                    <skinnedMesh
                      name="Object_162"
                      geometry={nodes.Object_162.geometry}
                      material={materials.material_2}
                      skeleton={nodes.Object_162.skeleton}
                    />
                    <skinnedMesh
                      name="Object_165"
                      geometry={nodes.Object_165.geometry}
                      material={materials.material_3}
                      skeleton={nodes.Object_165.skeleton}
                    />
                    <group name="_3_correction">
                      <group name="_3" />
                    </group>
                    <group name="_4_correction">
                      <group name="_4" />
                    </group>
                    <group name="_5_correction">
                      <group name="_5" />
                    </group>
                    <group name="_6_correction">
                      <group name="_6" />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Fishes;

useGLTF.preload('/models-3d/acidification/Fishes.glb')
