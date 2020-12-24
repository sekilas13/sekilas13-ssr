import Head from "next/head";
import Content from "../components/covid";
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios("https://indonesia-covid-19.mathdro.id/api/");

  return { props: { covid: res.data } };
}

export default function Covid({ covid }) {
  return (
    <>
      <Head>
        <title>Sekilas 13 | Informasi Covid 19</title>
        <meta
          name="description"
          content="Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi"
        />
      </Head>
      <Content covidData={covid} />
    </>
  );
}
