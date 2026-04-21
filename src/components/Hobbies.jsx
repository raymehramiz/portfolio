import useInView from '../hooks/useInView'
import { HOBBIES } from '../data/content'

export default function Hobbies() {
  const [ref, visible] = useInView()

  return (
    <section id="hobbies" ref={ref} className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider text-center">BEYOND CODE</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Hobbies & Interests</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HOBBIES.map((hobby, i) => (
            <div
              key={hobby.name}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${i * 0.1}s`,
              }}
            >
              <span className="text-4xl mb-3 block">{hobby.emoji}</span>
              <h3 className="text-white font-medium mb-1">{hobby.name}</h3>
              <p className="text-slate-500 text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
