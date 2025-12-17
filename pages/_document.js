import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="EOBVgmoShLRMlM5vHr0TvOH_W6mJfxtvKoUHESK6hFU"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://steth2tech.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


