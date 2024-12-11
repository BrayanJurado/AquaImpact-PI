import { useRef } from "react";

const QuizLights = () => {
    const directionalLightRef = useRef();

    // useHelper(directionalLightRef, DirectionalLightHelper, 1, "red");
  
    return (
      <>
        <ambientLight color={"white"} intensity={1} />
        <directionalLight
          ref={directionalLightRef}
          color={"white"}
          position={[35, 70, 30]}
          intensity={5}
          castShadow
          shadow-mapSize={[1024, 1024]} // Aumenta si necesitas más resolución de sombra
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-camera-near={1}
          shadow-camera-far={50}
        />
      </>
    );
  };
  
  export default QuizLights;