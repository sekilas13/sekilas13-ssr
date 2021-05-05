import { Container, Row, Col, Card } from "react-bootstrap";
import moment from "moment-timezone";
import { useContext } from "react";
import { NextSeo } from "next-seo";
import matter from "gray-matter";
import Link from "next/link";

import style from "../../styles/blog/Posts.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const title = "Our Blog | Sekilas 13";
const description =
  "Daftar tulisan blog Karya Ilmiah Remaja SMP Negeri 13 Bekasi";

const timeParser = (tanggal) =>
  moment(tanggal, "DD-MMM-YYYY HH:mm").tz("Asia/Jakarta");

export default function Blog({ data }) {
  return (
    <>
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

  const data = blogs
    .map((blog) => {
      const path = `${process.cwd()}/posts/${blog}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8"
      });

      const content = matter(rawContent).data;
      const redirect = blog.replace(".md", "");
      return { content, redirect };
    })
    .sort((a, b) => {
      const aTime = timeParser(a.content.TanggalDibuat);
      const bTime = timeParser(b.content.TanggalDibuat);

      return aTime - bTime;
    });

  return {
    props: {
      data
    }
  };
}
