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
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{flex: 1, position: "relative"}}>
      <Canvas shadows camera={{ position: [2, 0, 9], fov: 42 }}>
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
          position={[-4.5, -3, -1]}
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
      <div
        style={{
          flex: 1,
          padding: "2rem",
          color: "#fff",
          backgroundColor: "#171720",
          overflowY: "auto", 
          maxHeight: "100vh", 
          textAlign: "justify",
        }}
      >
        <p>
          La acidificación del agua es un fenómeno preocupante que afecta directamente a los ecosistemas acuáticos y a la biodiversidad. Esta problemática, causada principalmente por la absorción de dióxido de carbono (CO₂) y otras actividades humanas, está poniendo en riesgo la vida marina y los recursos que obtenemos del agua. Desde AquaImpact, queremos proponerte una serie de recomendaciones para combatir la acidificación del agua y proteger nuestro planeta:
        </p>
        <ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
          <li>
              <strong>Reducción de emisiones de CO₂:</strong> La acidificación del agua se agrava por la cantidad de dióxido de carbono liberado a la atmósfera. Adoptar medidas como el uso de energías renovables, el transporte sostenible y la eficiencia energética puede reducir la concentración de CO₂ y, por ende, su absorción en los océanos.
          </li>
          <li>
              <strong>Promoción de prácticas agrícolas sostenibles:</strong> La utilización de fertilizantes químicos contribuye a la acidificación del agua. Cambiar a prácticas agrícolas ecológicas que incluyan fertilizantes naturales y técnicas de cultivo regenerativas ayuda a mitigar este problema.
          </li>
          <li>
              <strong>Protección y restauración de ecosistemas marinos:</strong> Los ecosistemas como manglares, praderas marinas y arrecifes de coral no solo son hábitats esenciales, sino que también actúan como sumideros de carbono. Es crucial conservar y restaurar estos ecosistemas para combatir los efectos de la acidificación.
          </li>
          <li>
              <strong>Regulación de vertidos industriales:</strong> Muchas industrias liberan residuos que agravan la acidificación del agua. Es vital implementar normativas estrictas y fomentar la adopción de tecnologías limpias para reducir los vertidos ácidos y otros contaminantes.
          </li>
          <li>
              <strong>Uso racional de recursos pesqueros:</strong> La sobreexplotación de recursos marinos reduce la biodiversidad y debilita los ecosistemas. Una pesca sostenible puede ayudar a mantener el equilibrio necesario para combatir los efectos de la acidificación.
          </li>
          <li>
              <strong>Educación y concienciación:</strong> Informar a la población sobre las causas y consecuencias de la acidificación del agua fomenta cambios en el comportamiento, como el uso responsable de recursos y la reducción de la huella de carbono.
          </li>
          <li>
              <strong>Inversión en investigación:</strong> Apoyar el desarrollo de tecnologías e investigaciones enfocadas en revertir o mitigar la acidificación del agua es clave para implementar soluciones innovadoras y efectivas.
          </li>
        </ul> 
      </div>
    </div>
    
  );

};
export default CausesAcid;
