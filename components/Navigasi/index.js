import { memo } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "./memoized";
import Link from "next/link";

function Navigasi() {
  return (
    <Navbar bg="light" variant="light" sticky="top" expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand href="/">KIR</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navigasi-nav" />
        <Navbar.Collapse id="navigasi-nav">
          <Nav className="ml-auto text-center">
            <NavLink />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(Navigasi);
