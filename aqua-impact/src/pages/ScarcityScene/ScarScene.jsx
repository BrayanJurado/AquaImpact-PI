import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ScarcityLights from "./lights/ScarcityLights";
import BarrelCactus from "./models/BarrelCactus";
import DesertFloor from "./models/DesertFloor";
import Cactus from "./models/Cactus";
import CactusP from "./models/CactusP";
import CactusFlowers from "./models/CactusFlowers";
import Tumbleweed from "./models/Tumbleweed";
import Staging from "./staging/Staging";


const ScarScene = () => {
  const cameraSettings = {
    position: [3, 200, 3],
    fov: 60,
    far: 1000,
  };
  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas shadows camera={cameraSettings}>
          <OrbitControls />
          <Staging/>
          <DesertFloor/>
          <BarrelCactus />
          <Cactus/>
          <CactusP/>
          <CactusFlowers/>
          <Tumbleweed/>
          <ScarcityLights/>
        </Canvas>
      </div>
    </>
  );
};

export default ScarScene;