import axios from "axios";
import dynamic from "next/dynamic";
import useDarkMode from "use-dark-mode";
import Content from "../components/covid";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/covid/GlobalStyles";
import { darkTheme, lightTheme } from "../assets/data/Theme";
import { NextSeo } from "next-seo";
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

export async function getServerSideProps() {
  const res = await axios("https://indonesia-covid-19.mathdro.id/api/");

  return { props: { covid: res.data } };
}

const PRELOAD_CSS = [
  "b337d7e4fd55d8158c57.css", // Statistik.module.css
  "bff4e0b56d744a9baaee.css" // Navigasi.module.css
];

export default function Covid({ covid }) {
  const dark = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = dark.value ? darkTheme : lightTheme;

  return (
    <>
      <Head>
        {PRELOAD_CSS.map((css) => (
          <link
            rel="preload"
            href={"/_next/static/css/" + css}
            as="style"
            key={css}
          />
        ))}

        <meta name="theme-color" content={dark.value ? "#323234" : "#f0efeb"} />
        <link rel="preconnect" href="https://indonesia-covid-19.mathdro.id" />
      </Head>
      <NextSeo
        title="Sekilas 13 | Informasi Covid 19"
        description="Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi"
        canonical={`${process.env.PUBLIC_URL}/covid`}
        openGraph={{
          url: `${process.env.PUBLIC_URL}/covid`,
          title: "Sekilas 13 | Informasi Covid 19",
          description:
            "Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi",
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
        <Content covidData={covid} theme={dark.value} />
      </ThemeProvider>
    </>
  );
}
