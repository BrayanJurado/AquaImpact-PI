import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const AcidificationLights = () => {
    const directionalLightRef = useRef();

    useHelper(directionalLightRef, DirectionalLightHelper, 30, "red");
  
    return (
      <>
        <ambientLight color={"white"} intensity={1} />
        <directionalLight
          ref={directionalLightRef}
          color={"white"}
          position={[0, 200, 200]}
          intensity={5}
          castShadow
          shadow-mapSize={[2048, 2048]} // Aumenta si necesitas más resolución de sombra
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
  
  export default AcidificationLights;