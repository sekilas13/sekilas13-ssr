import { Table, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";

const Tbody = dynamic(() => import("./lazy/Tbody"), {
  fallback: (
    <>
      <tr>
        <td>1</td>
        <td colSpan={4} className="text-center">
          Sedang mengambil data....
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td colSpan={4} className="text-center">
          Mohon tunggu....
        </td>
      </tr>
    </>
  ),
});

export default function Tabel() {
  return (
    <section>
      <Row className="justify-content-center mt-4 mb-2">
        <Col md={6}>
          <h1 className="text-center">Data Provinsi</h1>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          <Tbody />
        </tbody>
      </Table>
    </section>
  );
}
