import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/covid/Card.module.css";

export default function CardWrapper({ label, data, icon }) {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Row className="justify-content-center h-100 d-flex">
          <Col md={4} className="text-center align-self-center">
            <FontAwesomeIcon icon={icon} size="6x" className={styles.svg} />
          </Col>
          <Col md={8} className="text-center align-self-center">
            <h4>{label}</h4>
            <h3>{data} Orang</h3>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
