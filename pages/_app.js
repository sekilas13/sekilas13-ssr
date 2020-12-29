import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="google-site-verification"
          content="DFwLW8l_q7ZK1yuzt9Lp4HeCNWRP2-83BocCT8QeXpU"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
