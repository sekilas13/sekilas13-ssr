import Container from "react-bootstrap/Container";
import Card from "./Card";

export default function Covid({ covidData }) {
  return (
    <section>
      <Container fluid>
        <Card covidData={covidData} />
      </Container>
    </section>
  );
}
