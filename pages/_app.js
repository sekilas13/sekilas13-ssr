import Head from "next/head";
import { Fragment } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../config/GlobalStyles";
import { lightTheme, darkTheme } from "../config/theme";

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(true);
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
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
