import Head from "next/head"
import Nav from "../components/Nav"


export default function Home() {
  return (
   <>
    <Nav />
<Head>
  <title>Dr. Sushant | Biomedical Data Science</title>
</Head>

    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Dr. Sushant
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          Biomedical Data Scientist · Clinical AI · Imaging Informatics
        </p>

        <p className="mt-8 text-lg text-slate-700 max-w-3xl">
          Physician-trained data scientist building clinically grounded AI systems
          across medical imaging, risk stratification, and decision support.
          Focused on translating research-grade models into deployable,
          interpretable workflows for real-world healthcare.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
   </>
  )
}
