import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/login";
import CardSlider from "./pages/menu";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import PollutionSection from './pages/pollutionSection';
import ScarcitySection from './pages/scarcitySection';
import AcidificationSection from './pages/acidificationSection';
import EvaluationSection from './pages/quizSection/evaluationSection';
import IndexPol from './pages/indexPol'; 
import Causes from './pages/causesPol'; 
import ContScene from './pages/ContaminationScene/ContScene'; 
import ScarScene from "./pages/ScarcityScene/ScarScene"; 
import AcidScene from './pages/AcidificationScene/AcidScene';
import CausesAcid from "./pages/causesAcid";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/scarScene" element={<ScarScene />} />
          <Route path="/contScene" element={<ContScene />} />
          <Route path="/acidScene" element={<AcidScene />} /> 
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/menu" element={<CardSlider />} />
          <Route path="/" element={<LoginRegister />} />  {/* Ruta por defecto */}
          <Route path="/pollution" element={<PollutionSection />} />
          <Route path="/scarcity" element={<ScarcitySection />} />
          <Route path="/acidification" element={<AcidificationSection />} />
          <Route path="/evaluation" element={<EvaluationSection />} />
          <Route path="/indexPollution" element={<IndexPol />} /> 
          <Route path="/causesPollution" element={<Causes />} /> {/* Ruta de Causes */}
          <Route path="/causesAcid" element={<CausesAcid />} /> 
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
