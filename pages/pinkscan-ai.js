import Nav from "../components/Nav"
import Head from "next/head"

export default function PinkScanAI() {
  return (
    <>
      <Nav />
      <Head>
        <title>PinkScan AI | Dr. Sushant</title>
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-3xl md:text-4xl font-bold">
            PinkScan AI
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            AI-assisted, non-invasive breast health screening concept designed
            for scalable early detection workflows.
          </p>

          <div className="mt-10 border-l-4 border-slate-300 pl-6">
            <p className="text-slate-700">
              This page will be expanded into a detailed case study covering
              problem framing, model design, evaluation strategy, and
              deployment considerations for low-resource screening settings.
            </p>
          </div>

          <p className="mt-8 text-slate-600">
            📌 Full case study coming soon.
          </p>
        </section>
      </main>
    </>
  )
}
