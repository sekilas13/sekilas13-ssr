import { Container, Row, Col, Card } from "react-bootstrap";
import { DarkModeContext } from "../../context/darkMode";
import { useContext } from "react";
import { NextSeo } from "next-seo";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

import style from "../../styles/blog/Posts.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const title = "Our Blog | Sekilas 13";
const description =
  "Daftar tulisan blog Karya Ilmiah Remaja SMP Negeri 13 Bekasi";

export default function Blog({ data }) {
  const { isDark } = useContext(DarkModeContext);

  return (
    <>
      <Head>
        <meta name="theme-color" content={isDark ? "#323234" : "#f0efeb"} />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={`${process.env.PUBLIC_URL}/blog`}
        openGraph={{
          url: `${process.env.PUBLIC_URL}/blog`,
          title,
          description,
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
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Daftar Postingan</h1>
          </Col>
        </Row>
        <Row className="mt-2">
          {data.map(({ content, redirect }) => (
            <Col md={3} sm={6} key={content.Judul}>
              <Card className={style.cardResponsive}>
                <Card.Header>{content.Judul}</Card.Header>
                <Card.Body>{content.Deskripsi}</Card.Body>
                <Card.Footer>
                  <Link href={process.env.PUBLIC_URL + "/blog/" + redirect}>
                    <a>Baca &raquo;</a>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/posts/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });

    const content = matter(rawContent).data;
    const redirect = blog.replace(".md", "");
    return { content, redirect };
  });

  return {
    props: {
      data
    }
  };
}
