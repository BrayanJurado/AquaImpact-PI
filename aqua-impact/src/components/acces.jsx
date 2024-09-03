import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import World from "./World";


const Acces = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { displayName } = auth.user;

  const handleLogout = async () => {
    try {
      await auth.logout();
      navigate("/login"); // Redirige al login después de cerrar sesión
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="acces-container" style={{width: '100%', height: '85vh'}}>
      <h1>Welcome, {displayName}!</h1>
      <p>Here you can view your profile and other details.</p>
      <button onClick={handleLogout}>Logout</button>
      <World/>
    </div>
  );
};

export default Acces;
