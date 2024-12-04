import { Html, useProgress } from "@react-three/drei";

// Componente para la animación de carga
const Loader = () => {
  const { progress } = useProgress(); // Progreso de carga en porcentaje

  return (
    <Html center>
      <div style={{ textAlign: "center", color: "#ffffff" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "5px solid #205a8e",
            borderTop: "5px solid #ffffff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto",
          }}
        />
        <p style={{ marginTop: "10px" }}>{Math.round(progress)}%</p>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  );
};

export default Loader;