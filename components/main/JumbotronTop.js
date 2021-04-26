import dynamic from "next/dynamic";
import { useSpring } from "react-spring";
import { Jumbotron, Container, Row } from "react-bootstrap";
import styles from "../../styles/main/Jumbotron.module.css";
import { memo, useRef, useCallback, useEffect } from "react";
import useProgressiveImage from "./hooks/useProgressiveImage";
import { source, placeholder } from "../../assets/data/GambarJumbotron";

const Img = dynamic(() => import("./lazy/JumbonImg"), {
  loading: ({ src, loading }) => (
    <img
      src={src}
      style={{
        filter: loading ? "blur(10px)" : "none",
        transition: "all 0.40s linear"
      }}
      className={`${styles.gambar} img-fluid text-center rounded`}
      alt="Logo KIR"
    />
  )
});
const Hasatu = dynamic(() => import("./lazy/JumbonHasatu"), {
  loading: () => <h1 className={styles.hasatu}>Sekilas !</h1>
});
const Paragrap = dynamic(() => import("./lazy/JumbonParagrap"), {
  loading: () => <p className={styles.paragrap}>Semangat KIR Tiga Belas !</p>
});

function JumbotronTop() {
  const ref = useRef();
  const { src, loading, onChangeVisible } = useProgressiveImage({
    srcTujuan: source,
    placeholder
  });
  const [{ offset }, setOffset] = useSpring(() => ({ offset: 0 }));

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const posY = ref.current.getBoundingClientRect().top;
      const offset = window.pageYOffset - posY;
      setOffset({ offset });
    }
  }, [ref]);

  useEffect(() => {
    onChangeVisible(true);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Jumbotron fluid className={styles.jumbotron} ref={ref}>
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <Img src={src} loading={loading} offset={offset} />
        </Row>
        <Row className="justify-content-center">
          <Hasatu offset={offset} />
        </Row>
        <Row className="justify-content-center">
          <Paragrap offset={offset} />
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default memo(JumbotronTop);
