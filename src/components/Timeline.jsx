import useInView from '../hooks/useInView'
import { TIMELINE } from '../data/content'

export default function Timeline() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider text-center">MY JOURNEY</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Education & Experience</h2>

        <div className="relative">
          {/* Animated center line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-800">
            <div
              className="w-full bg-gradient-to-b from-indigo-500 to-purple-500 transition-all duration-[2s] ease-out"
              style={{ height: visible ? '100%' : '0%' }}
            />
          </div>

          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${i * 0.3}s`,
              }}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-[#0a0a0f] z-10 mt-6" />

              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-0 md:pl-0' : 'md:ml-auto'}`}>
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    item.type === 'education'
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'bg-indigo-500/20 text-indigo-300'
                  }`}>
                    {item.type === 'education' ? '🎓 Education' : '💼 Work'}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-indigo-400 text-sm font-medium">{item.org}</p>
                  <p className="text-slate-500 text-sm mt-1 font-mono">{item.date}</p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
