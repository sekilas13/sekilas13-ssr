import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../utils/gtag";

export default class Root extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
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
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
