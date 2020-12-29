import { darkTheme, lightTheme } from "../assets/data/Theme";
import GlobalStyles from "../components/main/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Content from "../components/main";
import useDarkMode from "use-dark-mode";
import { NextSeo } from "next-seo";
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <NextSeo
        title="Karya Ilmiah Remaja SMP Negeri 13 Bekasi"
        description="Website resmi Karya Ilmiah Remaja SMPN 13 Bekasi. Karya Ilmiah Remaja ini adalah ekskul yang bertemakan tentang Sains dan Ilmu Pengetahuan Umum"
        canonical={`${process.env.PUBLIC_URL}/`}
        openGraph={{
          url: `${process.env.PUBLIC_URL}/`,
          title: "Karya Ilmiah Remaja SMP Negeri 13 Bekasi",
          description:
            "Website resmi Karya Ilmiah Remaja SMPN 13 Bekasi. Karya Ilmiah Remaja ini adalah ekskul yang bertemakan tentang Sains dan Ilmu Pengetahuan Umum",
          type: "website",
          images: [
            {
              url: `${process.env.PUBLIC_URL}/ogp-img.png`,
              width: 256,
              height: 256,
              alt: "KIR Open Graph"
            }
          ],
          site_name: "Sekilas 13"
        }}
      />
      <ThemeProvider theme={theme} prefetch={false}>
        <GlobalStyles />
        <Navigasi dark={dark} />
        <Content theme={dark.value} />
      </ThemeProvider>
    </>
  );
}
