import { memo } from "react";
import Container from "react-bootstrap/Container";
import Tabel from "./Tabel";
import Card from "./Card";

const Covid = () => (
  <Container fluid>
    <Card />
    <Tabel />
  </Container>
);

export default memo(Covid);
