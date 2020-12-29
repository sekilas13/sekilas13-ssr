import axios from "axios";
import dynamic from "next/dynamic";
import useDarkMode from "use-dark-mode";
import Content from "../components/covid";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/covid/GlobalStyles";
import { darkTheme, lightTheme } from "../assets/data/Theme";
import { NextSeo } from "next-seo";

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

export default function Covid({ covid }) {
  const dark = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = dark.value ? darkTheme : lightTheme;

  return (
    <>
      <NextSeo
        title="Sekilas 13 | Informasi Covid 19"
        description="Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi"
        canonical={`${process.env.PUBLIC_URL}/covid`}
        openGraph={{
          url: `${process.env.PUBLIC_URL}/covid`,
          title: "Sekilas 13 | Informasi Covid 19",
          description:
            "Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi",
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
