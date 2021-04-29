const PUBLIC_URL = process.env.PUBLIC_URL;

const config = {
  pages: {
    index: {
      title: "Karya Ilmiah Remaja SMP Negeri 13 Bekasi",
      description:
        "Website resmi Karya Ilmiah Remaja SMPN 13 Bekasi. Karya Ilmiah Remaja ini adalah ekskul yang bertemakan tentang Sains dan Ilmu Pengetahuan Umum",
      canonical: PUBLIC_URL
    },
    covid: {
      title: "Informasi Covid 19 | Sekilas 13",
      description:
        "Informasi penyebaran virus corona di Indonesia dengan tampilan web dari Karya Ilmiah Remaja SMPN 13 Bekasi",
      canonical: PUBLIC_URL + "/covid"
    }
  }
};

const pages = Object.keys(config.pages);
pages.forEach((page) => {
  const conf = config.pages[page];

  const opg = {
    url: conf.canonical,
    title: conf.title,
    description: conf.description,
    type: "website",
    images: [
      {
        url: `${PUBLIC_URL}/ogp-img.png`,
        width: 256,
        height: 256,
        alt: "KIR Open Graph"
      }
    ],
    site_name: "Sekilas 13"
  };

  config.pages[page].opg = opg;
});

export default config;
