import { MapControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import Particle from "./3D";

const World = () => {
    const cameraSettings = {
        position: [0,0,25],
        fov: 30
    };

    return (
        <>
        <Canvas camera={cameraSettings} shadows>
            <Particle/>
            <MapControls enableRotate={true} enablePan={false} enableZoom={true} />
        </Canvas>
        </>
    );
};

export default World;