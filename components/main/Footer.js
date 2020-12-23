import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row className="pt-3 justify-content-center text-center">
          <Col md={4}>
            <p>
              Ada pertanyaan ? Tanyakan lewat email{" "}
              <a href="mailto:smpn13kir@gmail.com">smpn13kir@gmail.com</a>
            </p>
          </Col>
          <Col md={4}>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
