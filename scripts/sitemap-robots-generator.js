const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");
const robotstxt = require("generate-robotstxt");
const { resolve } = require("path");

module.exports = async function (domain) {
  const prettierConfig = await prettier.resolveConfig(
    resolve(".prettierrc.json")
  );
  const postsIgnore = fs
    .readFileSync(resolve("posts/.gitignore"), "utf8")
    .split("\n")
    .map((post) => "!posts/" + post);

  const date = new Date().toJSON();

  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/blog/[post].js",
    "!pages/_*.js",
    "!pages/api"
  ]);
  const posts = await globby(["posts/*.md", ...postsIgnore]);

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map((page) => {
              const route = page
                .replace("pages", "")
                .replace(".js", "")
                .replace(".mdx", "")
                .replace("/index", "");

              return `
                <url>
                  <loc>${`${domain}${route}`}</loc>
                  <lastmod>${date}</lastmod>
                </url>
              `;
            })
            .join("")}
          ${posts
            .map((post) => {
              const path = post.replace("posts/", "").replace(".md", "");

              return `
                <url>
                  <loc>${`${domain}/blog/${path}`}</loc>
                  <lastmod>${date}</lastmod>
                </url>
              `;
            })
            .join("")}
      </urlset>
    `;
  const robots = await robotstxt({
    policy: [
      {
        userAgent: "*",
        allow: "/*",
        disallow: "/api/*"
      }
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain
  });

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html"
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
  fs.writeFileSync("public/robots.txt", robots);
};
