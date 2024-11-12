import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
//importar los modelos....
import Oil from "../ContaminationScene/models/Oil"; 
import AcidificationLights from "./ligths/AcidificationLights"
import UnderwaterStaging from "./staging/UnderwaterStaging";
 

import leftClickImage from "../../assets/images/click.png";
import rightArrowImage from "../../assets/images/tecla.png";



const oilSettings = [
    { position: [-100, 5, -20], scale: [5.5, 5.5, 5.5] },
    { position: [80, 7.8, 130], scale: [5.5, 5.5, 5.5] },
    { position: [40, 6.5, 60], scale: [5.5, 5.5, 5.5] },
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

const AcidScene = () => {
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
        <UnderwaterStaging />
        <Ocean2 />


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


        <CameraControl currentIndex={currentIndex} />
        <AcidificationLights />
      </Canvas>
    </div>
  );
};

export default AcidScene;
