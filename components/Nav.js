
export default function Nav() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-700">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center gap-x-8 gap-y-3">
        <a
          href="/"
          className="font-semibold text-white hover:text-slate-200 transition"
        >
          Dr. Sushant
        </a>

        <a
          href="/projects"
          className="font-medium text-slate-200 hover:text-white transition"
        >
          Projects
        </a>

        <a
          href="/contact"
          className="font-medium text-slate-200 hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
