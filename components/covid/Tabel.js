import { DarkModeContext } from "../../context/darkMode";
import { Table, Row, Col } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import useSWR from "swr";

const Tbody = dynamic(() => import("./lazy/Tbody"), {
  loading: ({ error, data }) =>
    !error &&
    !data && (
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
  ssr: false
});

export default function Tabel() {
  const { data, error } = useSWR(
    "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi"
  );
  const { isDark } = useContext(DarkModeContext);

  return (
    <section id="provinsi">
      <Row className="justify-content-center mt-4 mb-2">
        <Col md={6}>
          <h1 className="text-center">Data Provinsi</h1>
        </Col>
      </Row>
      <Table
        striped
        bordered
        hover
        responsive
        variant={isDark ? "dark" : "light"}
      >
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
          <Tbody data={data} error={error} />
        </tbody>
      </Table>
    </section>
  );
}
