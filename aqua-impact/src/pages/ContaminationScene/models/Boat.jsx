import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Boat = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Boat.glb');
  
  // Ref para el grupo de la escena
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      // Movimiento oscilante hacia adelante y hacia atrás en el eje X
      group.current.position.x = Math.sin(Date.now() * 0.001) * 5; // Ajusta el valor para el rango de desplazamiento
    }
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boat.geometry}
        material={materials.lambert3SG}
        frustumCulled={false}
      />
    </group>
  );
}

export default Boat;

useGLTF.preload("/models-3d/Boat.glb");
