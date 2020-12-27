import axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic";
import useDarkMode from "use-dark-mode";
import Content from "../components/covid";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/covid/GlobalStyles";
import { darkTheme, lightTheme } from "../assets/data/Theme";

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
      <Head>
        <title>Sekilas 13 | Informasi Covid 19</title>
        <meta
          name="description"
          content="Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigasi dark={dark} />
        <Content covidData={covid} theme={dark.value} />
      </ThemeProvider>
    </>
  );
}
