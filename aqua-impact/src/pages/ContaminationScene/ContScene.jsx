import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Boat from "./models/Boat";
import Rowboat from "./models/Rowboat";
import ContainerShip from "./models/ContainerShip";
import Plastic from "./models/Plastic";  
import Oil from "./models/Oil";  
import Trash from "./models/Trash";  
import PileTrash from "./models/PileTrash";  
import ContaminationLights from "./lights/ContaminationLights"; 
import Ocean2 from "./models/Ocean2";
import OceanStaging from "./staging/OceanStaging";

import leftClickImage from "../../assets/images/click.png";
import rightArrowImage from "../../assets/images/tecla.png";

const boatsSettings = {
  Rowboat: [
    { position: [-100, 8.15, -80], scale: [.2, .2, .2] },
    { position: [100, 10, 80], scale: [.2, .2, .2] },
    { position: [36, 3.6, 34], scale: [.2, .2, .2] },
  ],
  Boat: [
    { position: [-40, 2, -30], scale: [0.06, 0.06, 0.06] },
    { position: [60, 2, 100], scale: [0.06, 0.06, 0.06] },
    { position: [-100, 4, 140], scale: [0.06, 0.06, 0.06] },
  ],
};

const plasticsSettings = [
  { position: [0, 5, 0], scale: [0.2, 0.2, 0.2] },
  { position: [70, 5, 120], scale: [0.2, 0.2, 0.2] },
  { position: [10, 5, 80], scale: [0.2, 0.2, 0.2] },
  { position: [40, 5, 40], scale: [0.2, 0.2, 0.2] },
  { position: [-80, 5, 100], scale: [0.2, 0.2, 0.2] },
  { position: [-50, 5, -50], scale: [0.2, 0.2, 0.2] },
  { position: [20, 5, 160], scale: [0.2, 0.2, 0.2] },
  { position: [60, 5, -120], scale: [0.2, 0.2, 0.2] },
  { position: [-120, 5, 50], scale: [0.2, 0.2, 0.2] },
  { position: [90, 5, 90], scale: [0.2, 0.2, 0.2] },
  { position: [150, 5, -30], scale: [0.2, 0.2, 0.2] },
  { position: [120, 5, -90], scale: [0.2, 0.2, 0.2] },
];

const oilSettings = [
  { position: [-100, 5, -20], scale: [5.5, 5.5, 5.5] },
  { position: [80, 7.8, 130], scale: [5.5, 5.5, 5.5] },
  { position: [40, 6.5, 60], scale: [5.5, 5.5, 5.5] },
];

const trashSettings = [
  { position: [-30, 8, 10], scale: [2, 2, 2] },
  { position: [15, 3, -80], scale: [2, 2, 2] },
  { position: [10, 1.5, 100], scale: [2, 2, 2] },
];

const pileTrashSettings = [
  { position: [150, 5, 60], scale: [1.5, 1.5, 1.5] },
  { position: [-50, 5, 120], scale: [1.5, 1.5, 1.5] },
  { position: [-30, 5, -100], scale: [1.5, 1.5, 1.5] },
];

const cameraSettings = {
  position: [-18, 50, 12],
  fov: 60,
  far: 1000,
};

const labelsPositions = [
  [-150, 25, 30], 
  [77, 0, 110], 
  [-120, 5, -40], 
  [-35, 15, -140], 
];

const CameraControl = ({ currentIndex }) => {
  const { camera } = useThree(); 

  const moveCameraToLabel = (index) => {
    const position = labelsPositions[index];
    camera.position.set(position[0], position[1] + 10, position[2] + 20); 
    camera.lookAt(position[0], position[1], position[2]);
  };

  useEffect(() => {
    moveCameraToLabel(currentIndex); 
  }, [currentIndex, camera]);

  return null;
};

