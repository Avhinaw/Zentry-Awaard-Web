import About from "./Components/About"
import Hero from "./Components/Hero"
import NavBar from "./Components/Navbar"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
    </main>
  )
}

export default App