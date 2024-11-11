import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Coral = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/coral.glb')
  const modelRef = useRef();

// Animación de rotación continua
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rota en el eje Y
    }
  });

  return (
    <group {...props} dispose={null} scale={[1.0, 1.0, 1.0]} position={[0, 0, 0]} ref={modelRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.Model_material0_0.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_1.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_2.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_3.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_4.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_5.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_6.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_7.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_8.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_9.geometry} material={materials.material0} />
        </group>
      </group>
    </group>
  )
}

export default Coral;
useGLTF.preload('/coral.glb')
