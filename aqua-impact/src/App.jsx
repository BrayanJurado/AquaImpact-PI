import FormsFirebase from "./components/login";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <h1>AquaImpact</h1>
        <FormsFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;