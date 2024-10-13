import React, { useState } from 'react';
import { FaUserCircle, FaSignOutAlt, FaEdit, FaChevronDown, FaChevronUp, FaChartLine } from 'react-icons/fa';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logofc.png'; 

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const auth = useAuth(); // Usar el contexto de autenticación
  const navigate = useNavigate(); // Para redirigir a otra ruta

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
    setArrowUp(prevState => !prevState);
  };

  const handleLogout = async () => {
    try {
      await auth.logout();
      navigate("/login"); // Redirige al login después de cerrar sesión
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="navbar-container" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', padding: '0 20px', backgroundColor: 'transparent' }}>
      
      {/* Logo a la izquierda */}
      <div className="logo-container" style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Project Logo" style={{ height: '45px', marginLeft: '10px' }} />
      </div>

      {/* Navbar de opciones a la derecha */}
      <div className="navbar" style={{ color: '#333', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <div className="navbar-icon" onClick={toggleDropdown} style={{ cursor: 'pointer', fontSize: '40px', marginRight: '5px', color: '#f0f0f0' }}>
          <FaUserCircle />
        </div>
        <div className="arrow-icon" onClick={toggleDropdown} style={{ cursor: 'pointer', fontSize: '15px', color: '#888' }}>
          {arrowUp ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      {dropdownOpen && (
        <div
          className="sub-menu"
          style={{
            position: 'absolute',
            top: 'calc(60px - 10px)',
            right: '20px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            minWidth: '160px',
            transform: 'translateY(0)',
            transition: 'transform 0.2s ease',
          }}
        >
          {/* Opción: Profile Settings */}
          <div
            className="sub-menu-item"
            onClick={toggleDropdown}
            onMouseEnter={() => setHighlightedOption('edit')}
            onMouseLeave={() => setHighlightedOption(null)}
            style={{
              padding: '10px 14px',
              cursor: 'pointer',
              backgroundColor: highlightedOption === 'edit' ? '#22B8CF' : 'transparent',
              color: highlightedOption === 'edit' ? '#fff' : '#333',
              fontWeight: highlightedOption === 'edit' ? 'bold' : 'normal',
              fontSize: '14px',
            }}
          >
            <FaEdit style={{ marginRight: '10px' }} />
            <span>Profile Settings</span>
          </div>

          {/* Opción: My Progress */}
          <div
            className="sub-menu-item"
            onMouseEnter={() => setHighlightedOption('progress')}
            onMouseLeave={() => setHighlightedOption(null)}
            style={{
              padding: '10px 14px',
              cursor: 'pointer',
              backgroundColor: highlightedOption === 'progress' ? '#22B8CF' : 'transparent',
              color: highlightedOption === 'progress' ? '#fff' : '#333',
              fontWeight: highlightedOption === 'progress' ? 'bold' : 'normal',
              fontSize: '14px',
            }}
          >
            <FaChartLine style={{ marginRight: '10px' }} />
            <span>My Progress</span>
          </div>

          {/* Opción: Sign Out */}
          <div
            className="sub-menu-item"
            onClick={handleLogout} 
            onMouseEnter={() => setHighlightedOption('logout')}
            onMouseLeave={() => setHighlightedOption(null)}
            style={{
              padding: '10px 14px',
              cursor: 'pointer',
              backgroundColor: highlightedOption === 'logout' ? '#22B8CF' : 'transparent',
              color: highlightedOption === 'logout' ? '#fff' : '#333',
              fontWeight: highlightedOption === 'logout' ? 'bold' : 'normal',
              fontSize: '14px',
            }}
          >
            <FaSignOutAlt style={{ marginRight: '10px' }} />
            <span>Sign Out</span>
          </div>
        </div>
      )}
    </div>
  );
};
