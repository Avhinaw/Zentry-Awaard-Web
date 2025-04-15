import About from "./Components/About"
import Features from "./Components/Features"
import Hero from "./Components/Hero"
import NavBar from "./Components/Navbar"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App