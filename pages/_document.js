import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../utils/gtag";
import { minify } from "terser";

const getScript = async () => {
  const code = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `;

  if (process.env.NODE_ENV === "development") return code;
  const minified = await minify(code);
  return minified.code;
};

export default class Root extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const gtagScript = await getScript();
    return { ...initialProps, gtagScript };
  }

  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />
          <link
            rel="apple-touch-icon"
            href={process.env.PUBLIC_URL + "/logo192-apple-touch.png"}
          />
          <link
            rel="manifest"
            href={process.env.PUBLIC_URL + "/manifest.json"}
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.gtagScript
            }}
          />
        </Head>
        <body>
          {process.env.isProduction && <script src="noflash.min.js" />}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
