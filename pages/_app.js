import Head from "next/head";
import { memo, useContext } from "react";
import * as gtag from "../utils/gtag";
import ProgressLoad from "../components/ProgressLoad";
import DarkModeProvider, { DarkModeContext } from "../context/darkMode";

function MyApp(props) {
  return (
    <DarkModeProvider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="google-site-verification" content={gtag.GOOGLE_VERIF} />
        <meta name="theme-color" content="#f0efeb" />
      </Head>
      <ProgressLoad />
      <ThemeColorSetter {...props} />
      <style jsx global>{`
        html {
          font-family: "Roboto", sans-serif;
          scroll-behavior: smooth;
        }

        body.light-mode {
          background: #fff !important;
          transition: all 0.2s linear;
        }

        body.dark-mode {
          background: #242423 !important;
          transition: all 0.2s linear;
        }
      `}</style>
    </DarkModeProvider>
  );
}

function ThemeColorSetter({ Component, pageProps }) {
  const { isDark } = useContext(DarkModeContext);

  return (
    <>
      <Head>
        <meta name="theme-color" content={isDark ? "#323234" : "#f0efeb"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default memo(MyApp);

export function reportWebVitals({ id, name, label, value }) {
  window.gtag("event", name, {
    event_category: label === "web-vital" ? "Web Vitals" : "Next.js metric",
    value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
    non_interaction: true
  });
}
