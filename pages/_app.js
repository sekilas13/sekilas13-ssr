import Head from "next/head";
import Navigasi from "../components/Navigasi";

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Navigasi />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
