import Head from "next/head";
import Nav from "../components/Nav";

export default function PinkScanAI() {
  return (
    <>
      <Nav />
      <Head>
        <title>PinkScan AI | Dr. Sushant</title>
        <meta
          name="description"
          content="PinkScan AI is an explainable AI-powered breast thermography screening platform designed to support early breast cancer risk assessment in low-resource healthcare settings."
        />
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-3xl md:text-4xl font-bold">
            PinkScan AI
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Explainable AI-powered breast thermography screening platform
            designed to support early breast cancer risk assessment in
            low-resource healthcare settings.
          </p>

          <div className="mt-10 border-l-4 border-slate-300 pl-6">
            <p className="text-slate-700 leading-8">
              PinkScan AI combines thermal imaging, deep learning, and
              clinician-interpretable visualizations to assist—not replace—
              clinical decision making. The project explores how artificial
              intelligence can improve access to affordable, radiation-free
              breast health screening while maintaining transparency through
              explainable AI techniques.
            </p>

            <p className="mt-6 text-slate-700 leading-8">
              The long-term objective is to develop a scalable screening
              workflow capable of identifying individuals who require further
              diagnostic evaluation, particularly in underserved and
              resource-constrained healthcare environments.
            </p>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold">Key Highlights</h2>

            <ul className="mt-6 list-disc pl-6 space-y-3 text-slate-700">
              <li>AI-assisted breast thermography screening workflow</li>
              <li>Explainable AI using Grad-CAM visualizations</li>
              <li>Deep learning with ResNet-based architectures</li>
              <li>Designed for low-resource and rural healthcare settings</li>
              <li>Radiation-free, non-invasive screening concept</li>
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold">Technology Stack</h2>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Deep Learning</h3>
                <p className="text-slate-600 mt-2">
                  PyTorch, TorchVision, ResNet
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Explainability</h3>
                <p className="text-slate-600 mt-2">
                  Grad-CAM
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Medical Imaging</h3>
                <p className="text-slate-600 mt-2">
                  DICOM, JPEG
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Data Science</h3>
                <p className="text-slate-600 mt-2">
                  NumPy, Pandas
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Visualization</h3>
                <p className="text-slate-600 mt-2">
                  Matplotlib
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Deployment</h3>
                <p className="text-slate-600 mt-2">
                  Azure Machine Learning
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold">System Architecture</h2>

            <div className="mt-6 border rounded-lg p-6 bg-slate-50">
              <p className="font-medium text-center">
                Thermal Image
                <br />↓<br />
                Image Preprocessing
                <br />↓<br />
                ResNet Deep Learning Model
                <br />↓<br />
                Breast Cancer Risk Prediction
                <br />↓<br />
                Grad-CAM Explainability
                <br />↓<br />
                Clinician Decision Support
              </p>
            </div>

            <p className="mt-6 text-slate-700 leading-8">
              PinkScan AI follows an explainable AI workflow where breast thermography
              images are processed through a convolutional neural network. The resulting
              prediction is accompanied by Grad-CAM heatmaps that highlight image regions
              influencing the model, improving transparency for clinical interpretation.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">
              Illustrative Breast Thermography
            </h2>

            <img
              src="/PinkscanAI_image.jpg"
              alt="Illustrative breast thermography"
              className="rounded-xl border shadow-md w-full max-w-3xl mx-auto"
            />

            <p className="mt-4 text-sm text-slate-500 text-center">
              Example illustration demonstrating thermal imaging concepts used in breast
              screening. This image is for educational purposes only and is not patient
              data.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold">Model Development Pipeline</h2>

            <ol className="mt-6 list-decimal pl-6 space-y-4 text-slate-700">
              <li>
                <strong>Image Acquisition</strong><br />
                Breast thermography images are collected from screening datasets and
                standardized for downstream processing.
              </li>

              <li>
                <strong>Preprocessing</strong><br />
                Images are resized, normalized, and prepared for model training to
                ensure consistent input quality.
              </li>

              <li>
                <strong>Deep Learning Model</strong><br />
                A ResNet-based convolutional neural network learns imaging patterns
                associated with breast cancer risk.
              </li>

              <li>
                <strong>Explainability</strong><br />
                Grad-CAM heatmaps identify image regions contributing most strongly
                to model predictions.
              </li>

              <li>
                <strong>Clinical Review</strong><br />
                AI outputs are intended to support clinicians by providing interpretable
                visual evidence alongside prediction scores.
              </li>
            </ol>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold">Model Development Pipeline</h2>

            <ol className="mt-6 list-decimal pl-6 space-y-4 text-slate-700">
              <li>
                <strong>Image Acquisition</strong><br />
                Breast thermography images are collected from screening datasets and
                standardized for downstream processing.
              </li>

              <li>
                <strong>Preprocessing</strong><br />
                Images are resized, normalized, and prepared for model training to
                ensure consistent input quality.
              </li>

              <li>
                <strong>Deep Learning Model</strong><br />
                A ResNet-based convolutional neural network learns imaging patterns
                associated with breast cancer risk.
              </li>

              <li>
                <strong>Explainability</strong><br />
                Grad-CAM heatmaps identify image regions contributing most strongly
                to model predictions.
              </li>

              <li>
                <strong>Clinical Review</strong><br />
                AI outputs are intended to support clinicians by providing interpretable
                visual evidence alongside prediction scores.
              </li>
            </ol>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold">Clinical Problem</h2>

            <p className="mt-6 text-slate-700 leading-8">
              Breast cancer remains one of the leading causes of cancer-related mortality
              among women worldwide. Clinical outcomes are strongly influenced by early
              detection, yet access to timely screening remains uneven across many
              low-resource and rural healthcare settings.
            </p>

            <p className="mt-6 text-slate-700 leading-8">
              Conventional mammography requires specialized infrastructure, trained
              personnel, and significant financial investment, making routine screening
              difficult for underserved populations. These barriers often contribute to
              delayed diagnosis and reduced treatment opportunities.
            </p>

            <p className="mt-6 text-slate-700 leading-8">
              PinkScan AI explores whether AI-assisted analysis of breast thermography
              can serve as an accessible preliminary screening approach by combining
              non-invasive thermal imaging with explainable deep learning models to
              identify individuals who may benefit from further clinical evaluation.
            </p>
          </section>

        </section>
      </main>
    </>
  );
}