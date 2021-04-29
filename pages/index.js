import Content from "../components/main";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useContext } from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";

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
  "bff4e0b56d744a9baaee.css", // Navigasi.module.css
  "83a97b3f0d7136785509.css", // KataOrang.module.css
  "c65c62a6ff809d085b57.css" // Gambar.module.css
];
const PRELOAD_LCP_IMG = "KIR-228-c7ad9295d87ea5f047a2312222929797.webp"; // KIR.png

const title = "Karya Ilmiah Remaja SMP Negeri 13 Bekasi";
const description =
  "Website resmi Karya Ilmiah Remaja SMPN 13 Bekasi. Karya Ilmiah Remaja ini adalah ekskul yang bertemakan tentang Sains dan Ilmu Pengetahuan Umum";

export default function Home() {
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
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@600&family=Roboto&family=Kufam&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        {process.env.isProduction && (
          <link
            rel="preload"
            as="image"
            href={"/_next/static/images/" + PRELOAD_LCP_IMG}
          />
        )}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@600&family=Roboto&family=Kufam&display=swap"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
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
      <Navigasi />
      <Content />
    </>
  );
}
