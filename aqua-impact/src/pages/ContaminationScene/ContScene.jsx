import Boat from "./models/Boat";
import Rowboat from "./models/Rowboat";
import ContainerShip from "./models/ContainerShip";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ContaminationLights from "./lights/ContaminationLights";
import Ocean2 from "./models/Ocean2";
// import OceanStaging from "./staging/OceanStaging";

const boatsSettings = {
  Rowboat: [
    { position: [-100, 8.15, -80], scale: [.2, .2, .2] },
    { position: [100, 10, 80], scale: [.2, .2, .2] },
    { position: [36, 3.6, 34], scale: [.2, .2, .2] },
  ],
  Boat: [
    { position: [-40, 2, -30], scale: [0.06, 0.06,0.06] },
    { position: [60, 2, 100], scale: [0.06, 0.06, 0.06] },
    { position: [-100, 4, 140], scale: [0.06, 0.06, 0.06] },
  ],
};

const ContScene = () => {
  const cameraSettings = {
    position: [-18, 50, 12],
    fov: 60,
    far: 1000,
  };

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas shadows camera={cameraSettings}>
          <OrbitControls />
          {/* <OceanStaging/> */}
          <Ocean2 />
          {boatsSettings.Rowboat.map((settings, index) => (
            <Rowboat
              key={`Rowboat-${index}`}
              position={settings.position}
              scale={settings.scale}
            />
          ))}
          {boatsSettings.Boat.map((settings, index) => (
            <Boat
              key={`Boat-${index}`}
              position={settings.position}
              scale={settings.scale}
            />
          ))}
          <ContainerShip
            scale={[200, 200, 200]}
            position={[70, 30, -70]}
            rotation={[0, -Math.PI / 4, 0]}
            castShadow
          />
          <ContaminationLights />
        </Canvas>
      </div>
    </>
  );
};

export default ContScene;
