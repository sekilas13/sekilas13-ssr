import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/main/Footer.module.css";

const Email = dynamic(() => import("./lazy/FooterEmail"), {
  ssr: false
});

const Info = dynamic(() => import("./lazy/FooterInfo"), {
  ssr: false
});

export default function Footer() {
  return (
    <footer id={styles.footer} className="bg-dark text-white">
      <Container>
        <Row className="pt-3 justify-content-center text-center">
          <Col md={4}>
            <LazyLoad once>
              <Email />
            </LazyLoad>
          </Col>
          <Col md={4}>
            <LazyLoad once>
              <Info />
            </LazyLoad>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
