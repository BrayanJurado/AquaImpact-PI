import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

const DesertFloor = () => {
    const PATH = useMemo(() => "textures/desert/CrackedGround", []);

  const floorTexture = useTexture({
    map: PATH + "COL_1K.png",
    displacementMap: PATH + "DISPVar2_1K.png",
    normalMap: PATH + "NRM_1K.png",
    bumpMap: PATH + "BUMP_1K.png",
  });


   Object.keys(floorTexture).map((key)=>{
     floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping
     floorTexture[key].repeat.set(8,8);
   })
   
  return (
    
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[300, 300, 300, 300]} />
      <meshStandardMaterial
        map={floorTexture.map}
        displacementMap={floorTexture.displacementMap}
        bumpMap={floorTexture.bumpMap}
        normalMap={floorTexture.normalMap}
        displacementScale={2}
        // metalness={.2}
        // roughness={.5}
      />
    </mesh>
  );
}

export default DesertFloor;