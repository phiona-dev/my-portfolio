import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

const App = () => {
  return (
    <div className="bg-[FAF7F5] min-h-screen font-sans text-stone-800">
      <Navbar/>
      <main>
        <Hero/>
        <Projects />
      </main>
      
    </div>
  )
}

export default App