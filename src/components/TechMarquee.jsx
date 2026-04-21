import useInView from '../hooks/useInView'
import { TECH_ROW_1, TECH_ROW_2 } from '../data/content'

function MarqueeRow({ techs, direction }) {
  const doubled = [...techs, ...techs]
  return (
    <div className="overflow-hidden py-4">
      <div className={direction === 'left' ? 'marquee-left' : 'marquee-right'} style={{ display: 'flex', width: 'max-content' }}>
        {doubled.map((t, i) => (
          <div key={`${t.name}-${i}`} className="flex flex-col items-center mx-6 md:mx-8 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center p-3 group-hover:border-indigo-500/50 group-hover:bg-slate-800 transition-all duration-300">
              <img src={t.icon} alt={t.name} className="w-full h-full" loading="lazy" />
            </div>
            <span className="text-xs text-slate-500 mt-2 group-hover:text-indigo-400 transition-colors">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechMarquee() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" ref={ref} className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider text-center">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Technologies I've Used</h2>
      </div>
      <div className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <MarqueeRow techs={TECH_ROW_1} direction="left" />
        <MarqueeRow techs={TECH_ROW_2} direction="right" />
      </div>
    </section>
  )
}
