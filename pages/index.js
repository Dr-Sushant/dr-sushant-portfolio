import Head from "next/head"
import Nav from "../components/Nav"


export default function Home() {
  return (
   <>
<Head>
  <title>Dr. Sushant | Biomedical Data Science</title>

  <link rel="canonical" href="https://steth2tech.com" />

  <meta
    name="google-site-verification"
    content="EOBVgmoShLRMlM5vHr0TvOH_W6mJfxtvKoUHESK6hFU"
  />
</Head>
    <Nav />



    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Dr. Sushant
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          Biomedical Data Scientist · Clinical AI · Imaging Informatics
        </p>

        <p className="mt-6 text-lg text-slate-700 max-w-3xl">
  <strong>Steth2Tech</strong> is a personal clinical AI and biomedical data science
  portfolio by <strong>Dr. Sushant</strong>, a physician-trained data scientist
  working at the intersection of medical imaging, clinical NLP, and decision
  support systems. The platform showcases applied projects, case studies, and
  research-driven implementations focused on translating clinically grounded
  machine learning models into real-world healthcare workflows.
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
