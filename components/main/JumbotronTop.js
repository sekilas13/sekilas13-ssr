import ProgressiveImage from "react-progressive-image";
import { Jumbotron, Container, Row } from "react-bootstrap";
import styles from "../../styles/main/Jumbotron.module.css";

export default function JumbotronTop() {
  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <ProgressiveImage
            src="/assets/real/KIR.png"
            placeholder="/assets/real/KIR.placeholder.png"
          >
            {(src, loading) => (
              <img
                src={src}
                style={{
                  filter: loading ? "blur(3.5px)" : "none",
                  transition: "all 0.40s linear",
                }}
                className={`${styles.gambar} img-fluid text-center rounded`}
                alt="Logo KIR"
              />
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
