import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import AcidEarth from './AcidificationScene/models/AcidEarth';


function AcidificationSection() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);


  const handleButtonClick = () => {
    navigate("/causesAcid"); 
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
    titleContainer: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    titleImage: {
      width: '70px',
      height: '70px',
      marginRight: '10px',
      cursor: 'pointer', 
    },
    titleText: {
      color: '#fff',
      fontSize: '1.5rem',
      marginBottom: '-20px',
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
      textAlign: 'left',
    },
    sectionTitle: {
      fontSize: '1rem',
      margin: '0 0 10px 0',
      textAlign: 'center',
    },
    separator: {
      height: '2px',
      backgroundColor: '#fff',
      margin: '10px 0',
    },
    list: {
      padding: '0',
      margin: '10px 0',
      textAlign: 'left',
      width: '100%',
    },
    listItem: {
      fontSize: '0.9rem',
      textAlign: 'left',
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
          La acidificación de los océanos, causada por el aumento de CO₂, amenaza la vida marina y los ecosistemas oceánicos. Comprender sus efectos y actuar para mitigarlos es esencial.
        </p>
      </div>
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>ÍNDICE DE ACIDIFICACIÓN DEL OCÉANO</h2> 
      </div>
      
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
          onClick={handleButtonClick} 
        >
          SOLUCIONES
        </button>
      </div>

      
      <div style={styles.earthModelContainer}>
        <AcidEarth/>
      </div>
    </div>
  );
}

export default AcidificationSection;
