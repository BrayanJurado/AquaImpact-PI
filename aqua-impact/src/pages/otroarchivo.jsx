import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, Environment, Text, useGLTF } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const PollutionModel = () => {
  const modelRef = useRef();
  const gltf = useGLTF("/models/pollution.glb");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; 
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.2} 
      position={[2.5, -1, 0]} 
    />
  );
};

const Causes = () => {
  const controls = useRef();

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Canvas Section */}
      <div style={{ flex: 1, position: "relative" }}>
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
          <fog attach="fog" args={["#171720", 10, 30]} />
          <ambientLight intensity={0.3} />
          <EffectComposer>
            <Bloom mipmapBlur intensity={1.2} />
          </EffectComposer>

          {/* Camera Controls */}
          <CameraControls
            ref={controls}
            minDistance={10} 
            maxDistance={10} 
            maxPolarAngle={Math.PI / 2.1} 
          />

          {/* Rotatable Text */}
          <Text
            font={"fonts/Poppins-Black.ttf"}
            position={[-2.0, 0.6, 0]} 
            lineHeight={0.8}
            textAlign="center"
            fontSize={0.7} 
            rotation-y={degToRad(25)} 
            anchorY={"bottom"}
          >
            SOLUCIONES{"\n"}CONTAMINACIÓN
            <meshBasicMaterial color="white" />
          </Text>

          {/* Rotating Model */}
          <group>
            <Suspense fallback={null}>
              <PollutionModel />
            </Suspense>
          </group>

          {/* Reflective Plane */}
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

      {/* Solutions Section */}
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
          El ser humano lleva décadas provocando, con su actividad, un impacto ambiental al que, 
          si no ponemos fin cuanto antes, el daño a los ecosistemas y medio natural será irreversible.
          Por ello, desde AquaImpact, queremos proponerte una serie de recomendaciones con 
          las que podrás contribuir a reducir la contaminación del agua:
        </p>
        <ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
          <li>
            <strong>Uso de nutrientes y plaguicidas naturales:</strong>  Reducir la contaminación del agua empieza por entender lo que está llegando a ella, directa o indirectamente. La agricultura intensiva utiliza fertilizantes y pesticidas químicos, dos de los productos más contaminantes para el agua. Los nutrientes o plaguicidas de origen natural permiten una agricultura más ecológica y sostenible.
          </li>
          <li>
            <strong>Mejor tratamiento de las aguas residuales:</strong> Las aguas residuales producen una alta contaminación hídrica cuando se vierten en ríos y mares sin haber recibido un tratamiento correcto. Un consumo eficiente del agua, la menor utilización de productos químicos y unas correctas infraestructuras de depuración del agua son las mejores formas de simplificar y mejorar el tratamiento de las aguas residuales.
          </li>
          <li>
            <strong>Acabar con la deforestación:</strong> Los bosques son uno de los principales sumideros de agua, tanto a nivel atmosférico como de subsuelo. Cuanta mayor masa forestal, más agua dulce habrá en sus entornos. Además, los árboles sirven como depuradores de muchos contaminantes que se vierten al medio ambiente y ayudan a que no lleguen al agua. 
          </li>
          <li>
            <strong>Agricultura e industrias más sostenibles:</strong> Ambas son actividades necesarias para el ser humano, por lo que es importante implementar acciones para aumentar la eficiencia en el consumo del agua y para no verter en ella productos que la contaminen.
          </li>
          <li>
            <strong>Implementación de transporte sostenible:</strong> Es posible reducir la contaminación del agua a través del medio terrestre. La contaminación que proviene de coches y otro tipo de vehículos no es solo atmosférica o acústica.
          </li>
          <li>
            <strong>Reducción del uso de aceites y baterías:</strong> Todo residuo arrojado al medio ambiente y que no es reciclado puede acabar en el agua. Pero el aceite y las baterías merecen una atención especial. El aceite es un contaminante del agua especialmente agresivo que provoca un grave daño a la biodiversidad acuática. Por su parte, las baterías y las pilas poseen un gran número de minerales en su composición que, al entrar en contacto con el agua, se disuelven y pueden ser ingeridos por los peces. Es fundamental reciclar estos productos para evitar que lleguen al agua y provoquen daños irreversibles.
          </li>
          <li>
            <strong>Menos consumo de plásticos:</strong> Para reducir la contaminación hídrica es imprescindible disminuir la utilización del plástico de un solo uso y reciclar siempre este material en el contenedor adecuado. El plástico tarda en degradarse y permanece en el medio ambiente durante muchos años, descomponiéndose en forma de microplásticos que dañan el agua y toda la vida que ésta contiene.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Causes;
