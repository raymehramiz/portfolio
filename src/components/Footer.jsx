export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Mahbod Mehramiz. Built with React + Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
