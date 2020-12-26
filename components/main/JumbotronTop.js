import dynamic from "next/dynamic";
import { useSpring } from "react-spring";
import { useRef, useEffect } from "react";
import ProgressiveImage from "react-progressive-image";
import { Jumbotron, Container, Row } from "react-bootstrap";
import styles from "../../styles/main/Jumbotron.module.css";

const Img = dynamic(() => import("./lazy/JumbonImg"), {
  loading: ({ src, loading }) => (
    <img
      src={src}
      style={{
        filter: loading ? "blur(10px)" : "none",
        transition: "all 0.40s linear",
      }}
      className={`${styles.gambar} img-fluid text-center rounded`}
      alt="Logo KIR"
    />
  ),
});

export default function JumbotronTop() {
  const ref = useRef();
  const [{ offset }, setOffset] = useSpring(() => ({ offset: 0 }));
  // const calc2 = (o) => `translateY(${o * 0.1}px)`;
  // const calc3 = (o) => `translateY(${o * 0.08}px)`;

  const handleScroll = () => {
    if (ref.current) {
      const posY = ref.current.getBoundingClientRect().top;
      const offset = window.pageYOffset - posY;
      setOffset({ offset });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Jumbotron fluid className={styles.jumbotron} ref={ref}>
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <ProgressiveImage
            src={require("../../assets/Img/KIR/KIR.png?resize&size=228")}
            placeholder={require("../../assets/Img/KIR/KIR.png?resize&size=15")}
          >
            {(src, loading) => (
              <Img src={src} loading={loading} offset={offset} />
            )}
          </ProgressiveImage>
        </Row>
        <Row className="justify-content-center">
          <h1 className={styles.hasatu}>Sekilas !</h1>
        </Row>
        <Row className="justify-content-center">
          <p className={styles.paragrap}>Semangat KIR Tiga Belas !</p>
        </Row>
      </Container>
    </Jumbotron>
  );
}
