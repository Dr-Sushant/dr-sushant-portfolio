
import Head from "next/head"
import Nav from "../components/Nav"

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Sushant | Clinical AI &amp; Systems</title>

        <meta
          name="description"
          content="Steth2Tech showcases physician-engineered clinical AI, biomedical data science, model evaluation, and healthcare systems projects."
        />

        <link rel="canonical" href="https://steth2tech.com" />

        <meta
          name="google-site-verification"
          content="EOBVgmoShLRMlM5vHr0TvOH_W6mJfxtvKoUHESK6hFU"
        />
      </Head>

      <Nav />

      <main className="min-h-screen bg-white text-slate-900">
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Medicine · Engineering · Artificial Intelligence
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Dr. Sushant
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-slate-600">
            Physician-Engineer | Clinical AI &amp; Systems
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700 max-w-3xl">
            <strong>Steth2Tech</strong> is a portfolio of applied work at the
            intersection of clinical medicine, biomedical data science, and
            AI engineering. We explore how clinical reasoning can inform
            machine learning systems, and how those systems can be evaluated,
            engineered, and translated into practical healthcare workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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

        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="border border-slate-200 rounded-xl p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Featured Research
            </p>

            <h2 className="mt-3 text-2xl md:text-3xl font-bold">
              TrustSyn | Biomedical AI Research
            </h2>

            <p className="mt-4 text-slate-700 leading-7 max-w-3xl">
              A research prototype exploring anticancer drug-combination
              activity prediction using NCI-ALMANAC experimental data,
              split-specific model evaluation, and model interpretability.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Research prototype for experimental prioritisation, not a
              clinically validated product.
            </p>

            <a
              href="/trustsyn"
              className="inline-block mt-6 px-5 py-3 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
            >
              Explore TrustSyn →
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
