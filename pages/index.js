import Content from "../components/main";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useContext } from "react";
import Head from "next/head";
import DEF_SEO from "../config/seo.config";

import "bootstrap/dist/css/bootstrap.min.css";

const PageSEO = DEF_SEO.pages.index;

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
  "83a97b3f0d7136785509.css" // KataOrang.module.css
];
const PRELOAD_LCP_IMG = "KIR-228-c7ad9295d87ea5f047a2312222929797.webp"; // KIR.png

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
        title={PageSEO.title}
        description={PageSEO.description}
        canonical={PageSEO.canonical}
        openGraph={PageSEO.opg}
      />
      <Navigasi />
      <Content />
    </>
  );
}
