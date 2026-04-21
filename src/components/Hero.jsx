export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 pulse-glow">
          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
            <img src="/headshot.jpg" alt="Mahbod Mehramiz" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="text-indigo-400 font-mono text-sm mb-4 tracking-wider">HELLO, I'M</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          Mahbod Mehramiz
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8">
          Software Engineer · AI/ML Engineer · Solutions Engineer
        </p>
        <p className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable systems and intelligent applications. From backend architectures to deep learning models,
          I turn complex problems into elegant, production-ready solutions.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors font-medium">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-indigo-500 rounded-lg transition-colors text-slate-300">
            Get In Touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
