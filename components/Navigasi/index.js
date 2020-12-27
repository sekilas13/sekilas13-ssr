import { memo, useRef, useState, useCallback } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";

const NavLink = dynamic(() => import("./memoized").then((mod) => mod.NavLink));
const FormSwitcher = dynamic(
  () => import("./memoized").then((mod) => mod.FormSwitcher),
  {
    loading: () => <form style={{ height: "24px", width: "79px" }} />,
    ssr: false
  }
);

function Navigasi({ dark }) {
  const ref = useRef();
  const [expanded, setExpand] = useState(false);

  const expandClose = useCallback(() => setExpand(false), [expanded]);
  const getHeight = useCallback(
    () =>
      ref.current ? ref.current.getBoundingClientRect().height : ref.current,
    [ref]
  );
  const themeToggler = useCallback(
    () => (dark.value ? dark.disable() : dark.enable()),
    [dark]
  );

  return (
    <Navbar
      bg={dark.value ? "dark" : "light"}
      variant={!dark.value && "light"}
      sticky="top"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpand((expanded) => !expanded)}
      ref={ref}
    >
      <Container>
        <Link href="/">
          <Navbar.Brand href="/">KIR</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navigasi-nav" />
        <Navbar.Collapse id="navigasi-nav">
          <Nav className="ml-auto text-center">
            <NavLink
              expanded={expanded}
              setExpandClose={expandClose}
              getHeight={getHeight}
            />
          </Nav>
          <FormSwitcher theme={dark.value} themeToggler={themeToggler} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const compare = function (prevProps, nextProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default memo(Navigasi, compare);
