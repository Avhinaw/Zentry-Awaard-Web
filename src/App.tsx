import About from "./Components/About"
import Hero from "./Components/Hero"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  )
}

export default App