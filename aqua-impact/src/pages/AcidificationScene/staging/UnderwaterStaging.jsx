import { Environment } from "@react-three/drei";
import { Fog } from "three";
import { Sparkles } from "@react-three/drei";


const UnderwaterStaging = () => {

  return (
    <>
      {/* Fondo HDR para simular el océano */}
      <Environment 
        background
        files={"/hdris/underwater/oceanito2.hdr"}
        intensity={0.3}
      />

      {/* Niebla para simular profundidad en el agua */}
      <fog attach="fog" args={["#0077be", 10, 200]} />

      <ambientLight intensity={0.6} color={"#005577"} />

      {/* Luz direccional para un toque de iluminación */}
      <directionalLight 
        intensity={0.5} 
        color={"#88c0d0"} 
        position={[5, 10, 5]} // Ajustar la posición para que parezca que la luz viene de un ángulo
      />
      <Sparkles
        position={[-15, 40, -10]}
        color={"#FFFF00"}
        count={512}
        size={10}
        fade={false}
        speed={1.5}
        scale={100}
      />
      <Sparkles
        position={[150, 40, 200]}
        color={"#FFFF00"}
        count={512}
        size={10}
        fade={false}
        speed={1.5}
        scale={100}
      />
    </>
  );
};

export default UnderwaterStaging;