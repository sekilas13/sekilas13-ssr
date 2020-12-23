import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Row, Container, Col, Image } from "react-bootstrap";
import gambar from "../../assets/data/Gambar";
import styles from "../../styles/Gambar.module.css";

export default function Gambar() {
  return (
    <section id={styles.gambar}>
      <SimpleReactLightbox>
        <SRLWrapper>
          <Container className="pt-4">
            <Row>
              {gambar.map((g, i) => (
                <Col md={4} key={i}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    className="img-fluid img-thumbnail mt-3"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </SRLWrapper>
      </SimpleReactLightbox>
    </section>
  );
}
