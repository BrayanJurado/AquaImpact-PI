import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, Text3D, useGLTF } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { MeshReflectorMaterial } from "@react-three/drei"; 
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Rain_2 from './AcidificationScene/models/rain_2';



const CausesAcid = () => {
  const controls = useRef();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 42 }}>
        <fog attach="fog" args={["#171720", 10, 30]} />
        <ambientLight intensity={1.3} />
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>

        <CameraControls ref={controls} />

        <Text3D
          font={"fonts/Chocolate Bar Demo_Regular.json"}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.001}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          position={[-2.0, 0.6, 0]} 
          textAlign="center"
          size={0.9}
          rotation-y={degToRad(25)}
          anchorY={"bottom"}
        >
          {`Algunas solucIones\n DE acIdIfIcacIón`}
          <meshNormalMaterial color="white" />
        </Text3D>

        <Rain_2 
          scale={0.01}
          position={[-3.5, -3, 2.5]}
        />

        <mesh position-y={0.6} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={10}
            roughness={1}
            depthScale={1}
            opacity={0.4} 
            transparent
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#333" 
            metalness={0.5} 
          />
        </mesh>

        <Environment preset="sunset" />
      </Canvas>
    </div>
    
  );

};
export default CausesAcid;
