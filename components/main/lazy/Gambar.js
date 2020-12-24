import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Row, Container, Col, Image } from "react-bootstrap";
import styles from "../../../styles/main/Gambar.module.css";
import gambar from "../../../assets/data/Gambar";

export default function Gambar() {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <Container className="pt-4">
          <Row>
            {gambar.map((g, i) => (
              <Col md={4} key={i}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  className={`${styles.gambar} img-fluid img-thumbnail mt-3`}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
