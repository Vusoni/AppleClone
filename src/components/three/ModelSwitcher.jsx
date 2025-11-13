// This component will be responsible for rendering products, detecting the size, animating transition between models using gsap and presentationControls in order to allow users integrate with models


import { PresentationControls } from '@react-three/drei';
import { useRef } from 'react'
import { MacbookModel16 } from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';
import gsap from 'gsap-trial';
import { useGSAP } from '@gsap/react';



// Define Animation
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5; // How far will model move after hidden screen

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

  gsap.to(group.position, { x, duration: ANIMATION_DURATION})
}

// Accept props
const ModelSwitcher = ({ scale, isMobile}) => { 



  // UseGSAP - Custom hook that allow me to work better with gsap, slide and show another model when user decide to pick 14" instead of 16" 
useGSAP(() => {
  if(showLargeMacBook) {
  moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
  moveGroup(largeMacBookRef.current, 0)

  fadeMeshes(smallMacBookRef.current, 0)
  fadeMeshes(largeMacBookRef.current, 1)
  } else {
    moveGroup(smallMacBookRef.current, 0);
  moveGroup(largeMacBookRef.current, -OFFSET_DISTANCE)

  fadeMeshes(smallMacBookRef.current, 1)
  fadeMeshes(largeMacBookRef.current, 0)
  }
}, [scale]) 



  // Define both macbook (items)
  const largeMacBookRef = useRef();
  const smallMacBookRef = useRef();

  // const showLargeMacBook = scale === 0.08 || scale === 0.05;


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
        <group ref={largeMacBookRef}>
          {/* First size is on mobile and the second on desktop (0.08) */}
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} /> 
        </group>
      </PresentationControls>
      
      {/* Render Smaller MacBook (item) */}
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>

    </>
  )
}

export default ModelSwitcher
