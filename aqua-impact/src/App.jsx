import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/login"; 
import CardSlider from "./pages/menu";
import { AuthProvider } from "./context/AuthContext";
import "./App.css"
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/menu" element={<CardSlider />} />
          <Route path="/" element={<LoginRegister />} /> {/* Ruta por defecto */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
