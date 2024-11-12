import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Oil from "../ContaminationScene/models/Oil";  

import UnderwaterLights from './lights/UnderwaterLigths';
import Waterplant2 from './models/Waterplant2';
import Arena from './models/Arena';
import Coral1 from './models/Coral1';
import Coral2 from './models/Coral2';
import UnderwaterStaging from './staging/UnderwaterStaging';
import Fishes from './models/Fishes';
import Fishes2 from './models/Fishes2';
import Smallrocks from './models/Smallrocks';
import Waterplant from './models/Waterplant';
import leftClickImage from "../../assets/images/click.png";
import buttonsImage from "../../assets/images/teclas.png";
import Seaweed from './models/Seaweed';



const oilSettings = [
  { position: [-70, 0, -20], scale: [5.5, 5.5, 5.5] }, //Spot 1
];

const Coral1Settings = [
  { position: [300, -1.5, 180], scale: [6.5, 6.5, 6.5] }, //Spot 2
  { position: [300, -10, 220], scale: [6.5, 6.5, 6.5] }, //Spot 2
  { position: [250, -10, 220], scale: [6.5, 6.5, 6.5] }, //Spot 2
  { position: [350, -10, 220], scale: [6.5, 6.5, 6.5] }, //Spot 2
  { position: [310, 3.5 , 150], scale: [6.5, 6.5, 6.5] }, //Spot 2
  { position: [350, -0.5 , 160], scale: [6.5, 6.5, 6.5] }, //Spot 2
];

const Coral2Settings = [
  { position: [300, -0.5, 180], scale: [5.5, 5.5, 5.5] }, //Spot 2
  { position: [300, -0.5, 150], scale: [6.5, 6.5, 6.5] }, //Spot 2
  { position: [260, -0.5, 250], scale: [10.5, 10.5, 10.5] }, //Spot 2
  { position: [320, -3.5, 210], scale: [3.5, 3.5, 3.5] }, //Spot 2
  { position: [320, -2.5, 160], scale: [9.5, 9.5, 9.5] }, //Spot 2
];

const FishesSettings = [
  { position: [260, 60, -250], scale: [6.5, 6.5, 6.5] },
  // { position: [260, 80, -250], scale: [6.5, 6.5, 6.5] },
]

const FishesSettings2 = [
  { position: [260, 55, -230], scale: [6.5, 6.5, 6.5] },
]

const SeaweedSettings = [
  { position: [260, 50, -250], scale: [8.5, 28.5, 8.5] },
  { position: [265, 48, -216.2], scale: [8.5, 28.5, 8.5] },
  { position: [275, 40, -230], scale: [7.5, 25.5, 7.5] },
  { position: [260, 45, -230], scale: [6.5, 27.5, 6.5] },
  { position: [240, 45, -250], scale: [6.5, 27.5, 6.5] },
  { position: [260, 46, -260], scale: [6.5, 22.5, 6.5] },
  { position: [240, 48, -260], scale: [6.5, 22.5, 6.5] },
  { position: [270, 43, -240], scale: [6.5, 22.5, 6.5] },
  { position: [270, 40, -200], scale: [6.5, 22.5, 6.5] },
  { position: [260, 42, -239], scale: [6.5, 22.5, 6.5] },
]

const WaterplantSettings = [
  { position: [260, 37, -255], scale: [0.2, 0.2, 0.2] },
]

const WaterplantSettings2 = [
  { position: [270, 48, -230], scale: [0.2, 0.2, 0.2] },
]

const SmallrocksSettings = [
  { position: [270, 48, -230], scale: [5.5, 5.5, 5.5] },
]

const cameraSettings = {
  position: [-18, 50, -12],
  fov: 60,
  far: 1000,
};


const labelsPositions = [
  [-180, 20, 200], //Posición principal
  [-120, 15, -40], //Posición texto Spot Gasolina
  [345, 7, 220], //Posición texto Spot Corales
  [270, 68, -290], //Posición texto Spot Peces
];

