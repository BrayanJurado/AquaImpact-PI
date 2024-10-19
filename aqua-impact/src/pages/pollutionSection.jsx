import React from 'react';
import { Navbar } from '../components/Navbar';

function PollutionSection() {
  // Definir estilos en un objeto
  const styles = {
    navbarContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      position: 'relative', // Permitir el control de la superposición
    },
    contentContainer: {
      position: 'absolute',
      top: '50%', // Centrar verticalmente
      left: '0', // Pegado a la izquierda
      transform: 'translateY(-50%)', // Ajustar para centrar
      color: '#fff', // Color del texto
      textAlign: 'right', // Alinear el texto a la derecha
      maxWidth: '300px', // Establecer un ancho máximo más pequeño
      lineHeight: '1.5', // Mejora la legibilidad del texto
      padding: '0 20px', // Añadir un poco de padding a los lados si es necesario
    },
    title: {
      position: 'absolute',
      bottom: '20px', // Alinear en la parte inferior
      left: '20px', // Pegado a la izquierda
      color: '#fff', // Color del texto
      fontSize: '1.5rem', // Tamaño del texto
      margin: '0', // Sin margen
    },
    rightContainer: {
      position: 'absolute',
      top: '50%', // Centrar verticalmente
      right: '20px', // Espaciado hacia la derecha
      transform: 'translateY(-50%)', // Ajustar para centrar
      backgroundColor: '#16284A', // Color de fondo
      borderRadius: '10px', // Bordes curveados
      padding: '20px',
      width: '300px', // Ancho del contenedor
      color: '#fff', // Color del texto
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra del contenedor
      textAlign: 'center', // Alinear texto al centro
    },
    sectionTitle: {
      fontSize: '1.2rem', // Reducir tamaño del texto del título
      margin: '0 0 10px 0', // Margen inferior para el título
    },
    separator: {
      height: '2px',
      backgroundColor: '#fff',
      margin: '10px 0', // Margen superior e inferior
    },
    list: {
      padding: '0',
      margin: '10px 0', // Margen superior e inferior
    },
    listItem: {
      fontSize: '0.9rem', // Reducir tamaño del texto de la lista
      textAlign: 'center', // Alinear texto al centro
      marginBottom: '5px', // Margen inferior para separar los elementos
    },
    button: {
      backgroundColor: '#3889D7', // Color del botón
      color: '#fff', // Color del texto del botón
      border: 'none',
      borderRadius: '5px',
      padding: '10px 0',
      cursor: 'pointer',
      width: '100%', // Ocupa todo el ancho del contenedor
      textAlign: 'center',
      transition: 'background-color 0.3s', // Transición para el hover
    },
    buttonHover: {
      backgroundColor: '#2A6EB4', // Color del botón en hover
    },
  };

  return (
    <div>
      <Navbar /> {/* Mantener el Navbar */}
      <div style={styles.contentContainer}>
        <p>
          Water pollution threatens life on our planet. From plastic waste that harms marine life to chemicals that affect our health, every contaminated drop counts. Discover how these actions harm our ecosystem and learn how to protect this vital resource.
        </p>
      </div>
      <h2 style={styles.title}>POLLUTION INDEX</h2> {/* Título en la parte inferior izquierda */}

      {/* Contenedor de "ALARMING REALITIES" */}
      <div style={styles.rightContainer}>
        <h2 style={styles.sectionTitle}>ALARMING REALITIES</h2>
        <div style={styles.separator}></div>
        <div style={styles.list}>
          <p style={styles.listItem}>1. More than 80% of wastewater is discharged into the environment without treatment.</p>
          <p style={styles.listItem}>2. Approximately 2 million tons of sewage and industrial waste are dumped into the oceans daily.</p>
          <p style={styles.listItem}>3. Water pollution is responsible for over 1 million deaths each year globally.</p>
          <p style={styles.listItem}>4. Plastics account for 60-80% of marine debris, causing severe harm to marine life.</p>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          EXPLORE SOLUTIONS
        </button>
      </div>
    </div>
  );
}

export default PollutionSection;
