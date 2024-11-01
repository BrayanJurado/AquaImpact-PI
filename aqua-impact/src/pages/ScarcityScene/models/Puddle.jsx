import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

const Puddle = (props) => {
  const PATH = useMemo(() => "textures/water/water_textures_2k", []);

  const waterTexture = useTexture({
    map: PATH + ".png",
    normalMap: PATH + "_normal.png",
  });

  Object.keys(waterTexture).map((key) => {
    waterTexture[key].wrapS = waterTexture[key].wrapT = RepeatWrapping;
    waterTexture[key].repeat.set(64, 8);
  });
  const { nodes } = useGLTF("/models-3d/desert/Puddle.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_Material007_0.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      >
        <meshStandardMaterial
          map={waterTexture.map}
          normalMap={waterTexture.normalMap}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models-3d/desert/Puddle.glb");
export default Puddle;
