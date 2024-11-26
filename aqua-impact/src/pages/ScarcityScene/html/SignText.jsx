import { Html, Text } from "@react-three/drei";
import { useState, useEffect } from "react";
import "./SignText.css";

const SignText = () => {
  const texts = [
    "Imagina un día entero sin agua potable. Cada gota en tu hogar está racionada; no puedes lavar, cocinar ni beber como lo haces ahora. Esta es la realidad diaria para millones de personas en regiones afectadas por la sequía. (1/5)",
    "En una comunidad de África subsahariana, cada mujer y niña camina más de 6 kilómetros al día para recolectar agua. Esta tarea les impide estudiar, trabajar y mejorar sus condiciones de vida. (2/5)",
    "La sobreexplotación de acuíferos está vaciando reservas de agua subterránea que tardaron miles de años en formarse. Hoy las usamos como si fueran infinitas, dejando tierras fértiles convertidas en desiertos.  (3/5)  ",
    "La sequía obligó a agricultores de todo el mundo a abandonar sus tierras. Cada año, 12 millones de hectáreas se convierten en desierto, y cada hectárea perdida es una fuente menos de alimentos y agua para todos. (4/5)",
    "En zonas urbanas, la demanda de agua crece sin freno. Se proyecta que para el 2050, dos tercios de la población mundial enfrentarán estrés hídrico severo, con agua racionada y severas limitaciones en su consumo. (5/5)",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para manejar el cambio de texto
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    } else if (event.key === "ArrowLeft") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Html
        center
        transform
        occlude
        distanceFactor={15}
        position={[0, 27, 50.2]}
      >
        <h1 className="sign-text">{texts[currentIndex]}</h1>
      </Html>
      <Text
        occlude
        fontSize={1} // Tamaño del texto
        color="#ffffff" // Color del texto
        maxWidth={30} // Ancho máximo del texto
        lineHeight={1} // Altura de las líneas
        letterSpacing={0.1} // Espaciado entre letras
        position={[0, 42, 50.2]}
      >
        Usa las flechas de tu teclado para seguir leyendo
      </Text>
    </>
  );
};

export default SignText;
