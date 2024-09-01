import FormsFirebase from "./components/login";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <FormsFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;