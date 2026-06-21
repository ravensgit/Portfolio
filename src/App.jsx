import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Arsenal from './components/Arsenal'
import Missions from './components/Missions'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative bg-[#07070a]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Arsenal />
      <Missions />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
