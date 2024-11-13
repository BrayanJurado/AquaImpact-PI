import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";

const CameraControls = ({ controls }) => {
    const { camera } = useThree();  // Obtenemos la cámara desde el contexto de Three.js
    const [moveSpeed] = useState(5); // Velocidad de movimiento
    const [target, setTarget] = useState(camera.position); // Estado para el target de la cámara
  
    const handleKeyDown = (event) => {
      if (!controls.current) return;
  
      // Clonamos la posición actual de la cámara
      const newCameraPosition = camera.position.clone();
      const newTarget = target.clone();
  
      switch (event.key) {
        case "w":
          newCameraPosition.y += moveSpeed; // Mover la cámara hacia arriba
          newTarget.y += moveSpeed; // Ajustar el foco también
          break;
        case "s":
          newCameraPosition.y -= moveSpeed; // Mover la cámara hacia abajo
          newTarget.y -= moveSpeed; // Ajustar el foco también
          break;
        case "a":
          newCameraPosition.x -= moveSpeed; // Mover la cámara hacia la izquierda
          newTarget.x -= moveSpeed; // Ajustar el foco también
          break;
        case "d":
          newCameraPosition.x += moveSpeed; // Mover la cámara hacia la derecha
          newTarget.x += moveSpeed; // Ajustar el foco también
          break;
        default:
          return;
      }
  
      // Actualizamos la posición de la cámara y el target
      camera.position.copy(newCameraPosition);
      setTarget(newTarget); // Actualizamos el target para que la cámara lo siga
  
      controls.current.update(); // Actualizamos los controles para reflejar el cambio
    };
  
    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [target]);
  
    return null;
  };

  export default CameraControls