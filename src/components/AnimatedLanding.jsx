import { Canvas } from "@react-three/fiber";
import './landing.css'
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

function AnimatedLanding() {
    return (
        <div className="w-full h-[600px] animated-landing-container">
            <Canvas camera={{ fov: 7, position: [0, -10, 220] }}>
                <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr"]} />
                <ScrollControls pages={3} damping={0.1}>
                    <MacContainer />
                </ScrollControls>
            </Canvas>
        </div>
    )
}

export default AnimatedLanding;