import { useContext } from "react";
import dynamic from "next/dynamic";
import Content from "../components/covid";
import { exception } from "../utils/gtag";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";
import Head from "next/head";
import fetch from "axios";
import Font from "../components/Font";
import DEF_SEO from "../config/seo.config";

import "bootstrap/dist/css/bootstrap.min.css";

const PageSEO = DEF_SEO.pages.covid;

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

export default function Covid() {
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
        <Font family="family=Lato:ital@1&family=Open+Sans" />
        <link
          rel="preconnect"
          href="https://apicovid19indonesia-v2.vercel.app"
        />
      </Head>
      <NextSeo
        title={PageSEO.title}
        description={PageSEO.description}
        canonical={PageSEO.canonical}
        openGraph={PageSEO.opg}
      />
      <Navigasi />
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
        <Content />
      </SWRConfig>
    </>
  );
}
