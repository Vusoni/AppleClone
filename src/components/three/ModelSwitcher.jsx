// This component will be responsible for rendering products, detecting the size, animating transition between models using gsap and presentationControls in order to allow users integrate with models

// Imports
import { useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import gsap from 'gsap';

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import {useGSAP} from "@gsap/react";

// Define Animation
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5; // How far will model move after hidden screen


// Accept Props
const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if(!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

      // Define both macbook (items)
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    // UseGSAP - Custom hook that allow me to work better with gsap, slide and show another model when user decide to pick 14" instead of 16" 
    useGSAP(() => {
        if(showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);
        }
    }, [scale])

    const controlsConfig = {
    snap: true, // Always will get back to default position after reload
    zoom: 1,
    speed: 1,
    polar: [-Math.PI, Math.PI], // Allow user to see the model from bottom and up
    azimuth: [-Infinity, Infinity], // User can spin model as much as he like
    config: {mass: 1, tension: 0, friction: 26}, // Replicate real world physic

  }

    return (
        <>
        {/* Render Larger MacBook (item) */}
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                  {/* First size is on mobile and the second on desktop (0.08) */}
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            {/* Render Smaller MacBook (item) */}
            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
