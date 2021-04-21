const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const whitelist = require("./config/whitelist.config");

const NODE_ENV = process.env.NODE_ENV;
const dualENV = {
  production: {
    PUBLIC_URL: process.env.DEPLOYMENT_BASE_URL
  },
  development: {
    PUBLIC_URL: "http://localhost:3000"
  }
};

const env = { ...dualENV[NODE_ENV], isProduction: NODE_ENV === "production" };

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        inlineImageLimit: 8192,
        imagesFolder: "images",
        imagesName: "[name]-[hash].[ext]",
        handleImages: ["jpeg", "png", "webp"],
        removeOriginalExtension: false,
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 80
        },
        optipng: {
          optimizationLevel: 3
        },
        pngquant: false,
        webp: {
          preset: "default",
          quality: 75
        },
        responsive: {
          adapter: require("responsive-loader/sharp")
        }
      }
    ],
    [
      withPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV === "development",
          register: true,
          scope: "/",
          sw: "service-worker.js",
          dest: "public"
        }
      }
    ]
  ],
  {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require("./scripts/sitemap-robots-generator")(env.PUBLIC_URL);
        require("./scripts/noflash.minimizer")();
      }
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });
      return config;
    },
    env
  }
);
