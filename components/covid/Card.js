import { useState } from "react";
import CardWrapper from "./Custom/CardWrapper";
import {
  faVirus,
  faHospital,
  faHandHoldingMedical,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import { konversiBulan, updateTime } from "../../utils/konversiWaktu";

export default function Card({ covidData }) {
  const [time] = useState(new Date(covidData.lastUpdate));

  return (
    <section id="all">
      <Row className="mt-4 justify-content-center">
        <Col lg={3} sm={5}>
          <CardWrapper
            data={covidData.jumlahKasus.toLocaleString()}
            label="Positif"
            icon={faVirus}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={covidData.perawatan.toLocaleString()}
            label="Dirawat"
            icon={faHospital}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={covidData.sembuh.toLocaleString()}
            label="Sembuh"
            icon={faHandHoldingMedical}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={covidData.meninggal.toLocaleString()}
            label="Meninggal"
            icon={faSkullCrossbones}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p>
            Terakhir data diperbarui tanggal{" "}
            <>
              {time && (
                <>
                  {time.getDate()} {konversiBulan(time.getMonth())}{" "}
                  {time.getFullYear()} Pukul {updateTime(time.getHours())}:
                  {updateTime(time.getMinutes())}:
                  {updateTime(time.getSeconds())}.
                </>
              )}
            </>
          </p>
        </Col>
      </Row>
    </section>
  );
}
