import React from 'react';

import { Canvas } from "@react-three/fiber";
import { Suspense} from "react";
import { Environment, OrbitControls , useGLTF } from "@react-three/drei";

function Globe() {
  const gltf = useGLTF('/models/earth.gltf'); 
  return <primitive object={gltf.scene}  scale={2.5}/>; 
}

// Componente principal del modelo de la Tierra
const EarthModel = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <Globe />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
      <Environment preset='sunset' />
    </Canvas>
  );
};

export default EarthModel;
