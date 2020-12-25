import { useState } from "react";
import data from "../../../assets/data/KataOrang";
import Carousel from "react-bootstrap/Carousel";

export default function KataOrang({ ukuran }) {
  const [index, setIndex] = useState(3);

  const handleSelect = (selectedIndex) => void setIndex(selectedIndex);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((key, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={`https://via.placeholder.com/${ukuran.width}x${ukuran.height}/373940/fff&text=+`}
            alt={key.alt}
            width={ukuran.width}
            height={ukuran.height}
          />
          <Carousel.Caption>
            <h3>{key.capt[0]}</h3>
            <p>{key.capt[1]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
