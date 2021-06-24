import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/main/Jumbotron.module.css";
import { memo } from "react";

const banner = require("../../assets/Img/KIR/banner.jpg");

function JumbotronTop() {
  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <Row className={styles.rowReset}>
        <Col className={styles.colText}>
          <h1 className={styles.welcome}>SELAMAT DATANG</h1>
          <h2 className={styles.diWebsite}>DI WEBSITE</h2>
          <h3 className={styles.eskul}>KARYA ILMIAH REMAJA</h3>
          <h3 className={styles.school}>SMPN 13 BEKASI</h3>
        </Col>
      </Row>
      <Row>
        <img src={banner} className={styles.banner} />
      </Row>
    </Jumbotron>
  );
}

export default memo(JumbotronTop);
