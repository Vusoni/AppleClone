import { useEffect, useRef } from "react"

const Hero = () => {
  const videoRef = useRef() // Allows me later to work with useEffect()

  useEffect(() => {
    if(videoRef.current) videoRef.current.playBackRate = 2
  }, [])

  return (
    <section id="hero">
        <div>
<<<<<<< HEAD
          <h1>MacBook Pro</h1>
=======
          <h1>MacBook Presentation.</h1>
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
          <img src="/title.png" alt="Hero Product Title" />
        </div>

        {/* Hero Video Element */}
        <video src="/videos/hero.mp4" autoPlay muted playsInline />

        {/* Product Description */}
        <button>Buy</button>
<<<<<<< HEAD
        <p>Last price From $1999 or $149/mo for 12 months</p>
=======
        <button>Add to cart</button>
        <p className="text-sm text-gray-400">Last chance to own this premium product — starting at $1,999, or just $149/month for 12 months.</p>
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
    </section>
  )
}

export default Hero
