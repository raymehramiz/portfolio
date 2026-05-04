import { useState } from 'react'
import useInView from '../hooks/useInView'

function GhostJobDetector({ visible }) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
        {/* Video / Demo area */}
        <div className="relative aspect-video bg-slate-950 flex items-center justify-center cursor-pointer group"
          onClick={() => setShowVideo(true)}
        >
          {showVideo ? (
            <video
              className="w-full h-full"
              controls
              autoPlay
              src="/demo-video.mp4"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600/40 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-indigo-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">Click to play demo video</p>
              </div>
            </>
          )}
        </div>

        {/* Project info */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4">AI Ghost Job Detector</h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Python', 'PyTorch', 'SBERT', 'FastAPI', 'RAG', 'Claude API', 'scikit-learn', 'NLP', 'Pandas', 'React'].map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">
            An end-to-end ML system that detects fraudulent "ghost" job postings, powered by a
            <span className="text-indigo-400 font-semibold"> FastAPI backend</span> serving predictions,
            managing duplicate detection, and delivering human-readable explanations via
            <span className="text-indigo-400 font-semibold"> RAG-augmented Claude Haiku</span> calls
            grounded in real data from <span className="text-indigo-400 font-semibold">52,000+ job postings</span>.
            Achieves <span className="text-indigo-400 font-semibold">over 90% accuracy</span> by combining
            structured signals with NLP-based semantic features.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-indigo-400">52K+</p>
              <p className="text-slate-500 text-sm">Job Postings Analyzed</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-indigo-400">90%+</p>
              <p className="text-slate-500 text-sm">Classification Accuracy</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-indigo-400">E2E</p>
              <p className="text-slate-500 text-sm">Full ML Pipeline</p>
            </div>
          </div>

          <h4 className="text-white font-semibold mb-3">Key Highlights</h4>
          <div className="space-y-2 text-sm text-slate-400">
            <p>→ RAG-powered explanations using Claude Haiku, grounded in patterns from 52K real job postings</p>
            <p>→ FastAPI backend serving predictions, deduplication via persistent DB, and fallback template explanations when tokens are unavailable</p>
            <p>→ Hybrid feature system combining structured signals and SBERT semantic embeddings</p>
            <p>→ Custom web-based labeling interface for human-in-the-loop annotation</p>
            <p>→ Scalable framework for identifying templated, evergreen, and low-quality postings</p>
          </div>

          <h4 className="text-white font-semibold mt-6 mb-3">Next Steps</h4>
          <div className="space-y-2 text-sm text-slate-400">
            <p>→ User authentication with 5 free explanations per signup to demo the tool</p>
            <p>→ Improving label quality through expanded human labeling efforts</p>
            <p>→ Paid tier via Stripe for unlimited explanation generation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductivityTools({ visible }) {
  return (
    <div
      className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
        {/* Thumbnail */}
        <a
          href="https://productivity.heyitsmahbod.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-video bg-slate-950 overflow-hidden group"
        >
          <img
            src="/productivity-thumb.png"
            alt="Productivity Tools Suite"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-4 py-2 bg-indigo-600/90 rounded-lg text-sm font-medium">Visit Live Site →</span>
          </div>
        </a>

        {/* Project info */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Productivity Tools Suite</h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {['React', 'JavaScript', 'CSS', 'Local Storage', 'Web APIs'].map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">
            A collection of focused productivity tools built for daily use. Features a
            <span className="text-indigo-400 font-semibold"> Pomodoro Timer</span> with focus, short break,
            and long break modes, alongside a
            <span className="text-indigo-400 font-semibold"> Speed Reader</span> with library management,
            collections, import/export, and adjustable reading speed.
          </p>

          <h4 className="text-white font-semibold mb-3">Key Features</h4>
          <div className="space-y-2 text-sm text-slate-400">
            <p>→ Pomodoro timer with configurable focus/break intervals and audio notifications</p>
            <p>→ Speed reader with adjustable WPM, library persistence, and collection organization</p>
            <p>→ Clean, minimal UI designed for distraction-free productivity</p>
          </div>

          <div className="mt-6">
            <a
              href="https://productivity.heyitsmahbod.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors"
            >
              Visit Live Site →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectShowcase() {
  const [ref, visible] = useInView()

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider text-center">WHAT I'VE BUILT</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Projects</h2>

        <div className="space-y-12">
          <GhostJobDetector visible={visible} />
          <ProductivityTools visible={visible} />
        </div>
      </div>
    </section>
  )
}
