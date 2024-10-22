import React from 'react';
import { Navbar } from '../components/Navbar';
import EarthModel from '../components3D/earthModel'; // Ajusta la ruta según tu estructura de carpetas

function ScarcitySection() {
  // Definir estilos en los objetos
  const styles = {
    contentContainer: {
      position: 'absolute',
      top: '50%',
      left: '0',
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
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '1.2rem',
      margin: '0 0 10px 0',
    },
    separator: {
      height: '2px',
      backgroundColor: '#fff',
      margin: '10px 0',
    },
    list: {
      padding: '0',
      margin: '10px 0',
    },
    listItem: {
      fontSize: '0.9rem',
      textAlign: 'center',
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
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.contentContainer}>
        <p>
          Water scarcity is an urgent crisis affecting billions of people worldwide. The rapid depletion of freshwater resources, exacerbated by climate change and unsustainable practices, poses a significant threat to our future. Join us in understanding the impact of this crisis and exploring solutions to ensure a sustainable water future for all.
        </p>
      </div>
      <h2 style={styles.title}>SCARCITY INDEX</h2>

      <div style={styles.rightContainer}>
        <h2 style={styles.sectionTitle}>ALARMING REALITIES</h2>
        <div style={styles.separator}></div>
        <div style={styles.list}>
          <p style={styles.listItem}>1. Over 2 billion people live in countries experiencing high water stress.</p>
          <p style={styles.listItem}>2. By 2025, it is estimated that 1.8 billion people will face absolute water scarcity.</p>
          <p style={styles.listItem}>3. Agriculture accounts for 70% of global freshwater withdrawals, stressing supplies.</p>
          <p style={styles.listItem}>4. Groundwater depletion is occurring in many parts of the world, leading to long-term consequences.</p>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          EXPLORE SOLUTIONS
        </button>
      </div>

      {/* Renderiza el modelo de la Tierra */}
      <div style={styles.earthModelContainer}>
        <EarthModel />
      </div>
    </div>
  );
}

export default ScarcitySection;
