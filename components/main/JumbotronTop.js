import { Jumbotron, Container, Row } from "react-bootstrap";

export default function JumbotronTop() {
  return (
    <Jumbotron fluid>
      <Container>
        <Row className="justify-content-center">
          <h1 id="tsukilas">Sekilas !</h1>
        </Row>
      </Container>
    </Jumbotron>
  );
}
