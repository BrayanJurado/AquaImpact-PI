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
          title: 'User Already Exists',
          text: 'An account with this email already exists. Please log in instead.',
        });
        return;
      }

      await auth.register(emailRegister, passwordRegister);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: `Welcome, ${emailRegister}!`,
      });
      navigate("/menu"); // Redirige a la interfaz Acces
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Error',
        text: error.message || 'An error occurred. Please try again.',
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.login(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome back, ${email}!`,
      });
      navigate("/menu"); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: error.message || 'An error occurred. Please try again.',
      });
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await auth.loginWithGoogle();
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back with Google!',
      });
      navigate("/menu"); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Google Login Error',
        text: error.message || 'An error occurred. Please try again.',
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
        title: 'Logout Error',
        text: error.message || 'An error occurred during logout.',
      });
    }
  };

  return (
    <div className="login-container">
      <div className="icon-container">
      <img src={icono} alt="Project Logo" style={{ height: '45px', marginLeft: '10px' }} />
      </div>
      <div className={`container ${!isLogin ? 'active' : ''}`} id="container">
        {displayName && <h5>Welcome: {displayName}</h5>}
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon" onClick={handleGoogle}>
                <FcGoogle size={24} />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="email"
              placeholder="Email"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
              aria-label="Email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
              aria-label="Password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon" onClick={handleGoogle}>
                <FcGoogle size={24} />
              </a>
            </div>
            <span>or use your email to log in</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              required
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to access all site features</p>
              <button className="hidden" onClick={() => setIsLogin(true)}>
                Log In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome to AquaImpact!</h1>
              <p>Knowledge is power, water is vital</p>
              <button className="hidden" onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {displayName && <button onClick={handleLogout} className="button">Logout</button>}
      </div>
    </div>
  );
};

export default LoginRegister;