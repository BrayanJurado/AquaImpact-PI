import { EffectComposer, Bloom, SMAA, Noise, GodRays } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";



const PostProcessing = () => {
    return (
        <EffectComposer>
            <Bloom intensity={0.5} luminanceThreshold={0.2} luminanceSmoothing={0.5} /> 
            {/* Efecto de luz */}
            <SMAA/>
            {/* Suavizado */}
            <Noise premultiply blendFunction={BlendFunction.ADD} /> 
            {/* Ruido para mejor agua */}

        </EffectComposer>
    )
}

export default PostProcessing;