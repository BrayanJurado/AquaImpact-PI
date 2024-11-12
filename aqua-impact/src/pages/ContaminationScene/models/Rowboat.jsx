import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Rowboat = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Rowboat.glb');
  
  const group = useRef();

  useFrame(() => {
    if (group.current) {
   
      group.current.position.z = Math.sin(Date.now() * 0.001) * 5; 
    }
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rowboat.geometry}
        material={materials.Mat}
      />
    </group>
  );
};

export default Rowboat;

useGLTF.preload('/models-3d/Rowboat.glb');
