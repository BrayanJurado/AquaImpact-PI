import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Waterplant = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/acidification/Waterplant.glb')
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
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="937408ce40ee488c894ed9e13b34a375fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="seaweed_2" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Waterplant;
useGLTF.preload('/models-3d/acidification/Waterplant.glb')