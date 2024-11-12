import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Sequia = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/sequia.glb');
  const modelRef = useRef();

// Animación de rotación continua
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rota en el eje Y
    }
  });

  return (
    <group {...props} dispose={null} scale={[0.0010, 0.0010, 0.0010]} position={[0, -2.5, 0]} ref={modelRef}>
      {/* Escala reducida a [0.1, 0.1, 0.1] para hacer el modelo más pequeño */}
      <mesh geometry={nodes.Object_2.geometry} material={materials['rastMat.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

export default Sequia;
useGLTF.preload('/models-3d/sequia.glb');
