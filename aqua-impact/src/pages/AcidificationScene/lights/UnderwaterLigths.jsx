import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, Color } from "three";

const UnderwaterLights = () => {
  const directionalLightRef = useRef();

  // Helper para visualizar la luz direccional durante el desarrollo
  // useHelper(directionalLightRef, DirectionalLightHelper, 30, new Color("#0077be"));

  return (
    <>
      {/* Luz ambiental azulada para simular la atmósfera submarina */}
      <ambientLight color={"#0077be"} intensity={0.5} />

      {/* Luz direccional tenue para simular rayos de luz descendiendo en el agua */}
      <directionalLight
        ref={directionalLightRef}
        color={"#88c0d0"} // Color azulado para simular la luz bajo el agua
        position={[0, 200, 200]}
        intensity={2} // Reducida para no sobreexponer la escena
        castShadow
        shadow-mapSize={[1024, 1024]} // Resolución ajustada para sombras más suaves
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-camera-near={1}
        shadow-camera-far={500}
      />
    </>
  );
};

export default UnderwaterLights;
