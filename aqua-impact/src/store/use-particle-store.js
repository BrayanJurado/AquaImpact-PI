import { Vector3 } from "three";
import { create } from "zustand";

const useParticleStore = create((set)=> ({
    transformsParticle: {
        position: new Vector3(),
        rotation: new Vector3(),
        scale: new Vector3(),
    },

    setParticleTransforms: (newTransformsParticle) =>
        set((state)=> ({
            transformsParticle: {
                ...state.transformsParticle, //Spread
                ...newTransformsParticle,
            },
        })),
}));

export default useParticleStore;