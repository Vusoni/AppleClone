import { useEffect, useRef } from "react"

const Hero = () => {
  const videoRef = useRef() // Allows me later to work with useEffect()

  useEffect(() => {
    if(videoRef.current) videoRef.current.playBackRate = 2
  }, [])

  return (
    <section id="hero">
        <div>
          <h1>MacBook Pro</h1>
          <img src="/title.png" alt="Hero Product Title" />
        </div>

        {/* Hero Video Element */}
        <video src="/videos/hero.mp4" autoPlay muted playsInline />

        {/* Product Description */}
        <button>Buy</button>
        <p>Last price From $1999 or $149/mo for 12 months</p>
    </section>
  )
}

export default Hero