const ContScene = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(true); 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % labelsPositions.length); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown); 
    };
  }, []); 

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>

      {showModal && (
  <div style={{
    position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(22, 40, 74, 0.8)", 
    display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1000"
  }}>
    <div style={{
      backgroundColor: "rgba(22, 40, 74, 0.9)", 
      padding: "20px", borderRadius: "10px", maxWidth: "600px", textAlign: "center", width: "100%"
    }}>
      <h2>¡Bienvenido!</h2>
      
      <hr style={{ border: "1px solid #fff", margin: "20px 0", width: "100%" }} />

      <p style={{ marginBottom: "20px" }}>
        Explora la escena mantiendo el click izquierdo y navega entre las diferentes causas de la contaminación a través de la tecla.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>

        <img src={leftClickImage} alt="Click izquierdo" style={{ width: "120px", marginRight: "20px", opacity: 0.6, filter: "brightness(0) saturate(100%)" }} />

        <img src={rightArrowImage} alt="Tecla derecha" style={{ width: "200px", height: "auto" }} />
      </div>
      <button onClick={closeModal} style={{
        padding: "10px 20px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer"
      }}>ENTENDIDO</button>
    </div>
  </div>
)}

      <Canvas shadows camera={cameraSettings}>
        <OrbitControls enableZoom={false} /> 
        <OceanStaging />
        <Ocean2 />

        {boatsSettings.Rowboat.map((settings, index) => (
          <Rowboat key={`Rowboat-${index}`} position={settings.position} scale={settings.scale} />
        ))}
        {boatsSettings.Boat.map((settings, index) => (
          <Boat key={`Boat-${index}`} position={settings.position} scale={settings.scale} />
        ))}
        <ContainerShip scale={[200, 200, 200]} position={[70, 30, -70]} rotation={[0, -Math.PI / 4, 0]} castShadow />

        {plasticsSettings.map((settings, index) => (
          <Plastic key={`Plastic-${index}`} position={settings.position} scale={settings.scale} />
        ))}

        <Html position={[plasticsSettings[1].position[0], plasticsSettings[1].position[1] + 6, plasticsSettings[1].position[2]]} distanceFactor={10}>
          <div style={{ backgroundColor: "rgba(22, 40, 74, 0.9)", color: "white", padding: "10px 40px", borderRadius: "5px", maxWidth: "500px", textAlign: "center", lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "1.5em", margin: "0" }}>Plástico</h1>
            <p style={{ fontSize: "1em", margin: "10px 0", wordWrap: "break-word" }}>
              Su proceso de descomposición toma cientos de años, liberando contaminantes que afectan la calidad del agua.
            </p>
          </div>
        </Html>

        {oilSettings.map((settings, index) => (
          <Oil key={`Oil-${index}`} position={settings.position} scale={settings.scale} />
        ))}

        <Html position={[oilSettings[0].position[0], oilSettings[0].position[1] + 16, oilSettings[0].position[2]]} distanceFactor={10}>
          <div style={{ backgroundColor: "rgba(22, 40, 74, 0.9)", color: "white", padding: "10px 20px", borderRadius: "5px", maxWidth: "100%", textAlign: "center", lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "2.5em", margin: "0" }}>Derrame de petróleo</h1>
            <p style={{ fontSize: "2.0em", margin: "10px 100px", wordWrap: 'normal' }}>
              Alrededor de 1 millón de toneladas de petróleo acaban en los océanos anualmente debido a accidentes, actividades ilegales y otros factores.
            </p>
          </div>
        </Html>

        {trashSettings.map((settings, index) => (
          <Trash key={`Trash-${index}`} position={settings.position} scale={settings.scale} />
        ))}

        {pileTrashSettings.map((settings, index) => (
          <PileTrash key={`PileTrash-${index}`} position={settings.position} scale={settings.scale} />
        ))}

        <Html position={[pileTrashSettings[2].position[0], pileTrashSettings[2].position[1] + 25, pileTrashSettings[2].position[2]]} distanceFactor={10}>
          <div style={{ backgroundColor: "rgba(22, 40, 74, 0.9)", color: "white", padding: "10px 20px", borderRadius: "5px", maxWidth: "500px", textAlign: "center", lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "2.5em", margin: "0" }}>Pilas de Basura</h1>
            <p style={{ fontSize: "2.0em", margin: "0px 100px", wordWrap: "normal" }}>
              Pilas de plásticos, metales y productos químicos liberan sustancias tóxicas al ambiente, dañan la vida marina y afectan el equilibrio ecológico.
            </p>
          </div>
        </Html>
        <CameraControl currentIndex={currentIndex} />
        <ContaminationLights />
      </Canvas>
    </div>
  );
};

export default ContScene;
