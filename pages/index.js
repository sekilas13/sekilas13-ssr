import Head from "next/head";
import Content from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Karya Ilmiah Remaja SMP Negeri 13 Bekasi</title>
        <meta
          name="description"
          content="Website resmi Karya Ilmiah Remaja SMPN 13 Bekasi. Karya Ilmiah Remaja ini adalah ekskul yang bertemakan tentang Sains dan Ilmu Pengetahuan Umum"
        />
      </Head>
      <Content />
    </>
  );
}
