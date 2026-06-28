import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaId="G-22Y0T2WNZB" />

      <Component {...pageProps} />

      <Analytics />
    </>
  );
}
