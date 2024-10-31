import Boat from "./models/Boat";
import Rowboat from "./models/Rowboat";
import ContainerShip from "./models/ContainerShip";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ContaminationLights from "./lights/ContaminationLights";
import Ocean2 from "./models/Ocean2";

const ContScene = () => {
  const cameraSettings = {
    position: [-18, 500, 12],
    fov: 60,
    far: 10000,
  };
  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas shadows camera={cameraSettings}>
          <OrbitControls />
          <Ocean2/>
          <Rowboat position={[-500, 50, -400]} />
          <Rowboat position={[500, 50, 400]} />
          <Rowboat position={[-500, 50, 400]} />
          <Boat scale={[0.3, 0.3, 0.3]} position={[-200, 10, -600]}/>
          <Boat scale={[0.3, 0.3, 0.3]} position={[300, 10, 500]} />
          <Boat scale={[0.3, 0.3, 0.3]} position={[-500, 20, 700]} />
          <ContainerShip
            scale={[1000, 1000, 1000]}
            position={[350, 150, -350]}
            rotation={[0, -Math.PI / 4, 0]}
            castShadow
          />
          <ContaminationLights/>
          {/* <ambientLight />
          <directionalLight position={[0, 100, -100]} /> */}
        </Canvas>
      </div>
    </>
  );
};

export default ContScene;
