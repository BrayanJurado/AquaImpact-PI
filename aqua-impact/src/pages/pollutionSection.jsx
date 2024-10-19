import React from 'react';
import { Navbar } from '../components/Navbar';

function PollutionSection() {
  // Definir estilos en los objetoss
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
  };

  return (
    <div>
      <Navbar /> 
      <div style={styles.contentContainer}>
        <p>
          Water pollution threatens life on our planet. From plastic waste that harms marine life to chemicals that affect our health, every contaminated drop counts. Discover how these actions harm our ecosystem and learn how to protect this vital resource.
        </p>
      </div>
      <h2 style={styles.title}>POLLUTION INDEX</h2> 

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
