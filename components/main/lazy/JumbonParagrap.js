import { animated } from "react-spring";
import styles from "../../../styles/main/Jumbotron.module.css";

const calc3 = (o) => `translateY(${o * 0.08}px)`;

export default function JumbonImg({ offset }) {
  return (
    <animated.p
      style={{
        transform: offset.interpolate(calc3),
        overflow: "hidden",
      }}
      className={styles.paragrap}
    >
      Semangat KIR Tiga Belas !
    </animated.p>
  );
}
