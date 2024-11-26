import { Environment } from "@react-three/drei";
import { Fog } from "three";
import { Sparkles } from "@react-three/drei";

import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper, Color } from "three";



const UnderwaterStaging = () => {
  const directionalLightRef = useRef();
  const pointLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 30, new Color("#FF0800"));
  useHelper(pointLightRef, PointLightHelper, 10, new Color("#88c0d0"));
  

  return (
    <>
      {/* Fondo HDR para simular el océano */}
      <Environment 
        background
        files={"/hdris/underwater/oceanito2.hdr"}
        environmentIntensity={0.1}
      />

      {/* Niebla para simular profundidad en el agua */}
      <fog attach="fog" args={["#0077be", 10, 200]} />

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