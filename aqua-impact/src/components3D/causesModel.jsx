import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// Componente que carga el modelo pollution.glb
function PollutionModel() {
  const gltf = useGLTF('/models/pollution.glb'); // Ruta del modelo
  return <primitive object={gltf.scene} scale={2.5} />;
}

const Causes = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <PollutionModel />
        <OrbitControls enableZoom={true} />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};

export default Causes;