const CameraControl = ({ currentIndex }) => {
  const { camera } = useThree(); 

  const moveCameraToLabel = (index) => {
    const position = labelsPositions[index];
    camera.position.set(position[0] + 20, position[1] + 5, position[2] + 20); 
    camera.lookAt(position[0], position[1], position[2]);
  };

  useEffect(() => {
    moveCameraToLabel(currentIndex); 
  }, [currentIndex, camera]);

  return null;
};

const AcidScene = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(true); 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % labelsPositions.length); 
      }
      if (event.key === "ArrowUp") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % labelsPositions.length); 
      }
      
      if (event.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + labelsPositions.length) % labelsPositions.length);
      }
      
      if (event.key === "ArrowDown") {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + labelsPositions.length) % labelsPositions.length);
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
        Explora la escena mantiendo el click izquierdo y navega entre las diferentes causas de la contaminación a través de las teclas.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>

        <img src={leftClickImage} alt="Click izquierdo" style={{ width: "120px", marginRight: "20px", opacity: 0.6, filter: "brightness(0) saturate(100%)" }} />

        <img src={buttonsImage} alt="Tecla derecha" style={{ width: "200px", height: "auto" }} />
      </div>
      <button onClick={closeModal} style={{
        padding: "10px 20px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer"
      }}>ENTENDIDO</button>
    </div>
  </div>
)}

      <Canvas shadows camera={cameraSettings}>
        <OrbitControls enableZoom={true} /> 
        <UnderwaterStaging />
        <Arena />  
        

      
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

        {Coral1Settings.map((settings, index) => (
          <Coral1 key={`Oil-${index}`} position={settings.position} scale={settings.scale} />
        ))}
        {Coral2Settings.map((settings, index) => (
          <Coral2 key={`Oil-${index}`} position={settings.position} scale={settings.scale} />
        ))}

        <Html position={[Coral2Settings[0].position[0], Coral2Settings[0].position[1] + 16, Coral2Settings[0].position[2]]} distanceFactor={10}>
          <div style={{ backgroundColor: "rgba(22, 40, 74, 0.9)", color: "white", padding: "10px 20px", borderRadius: "5px", maxWidth: "100%", textAlign: "center", lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "5.5em", margin: "0" }}>Derrame de petróleo</h1>
            <p style={{ fontSize: "5.0em", margin: "10px 100px", wordWrap: 'normal' }}>
              Alrededor de 1 millón de toneladas de petróleo acaban en los océanos anualmente debido a accidentes, actividades ilegales y otros factores.
            </p>
          </div>
        </Html>

      
        {FishesSettings.map((settings, index) => (
          <Fishes key={`Oil-${index}`} position={settings.position} scale={settings.scale}  />
        ))}

        {FishesSettings2.map((settings, index) => (
          <Fishes2 key={`Oil-${index}`} position={settings.position} scale={settings.scale}  />
        ))}

        {SeaweedSettings.map((settings, index) => (
          <Seaweed key={`Oil-${index}`} position={settings.position} scale={settings.scale}  />
        ))}

        {WaterplantSettings.map((settings, index) => (
          <Waterplant key={`Oil-${index}`} position={settings.position} scale={settings.scale}  />
        ))}

        {SmallrocksSettings.map((settings, index) => (
          <Smallrocks key={`Oil-${index}`} position={settings.position} scale={settings.scale}  />
        ))}



        {WaterplantSettings2.map((settings, index) => (
          <Waterplant2 key={`Oil-${index}`} position={settings.position} scale={settings.scale}  />
        ))}
        <Html position={[FishesSettings[0].position[0], FishesSettings[0].position[1] + 16, FishesSettings[0].position[2]]} distanceFactor={10}>
          <div style={{ backgroundColor: "rgba(22, 40, 74, 0.9)", color: "white", padding: "10px 20px", borderRadius: "5px", maxWidth: "100%", textAlign: "center", lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "2.5em", margin: "0" }}>Derrame de petróleo</h1>
            <p style={{ fontSize: "2.0em", margin: "10px 100px", wordWrap: 'normal' }}>
              Alrededor de 1 millón de toneladas de petróleo acaban en los océanos anualmente debido a accidentes, actividades ilegales y otros factores.
            </p>
          </div>
        </Html>

        <CameraControl currentIndex={currentIndex} />
        <UnderwaterLights />
      </Canvas>
    </div>
  );
};

export default AcidScene;
