import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper, Color } from "three";

const UnderwaterLights = () => {
  
  return (
    <>
      <ambientLight intensity={1} color={"white"}/>
      {/* Luz direccional para iluminar los modelos cercanos */}
      <directionalLight
        color={"#88c0d0"}
        position={[-150, 10, 180]}
        intensity={3} // Incrementa la intensidad para destacar más los objetos
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-200}
        shadow-camera-right={200}
        shadow-camera-top={200}
        shadow-camera-bottom={-200}
        shadow-camera-near={1}
        shadow-camera-far={1000}
      />
      
      <directionalLight
        position={[400, 110, -400]}
        intensity={1} // Incrementa la intensidad para destacar más los objetos
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-200}
        shadow-camera-right={200}
        shadow-camera-top={200}
        shadow-camera-bottom={-200}
        shadow-camera-near={1}
        shadow-camera-far={1000}
      />

    </>
  );
};

export default UnderwaterLights;
