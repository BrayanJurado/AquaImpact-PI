import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const ScarcityLights = () => {
    const directionalLightRef = useRef();

    useHelper(directionalLightRef, DirectionalLightHelper, 1, "red");
  
    return (
      <>
        <ambientLight color={"white"} intensity={1} />
        <directionalLight
          ref={directionalLightRef}
          color={"yellow"}
          position={[35, 70, 30]}
          intensity={3}
          castShadow
          shadow-mapSize={[2048, 2048]} // Aumenta si necesitas más resolución de sombra
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
          shadow-camera-near={1}
          shadow-camera-far={1000}
        />
      </>
    );
  };
  
  export default ScarcityLights;