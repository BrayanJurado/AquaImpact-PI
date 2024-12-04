import { EffectComposer, HueSaturation } from "@react-three/postprocessing";

const PostProcessing = () => {
    return (
        <EffectComposer>
            <HueSaturation hue={-0.15} saturation={-0.3}/>
        </EffectComposer>
    )
}

export default PostProcessing;