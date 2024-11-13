import React from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import ScarEarth from './ScarcityScene/models/ScarEarth';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

function ScarcitySection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/scarScene");
  };

  // Definir estilos en los objetos
  const styles = {
    navbarContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      position: 'relative', 
    },
    contentContainer: {
      position: 'absolute',
      top: '50%', 
      left: '50px', 
      transform: 'translateY(-50%)', 
      color: '#fff', 
      textAlign: 'right', 
      maxWidth: '300px', 
      lineHeight: '1.5', 
      padding: '0 20px', 
    },
    title: {
      position: 'absolute',
      bottom: '20px', 
      left: '20px', 
      color: '#fff', 
      fontSize: '1.5rem', 
      margin: '0', 
    },
    rightContainer: {
      position: 'absolute',
      top: '50%', 
      right: '20px', 
      transform: 'translateY(-50%)', 
      backgroundColor: '#16284A', 
      borderRadius: '10px', 
      padding: '20px',
      width: '300px', 
      color: '#fff', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
      textAlign: 'left', // Alineado a la izquierda
    },
    sectionTitle: {
      fontSize: '1rem', // Reducido el tamaño de fuente
      margin: '0 0 10px 0',
      textAlign: 'center', // Centrando el título
    },
    separator: {
      height: '2px',
      backgroundColor: '#fff',
      margin: '10px 0', 
    },
    list: {
      padding: '0',
      margin: '10px 0', 
      textAlign: 'left', // Alineado a la izquierda
      width: '100%', // Ocupa todo el ancho del contenedor
    },
    listItem: {
      fontSize: '0.9rem', 
      textAlign: 'left', // Alineado a la izquierda
      marginBottom: '5px', 
    },
    button: {
      backgroundColor: '#3889D7', 
      color: '#fff', 
      border: 'none',
      borderRadius: '5px',
      padding: '10px 0',
      cursor: 'pointer',
      width: '100%', 
      textAlign: 'center',
      transition: 'background-color 0.3s', 
    },
    buttonHover: {
      backgroundColor: '#2A6EB4', 
    },
    earthModelContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100vh', 
      height: '100vh', 
      pointerEvents: 'auto',
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.contentContainer}>
        <p>
          La escasez de agua es una crisis global que impacta a miles de millones. El cambio climático y la sobreexplotación amenazan nuestro futuro. Explora cómo asegurar un acceso sostenible al agua para todos.
        </p>
      </div>
      <h2 style={styles.title}>ÍNDICE DE ESCASEZ</h2>

      <div style={styles.rightContainer}>
        <h2 style={styles.sectionTitle}>REALIDADES ALARMANTES</h2>
        <div style={styles.separator}></div>
        <div style={styles.list}>
          <p style={styles.listItem}>1. Más de 2 mil millones de personas viven en países con alto estrés hídrico.</p>
          <p style={styles.listItem}>2. Para 2025, se estima que 1.8 mil millones de personas enfrentarán escasez absoluta de agua.</p>
          <p style={styles.listItem}>3. La agricultura representa el 70% de las extracciones mundiales de agua dulce, presionando los suministros.</p>
          <p style={styles.listItem}>4. El agotamiento de las aguas subterráneas ocurre en muchas partes del mundo, con consecuencias a largo plazo.</p>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          onClick={handleButtonClick}
        >
          EXPLORA SOLUCIONES
        </button>
      </div>

      {/* Renderiza el modelo de la Tierra */}
      <div style={styles.earthModelContainer}>
        <Canvas>
          <ambientLight intensity={2} />
          <OrbitControls enableZoom={false} enablePan={false} />
          {/* <Environment preset='sunset' /> */}
          <ScarEarth scale ={2.5} />
        </Canvas>
      </div>
    </div>
  );
}

export default ScarcitySection;
