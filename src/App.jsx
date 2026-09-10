import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

const App = () => {
  return (
    <div className="bg-[FAF7F5] min-h-screen font-sans text-stone-800">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects />
        <Contact />
        <Footer/>
      </main>
      
    </div>
  )
}

export default App