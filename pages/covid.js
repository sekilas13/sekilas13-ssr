import dynamic from "next/dynamic";
import useDarkMode from "use-dark-mode";
import Content from "../components/covid";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/covid/GlobalStyles";
import { darkTheme, lightTheme } from "../assets/data/Theme";
import { exception } from "../utils/gtag";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";
import Head from "next/head";
import fetch from "axios";

const Navigasi = dynamic(() => import("../components/Navigasi"), {
  loading: () => (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ height: "56px" }}
    />
  ),
  ssr: false
});

const PRELOAD_CSS = [
  "b337d7e4fd55d8158c57.css", // Statistik.module.css
  "bff4e0b56d744a9baaee.css" // Navigasi.module.css
];

const fetcher = (...args) => fetch(...args).then((res) => res.data);

const title = "Sekilas 13 | Informasi Covid 19";
const description =
  "Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi";

export default function Covid() {
  const dark = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = dark.value ? darkTheme : lightTheme;

  return (
    <>
      <Head>
        {process.env.isProduction &&
          PRELOAD_CSS.map((css) => (
            <link
              rel="preload"
              href={"/_next/static/css/" + css}
              as="style"
              key={css}
            />
          ))}

        <meta name="theme-color" content={dark.value ? "#323234" : "#f0efeb"} />
        <link rel="preconnect" href="https://indonesia-covid-19.mathdro.id/" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={`${process.env.PUBLIC_URL}/covid`}
        openGraph={{
          url: `${process.env.PUBLIC_URL}/covid`,
          title,
          description,
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
        <SWRConfig
          value={{
            fetcher,
            onError: (error) => {
              exception({
                error: error.message,
                fatal: false
              });
            }
          }}
        >
          <Content theme={dark.value} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
