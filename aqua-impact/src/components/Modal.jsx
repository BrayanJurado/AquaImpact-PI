import React, { useState } from 'react';
import { FaTimes, FaUserCircle } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('account'); 
  const [menuButtonColor, setMenuButtonColor] = useState({ account: '#16284A', progress: '#16284A' });

  if (!isOpen) return null; 

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMenuButtonColor({
      account: section === 'account' ? '#124679' : '#16284A',
      progress: section === 'progress' ? '#124679' : '#16284A',
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return <div>Configuración de cuenta</div>;
      case 'progress':
        return <div>Reporte de progreso</div>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <FaTimes onClick={onClose} style={styles.closeIcon} />
        <div style={styles.content}>
          <div style={styles.menu}>
            <div style={styles.userIconContainer}>
              <FaUserCircle style={styles.userIcon} />
              <div style={styles.userName}>User name</div>
            </div>
            <button
              onClick={() => handleSectionChange('account')}
              style={{ ...styles.menuButton, backgroundColor: menuButtonColor.account }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#124679'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = menuButtonColor.account}
            >
              Cuenta
            </button>
            <div style={styles.separator} />
            <button
              onClick={() => handleSectionChange('progress')}
              style={{ ...styles.menuButton, backgroundColor: menuButtonColor.progress }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#124679'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = menuButtonColor.progress}
            >
              Progreso
            </button>
            <div style={styles.separator} />
          </div>
          <div style={styles.separatorVertical} />
          <div style={styles.rightContent}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#16284A',
    border: 'none', 
    borderRadius: '10px',
    padding: '20px',
    width: '700px', 
    height: '500px', 
    display: 'flex',
    flexDirection: 'column',
  },
  closeIcon: {
    cursor: 'pointer',
    color: '#fff',
    alignSelf: 'flex-end',
    fontSize: '20px',
  },
  content: {
    display: 'flex',
    height: '100%',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    width: '150px', 
    alignItems: 'center', 
  },
  userIconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    marginBottom: '15px', 
  },
  userIcon: {
    fontSize: '70px', 
    color: 'gray', 
  },
  userName: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '12px', 
    fontSize: '18px', 
  },
  menuButton: {
    backgroundColor: '#16284A',
    color: '#fff',
    border: 'none',
    padding: '5px 3px', 
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '15px',
    width: '100%', 
    transition: 'background-color 0.3s',
  },
  separator: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    margin: '5px 0', 
    width: '100%', 
  },
  separatorVertical: {
    width: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    margin: '0 2px',
  },
  rightContent: {
    flexGrow: 1,
    padding: '10px',
    color: '#fff',
  },
};

export default Modal;
