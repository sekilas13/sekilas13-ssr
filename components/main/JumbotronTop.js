import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/main/Jumbotron.module.css";
import { memo } from "react";

function JumbotronTop() {
  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <Row>
        <Col className={styles.colText}>
          <h1 className={styles.welcome}>SELAMAT DATANG</h1>
          <h2 className={styles.diWebsite}>DI WEBSITE</h2>
          <h3 className={styles.eskul}>KARYA ILMIAH REMAJA</h3>
          <h3 className={styles.school}>SMPN 13 BEKASI</h3>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default memo(JumbotronTop);
