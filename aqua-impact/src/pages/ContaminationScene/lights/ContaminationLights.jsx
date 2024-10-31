import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const ContaminationLights = () => {
    const directionalLightRef = useRef();

    useHelper(directionalLightRef, DirectionalLightHelper, 150, "red");
  
    return (
      <>
        <ambientLight color={"white"} intensity={1} />
        <directionalLight
          ref={directionalLightRef}
          color={"white"}
          position={[0, 500, 700]}
          intensity={5}
          castShadow
          shadow-mapSize={[2048, 2048]} // Aumenta si necesitas más resolución de sombra
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          shadow-camera-near={1}
          shadow-camera-far={2000}
        />
      </>
    );
  };
  
  export default ContaminationLights;