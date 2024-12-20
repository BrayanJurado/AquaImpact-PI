import { OrbitControls, Text } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "../../components/Navbar";
import { Canvas } from "@react-three/fiber";
import QuizLights from "./lights/quizLights";
import Waterdrop from "./models/Waterdrop";
import TrashBag from "./models/TrashBag";
import Bucket from "./models/Bucket";
import { Physics, RigidBody } from "@react-three/rapier";
import QuizStaging from "./staging/QuizStaging";
import ironMedal from "../../assets/images/medals/iron_medal.png";
import bronzeMedal from "../../assets/images/medals/bronze_medal.png";
import silverMedal from "../../assets/images/medals/silver_medal.png";
import goldMedal from "../../assets/images/medals/gold_medal.png";
import diamondMedal from "../../assets/images/medals/diamond_medal.png";

const getRandomPosition = (rangeX, fixedZ, height) => {
  return [
    Math.random() * rangeX - rangeX / 2, // Random x position
    height, // Fixed height for falling objects
    fixedZ, // Fixed z position
  ];
};

function EvaluationSection() {
  const cameraSettings = {
    position: [0, 5, 15],
  };

  const [score, setScore] = useState(0); // Score state
  const [waterDrops, setWaterDrops] = useState([]);
  const [trashBags, setTrashBags] = useState([]);
  const bucketRef = useRef();
  const goalRef = useRef();
  const dropCounter = useRef(0);
  const [timeLeft, setTimeLeft] = useState(70); // 60-second timer
  const [isGameOver, setIsGameOver] = useState(false); // Game over state

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsGameOver(true); // End the game when the timer reaches zero
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [timeLeft]);

  // Stop spawning when the game is over
  useEffect(() => {
    if (isGameOver) return;

    const spawnInterval = setInterval(() => {
      dropCounter.current++;

      // Spawn a waterdrop
      setWaterDrops((prev) => [
        ...prev,
        {
          id: Math.random(),
          position: getRandomPosition(10, 0, 10),
        },
      ]);

      // Spawn a trash bag after every 5 drops
      if (dropCounter.current >= 5) {
        setTrashBags((prev) => [
          ...prev,
          {
            id: Math.random(),
            position: getRandomPosition(10, 0, 10),
          },
        ]);
        dropCounter.current = 0;
      }
    }, 1500);

    return () => clearInterval(spawnInterval);
  }, [isGameOver]);

  // Keyboard movement for the bucket
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!bucketRef.current) return;

      const currentPosition = bucketRef.current.translation(); // Get the bucket's current position
      const step = 1; // Step size for movement
      const limit = 10; // Limit for movement along the x-axis

      if (event.key === "ArrowRight") {
        // Move bucket right
        const newX = Math.min(currentPosition.x + step, limit);
        bucketRef.current.setTranslation({
          x: newX,
          y: currentPosition.y,
          z: currentPosition.z,
        });
      }

      if (event.key === "ArrowLeft") {
        // Move bucket left
        const newX = Math.max(currentPosition.x - step, -limit);
        bucketRef.current.setTranslation({
          x: newX,
          y: currentPosition.y,
          z: currentPosition.z,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!goalRef.current) return;

      const currentPosition = goalRef.current.translation(); // Get the bucket's current position
      const step = 1; // Step size for movement
      const limit = 10; // Limit for movement along the x-axis

      if (event.key === "ArrowRight") {
        // Move bucket right
        const newX = Math.min(currentPosition.x + step, limit);
        goalRef.current.setTranslation({
          x: newX,
          y: currentPosition.y,
          z: currentPosition.z,
        });
      }

      if (event.key === "ArrowLeft") {
        // Move bucket left
        const newX = Math.max(currentPosition.x - step, -limit);
        goalRef.current.setTranslation({
          x: newX,
          y: currentPosition.y,
          z: currentPosition.z,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Remove waterdrop or trash bag from state
  const removeObject = (type, id) => {
    if (type === "drop") {
      setWaterDrops((prev) => prev.filter((drop) => drop.id !== id));
    } else if (type === "bag") {
      setTrashBags((prev) => prev.filter((bag) => bag.id !== id));
    }
  };

  // Medal image mapping
const medalImages = {
  "Iron Medal": ironMedal,
  "Bronze Medal": bronzeMedal,
  "Silver Medal": silverMedal,
  "Gold Medal": goldMedal,
  "Diamond Medal": diamondMedal,
};

// Function to determine the medal based on the score
const getMedal = (score) => {
  if (score < 1000) return "Iron Medal";
  if (score < 2000) return "Bronze Medal";
  if (score < 3000) return "Silver Medal";
  if (score < 4000) return "Gold Medal";
  return "Diamond Medal";
};

  return (
    <>
      <div>
        <Canvas
          style={{ position: "absolute", top: 0, left: 0 }}
          shadows
          camera={cameraSettings}
        >
          <Text
            // occlude
            // fontSize={1} // Tamaño del texto
            color="orange" // Color del texto
            // maxWidth={30} // Ancho máximo del texto
            // lineHeight={1} // Altura de las líneas
            // letterSpacing={0.1} // Espaciado entre letras
            position={[0, 8, 0]}
          >
            Puntaje: {score}, Tiempo restante: {timeLeft}
          </Text>
          <QuizLights />
          <QuizStaging />
          <Physics>
            {!isGameOver &&
              waterDrops.map((drop) => (
                <Waterdrop
                  key={drop.id}
                  position={drop.position}
                  onRemove={() => removeObject("drop", drop.id)}
                  onScore={(points) => setScore((prev) => prev + points)}
                />
              ))}
            {!isGameOver &&
              trashBags.map((bag) => (
                <TrashBag
                  key={bag.id}
                  position={bag.position}
                  onRemove={() => removeObject("bag", bag.id)}
                  onScore={(points) => setScore((prev) => prev + points)}
                />
              ))}
            <Bucket ref={bucketRef} position={[0, 1.5, 0]} />
            <RigidBody name="ground">
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[75, 75]} />
                <meshStandardMaterial color="yellow" />
              </mesh>
            </RigidBody>
            <RigidBody name="goal" ref={goalRef} mass={10}>
              <mesh position={[0, 2, 0]}>
                <boxGeometry args={[1.2, 2, 1.2]} />
                <meshStandardMaterial color="cyan" />
              </mesh>
            </RigidBody>
          </Physics>
          <OrbitControls
            enablePan={false}
            enableRotate={false}
            enableZoom={false}
          />
        </Canvas>
        {isGameOver && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              backgroundColor: "#175b9a",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              zIndex: 10,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
          >
            <h1>Felicitaciones!</h1>
            <p>Tu puntaje: {score}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: 0 }}>Ganaste una {getMedal(score)}!</p>
              <img
                src={medalImages[getMedal(score)]} // Get the medal image dynamically
                alt={getMedal(score)}
                style={{
                  marginLeft: "10px",
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "18px",
                color: "white",
                backgroundColor: "orange",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s, background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "darkorange")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "orange")}
              onClick={() => window.location.reload()} // Restart the game
            >
              Jugar de nuevo
            </button>
          </div>
        )}
        <Navbar />
        <section className="section-container"></section>
      </div>
    </>
  );
}

export default EvaluationSection;
