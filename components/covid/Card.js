import CardWrapper from "./Custom/CardWrapper";
import {
  faVirus,
  faHospital,
  faHandHoldingMedical,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function Card({ covid }) {
  console.log(covid);
  return (
    <>
      <Row className="mt-4 justify-content-center">
        <Col lg={3} sm={5}>
          <CardWrapper label="Positif" icon={faVirus} />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper label="Dirawat" icon={faHospital} />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper label="Sembuh" icon={faHandHoldingMedical} />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper label="Meninggal" icon={faSkullCrossbones} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          {/* <p>
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
          </p> */}
        </Col>
      </Row>
    </>
  );
}

Card.getServerSideProps = async () => {
  const covid = await axios("https://indonesia-covid-19.mathdro.id/api/");
  console.log(covid);

  return {
    props: { covid },
  };
};

export default Card;
