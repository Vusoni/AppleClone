import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {

  // isTablet from react response package to figure out which device user load the application
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    // GSAP in order to check if user is not in a table
    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({ 
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline // Call to new created timeline 
                .to('.mask img', { 
                   // Modifiers
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])


    return (
        <section id="showcase">
            <div className="media">
              {/* This allow me to render a video in loop */}
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />

                {/* Overlapping image */}
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                      {/* Product Title */}
                        <h2>Newest Chip</h2>

                        {/* Product Description */}
                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
<<<<<<< HEAD
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
=======
                                    M4, the next generation of Apple.
                                </span>
                                          Engineered to deliver unparalleled speed and efficiency.
                            </p>
                            <p>
                                M4 drives Apple Intelligence on iPad Pro, empowering you to write, create, and accomplish more than ever before. All within a design that’s astonishingly thin, lightweight, and powerful.
                            </p>
                            <p>
                                Experience a brand-new display engine that delivers breathtaking precision, vivid color accuracy, and brilliant brightness. Combined with a next-gen GPU featuring hardware-accelerated ray tracing, M4 brings console-level graphics directly to your fingertips.
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
                            </p>
                            <p className="text-primary">Learn more about Apple Intelligence</p>
                        </div>
                    </div>

                    {/* Product Features */}
                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
<<<<<<< HEAD
                            <p>Better</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Bett</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
=======
                            <p>Rendering Performance</p>
                            <h3>4x faster</h3>
                            <p>Professional rendering performance compared to M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>CPU Performance</p>
                            <h3>1.5x faster</h3>
                            <p>Advanced CPU speed for demanding applications</p>
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
