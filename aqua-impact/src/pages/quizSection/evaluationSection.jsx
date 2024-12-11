import { OrbitControls } from "@react-three/drei";
import { Navbar } from "../../components/Navbar";
import { Canvas } from "@react-three/fiber";
import QuizLights from "./lights/quizLights";
import Waterdrop from "./models/Waterdrop";
import TrashBag from "./models/TrashBag";
import Bucket from "./models/Bucket";

function EvaluationSection() {
  const cameraSettings = {
    position: [6, 1.5, 0],
  };
  return (
    <div>
      <Canvas style={{ position: "absolute", top: 0, left: 0 }} shadows camera={cameraSettings}>
        <QuizLights/>
        <OrbitControls/>
        <Waterdrop/>
        <TrashBag/>
        <Bucket/>
        <mesh rotation={[-Math.PI/2, 0, 0]}>
          <planeGeometry args={[25,25]} />
          <meshStandardMaterial color="white"/>
        </mesh>
      </Canvas>
      <Navbar />
      <section className="section-container"></section>
    </div>
  );
}

export default EvaluationSection;
