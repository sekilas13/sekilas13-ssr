import { konversiBulan, updateTime } from "../../utils/konversiWaktu";
import CardWrapper from "./Custom/CardWrapper";
import {
  faVirus,
  faHospital,
  faHandHoldingMedical,
  faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import { useCallback } from "react";
import useSWR from "swr";

const TampilWaktu = ({ data, error }) => {
  if (!error) {
    if (data) {
      const time = new Date(data.lastUpdate);

      return (
        <>
          {time.getDate()} {konversiBulan(time.getMonth())} {time.getFullYear()}{" "}
          Pukul {updateTime(time.getHours())}:{updateTime(time.getMinutes())}:
          {updateTime(time.getSeconds())}.
        </>
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
};

export default function Card() {
  const { data, error } = useSWR(
    "https://apicovid19indonesia-v2.vercel.app/api/indonesia"
  );

  const labelGenerator = useCallback((label, index) => {
    if (error) {
      return label;
    } else {
      if (!data) return label;
      return data[index].toLocaleString();
    }
  });

  return (
    <section id="all">
      <Row className="mt-4 justify-content-center">
        <Col lg={3} sm={5}>
          <CardWrapper
            data={labelGenerator("===,===", "positif")}
            label="Positif"
            icon={faVirus}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={labelGenerator("===,===", "dirawat")}
            label="Dirawat"
            icon={faHospital}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={labelGenerator("===,===", "sembuh")}
            label="Sembuh"
            icon={faHandHoldingMedical}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            data={labelGenerator("==,===", "meninggal")}
            label="Meninggal"
            icon={faSkullCrossbones}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p>
            {!error &&
              data &&
              data.lastUpdate &&
              "Terakhir data diperbarui tanggal" + " "}
            {error &&
              "Mohon maaf, data tidak dapat ditampilkan. " +
                "Error: " +
                error.message}
            <TampilWaktu data={data} error={error} />
          </p>
        </Col>
      </Row>
    </section>
  );
}
