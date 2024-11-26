import React from "react";
import { useThree } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";

const LabelTransition = ({ targetPosition }) => {
  const { camera } = useThree();

  const handleClick = () => {
    // Cambiar posición y enfoque de la cámara
    camera.position.set(...targetPosition);
    camera.lookAt(50, 10, -100); // Ajusta el foco hacia el centro de la escena o a un punto específico
    // camera.updateProjectionMatrix();
    // invalidate();
  };

  return (
    <>
      <mesh
        onClick={handleClick}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
        position={[0, 15, 50]}
      >
        <boxGeometry args={[27, 4, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <Text3D
        position={[-12, 14.5, 51]}
        font="/fonts/Montserrat.json"
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.1}
        height={0.2}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={1.2}
      >
        EXPLORA LAS SOLUCIONES
        <meshStandardMaterial color="#205a8e" />
      </Text3D>
    </>
  );
};

export default LabelTransition;
