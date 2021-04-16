const fs = require("fs");
const { resolve } = require("path");
const { minify } = require("terser");

module.exports = async function () {
  const txt = fs.readFileSync(resolve("./scripts/noflash.js.txt"), "utf8");
  const result = await minify(txt);

  fs.writeFileSync("public/noflash.min.js", result.code);
};
