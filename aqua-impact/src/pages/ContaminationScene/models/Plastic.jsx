import React from 'react';
import { useGLTF } from '@react-three/drei';

const Plastic = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/plastic.glb');

  return (
    <group {...props} dispose={null}>
      {/* Aumentando el tamaño de los modelos de plástico */}
      <mesh
        geometry={nodes.Beat_Water_Bottle_WaterBottle1_0.geometry}
        material={materials.WaterBottle1}
        scale={1.0} // Aumento la escala del modelo
      />
      <mesh
        geometry={nodes.Bottle_Cap_BottleCap_0.geometry}
        material={materials.BottleCap}
        scale={1.0} // Aumento la escala también para la tapa
      />
    </group>
  );
}

export default Plastic;
useGLTF.preload('/models-3d/plastic.glb');
