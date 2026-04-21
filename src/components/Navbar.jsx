import { useState, useEffect } from 'react'

const LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Hobbies', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Mahbod's Portfolio Page
        </a>
        <div className="hidden md:flex gap-6">
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
