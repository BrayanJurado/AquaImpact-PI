import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ScarcityLights from "./lights/ScarcityLights";
import BarrelCactus from "./models/BarrelCactus";
import DesertFloor from "./models/DesertFloor";
import Cactus from "./models/Cactus";
import CactusFlowers from "./models/CactusFlowers";
import Tumbleweed from "./models/Tumbleweed";
import Staging from "./staging/Staging";

const cactusPositions = {
  barrel: [
    [142, 0, -116],
    [-98, 0, 75],
    [57, 0, -133],
    [-75, 0, 104],
    [123, 0, -65],
    [-142, 0, 39],
    [90, 0, 86],
    [-68, 0, -147],
    [41, 0, 112],
    [-133, 0, -53],
  ],
  standard: [
    [-64, 0, 50],
    [-52, 0, 115],
    [85, 0, 29],
    [-105, 0, 92],
    [31, 0, -64],
    [-97, 0, -44],
    [120, 0, 104],
    [90, 0, -14],
    [-50, 0, 36],
    [32, 0, 143],
  ],
  flowers: [
    [76, 0, -92],
    [-115, 0, 119],
    [83, 0, 40],
    [-50, 0, -104],
    [115, 0, -72],
    [-93, 0, 98],
    [67, 0, -138],
    [132, 0, 75],
    [-124, 0, -28],
    [49, 0, 145],
  ]
};

const ScarScene = () => {
  const cameraSettings = {
    position: [3, 190, 3],
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
          {cactusPositions.barrel.map((pos, index) => (
            <BarrelCactus key={`barrel-${index}`} position={pos} />
          ))}

          {cactusPositions.standard.map((pos, index) => (
            <Cactus key={`cactus-${index}`} position={pos} />
          ))}

          {cactusPositions.flowers.map((pos, index) => (
            <CactusFlowers key={`flowers-${index}`} position={pos} />
          ))}
          <Tumbleweed/>
          <ScarcityLights/>
        </Canvas>
      </div>
    </>
  );
};

export default ScarScene;