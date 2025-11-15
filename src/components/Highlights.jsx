import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
<<<<<<< HEAD
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
=======
    // Checking for mobile screen
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    // Animations 
    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: { // Scroll Trigger 
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
<<<<<<< HEAD
            <h2>There’s never been a better time to upgrade.</h2>
            <h3>Here’s what you get with the new MacBook Pro.</h3>
=======
            <h2>Experience a new benchmark in professional computing.</h2>
            <h3>Here’s what the latest MacBook Pro delivers under the hood.</h3>
>>>>>>> a9677c0 (Initial commit: Apple Clone project)

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
<<<<<<< HEAD
                        <p>Fly through demanding tasks up to 9.8x faster.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>A stunning <br />
=======
                        <p>Cut through demanding workloads with precision — delivering up to 9.8× faster performance for intensive, pro-grade tasks.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>Experience a brilliant <br />
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
                            Liquid Retina XDR <br/>
                            display.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="AI" />
<<<<<<< HEAD
                        <p>Built for <br />
                            <span>Apple Intelligence.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p>Up to
                            <span className="green-gradient">{' '}14 more hours{' '}</span>
                            battery life.
                            <span className="text-dark-100">{' '}(Up to 24 hours total.)
=======
                        <p>Engineered for seamless performance with  <br />
                            <span>Apple Intelligence.</span></p>

                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p>Provides up to 
                            <span className="green-gradient">{' '}14 extra hours{' '}</span>
                            battery life.
                            <span className="text-dark-100 text-md">{' '}(reaching 24 hours total for uninterrupted productivity.)
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights
