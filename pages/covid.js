import { useContext } from "react";
import dynamic from "next/dynamic";
import Content from "../components/covid";
import { exception } from "../utils/gtag";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";
import Head from "next/head";
import fetch from "axios";

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
  "bff4e0b56d744a9baaee.css" // Navigasi.module.css
];

const fetcher = (...args) => fetch(...args).then((res) => res.data);

const title = "Informasi Covid 19 | Sekilas 13";
const description =
  "Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi";

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
        <link
          rel="preconnect"
          href="https://apicovid19indonesia-v2.vercel.app"
        />
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
