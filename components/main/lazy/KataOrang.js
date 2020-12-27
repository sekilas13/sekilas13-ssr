import { useState } from "react";
import data from "../../../assets/data/KataOrang";
import Carousel from "react-bootstrap/Carousel";

const fullUrl =
  location.protocol +
  "//" +
  location.hostname +
  (location.port ? ":" + location.port : "");

export default function KataOrang({ ukuran, theme }) {
  const [index, setIndex] = useState(3);

  const handleSelect = (selectedIndex) => void setIndex(selectedIndex);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((key, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={`${fullUrl}/api/image/${ukuran.width}/${ukuran.height}/${
              theme ? "373940" : "f1faee"
            }`}
            alt={key.alt}
            width={ukuran.width}
            height={ukuran.height}
          />
          <Carousel.Caption>
            <h3 style={{ color: theme ? "fff" : "000" }}>{key.capt[0]}</h3>
            <p style={{ color: theme ? "fff" : "000" }}>{key.capt[1]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
