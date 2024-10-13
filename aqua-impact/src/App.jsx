import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/login"; // Asegúrate de que el nombre del archivo y componente sean correctos
import Acces from "./pages/acces";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/acces" element={<Acces />} />
          <Route path="/" element={<LoginRegister />} /> {/* Ruta por defecto */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
