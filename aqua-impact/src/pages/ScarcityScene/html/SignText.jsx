import { Html } from "@react-three/drei";
import "./SignText.css"

const SignText = () => {
    return (
        <Html
        center
        transform
        occlude
        distanceFactor={15}
        position={[0,27,.2]}
        >
            <h1 className="sign-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
        </Html>
    )

}

export default SignText;