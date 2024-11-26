import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import { RigidBody } from "@react-three/rapier";

const DesertFloor = () => {
  const PATH = useMemo(() => "textures/desert/mud_cracked_dry_03_", []);

  const floorTexture = useTexture({
    map: PATH + "diff_2k.jpg",
    displacementMap: PATH + "disp_2k.png",
    normalMap: PATH + "nor_gl_2k.jpg",
    armMap: PATH + "arm_2k.jpg",
  });

  Object.keys(floorTexture).map((key) => {
    floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping;
    floorTexture[key].repeat.set(8, 8);
  });

  return (
    <RigidBody type="fixed">
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400, 400, 400]} />
        <meshStandardMaterial
          ambientOcclusionMap={floorTexture.armMap}
          map={floorTexture.map}
          displacementMap={floorTexture.displacementMap}
          roughnessMap={floorTexture.armMap}
          normalMap={floorTexture.normalMap}
          metalnessMap={floorTexture.armMap}
        />
      </mesh>
    </RigidBody>
  );
};

export default DesertFloor;
