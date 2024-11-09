import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls, useGLTF, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import PileTrash from '../pages/ContaminationScene/models/ContainerShip'; // Asegúrate de que el modelo esté importado correctamente

// Componente del globo
function Globe() {
  const gltf = useGLTF('/models/earth.gltf'); // Carga el modelo 3D de la Tierra
  return <primitive object={gltf.scene} scale={2.5} />; // Escala el globo
}

// Función para convertir latitud y longitud a coordenadas esféricas
const latLonToSphere = (lat, lon, radius, offset = 0) => {
  const latRad = (lat * Math.PI) / 200;  // Convertimos latitud a radianes (corrección a 180)
  const lonRad = (lon * Math.PI) / 200;  // Convertimos longitud a radianes (corrección a 180)

  const x = (radius + offset) * Math.cos(latRad) * Math.cos(lonRad);
  const y = (radius + offset) * Math.sin(latRad); // Esto da la posición vertical sobre la esfera
  const z = (radius + offset) * Math.cos(latRad) * Math.sin(lonRad);

  return [x, y, z];
};

const EarthModel = () => {
  const [cursor, setCursor] = useState('default'); // Estado para manejar el cursor
  const [showTooltip, setShowTooltip] = useState(false); // Estado para controlar el tooltip
  const navigate = useNavigate(); // Hook para la navegación

  const globeScale = 2.5; // Escala del globo
  const globePosition = [0, 0, 0]; // El centro del globo está en el origen

  // Usamos coordenadas de latitud y longitud para posicionar el modelo sobre el océano
  const lat = 20;  // Latitud (30° N)
  const lon = 200; // Longitud (-40° W)

  // Modificamos el offset para alejar el modelo más de la superficie del globo
  const offset = 0.35; // Ajusta este valor para empujar el modelo más hacia afuera

  // Convertimos las coordenadas lat/lon a la superficie esférica con un desplazamiento
  const pileTrashPosition = latLonToSphere(lat, lon, globeScale, offset);

  // Función para manejar el clic sobre el modelo
  const handleClick = () => {
    navigate('/contScene'); // Redirige a /contScene
  };

  // Funciones para cambiar el cursor y mostrar el tooltip
  const handlePointerOver = () => {
    setCursor('pointer'); // Cambia el cursor a "pointer" al pasar el mouse sobre el modelo
    setShowTooltip(true); // Muestra el tooltip
  };

  const handlePointerOut = () => {
    setCursor('default'); // Restaura el cursor a "default" al salir del modelo
    setShowTooltip(false); // Oculta el tooltip
  };

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        
        {/* Renderizamos el globo */}
        <Globe />

        {/* Renderizamos la pila de basura sobre el océano */}
        <PileTrash
          position={pileTrashPosition}
          scale={[0.6, 0.6, 0.6]}
          onClick={handleClick}  // Maneja el clic
          onPointerOver={handlePointerOver}  // Cambia el cursor y muestra el tooltip
          onPointerOut={handlePointerOut}   // Restaura el cursor y oculta el tooltip
        >
          {/* Ajustamos la orientación del modelo manipulando la posición en X y Z */}
          <primitive
            object={PileTrash}
            position={[pileTrashPosition[0], pileTrashPosition[1] + 0.5, pileTrashPosition[2]]}
          />
        </PileTrash>

        {/* Tooltip que se muestra cuando el ratón está sobre el modelo */}
        {showTooltip && (
          <Html position={[pileTrashPosition[0] - 0.5, pileTrashPosition[1] + 0.3, pileTrashPosition[2]]}>
            <div style={{ 
              background: 'rgba(22, 40, 74, 0.8)', // Fondo con el color especificado
              color: 'white', 
              padding: '5px 10px', 
              borderRadius: '5px',
              fontSize: '13px',
              textAlign: 'center',
              pointerEvents: 'none'  // Hace que el tooltip no interfiera con los eventos del modelo
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
