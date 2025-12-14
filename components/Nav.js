export default function Nav() {
  return (
    <nav className="w-full border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex gap-6 text-slate-700">
        <a href="/" className="font-semibold text-slate-900">
          Dr. Sushant
        </a>
        <a href="/projects" className="hover:text-slate-900">
          Projects
        </a>
        <a href="/contact" className="hover:text-slate-900">
          Contact
        </a>
      </div>
    </nav>
  )
}
