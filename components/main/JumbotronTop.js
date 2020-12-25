import ProgressiveImage from "react-progressive-image";
import { Jumbotron, Container, Row } from "react-bootstrap";
import styles from "../../styles/main/Jumbotron.module.css";

export default function JumbotronTop() {
  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <ProgressiveImage
            src={require("../../assets/Img/KIR/KIR.png")}
            placeholder={require("../../assets/Img/KIR/KIR.png?resize&size=15")}
          >
            {(src, loading) => (
              <img
                src={src}
                style={{
                  filter: loading ? "blur(10px)" : "none",
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
