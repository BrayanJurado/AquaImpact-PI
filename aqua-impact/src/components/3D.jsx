import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import useParticleStore from "../store/use-particle-store.js";


const Particle = ()=>{
    const particleRef1 = useRef();
    const particleRef2 = useRef();
    const {setParticleTransforms} = useParticleStore();
    const lightRef1 = useRef();
    const lightRef2 = useRef();
    const GlassRef = useRef();


    useFrame(({clock}) => {
        
        setParticleTransforms({
            position: particleRef1.current.position,
            rotation: particleRef1.current.rotation,
            scale: particleRef1.current.scale,

            position: particleRef2.current.position,
            rotation: particleRef2.current.rotation,
            scale: particleRef2.current.scale,
        })
        const t = clock.getElapsedTime() * 1;
        const x1 = Math.sin(t) * 3;
        const y1 = Math.cos(3 * t) * 1;

        const x2 = -Math.sin(t) * 3;
        const y2 = -Math.cos(3 * t) * 1;

        particleRef1.current.position.set(x1,y1,1);
        lightRef1.current.position.set(x1, y1, 1);
        lightRef1.current.intensity = Math.abs(Math.sin(t)) * 5;


        particleRef2.current.position.set(x2,y2,1);
        lightRef2.current.position.set(x2, y2, 1);
        lightRef2.current.intensity = Math.abs(Math.sin(t)) * 2;

        GlassRef.current.rotation.x = t;
        GlassRef.current.rotation.y = t;
    });


    return (
        <group>
        <mesh name="particle-1" 
        ref={particleRef1} castShadow receiveShadow
        >
            <sphereGeometry args={[1,32,32]}/>
            <meshToonMaterial  color={"#68F0E7"} />
        </mesh>

        <mesh name="particle-2" 
        ref={particleRef2} castShadow receiveShadow
        >
            <sphereGeometry args={[1,32,32]}/>
            <meshToonMaterial  color={"#F09567"} />
        </mesh>
        
        <mesh name="glass" ref={GlassRef} position={[0,0,1]}>

            <icosahedronGeometry args={[5]}/>
            <meshPhysicalMaterial 
            color={"#eaeaea"}
            transparent={true}
            opacity={0.4}
            roughness={0}
            reflectivity={1.5}
            transmission={1}
            thickness={0.3}
            envMapIntensity={1}
            />

        </mesh>

        <directionalLight ref={lightRef1}  color={"green"}  castShadow/>
        <directionalLight ref={lightRef2}  color={"yellow"}  castShadow/>
        <ambientLight intensity={1.5}/>

    
       
        </group>
    )
}

export default Particle;