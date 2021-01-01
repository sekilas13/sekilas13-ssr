import Container from "react-bootstrap/Container";
import Tabel from "./Tabel";
import Card from "./Card";

export default function Covid({ theme }) {
  return (
    <Container fluid>
      <Card />
      <Tabel theme={theme} />
    </Container>
  );
}
