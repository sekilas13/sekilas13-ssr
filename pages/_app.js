import Head from "next/head";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../config/GlobalStyles";
import { lightTheme, darkTheme } from "../config/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

const Navigasi = dynamic(() => import("../components/Navigasi"), {
  loading: () => (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ height: "56px" }}
    >
      <div className="container">
        <a href="#" class="navbar-brand" onClick={(e) => e.preventDefault()}>
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
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles /> */}
        <Navigasi darkMode={darkMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
