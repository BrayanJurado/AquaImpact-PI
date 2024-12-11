import { OrbitControls } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "../../components/Navbar";
import { Canvas } from "@react-three/fiber";
import QuizLights from "./lights/quizLights";
import Waterdrop from "./models/Waterdrop";
import TrashBag from "./models/TrashBag";
import Bucket from "./models/Bucket";
import { Physics, RigidBody } from "@react-three/rapier";

const getRandomPosition = (rangeX, fixedZ, height) => {
  return [
    Math.random() * rangeX - rangeX / 2, // Random x position
    height, // Fixed height for falling objects
    fixedZ, // Fixed z position
  ];
};

function EvaluationSection() {
  const cameraSettings = {
    position: [0, 1.5, 15],
  };

  const [waterDrops, setWaterDrops] = useState([]);
  const [trashBags, setTrashBags] = useState([]);
  const bucketRef = useRef();
  const dropCounter = useRef(0); // Counter to track when to spawn a trash bag

  // Spawning drops and bags with a 1:5 ratio
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      dropCounter.current++;

      // Spawn a waterdrop
      setWaterDrops((prev) => [
        ...prev,
        { id: Math.random(), position: getRandomPosition(10, 0, 10) },
      ]);

      // Spawn a trash bag after every 5 drops
      if (dropCounter.current >= 5) {
        setTrashBags((prev) => [
          ...prev,
          { id: Math.random(), position: getRandomPosition(10, 0, 10) },
        ]);
        dropCounter.current = 0; // Reset the counter
      }
    }, 5000); // Spawn every second

    return () => clearInterval(spawnInterval);
  }, []);

  // Bucket movement with arrow keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!bucketRef.current) return;

      const currentPosition = bucketRef.current.translation(); // Get the current position
      const step = .5; // Step size for movement
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

  return (
    <div>
      <Canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        shadows
        camera={cameraSettings}
      >
        <QuizLights />
        <Physics>
          {waterDrops.map((drop) => (
            <Waterdrop key={drop.id} position={drop.position} />
          ))}
          {trashBags.map((bag) => (
            <TrashBag key={bag.id} position={bag.position} />
          ))}
          <Bucket ref={bucketRef} position={[0, 0, 0]} />
          <RigidBody>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[25, 25]} />
              <meshStandardMaterial color="white" />
            </mesh>
          </RigidBody>
        </Physics>
        <OrbitControls enablePan={false} enableRotate={true} />
      </Canvas>
      <Navbar />
      <section className="section-container"></section>
    </div>
  );
}

export default EvaluationSection;
