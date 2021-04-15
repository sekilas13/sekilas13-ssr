import { memo } from "react";
import dynamic from "next/dynamic";
import Form from "react-bootstrap/Form";
import styles from "../../../styles/navigasi/Switcher.module.css";

const Sun = dynamic(() => import("./Sun"));
const Moona = dynamic(() => import("./Moona"));
const Switcher = dynamic(() => import("./Switcher"));

function FormSwitcher() {
  return (
    <Form id={styles.switcher}>
      <Form.Row className="justify-content-center">
        <small className={styles.sun}>
          <Sun />
        </small>
        <Switcher />
        <small className={styles.moona}>
          <Moona />
        </small>
      </Form.Row>
    </Form>
  );
}

export default memo(FormSwitcher);
