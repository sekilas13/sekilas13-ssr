import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Row, Container, Col } from "react-bootstrap";
import gambar from "../../../assets/data/Gambar";
import dynamic from "next/dynamic";

const Wrapper = dynamic(() => import("./WrapperImg"));

export default function Gambar() {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <Container className="pt-4">
          <Row>
            {gambar.map((g, i) => (
              <Col md={4} key={i}>
                <Wrapper src={g.src} alt={g.alt} placeholder={g.placeholder} />
              </Col>
            ))}
          </Row>
        </Container>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
