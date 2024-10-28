import React from 'react';
import { Navbar } from '../components/Navbar';
import EarthModel from '../components3D/earthModel';

function AcidificationSection() {
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
          La acidificación de los océanos, causada por el aumento de CO₂, amenaza la vida marina y los ecosistemas oceánicos. Comprender sus efectos y actuar para mitigarlos es esencial.
        </p>
      </div>
      <h2 style={styles.title}>ÍNDICE DE ACIDIFICACIÓN DEL OCÉANO</h2> 
      <div style={styles.rightContainer}>
        <h2 style={styles.sectionTitle}>REALIDADES ALARMANTES</h2>
        <div style={styles.separator}></div>
        <div style={styles.list}>
          <p style={styles.listItem}>1. Los océanos han absorbido aproximadamente el 30% del dióxido de carbono producido por los humanos, lo que ha aumentado la acidez.</p>
          <p style={styles.listItem}>2. La acidez del océano ha aumentado en un 30% desde el comienzo de la Revolución Industrial.</p>
          <p style={styles.listItem}>3. Los arrecifes de coral, vitales para la biodiversidad marina, están gravemente afectados por la acidificación, lo que dificulta su crecimiento y resistencia.</p>
          <p style={styles.listItem}>4. La acidificación amenaza a las poblaciones de mariscos, impactando la pesca y la seguridad alimentaria de millones de personas.</p>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          EXPLORAR SOLUCIONES
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
