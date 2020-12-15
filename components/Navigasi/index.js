import { Container, Navbar } from "react-bootstrap";

function Navigasi({ darkMode }) {
  return (
    <Navbar
      bg={!darkMode && "light"}
      variant={darkMode ? "light" : "dark"}
      className={darkMode && "navbar-custom"}
    >
      <Container>
        <Navbar.Brand href="#">KIR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navigasi-nav" />
      </Container>
    </Navbar>
  );
}

export default Navigasi;
