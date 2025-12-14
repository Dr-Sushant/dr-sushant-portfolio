import Nav from "../components/Nav"
import Head from "next/head"

export default function Contact() {
  return (
    <>
      <Nav />
      <Head>
        <title>Contact | Dr. Sushant</title>
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-3xl font-bold">Contact</h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Open to collaborations, research discussions, and opportunities
            at the intersection of clinical medicine and data science.
          </p>

          <div className="mt-8 space-y-3 text-slate-700">
            <p>
              Email: <strong>steth2tech@gmail.com</strong>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Dr-Sushant"
                className="underline"
              >
                github.com/Dr-Sushant
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="#" className="underline">
                linkedin.com/in/sushant-tapase-a83942167/
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
