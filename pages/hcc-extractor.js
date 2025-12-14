import Nav from "../components/Nav"
import Head from "next/head"

export default function HCCExtractor() {
  return (
    <>
      <Nav />
      <Head>
        <title>HCC Extractor | Dr. Sushant</title>
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-3xl md:text-4xl font-bold">
            HCC Extractor
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Hierarchical Condition Category (HCC) derivation via ICD-10 coding
from unstructured clinical text.

          </p>

          <div className="mt-10 border-l-4 border-slate-300 pl-6">
            <p className="text-slate-700">
              This case study is currently being expanded into a full technical
and clinical write-up. The project focuses on a hybrid NLP and
rule-based pipeline that extracts ICD-10 diagnosis codes from
unstructured clinical narratives and maps them to Hierarchical
Condition Categories (HCCs) to support healthcare risk adjustment
and downstream analytics.


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
