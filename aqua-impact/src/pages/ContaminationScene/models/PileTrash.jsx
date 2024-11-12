import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const PileTrash = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/pileTrash.glb');
  
  // Ref para el grupo de la escena
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.position.y = Math.sin(Date.now() * 0.003) * 0.4; 
    }
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials.Material__25} 
        position={[-0.376, 0.33, -0.021]} 
        scale={4} 
      />
    </group>
  );
}

export default PileTrash;

useGLTF.preload('/models-3d/pileTrash.glb');
