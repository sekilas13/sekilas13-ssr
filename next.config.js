const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  inlineImageLimit: 8192,
  imagesFolder: "images",
  imagesName: "[name]-[hash].[ext]",
  handleImages: ["jpeg", "png", "webp"],
  removeOriginalExtension: false,
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  webp: {
    preset: "default",
    quality: 75,
  },
  responsive: {
    adapter: require("responsive-loader/sharp"),
  },
});
