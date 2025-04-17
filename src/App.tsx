import About from "./Components/About"
import Contact from "./Components/Contact"
import Features from "./Components/Features"
import Hero from "./Components/Hero"
import NavBar from "./Components/Navbar"
import FloatingImage from "./Components/Story"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
    </main>
  )
}

export default App