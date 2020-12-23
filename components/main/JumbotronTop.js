import { Jumbotron, Container, Row } from "react-bootstrap";
import styles from "../../styles/Jumbotron.module.css";

export default function JumbotronTop() {
  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <img
            src="/assets/real/KIR.png"
            className={`${styles.gambar} img-fluid text-center rounded`}
            alt="Logo KIR"
          />
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
