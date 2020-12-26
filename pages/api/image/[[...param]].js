import { createCanvas } from "canvas";

export default function handler(req, res) {
  const {
    query: { param },
  } = req;

  const width = Number(param[0]);
  const height = Number(param[1]);
  const color = param[2];

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = `#${color}`;
  context.fillRect(0, 0, width, height);

  const buff = canvas.toBuffer("image/png");

  res.status = 200;
  res.contentType = "image/png";
  res.send(new Buffer.from(buff, "binary"));
}
