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
      <NextSeo title={title} description={description} />
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
