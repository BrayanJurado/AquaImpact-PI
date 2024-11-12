import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Quiz = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/quiz.glb')
  const modelRef = useRef();

// Animación de rotación continua
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rota en el eje Y
    }
  });

  return (
    <group {...props} dispose={null} scale={[18, 18, 18]} position={[0, -1, 0]} ref={modelRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.g0_1.geometry} material={materials.material} position={[0.125, 0.871, 0]} />
        </group>
      </group>
    </group>
  )
}

export default Quiz;
useGLTF.preload('/quiz.glb')
