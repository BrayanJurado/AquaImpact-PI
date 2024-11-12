import React from 'react';
import { useGLTF } from '@react-three/drei';

const Arena = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/acidification/Arena.glb');

  // Ajusta el tamaño de cada bloque de arena y la cantidad de copias en la cuadrícula
  const gridSize = 5; // Número de copias en cada dirección
  const spacing = 60; // Espacio entre copias

  return (
    <group {...props} dispose={null} position={[0, 150, 0]} rotation={[0.233, 0.056, 0.098]}>
      {/* Crea una cuadrícula de arena */}
      {Array.from({ length: gridSize }).map((_, i) =>
        Array.from({ length: gridSize }).map((_, j) => (
          <group
            key={`${i}-${j}`}
            position={[i * spacing, 0, j * spacing]} // Posición en la cuadrícula
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.material0000}
              scale={[40, 20, 40]} // Ajusta el tamaño de cada bloque
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.material0000}
              scale={[40, 20, 40]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.material0001}
              scale={[40, 20, 40]}
            />
          </group>
        ))
      )}
    </group>
  );
};

export default Arena;

useGLTF.preload('/models-3d/acidification/Arena.glb');
