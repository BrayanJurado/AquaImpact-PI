import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, RenderTexture, Text, useGLTF } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { MeshReflectorMaterial } from "@react-three/drei"; 
import { Bloom, EffectComposer } from "@react-three/postprocessing";

// Define el modelo de contaminación
const PollutionModel = () => {
  const gltf = useGLTF("/models/pollution.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={0.2}
      position={[2.5, -1, 0]} 
    />
  );
};

const Causes = () => {
  const controls = useRef();

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.6;
    controls.current.dolly(22, true);
  };

  useEffect(() => {
    intro();
  }, []);


  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
        <fog attach="fog" args={["#171720", 10, 30]} />
        <ambientLight intensity={0.3} />
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>

        <CameraControls ref={controls} />

        {/* Texto 3D alineado al centro, desplazado hacia la izquierda */}
        <Text
          font={"fonts/Poppins-Black.ttf"}
          position={[-2.0, 0.6, 0]} // Ajusta la posición Y para el texto
          lineHeight={0.8}
          textAlign="center"
          fontSize={0.7}
          rotation-y={degToRad(25)}
          anchorY={"bottom"}
        >
          SOLUCIONES{"\n"}CONTAMINACIÓN
          <meshBasicMaterial color="white" />
        </Text>

        {/* Modelo de contaminación */}
        <group>
          <Suspense fallback={null}>
            <PollutionModel />
          </Suspense>
        </group>

        {/* Plano reflector para el efecto de reflejo */}
        <mesh position-y={0.6} rotation-x={-Math.PI / 2}> {/* Ajusta la posición Y aquí para desplazar el reflejo hacia arriba */}
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={10}
            roughness={1}
            depthScale={1}
            opacity={0.4} // Haz el plano completamente transparente
            transparent
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#333" // Color de fondo, puedes ajustarlo si es necesario
            metalness={0.5} // Ajusta la metalidad si lo deseas
          />
        </mesh>

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Causes;