const fs = require("fs");

const domain = "https://sekilas13.vercel.app";

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("../.prettierrc.json");
  const date = new Date().toJSON();

  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api"
  ]);
  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map((page) => {
              const path = page
                .replace("pages", "")
                .replace(".js", "")
                .replace(".mdx", "");
              const route = path === "/index" ? "" : path;

              return `
                <url>
                  <loc>${`${domain}${route}`}</loc>
                  <lastmod>${date}</lastmod>
                </url>
              `;
            })
            .join("")}
      </urlset>
    `;
  const robots = `    
    User-agent: *
    Allow: /*
    Disallow: /api/*

    Sitemap: ${domain}/sitemap.xml
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html"
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
  fs.writeFileSync("public/robots.txt", robots);
})();
