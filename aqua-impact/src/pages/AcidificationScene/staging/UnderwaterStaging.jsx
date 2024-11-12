import { Environment, AmbientLight, Fog } from "@react-three/drei";

const UnderwaterStaging = () => {
  return (
    <>
      {/* Luz ambiental azulada para simular la luz bajo el agua */}
      <AmbientLight intensity={0.5} color="#0077be" />

      {/* Niebla azulada para simular la visibilidad bajo el agua */}
      <Fog attach="fog" args={["#0077be", 10, 50]} />

      {/* Fondo azul para simular el océano */}
      <color attach="background" args={["#005f73"]} />
      
      {/* Si deseas usar un entorno genérico */}
      {/* <Environment background /> */}
    </>
  );
};

export default UnderwaterStaging;
