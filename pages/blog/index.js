import { Container, Row, Col, Card } from "react-bootstrap";
import { NextSeo } from "next-seo";
import matter from "gray-matter";

import "bootstrap/dist/css/bootstrap.min.css";

const title = "Our Blog | Sekilas 13";
const description = "";

export default function Blog({ data }) {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

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
          {ListItems.map((blog) => (
            <Col md={3} key={blog.Judul}>
              <Card>
                <Card.Header>{blog.Judul}</Card.Header>
                <Card.Body>{blog.Deskripsi}</Card.Body>
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

    return rawContent;
  });

  return {
    props: {
      data
    }
  };
}
