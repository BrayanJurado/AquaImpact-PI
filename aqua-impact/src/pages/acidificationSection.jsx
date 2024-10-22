import React from 'react';
import { Navbar } from '../components/Navbar';
import EarthModel from '../components3D/earthModel'; 

function AcidificationSection() {
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
          Ocean acidification is a pressing issue resulting from increased CO2 emissions, which leads to harmful effects on marine ecosystems. As our oceans absorb excess carbon dioxide, the water becomes more acidic, threatening marine life and altering the delicate balance of ocean habitats. Join us in understanding the implications of acidification and how we can take action to mitigate its effects.
        </p>
      </div>
      <h2 style={styles.title}>OCEAN ACIDIFICATION INDEX</h2> 
      <div style={styles.rightContainer}>
        <h2 style={styles.sectionTitle}>ALARMING REALITIES</h2>
        <div style={styles.separator}></div>
        <div style={styles.list}>
          <p style={styles.listItem}>1. The oceans have absorbed about 30% of the carbon dioxide produced by humans, leading to increased acidity.</p>
          <p style={styles.listItem}>2. Ocean acidity has increased by 30% since the beginning of the Industrial Revolution.</p>
          <p style={styles.listItem}>3. Coral reefs, vital to marine biodiversity, are severely impacted by acidification, hindering their growth and resilience.</p>
          <p style={styles.listItem}>4. Acidification threatens shellfish populations, impacting fisheries and food security for millions of people.</p>
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

export default AcidificationSection;
