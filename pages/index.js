import { darkTheme, lightTheme } from "../assets/data/Theme";
import GlobalStyles from "../components/main/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Content from "../components/main";
import useDarkMode from "use-dark-mode";
import dynamic from "next/dynamic";
import Head from "next/head";

// Hajat preload
import Switcher from "../styles/navigasi/Switcher.module.css";
import Navi from "../styles/navigasi/Navigasi.module.css";
import KatOR from "../styles/main/KataOrang.module.css";
import Gambar from "../styles/main/Gambar.module.css";
import Footer from "../styles/main/Footer.module.css";

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

        <link rel="preload" href={Navi} as="style" />
        <link rel="preload" href={KatOR} as="style" />
        <link rel="preload" href={Gambar} as="style" />
        <link rel="preload" href={Footer} as="style" />
        <link rel="preload" href={Switcher} as="style" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <ThemeProvider theme={theme} prefetch={false}>
        <GlobalStyles />
        <Navigasi dark={dark} />
        <Content theme={dark.value} />
      </ThemeProvider>
    </>
  );
}
