import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Rain_2 = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/rain_2.glb')
  const { actions } = useAnimations(animations, group)

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
          <group name="4365ba478e234d39b808b54f5f965876fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="rain" rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
                  <group name="Plane001" position={[-41.64, -29.682, 189.936]} scale={0.553}>
                    <group name="Object_6" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane001_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane001_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane002" position={[-3.743, 3.479, 151.178]} scale={0.874}>
                    <group name="Object_9" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane002_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane002_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane003" position={[26.075, -22.578, 189.936]} scale={0.553}>
                    <group name="Object_12" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane003_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane003_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane004" position={[52.081, 3.236, 227.46]} scale={0.087}>
                    <group name="Object_15" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane004_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane004_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane005" position={[21.97, 15.286, 227.46]} scale={0.087}>
                    <group name="Object_18" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane005_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane005_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane006" position={[53.896, 38.917, 189.936]} scale={0.553}>
                    <group name="Object_21" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane006_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane006_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane007" position={[-45.329, 25.829, 227.46]} scale={0.087}>
                    <group name="Object_24" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane007_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane007_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane008" position={[-88.613, 43.056, 227.46]} scale={0.087}>
                    <group name="Object_27" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane008_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane008_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane009" position={[-29.138, -73.944, 227.46]} scale={0.087}>
                    <group name="Object_30" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane009_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane009_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane010" position={[60.82, -80.959, 117.467]} scale={1.019}>
                    <group name="Object_33" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane010_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane010_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="cloud_101" position={[-51.834, 68.146, 235.5]}>
                    <mesh
                      name="cloud_101_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_101_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group
                    name="cloud_102"
                    position={[78.707, -38.892, 235.5]}
                    rotation={[0.618, -0.143, 0.101]}>
                    <mesh
                      name="cloud_102_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_102_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group
                    name="cloud_104"
                    position={[56.95, 46.617, 235.5]}
                    rotation={[0, 0, 3.054]}>
                    <mesh
                      name="cloud_104_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_104_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group name="cloud_103" position={[36.932, -70.121, 205.707]}>
                    <mesh
                      name="cloud_103_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_103_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group
                    name="Plane031"
                    position={[29.918, 38.097, 198.473]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.232}>
                    <group name="Object_44" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane031_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane031_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane032"
                    position={[-7.979, 4.936, 168.925]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.553}>
                    <group name="Object_47" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane032_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane032_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane033"
                    position={[-37.797, 30.992, 198.473]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.232}>
                    <group name="Object_50" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane033_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane033_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane034"
                    position={[-63.803, 5.179, 96.457]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.019}>
                    <group name="Object_53" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane034_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane034_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane035"
                    position={[-33.692, -6.872, 96.457]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.019}>
                    <group name="Object_56" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane035_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane035_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane036"
                    position={[-65.618, -30.503, 198.473]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.232}>
                    <group name="Object_59" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane036_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane036_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane037"
                    position={[33.607, -17.415, 96.457]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.019}>
                    <group name="Object_62" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane037_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane037_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane038"
                    position={[76.891, -34.641, 96.457]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.019}>
                    <group name="Object_65" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane038_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane038_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane039"
                    position={[17.416, 82.359, 96.457]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.019}>
                    <group name="Object_68" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane039_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane039_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane040"
                    position={[-72.542, 89.374, 130.167]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.874}>
                    <group name="Object_71" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane040_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane040_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane041"
                    position={[-55.848, 28.434, 194.301]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.553}>
                    <group name="Object_74" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane041_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane041_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane042"
                    position={[-22.688, -9.463, 155.543]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.874}>
                    <group name="Object_77" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane042_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane042_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane043"
                    position={[-48.744, -39.281, 194.301]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.553}>
                    <group name="Object_80" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane043_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane043_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane044"
                    position={[-22.931, -65.287, 231.826]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.087}>
                    <group name="Object_83" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane044_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane044_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane045"
                    position={[-10.88, -35.176, 231.826]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.087}>
                    <group name="Object_86" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane045_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane045_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane046"
                    position={[12.751, -67.103, 194.301]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.553}>
                    <group name="Object_89" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane046_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane046_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane047"
                    position={[-0.337, 32.123, 231.826]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.087}>
                    <group name="Object_92" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane047_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane047_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane048"
                    position={[16.889, 75.407, 231.826]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.087}>
                    <group name="Object_95" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane048_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane048_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane049"
                    position={[-100.11, 15.932, 231.826]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.087}>
                    <group name="Object_98" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane049_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane049_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane050"
                    position={[-107.125, -69.889, 155.62]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.874}>
                    <group name="Object_101" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane050_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane050_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane051"
                    position={[64.875, 5.032, 176.088]}
                    rotation={[0, 0, -2.967]}
                    scale={0.232}>
                    <group name="Object_104" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane051_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane051_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane052"
                    position={[33.312, -34.206, 146.54]}
                    rotation={[0, 0, -2.967]}
                    scale={0.553}>
                    <group name="Object_107" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane052_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane052_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane053"
                    position={[-0.577, -13.723, 176.088]}
                    rotation={[0, 0, -2.967]}
                    scale={0.232}>
                    <group name="Object_110" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane053_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane053_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane054"
                    position={[-21.706, -43.66, 74.071]}
                    rotation={[0, 0, -2.967]}
                    scale={1.019}>
                    <group name="Object_113" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane054_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane054_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane055"
                    position={[10.04, -50.299, 74.071]}
                    rotation={[0, 0, -2.967]}
                    scale={1.019}>
                    <group name="Object_116" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane055_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane055_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane056"
                    position={[-17.298, -79.115, 176.088]}
                    rotation={[0, 0, -2.967]}
                    scale={0.232}>
                    <group name="Object_119" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane056_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane056_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane057"
                    position={[78.147, -48.996, 74.071]}
                    rotation={[0, 0, -2.967]}
                    scale={1.019}>
                    <group name="Object_122" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane057_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane057_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane058"
                    position={[123.765, -58.444, 74.071]}
                    rotation={[0, 0, -2.967]}
                    scale={1.019}>
                    <group name="Object_125" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane058_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane058_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane059"
                    position={[44.877, 46.45, 74.071]}
                    rotation={[0, 0, -2.967]}
                    scale={1.019}>
                    <group name="Object_128" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane059_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane059_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane060"
                    position={[-44.933, 37.738, 107.782]}
                    rotation={[0, 0, -2.967]}
                    scale={0.874}>
                    <group name="Object_131" position={[0, 0, -7.102]}>
                      <mesh
                        name="Plane060_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane060_16_-_Default_0'].geometry}
                        material={materials['16_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="cloud_105"
                    position={[-60.525, -29.591, 235.5]}
                    rotation={[0.96, 0, Math.PI]}>
                    <mesh
                      name="cloud_105_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['cloud_105_Material_#0_0'].geometry}
                      material={materials.Material_0}
                    />
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
export default Rain_2;
useGLTF.preload('/models/rain_2.glb')

