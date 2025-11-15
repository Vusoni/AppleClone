// This component allow me to create dynamic animation while scrolling, many graphics will reveal one product
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index.js";
import {useMediaQuery} from "react-responsive";

const Performance = () => {
    // Use Installed Packages
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);

    // GSAP - 
    useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;

            // Text Animation
            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    scrollTrigger: { // Scroll Trigger for animation while scrolling 
                        trigger: ".content p",
                        start: "top bottom",
                        end: "top center", // Stop animation if product have reveal
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // "Don't apply any further animation if it's a mobile screen."
            if (isMobile) return;

            // Image Positioning Timeline
            const tl = gsap.timeline({
                defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    invalidateOnRefresh: true, // GSAP will recalculate g points whenever screen refresh
                },
            });

            // Position Each Performance Image
            performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return; // this property id position comes from constants - index.js file 

                const selector = `.${item.id}`;
                const vars = {};

                if (typeof item.left === "number") vars.left = `${item.left}%`;
                if (typeof item.right === "number") vars.right = `${item.right}%`;
                if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                tl.to(selector, vars, 0);
            });
        },
        // Scope & Dependecies 
        { scope: sectionRef, dependencies: [isMobile] } // Limite GSAP queries to only this component and recalculate mobile postiion
    );


    // User Interface
    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance. Game on.</h2>

             <div className="wrapper">
                {/* Map over performance Images */}
                {performanceImages.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        className={item.id}
                        alt={item.alt || `Performance Image #${index + 1}`}
                    />
                ))}
             </div>

            <div className="content">
                <p>
<<<<<<< HEAD
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
=======
                    Take your creativity and gaming to the next level with unparalleled responsiveness. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine, rendering complex images faster than ever before.{" "}
                    <span className="text-white">
            Gaming and graphics workflows feel immersive, fluid, and lifelike.
          </span>{" "}
                    Dynamic Caching further optimizes on-chip memory to maximize GPU utilization, delivering a dramatic performance boost for the most demanding professional apps and next-gen games. Experience visuals and speed that keep up with your imagination.
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
                </p>
            </div>
        </section>
    )
}
export default Performance
