import useInView from '../hooks/useInView'

export default function Contact() {
  const [ref, visible] = useInView()

  return (
    <section id="contact" ref={ref} className="py-20">
      <div
        className={`max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider">GET IN TOUCH</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-slate-400 mb-10">
          I'm currently looking for new opportunities. Whether you have a question, a project, or just want to say hi — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:mehramiz.ray@gmail.com"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors font-medium flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/mahbod-mehramiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-700 hover:border-indigo-500 rounded-xl transition-colors text-slate-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
