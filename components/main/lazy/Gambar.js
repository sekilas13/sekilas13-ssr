import { Row, Container, Col } from "react-bootstrap";
import gambar from "../../../assets/data/Gambar";
import dynamic from "next/dynamic";
import Wrapper from "./WrapperImg";

const DynamicSRL = dynamic(() => import("simple-react-lightbox"), {
  loading: ({ children: Child }) => <Child />
});
const DynamicSRLWrapper = dynamic(
  () => import("simple-react-lightbox").then((module) => module.SRLWrapper),
  {
    loading: ({ children: Child }) => <Child />
  }
);

export default function Gambar() {
  return (
    <DynamicSRL>
      <DynamicSRLWrapper>
        <Container className="pt-4">
          <Row>
            {gambar.map((g, i) => (
              <Col md={4} key={i}>
                <Wrapper src={g.src} alt={g.alt} placeholder={g.placeholder} />
              </Col>
            ))}
          </Row>
        </Container>
      </DynamicSRLWrapper>
    </DynamicSRL>
  );
}
