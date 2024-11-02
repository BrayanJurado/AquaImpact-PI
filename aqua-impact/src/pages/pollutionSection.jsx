import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import EarthModel from '../components3D/earthModel';
import indexImage from '../assets/images/index.png'; // Ajusta la ruta si es necesario

function PollutionSection() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleImageClick = () => navigate('/indexPollution'); // Redirige a /indexPollution
  const handleCausesSolutionsClick = () => navigate('/causesPollution'); // Redirige a /causesPol

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
      cursor: 'pointer', // Cambia el cursor al pasar sobre la imagen
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
          La contaminación del agua amenaza nuestro planeta. Desde plásticos que dañan la vida marina hasta químicos que afectan nuestra salud, cada gota cuenta. ¡Descubre cómo proteger este recurso vital!
        </p>
      </div>

      <div style={styles.titleContainer}>
        <img 
          src={indexImage} 
          alt="Índice de Contaminación" 
          style={styles.titleImage} 
          onClick={handleImageClick} 
        />
        <h2 style={styles.titleText}>VER NIVELES DE CONTAMINACIÓN</h2>
      </div>

      <div style={styles.rightContainer}>
        <h2 style={styles.sectionTitle}>REALIDADES ALARMANTES</h2>
        <div style={styles.separator}></div>
        <div style={styles.list}>
          <p style={styles.listItem}>1. Más del 80% de las aguas residuales se descargan en el medio ambiente sin tratamiento.</p>
          <p style={styles.listItem}>2. Aproximadamente 2 millones de toneladas de aguas residuales y desechos industriales se vierten en los océanos diariamente.</p>
          <p style={styles.listItem}>3. La contaminación del agua causa más de 1 millón de muertes cada año a nivel mundial.</p>
          <p style={styles.listItem}>4. Los plásticos representan entre el 60% y 80% de los desechos marinos, causando un gran daño a la vida marina.</p>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          onClick={handleCausesSolutionsClick} // Llama a la función para redirigir
        >
          CAUSAS Y SOLUCIONES
        </button>
      </div>

      <div style={styles.earthModelContainer}>
        <EarthModel />
      </div>
    </div>
  );
}

export default PollutionSection;
