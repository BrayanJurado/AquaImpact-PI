import React from 'react';
import { Navbar } from '../components/Navbar';

function AcidificationSection() {
  // Definir estilos en un objeto
  const styles = {
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
          Ocean acidification is a pressing issue resulting from increased CO2 emissions, which leads to harmful effects on marine ecosystems. As our oceans absorb excess carbon dioxide, the water becomes more acidic, threatening marine life and altering the delicate balance of ocean habitats. Join us in understanding the implications of acidification and how we can take action to mitigate its effects.
        </p>
      </div>
      <h2 style={styles.title}>OCEAN ACIDIFICATION INDEX</h2> {/* Título en la parte inferior izquierda */}

      {/* Contenedor de "ALARMING REALITIES" */}
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
    </div>
  );
}

export default AcidificationSection;
