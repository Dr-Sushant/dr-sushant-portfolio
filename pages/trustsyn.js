
import Head from "next/head"
import Nav from "../components/Nav"

export default function TrustSyn() {
  const results = [
    {
      split: "Random",
      model: "Ridge",
      rmse: "5.888",
      r2: "0.294",
    },
    {
      split: "Cold combination",
      model: "XGBoost",
      rmse: "6.568",
      r2: "0.129",
    },
    {
      split: "Cold cell line",
      model: "XGBoost",
      rmse: "6.789",
      r2: "0.323",
    },
    {
      split: "Cold drug",
      model: "Stacked (CatBoost + D-MPNN)",
      rmse: "4.858",
      r2: "0.351",
    },
  ]

  return (
    <>
      <Nav />

      <Head>
        <title>TrustSyn | Steth2Tech</title>
        <meta
          name="description"
          content="TrustSyn is a biomedical machine learning research prototype exploring anticancer drug-combination activity prediction, model evaluation, and interpretability."
        />
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Research &amp; Products · Biomedical AI
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            TrustSyn
          </h1>

          <p className="mt-4 text-xl text-slate-600 max-w-3xl">
            Biologically informed drug-combination prediction with explicit
            reliability assessment.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700 max-w-4xl">
            TrustSyn is a research prototype exploring how machine learning
            can help prioritise anticancer drug combinations for experimental
            investigation. We combine drug-related representations and
            cell-line features with split-specific prediction models,
            evaluation, and model interpretability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/OncoNova/onconova-trustsyn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
            >
              View Source Code
            </a>

            <a
              href="/projects"
              className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
            >
              Explore Projects
            </a>
          </div>

          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">
              Research prototype, not a clinically validated product
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-900">
              Predictions are intended to support research prioritisation.
              They do not establish clinical benefit, patient outcomes,
              or biological synergy, and require further experimental
              validation.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-16">
            The Research Question
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            How can we estimate anticancer drug-combination activity from
            experimental data, evaluate generalisation under different
            data-splitting conditions, and understand which model inputs
            drive predictions?
          </p>

          <h2 className="text-2xl font-semibold mt-12">
            Data &amp; Modelling Pipeline
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The project uses NCI-ALMANAC experimental data and integrates
            chemical representations, drug-target information, and
            cell-line molecular features. The modelling workflow explores
            gradient-boosting methods, a directed message-passing neural
            network, and split-specific stacking strategies.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Experimental data",
                body: "Quality-controlled drug-combination observations and cell-line data.",
              },
              {
                title: "Feature engineering",
                body: "Chemical fingerprints, target-related information, and molecular features.",
              },
              {
                title: "Prediction models",
                body: "CatBoost, XGBoost, D-MPNN, and selected stacked models.",
              },
              {
                title: "Evaluation & interpretability",
                body: "Held-out evaluation across different split settings and SHAP-based analysis.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 p-5"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-16">
            Selected Evaluation Results
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            The following results are from the saved evaluations of the
            selected models. RMSE measures prediction error; R² describes
            variance explained relative to a baseline.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-300 text-slate-600">
                  <th className="py-3 pr-4">Split</th>
                  <th className="py-3 pr-4">Model</th>
                  <th className="py-3 pr-4">RMSE ↓</th>
                  <th className="py-3">R² ↑</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr
                    key={result.split}
                    className="border-b border-slate-200"
                  >
                    <td className="py-3 pr-4">{result.split}</td>
                    <td className="py-3 pr-4">{result.model}</td>
                    <td className="py-3 pr-4 tabular-nums">
                      {result.rmse}
                    </td>
                    <td className="py-3 tabular-nums">{result.r2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Note: Cold-drug results come from a separate saved stacking
            evaluation. Results across different splits should not be
            compared as if they represent identical test distributions.
          </p>

          <h2 className="text-2xl font-semibold mt-16">
            Interpretability &amp; Reliability
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            SHAP analysis of the random-split meta-model shows that the
            D-MPNN prediction contributes substantially more to the
            model output than the other listed features. This describes
            model reliance, not a proven biological mechanism.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            The project also explores uncertainty and prediction
            reliability artefacts. Their calibration and coverage require
            further verification before numerical reliability claims
            can be made.
          </p>

          <h2 className="text-2xl font-semibold mt-16">
            Current Limitations
          </h2>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              • Predictions concern experimental cell-line activity,
              not clinical treatment outcomes.
            </li>
            <li>
              • Predicted activity alone does not establish drug synergy
              or therapeutic benefit.
            </li>
            <li>
              • Further robustness checks, repeated evaluations, and
              external validation are needed.
            </li>
            <li>
              • Wet-lab, in-vivo, and clinical validation have not been
              established by this prototype.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-16">
            Engineering Roadmap
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Beyond model development, we plan to explore the engineering
            work required to make the research workflow reproducible,
            inspectable, and deployable.
          </p>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>☐ Strengthen evaluation and reliability validation</li>
            <li>☐ Build a versioned prediction API with input validation</li>
            <li>☐ Package the workflow using Docker</li>
            <li>☐ Explore cloud deployment and experiment tracking</li>
            <li>☐ Add monitoring for data and prediction drift</li>
            <li>☐ Develop a research-facing interface with explanations and warnings</li>
          </ul>

          <p className="mt-4 text-sm text-slate-500">
            These are proposed extensions, not claims of completed
            production deployment.
          </p>

          <div className="mt-16 border-t border-slate-200 pt-8">
            <p className="font-semibold">TrustSyn</p>
            <p className="mt-2 text-slate-600">
              A biomedical AI research project documented on Steth2Tech.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Research prototype for experimental prioritisation only.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
