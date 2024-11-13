import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper, Color } from "three";

const UnderwaterLights = () => {
  const directionalLightRef = useRef();
  const pointLightRef = useRef();

  // Helper para visualizar las luces durante el desarrollo
  // useHelper(directionalLightRef, DirectionalLightHelper, 30, new Color("#88c0d0"));
  // useHelper(pointLightRef, PointLightHelper, 10, new Color("#88c0d0"));

  return (
    <>
      {/* Luz ambiental azulada tenue para la atmósfera submarina */}
      <ambientLight color={"#006994"} intensity={0.2} />

      {/* Luz direccional para iluminar los modelos cercanos */}
      <directionalLight
        ref={directionalLightRef}
        color={"#88c0d0"}
        position={[0, 200, 100]}
        intensity={1.5} // Incrementa la intensidad para destacar más los objetos
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-camera-near={1}
        shadow-camera-far={300}
      />

      {/* Luz puntual cerca de los modelos para resaltarlos */}
      <pointLight
        ref={pointLightRef}
        color={"#88c0d0"}
        position={[0, 10, 10]} // Ajusta la posición según la ubicación de los modelos
        intensity={1.2} // Ajuste de intensidad para iluminar detalles cercanos
        distance={50} // Distancia limitada para evitar iluminar el fondo
        decay={2} // Atenuación gradual para que no se disperse mucho
      />
    </>
  );
};

export default UnderwaterLights;
