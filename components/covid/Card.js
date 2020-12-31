import { useState } from "react";
import CardWrapper from "./Custom/CardWrapper";
import {
  faVirus,
  faHospital,
  faHandHoldingMedical,
  faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import { konversiBulan, updateTime } from "../../utils/konversiWaktu";

export default function Card({ covidData }) {
  const [time] = useState(new Date(covidData.lastUpdate));
  const isError = covidData.error;

  return (
    <section id="all">
      <Row className="mt-4 justify-content-center">
        <Col lg={3} sm={5}>
          <CardWrapper
            data={isError ? "===,===" : covidData.jumlahKasus.toLocaleString()}
            label="Positif"
            icon={faVirus}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={isError ? "===,===" : covidData.perawatan.toLocaleString()}
            label="Dirawat"
            icon={faHospital}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={isError ? "===,===" : covidData.sembuh.toLocaleString()}
            label="Sembuh"
            icon={faHandHoldingMedical}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={isError ? "==,===" : covidData.meninggal.toLocaleString()}
            label="Meninggal"
            icon={faSkullCrossbones}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p>
            {isError
              ? "Mohon maaf, data tidak dapat ditampilkan."
              : "Terakhir data diperbarui tanggal" + " "}
            <>
              {!isError && time && (
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
