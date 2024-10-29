import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { useAuth } from "../context/AuthContext";
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc'; 
import icono from '../assets/images/logofc.png'; 

const LoginRegister = () => {
  const auth = useAuth();
  const navigate = useNavigate(); // Usa el hook useNavigate para redireccionar
  const { displayName } = auth.user;

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userExists = await auth.checkUserExists(emailRegister);
      if (userExists) {
        Swal.fire({
          icon: 'info',
          title: 'Usuario Ya Existente',
          text: 'Una cuenta con este correo ya existe. Por favor inicia sesión.',
        });
        return;
      }

      await auth.register(emailRegister, passwordRegister);
      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: `Bienvenido, ${emailRegister}!`,
      });
      navigate("/menu"); // Redirige a la interfaz Acces
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el Registro',
        text: error.message || 'Ocurrió un error. Por favor inténtelo nuevamente.',
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.login(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesión Exitoso',
        text: `Bienvenido de nuevo, ${email}!`,
      });
      navigate("/menu"); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en Inicio de Sesión',
        text: error.message || 'Ocurrió un error. Por favor inténtelo nuevamente.',
      });
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await auth.loginWithGoogle();
      Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesión Exitoso',
        text: 'Bienvenido de nuevo con Google!',
      });
      navigate("/menu"); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en Inicio de Sesión con Google',
        text: error.message || 'Ocurrió un error. Por favor inténtelo nuevamente.',
      });
    }
  };

  const handleLogout = async () => {
    try {
      await auth.logout();
      navigate("/"); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al Cerrar Sesión',
        text: error.message || 'Ocurrió un error al cerrar sesión.',
      });
    }
  };

  return (
    <div className="login-container">
      <div className="icon-container">
        <img src={icono} alt="Logo del Proyecto" style={{ height: '45px', marginLeft: '10px' }} />
      </div>
      <div className={`container ${!isLogin ? 'active' : ''}`} id="container">
        {displayName && <h5>Bienvenido: {displayName}</h5>}
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Crear Cuenta</h1>
            <div className="social-icons">
              <a href="#" className="icon" onClick={handleGoogle}>
                <FcGoogle size={24} />
              </a>
            </div>
            <span>o usa tu correo para registrarte</span>
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
              aria-label="Correo Electrónico"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
              aria-label="Contraseña"
              required
            />
            <button type="submit">Registrarse</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Iniciar Sesión</h1>
            <div className="social-icons">
              <a href="#" className="icon" onClick={handleGoogle}>
                <FcGoogle size={24} />
              </a>
            </div>
            <span>o usa tu correo para iniciar sesión</span>
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Correo Electrónico"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Contraseña"
              required
            />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>¡Bienvenido de Vuelta!</h1>
              <p>Ingresa tus datos personales para acceder a todas las funciones del sitio</p>
              <button className="hidden" onClick={() => setIsLogin(true)}>
                Iniciar Sesión
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Bienvenido a AquaImpact!</h1>
              <p>El conocimiento es poder, el agua es vital</p>
              <button className="hidden" onClick={() => setIsLogin(false)}>
                Registrarse
              </button>
            </div>
          </div>
        </div>
        {displayName && <button onClick={handleLogout} className="button">Cerrar Sesión</button>}
      </div>
    </div>
  );
};

export default LoginRegister;
