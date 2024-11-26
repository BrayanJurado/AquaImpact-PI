import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ScarcityLights from "./lights/ScarcityLights";
import BarrelCactus from "./models/BarrelCactus";
import DesertFloor from "./models/DesertFloor";
import Cactus from "./models/Cactus";
import CactusFlowers from "./models/CactusFlowers";
import Tumbleweed from "./models/Tumbleweed";
import Staging from "./staging/Staging";
import DesertBoulder from "./models/DesertBoulder";
import DesertPillar from "./models/DesertPillar";
import Rock from "./models/Rock";
import Skeleton from "./models/Skeleton";
import { Branch1, Branch2, Branch3, Branch4 } from "./models/TreeBranches";
import PuddleMold from "./models/PuddleMold";
import Puddle from "./models/Puddle";
import WoodenSign from "./models/WoodenSign";
import SignText from "./html/SignText";
import CameraControls from "./CameraControls";
import { useEffect } from "react";
import Camel2 from "./models/Camel2";
import { Physics } from "@react-three/rapier";
import SolutionsText from "./html/SolutionsText";
import LabelTransition from "./models/LabelTransition";
// import { RigidBody } from "@react-three/rapier";

const cactusPositions = {
  barrel: [
    [142, 0, -116],
    [-98, 0, 75],
    [-75, 0, 104],
    [123, 0, -65],
    [-142, 0, 39],
    [90, 0, 86],
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
    [-124, 0, -28],
  ],
};

const treePosition = {
  branch1: [
    [-81, 17, -71],
    [57, 17, -18],
    [-116, 17, 109],
  ],
  branch2: [
    [-60, 5, -30],
    [-121, 5, 61],
  ],
  branch3: [
    [-96, 14, 48],
    [89, 14, -61],
    [33, 14, -45],
  ],
  branch4: [
    [-91, 9, 109],
    [-71, 9, -90],
    [-46, 9, 107],
  ],
};

const modelsSettings = {
  DesertBoulder: [
    { position: [-150, -20, 0], scale: [5, 10, 5] },
    { position: [180, -40, 170], scale: [18, 10, 18] },
  ],
  DesertPillar: [
    { position: [170, 16, 0], scale: [300, 70, 300] },
    { position: [-120, 12, -140], scale: [500, 50, 300] },
  ],
  Rock: [
    { position: [-40, 30, 170], scale: [70, 50, 70] },
    { position: [70, 17, -170], scale: [100, 30, 100] },
  ],
};

const ScarScene = () => {
  const cameraSettings = {
    position: [0, 30, 110],
    fov: 60,
  };

  // const controlsRef = useRef();

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas shadows camera={cameraSettings}>
          <OrbitControls />
          <CameraControls />
          <SolutionsText />
          <SignText />
          <Staging />
          <WoodenSign position={[0, 0, 50]} />
          <LabelTransition targetPosition={[0, 35, -110]} />
          <Physics>
            <Camel2 position={[0, 0, -20]} />
            <DesertFloor />
            <Tumbleweed position={[0, 400, -26]} />
            <Tumbleweed position={[0, 500, -14]} />
          </Physics>
          <PuddleMold position={[0, 2, 50]} scale={[10, 4, 10]} />
          <Puddle position={[0, 0.2, 50]} scale={[10, 1, 10]} />
          <Skeleton scale={1000} position={[140, 1, 5]} />
          {modelsSettings.DesertBoulder.map((settings, index) => (
            <DesertBoulder
              key={`DesertBoulder-${index}`}
              position={settings.position}
              scale={settings.scale}
            />
          ))}
          {modelsSettings.DesertPillar.map((settings, index) => (
            <DesertPillar
              key={`DesertPillar-${index}`}
              position={settings.position}
              scale={settings.scale}
            />
          ))}
          {modelsSettings.Rock.map((settings, index) => (
            <Rock
              key={`Rock-${index}`}
              position={settings.position}
              scale={settings.scale}
            />
          ))}
          {treePosition.branch1.map((pos, index) => (
            <Branch1 key={`branch1-${index}`} position={pos} />
          ))}

          {treePosition.branch2.map((pos, index) => (
            <Branch2 key={`branch2-${index}`} position={pos} />
          ))}

          {treePosition.branch3.map((pos, index) => (
            <Branch3 key={`branch3-${index}`} position={pos} />
          ))}

          {treePosition.branch4.map((pos, index) => (
            <Branch4 key={`branch4-${index}`} position={pos} />
          ))}

          {cactusPositions.barrel.map((pos, index) => (
            <BarrelCactus key={`barrel-${index}`} position={pos} />
          ))}

          {cactusPositions.standard.map((pos, index) => (
            <Cactus key={`cactus-${index}`} position={pos} />
          ))}

          {cactusPositions.flowers.map((pos, index) => (
            <CactusFlowers key={`flowers-${index}`} position={pos} />
          ))}
          <ScarcityLights />
        </Canvas>
      </div>
    </>
  );
};

export default ScarScene;
