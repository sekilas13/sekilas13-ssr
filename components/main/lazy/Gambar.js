import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Row, Container, Col, Image } from "react-bootstrap";
import styles from "../../../styles/main/Gambar.module.css";
import ProgressiveImage from "react-progressive-image";
import gambar from "../../../assets/data/Gambar";

export default function Gambar() {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <Container className="pt-4">
          <Row>
            {gambar.map((g, i) => (
              <Col md={4} key={i}>
                <ProgressiveImage src={g.src} placeholder={g.placeholder}>
                  {(src, loading) => (
                    <Image
                      src={src}
                      alt={g.alt}
                      style={{
                        width: "100%",
                        filter: loading ? "blur(3.5px)" : "none",
                        transition: "all 0.40s linear",
                      }}
                      className={`${styles.gambar} img-fluid img-thumbnail mt-3`}
                    />
                  )}
                </ProgressiveImage>
              </Col>
            ))}
          </Row>
        </Container>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
