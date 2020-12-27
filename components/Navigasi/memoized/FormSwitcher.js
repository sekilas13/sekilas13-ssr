import { memo } from "react";
import dynamic from "next/dynamic";
import Form from "react-bootstrap/Form";
import styles from "../../../styles/navigasi/Switcher.module.css";

const Sun = dynamic(() => import("./Sun"));
const Moona = dynamic(() => import("./Moona"));
const Switcher = dynamic(() => import("./Switcher"));

function FormSwitcher({ theme, themeToggler }) {
  return (
    <Form id={styles.switcher}>
      <Form.Row className="justify-content-center">
        <small className={styles.sun}>
          <Sun theme={theme} />
        </small>
        <Switcher theme={theme} themeToggler={themeToggler} />
        <small className={styles.moona}>
          <Moona theme={theme} />
        </small>
      </Form.Row>
    </Form>
  );
}

const compare = function (prevProps, nextProps) {
  return prevProps.theme === nextProps.theme;
};

export default memo(FormSwitcher, compare);
