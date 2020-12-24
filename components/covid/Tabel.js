import { Table, Row, Col } from "react-bootstrap";

export default function Tabel() {
  return (
    <section>
      <Row className="justify-content-center mt-4 mb-2">
        <Col md={6}>
          <h1 className="text-center">Data Provinsi</h1>
        </Col>
      </Row>
      <Table striped bordered hover responsive variant={store.theme}>
        <thead>
          <tr>
            <th>#</th>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </section>
  );
}
