import Head from "next/head"
import Nav from "../components/Nav"

export default function HCCExtractor() {
  return (
    <>
      <Nav />
      <Head>
        <title>HCC Extractor | Dr. Sushant</title>
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold">
            Clinical ICD-10 Extractor
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Clinical coding application that extracts ICD-10 diagnoses from clinical documentation and maps supported conditions to Hierarchical Condition Categories (HCCs).

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="https://huggingface.co/spaces/Dr-Sushant/hcc-extractor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
            >
              🚀 Live Demo
            </a>

            <a
              href="https://github.com/Dr-Sushant/hcc_extractor_project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-400 rounded-lg hover:bg-slate-100 transition"
            >
              💻 View Source Code
            </a>

          </div>

          <h2 className="text-2xl font-semibold mt-12">
            Key Features
          </h2>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>✅ Extracts ICD-10 diagnosis codes from free-text clinical documentation</li>
            <li>✅ Maps supported diagnoses to Hierarchical Condition Categories (HCCs)</li>
            <li>✅ Accepts both narrative notes and ICD-10 code input</li>
            <li>✅ Supports multiple-condition extraction</li>
            <li>✅ Interactive web interface</li>
            <li>✅ Publicly deployed on Hugging Face Spaces</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12">
            Supported Conditions
          </h2>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Type 2 Diabetes Mellitus</li>
            <li>• Chronic Kidney Disease</li>
            <li>• HIV Disease</li>
            <li>• Acute Myeloid Leukemia</li>
            <li>• Multiple-condition detection</li>
            <li>• Direct ICD-10 code input</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12">
            Application Preview
          </h2>

          <a
            href="https://huggingface.co/spaces/Dr-Sushant/hcc-extractor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/HF1.png"
              alt="Clinical ICD-10 Extractor Architecture"
              className="mt-8 rounded-lg shadow-lg hover:shadow-2xl transition"
            />
          </a>

          <h2 className="text-2xl font-semibold mt-12">
            Technology Stack
          </h2>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>🐍 Python</li>
            <li>⚡ Streamlit</li>
            <li>🤗 Hugging Face Spaces</li>
            <li>🐙 GitHub</li>
            <li>📘 ICD-10-CM</li>
            <li>🏥 CMS HCC Mapping</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12">
            Future Roadmap
          </h2>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>☐ Expand ICD-10 condition coverage</li>
            <li>☐ Improve clinical rule engine</li>
            <li>☐ Negation detection</li>
            <li>☐ Context-aware extraction</li>
            <li>☐ FHIR-compatible outputs</li>
            <li>☐ Export results as CSV and JSON</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12">
            Case Study
          </h2>

          <div className="mt-10 border-l-4 border-slate-300 pl-6">
            <p className="text-slate-700">
              A detailed technical and clinical case study describing the architecture, design decisions, implementation, evaluation, and future development of this project is currently being prepared. The project focuses on a hybrid NLP and rule-based pipeline that extracts ICD-10 diagnosis codes from unstructured clinical narratives and maps them to Hierarchical Condition Categories (HCCs) to support healthcare risk adjustment and downstream analytics.

            </p>
          </div>

          <p className="mt-8 text-slate-600">
            📌 Detailed technical documentation and case study coming soon.
          </p>
        </section>
      </main>
    </>
  )
}
