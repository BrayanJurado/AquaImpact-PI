import React from 'react';
import { useGLTF } from '@react-three/drei';

const Trash = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/trash.glb');

  return (
    <group {...props} dispose={null}>
      {/* Aumentamos la escala de 0.927 a 2.5 o cualquier valor mayor que necesites */}
      <group rotation={[-Math.PI / 2, 0, 0]} scale={3.5}>
        <mesh 
          geometry={nodes.Object_4.geometry} 
          material={materials['TextureAtlas_1001.001']} 
          rotation={[Math.PI / 2, 0, 0]} 
        />
      </group>
    </group>
  );
};

export default Trash;
useGLTF.preload('/trash.glb');
