import { darkTheme, lightTheme } from "../assets/data/Theme";
import GlobalStyles from "../components/main/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Content from "../components/main";
import useDarkMode from "use-dark-mode";
import dynamic from "next/dynamic";
import Head from "next/head";

const Navigasi = dynamic(() => import("../components/Navigasi"), {
  loading: () => (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ height: "56px" }}
    />
  ),
  ssr: false
});

export default function Home() {
  const dark = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = dark.value ? darkTheme : lightTheme;

  return (
    <>
      <Head>
        <title>Karya Ilmiah Remaja SMP Negeri 13 Bekasi</title>
        <meta
          name="description"
          content="Website resmi Karya Ilmiah Remaja SMPN 13 Bekasi. Karya Ilmiah Remaja ini adalah ekskul yang bertemakan tentang Sains dan Ilmu Pengetahuan Umum"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@600&family=Roboto&family=Kufam&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@600&family=Roboto&family=Kufam&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Eczar:wght@600&family=Roboto&family=Kufam&display=swap"
          />
        </noscript>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigasi dark={dark} />
        <Content />
      </ThemeProvider>
    </>
  );
}
