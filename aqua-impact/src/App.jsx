import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/login"; 
import CardSlider from "./pages/menu";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import PollutionSection from './pages/pollutionSection';
import ScarcitySection from './pages/scarcitySection';
import AcidificationSection from './pages/acidificationSection';
import EvaluationSection from './pages/evaluationSection';
import IndexPol from './pages/indexPol'; 
import Causes from './pages/causesPol'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/menu" element={<CardSlider />} />
          <Route path="/" element={<LoginRegister />} /> {/* Ruta por defecto */}
          <Route path="/pollution" element={<PollutionSection />} />
          <Route path="/scarcity" element={<ScarcitySection />} />
          <Route path="/acidification" element={<AcidificationSection />} />
          <Route path="/evaluation" element={<EvaluationSection />} />
          <Route path="/indexPollution" element={<IndexPol />} /> 
          <Route path="/causesPollution" element={<Causes />} /> 
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
