import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Pollution = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/pollution.glb');
  const modelRef = useRef();

  // Animación de rotación continua
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rota en el eje Y
    }
  });

  return (
    <group {...props} dispose={null} scale={[0.4, 0.4, 0.4]} position={[0, -2.5, 0]} ref={modelRef}>
      {/* El valor de position en el eje Y se ajusta a -1 para mover el modelo hacia abajo */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.anisotropic1SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.lambert10SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.lambert11SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.lambert12SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.lambert13SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.lambert2SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.lambert3SG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.lambert4SG} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.lambert5SG} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.lambert6SG} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.lambert7SG} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.lambert8SG} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.lambert9SG} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.phong1SG} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.phong2SG} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.phong3SG} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.anisotropic2SG} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.initialShadingGroup} />
      </group>
    </group>
  );
};

export default Pollution;
useGLTF.preload('/pollution.glb');
