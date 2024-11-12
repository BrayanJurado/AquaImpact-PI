import { Environment } from "@react-three/drei";
import { Fog } from "three";

const UnderwaterStaging = () => {

  return (
    <>
      {/* Fondo HDR para simular el océano */}
      <Environment 
        // ground={{
        //   height: 400,
        //   radius: 300,
        //   scale: 300,
        // }}
        
        background
        files={"/hdris/underwater/oceanito2.hdr"}
      />

      {/* Niebla para simular profundidad en el agua */}
      {/* <fog attach="fog" args={["#0077be", 10, 200]} /> */}

      {/* Luz ambiente azulada para simular la luz en el agua */}
      <ambientLight intensity={0.8} color={"#0077be"} />

      {/* Luz direccional para un toque de iluminación */}
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={0.5} 
        color={"#88c0d0"} 
      />    
    </>
  );
};

export default UnderwaterStaging;
