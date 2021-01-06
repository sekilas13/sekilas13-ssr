import fs from "fs";
import { BlogJsonLd, NextSeo } from "next-seo";
import Code from "../../components/blog/Code";
import ReactMarkdown from "react-markdown";
import moment from "moment-timezone";
import matter from "gray-matter";
import Head from "next/head";

import "github-markdown-css";

export default function Read({ content, data, url, tanggal }) {
  const { Judul, Deskripsi, Penulis } = data;
  const fullUrl = process.env.PUBLIC_URL + "/blog/" + url;

  return (
    <>
      <Head>
        <meta name="author" content={Penulis} />
      </Head>
      <NextSeo
        title={Judul}
        description={Deskripsi}
        canonical={fullUrl}
        openGraph={{
          url: fullUrl,
          title: Judul,
          description: Deskripsi,
          type: "article",
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
      <BlogJsonLd
        url={fullUrl}
        title={Judul}
        description={Deskripsi}
        authorName={Penulis}
        datePublished={tanggal}
      />
      <article className="markdown-body">
        <ReactMarkdown
          escapeHtml={true}
          source={content}
          renderers={{ code: Code }}
        />
      </article>
      <style jsx scoped>{`
        .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
        }

        @media (max-width: 767px) {
          .markdown-body {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");
  const paths = files
    .filter((fn) => fn.endsWith(".md"))
    .map((filename) => ({
      params: {
        post: filename.replace(".md", "")
      }
    }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { post } }) {
  const path = `${process.cwd()}/posts/${post}.md`;
  const md = fs.readFileSync(path, {
    encoding: "utf-8"
  });

  const parsed = matter(md);
  const tanggal = moment(parsed.data.Tanggal, "DD-MMM-YYYY HH:mm")
    .tz("Asia/Jakarta")
    .toISOString(true);

  return {
    props: {
      content: parsed.content,
      data: parsed.data,
      url: post,
      tanggal
    }
  };
}
