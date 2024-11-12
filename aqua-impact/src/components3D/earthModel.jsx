import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls, useGLTF, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom'; 
import PileTrash from '../pages/ContaminationScene/models/ContainerShip'; 

function Globe() {
  const gltf = useGLTF('/models/earth.gltf'); 
  return <primitive object={gltf.scene} scale={2.5} />; 
}


const latLonToSphere = (lat, lon, radius, offset = 0) => {
  const latRad = (lat * Math.PI) / 200;  
  const lonRad = (lon * Math.PI) / 200;  

  const x = (radius + offset) * Math.cos(latRad) * Math.cos(lonRad);
  const y = (radius + offset) * Math.sin(latRad);
  const z = (radius + offset) * Math.cos(latRad) * Math.sin(lonRad);

  return [x, y, z];
};

const EarthModel = () => {
  const [cursor, setCursor] = useState('default'); 
  const [showTooltip, setShowTooltip] = useState(false); 
  const navigate = useNavigate();

  const globeScale = 2.5; 
  const globePosition = [0, 0, 0]; 

  const lat = 20;  
  const lon = 200; 

  const offset = 0.35; 

  const pileTrashPosition = latLonToSphere(lat, lon, globeScale, offset);

  const handleClick = () => {
    navigate('/contScene'); 
  };

  const handlePointerOver = () => {
    setCursor('pointer'); 
    setShowTooltip(true); 
  };

  const handlePointerOut = () => {
    setCursor('default'); 
    setShowTooltip(false); 
  };

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        
        <Globe />

        <PileTrash
          position={pileTrashPosition}
          scale={[0.6, 0.6, 0.6]}
          onClick={handleClick} 
          onPointerOver={handlePointerOver} 
          onPointerOut={handlePointerOut}  
        >
          <primitive
            object={PileTrash}
            position={[pileTrashPosition[0], pileTrashPosition[1] + 0.5, pileTrashPosition[2]]}
          />
        </PileTrash>

        {showTooltip && (
          <Html position={[pileTrashPosition[0] - 0.5, pileTrashPosition[1] + 0.3, pileTrashPosition[2]]}>
            <div style={{ 
              background: 'rgba(22, 40, 74, 0.8)', 
              color: 'white', 
              padding: '5px 10px', 
              borderRadius: '5px',
              fontSize: '13px',
              textAlign: 'center',
              pointerEvents: 'none'  
            }}>
              Explorar escena
            </div>
          </Html>
        )}

        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>

      <Environment preset="sunset" />
    </Canvas>
  );
};

export default EarthModel;
