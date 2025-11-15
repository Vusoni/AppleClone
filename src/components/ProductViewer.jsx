// // Some of the classNames comes from index.css

// import clsx from "clsx"
// import useAppleStore from "../store"
// import { Canvas } from "@react-three/fiber"

// const ProductViewer = () => {

//   const {color, scale, setColor, setScale} = useAppleStore()

//   return (
//     <section id="productViewer">
//         <h2>Discover new features!</h2>

//         <div className="controls">
//           <p className="info">MacBook Pro {scale} {color}</p>

//           <div className="flex-center mt-5 gap-5">
//             <div className="color-control">
              
//               <div onClick={() => setColor('#adb5bd')} className={clsx('bg-neutral-300', color ==="#adb5bd" && 'active')}/> 

//               <div onClick={() => setColor('#2e2c2e')} className={clsx('bg-neutral-900', color ==="#2e2c2e" && 'active')}/> 
//             </div>

//           <div className="size-control">
//             <div onClick={() => setScale(0.06)} className={clsx(scale === 0.06 ? 'bg-whtie text-black' : "bg-transparent text-white")}> 
//               <p>14" Inches</p>  
//             </div>
          
//             <div onClick={() => setScale(0.08)} className={clsx(scale === 0.08 ? 'bg-whtie text-black' : "bg-transparent text-white")}> 
//               <p>16" Inches</p>  
//             </div>
//           </div>
//           </div>
//         </div>

//         {/* Render Canvas (3d model) - Zustand */}
//         <Canvas  id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far:100}}>
//           <Box postion={[0, 0, 0]} scale={10 * scale} material-color={color} />
//         </Canvas>
//     </section>
//   )
// }

// export default ProductViewer



import clsx from "clsx";
import useAppleStore from "../store";

// 3d Models 
import {Canvas} from "@react-three/fiber";
import {Box, OrbitControls} from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14.jsx";

// Packages that allow me to work with 3d models
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from './three/ModelSwitcher.jsx'
import {useMediaQuery} from "react-responsive";

const ProductViewer = () => {
    // Destructure zustand Store 
    const { color, scale, setColor, setScale } = useAppleStore();

    // Check mobile 
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});

    return (
<<<<<<< HEAD
        <section id="productViewer">
            <h2>Discover New Products.</h2>
=======
        <section id="productViewer" >
            <h2 className="pb-40">Experience the Future of Premium Products.</h2>
>>>>>>> a9677c0 (Initial commit: Apple Clone project)

            <div className="controls">
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                      
                      {/* This comes from Zustand Store */}
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                        />
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
                    </div>

                    <div className="size-control"> 
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render Canvas (3d model) - Zustand */}
            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights />

                {/* Render MacBook 3d Model - First convert into react component (cd models -> npx gltfjsx macbook-14.gib -T*/}
                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
        </section>
    )
}
export default ProductViewer
