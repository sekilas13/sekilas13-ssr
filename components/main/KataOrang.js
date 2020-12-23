import { useState, useEffect, useRef } from "react";
import styles from "../../styles/main/KataOrang.module.css";
import data from "../../assets/data/KataOrang";
import Carousel from "react-bootstrap/Carousel";

export default function KataOrang() {
  const ref = useRef();
  const [ukuran, setUkuran] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [index, setIndex] = useState(3);

  const handleSelect = (selectedIndex) => void setIndex(selectedIndex);

  useEffect(() => {
    const curr = ref.current;
    const Ubah = { width: curr.offsetWidth, height: curr.offsetHeight };
    setUkuran(Object.assign({}, Ubah));

    function resize() {
      const forUbah = { width: curr.offsetWidth, height: curr.offsetHeight };
      setUkuran(Object.assign({}, forUbah));
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id={styles.KataOrang} ref={ref}>
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
    </section>
  );
}
