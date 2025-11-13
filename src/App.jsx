import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"

// Gsap - Animate screen etc.
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

// Register gsap to work with 3d models animations
gsap.registerPlugin(ScrollTrigger)

const App = () => {

  return (
    <main>
      <Navbar />    
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App
