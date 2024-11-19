import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef } from 'react'

const Camel = (props) => {
    const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/desert/Camel.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
          <group name="f39b64a8c11c4ec3afc135656116d9fafbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="WesternCamel">
                  <group name="Geometry">
                    <group name="Western_Camel" rotation={[Math.PI, 0, Math.PI]} scale={100} />
                  </group>
                  <group name="Main">
                    <group name="DeformationSystem">
                      <group name="Object_9">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                          name="Object_12"
                          geometry={nodes.Object_12.geometry}
                          material={materials.WesternCamel}
                          skeleton={nodes.Object_12.skeleton}
                        />
                        <group name="Object_11" rotation={[Math.PI, 0, Math.PI]} scale={100} />
                      </group>
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

useGLTF.preload('/models-3d/desert/Camel.glb');
export default Camel;