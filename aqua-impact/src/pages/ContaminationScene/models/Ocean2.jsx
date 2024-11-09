import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

const Ocean2 = (props) => {
  const { nodes } = useGLTF("/models-3d/Ocean2.0.glb");

  const PATH = useMemo(() => "textures/water/water_textures_2k", []);

  const waterTexture = useTexture({
    map: PATH + ".png",
    normalMap: PATH + "_normal.png",
  });

  // Object.keys(waterTexture).map((key) => {
  //   waterTexture[key].wrapS = waterTexture[key].wrapT = RepeatWrapping;
  //   waterTexture[key].repeat.set(16, 16);
  // });
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Node.geometry} scale={.2}>
        <meshStandardMaterial
          map={waterTexture.map}
          normalMap={waterTexture.normalMap}
        />
      </mesh>
    </group>
  );
};

export default Ocean2;
useGLTF.preload("/models-3d/Ocean2.0.glb");
