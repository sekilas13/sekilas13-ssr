import Head from "next/head";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../config/GlobalStyles";
import { lightTheme, darkTheme } from "../config/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import { NextSeo } from "next-seo";

const Navigasi = dynamic(() => import("../components/Navigasi"), {
  loading: () => (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ height: "56px" }}
    >
      <div className="container">
        <a
          href="#"
          className="navbar-brand"
          onClick={(e) => e.preventDefault()}
        >
          KIR
        </a>
      </div>
    </nav>
  ),
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Sekilas 13" />
        <meta name="application-name" content="Sekilas 13" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content={darkMode ? "#323234" : "#f0efeb"} />
      </Head>
      <NextSeo
        openGraph={{
          url: process.env.URL,
          title: "Karya Ilmiah Remaja SMP Negeri 13",
          description:
            "Website resmi Karya Ilmiah Remaja SMPN 13 Bekasi. Karya Ilmiah Remaja ini adalah ekskul yang bertemakan tentang Sains dan Ilmu Pengetahuan Umum",
          images: [
            {
              url: process.env.URL + "/op-big.png",
              width: 1200,
              height: 630,
              alt: "KIR Open Graph Beeg",
            },
            {
              url: process.env.URL + "/op-small.png",
              width: 484,
              height: 484,
              alt: "KIR Open Graph Smol",
            },
          ],
          site_name: "Sekilas 13",
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigasi darkMode={darkMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
