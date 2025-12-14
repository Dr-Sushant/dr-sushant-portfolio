import Head from "next/head"
import Nav from "../components/Nav"


export default function AnesthesiaDriftDetector() {
  return (
  <>
    <Nav />
<Head>
  <title>Anesthesia Drift Detector | Dr. Sushant</title>
</Head>

    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-4xl font-bold">
          Anesthesia Drift Detector
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Detecting distributional drift in perioperative physiological signals to
          safeguard model reliability in real-world clinical environments.
        </p>

        {/* Problem */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-3 text-slate-700">
            Machine learning models deployed in anesthesia monitoring are vulnerable
            to silent performance degradation as patient populations, devices, and
            clinical practices evolve. Traditional accuracy metrics fail to capture
            these shifts in real time, creating safety risks.
          </p>
        </section>

        {/* Approach */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <p className="mt-3 text-slate-700">
            Designed a drift monitoring pipeline that tracks changes in statistical
            properties of time-series physiological signals. The system compares
            incoming data against baseline distributions and flags significant
            deviations using interpretable metrics.
          </p>
          <ul className="mt-4 list-disc list-inside text-slate-600">
            <li>Time-series feature extraction</li>
            <li>Distributional comparison (statistical tests & thresholds)</li>
            <li>Alerting logic for sustained drift</li>
          </ul>
        </section>

        {/* Validation */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Validation Strategy</h2>
          <p className="mt-3 text-slate-700">
            Evaluated drift sensitivity using simulated distribution shifts and
            retrospective signal segments. Emphasis was placed on minimizing false
            alarms while ensuring early detection of clinically meaningful changes.
          </p>
        </section>

        {/* Impact */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Clinical Impact</h2>
          <p className="mt-3 text-slate-700">
            This framework supports proactive model governance by surfacing reliability
            risks before downstream clinical decisions are affected. It provides a
            practical layer of safety for AI-assisted anesthesia monitoring.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Technology Stack</h2>
          <p className="mt-3 text-slate-700">
            Python · Statistical analysis · Time-series processing · Visualization
          </p>
        </section>
      </section>
    </main>
   </>
  )
}
