import Head from "next/head"
import Nav from "../components/Nav"


export default function Projects() {
  return (
    <>
    <Nav />
<Head>
  <title>Projects | Dr. Sushant</title>
</Head>

    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-4xl font-bold">
          Selected Projects
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          A selection of clinically grounded AI systems and data science projects,
          focused on medical imaging, risk stratification, and decision support.
        </p>

        <div className="mt-12 space-y-10">

          {/* Project 1 */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold">
  <a
    href="/anesthesia-drift-detector"
    className="hover:underline"
  >
    Anesthesia Drift Detector
  </a>
</h2>


            <p className="mt-3 text-slate-700">
              A monitoring pipeline to detect distributional drift in anesthesia-related
              physiological signals, enabling early warnings when model assumptions
              degrade in real-world clinical settings.
            </p>

            <ul className="mt-4 text-slate-600 list-disc list-inside">
              <li>Time-series monitoring & drift detection</li>
              <li>Clinical safety & model reliability</li>
              <li>Python, statistical monitoring, visualization</li>
            </ul>
          </div>
<a
  href="/anesthesia-drift-detector"
  className="inline-block mt-4 text-slate-900 font-medium underline"
>
  Read case study →
</a>

           
          {/* Project 2 */}

          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold">
  <a href="/hcc-extractor" className="hover:underline">
    HCC Extractor (Hierarchical Condition Category)

  </a>
</h2>


            <p className="mt-3 text-slate-700">
              A hybrid NLP and rule-based system that derives ICD-10 diagnosis
codes from unstructured clinical text and maps them to Hierarchical
Condition Categories (HCCs) for risk adjustment and analytics.

            </p>

            <ul className="mt-4 text-slate-600 list-disc list-inside">
              <li><strong>Pipeline:</strong> Clinical text → ICD-10 → HCC mapping</li>
              <li>NLP + rule-based extraction</li>
              <li>Healthcare coding & structured data generation</li>
              <li>Python, text processing, validation logic</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold">
  <a href="/pinkscan-ai" className="hover:underline">
    PinkScan AI
  </a>
</h2>


            <p className="mt-3 text-slate-700">
              A non-invasive breast health screening concept combining imaging
              signals with AI-driven decision support to enable scalable early
              screening workflows in resource-constrained settings.
            </p>

            <ul className="mt-4 text-slate-600 list-disc list-inside">
              <li>Clinical screening & triage support</li>
              <li>Imaging-based inference</li>
              <li>Model prototyping & evaluation</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
   </>
  )
}
