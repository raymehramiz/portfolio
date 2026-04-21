import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Timeline from './components/Timeline'
import ProjectShowcase from './components/ProjectShowcase'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Timeline />
      <ProjectShowcase />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  )
}
