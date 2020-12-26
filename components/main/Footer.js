import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/main/Footer.module.css";

const Email = dynamic(() => import("./lazy/FooterEmail"), {
  loading: () => (
    <p>
      Ada pertanyaan ? Tanyakan lewat email{" "}
      <a href="mailto:smpn13kir@gmail.com">smpn13kir@gmail.com</a>
    </p>
  ),
});

const Info = dynamic(() => import("./lazy/FooterInfo"), {
  loading: () => (
    <p>
      Dibuat oleh{" "}
      <a
        href="https://github.com/sekilas13"
        target="_blank"
        rel="noopener noreferrer"
      >
        Karya Ilmiah Remaja
      </a>{" "}
      SMP Negeri 13 Bekasi | {new Date().getFullYear()}
    </p>
  ),
});

export default function Footer() {
  return (
    <footer id={styles.footer} className="bg-dark text-white">
      <Container>
        <Row className="pt-3 justify-content-center text-center">
          <Col md={4}>
            <LazyLoad>
              <Email />
            </LazyLoad>
          </Col>
          <Col md={4}>
            <LazyLoad>
              <Info />
            </LazyLoad>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
