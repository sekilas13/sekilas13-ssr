import { memo, useRef, useState, useContext, useCallback } from "react";
import styles from "../../styles/navigasi/Navigasi.module.css";
import { DarkModeContext } from "../../context/darkMode";
import { Container, Navbar, Nav } from "react-bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";

const NavLink = dynamic(() => import("./memoized/NavLink"));
const FormSwitcher = dynamic(() => import("./memoized/FormSwitcher"), {
  loading: () => <form style={{ height: "24px", width: "79px" }} />,
  ssr: false
});

function Navigasi() {
  const ref = useRef();
  const [expanded, setExpand] = useState(false);
  const { isDark } = useContext(DarkModeContext);

  const expandClose = useCallback(() => setExpand(false), [expanded]);
  const getHeight = useCallback(
    () =>
      ref.current ? ref.current.getBoundingClientRect().height : ref.current,
    [ref]
  );

  return (
    <Navbar
      bg={!isDark && "light"}
      variant={isDark ? "dark" : "light"}
      className={isDark && styles.darker}
      sticky="top"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpand((expanded) => !expanded)}
      ref={ref}
    >
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>KIR</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navigasi-nav" />
        <Navbar.Collapse id="navigasi-nav">
          <NavLink
            expanded={expanded}
            setExpandClose={expandClose}
            getHeight={getHeight}
          />
          <FormSwitcher />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(Navigasi);
