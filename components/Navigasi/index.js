import { Container, Navbar } from "react-bootstrap";

function Navigasi() {
  return (
    <Navbar bg="light" variant="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#">KIR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navigasi-nav" />
      </Container>
    </Navbar>
  );
}

export default Navigasi;
