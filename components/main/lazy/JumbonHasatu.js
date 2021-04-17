import { animated } from "react-spring";
import styles from "../../../styles/main/Jumbotron.module.css";

const calc2 = (o) => `translateY(${o * 0.1}px)`;

export default function JumbonImg({ offset }) {
  return (
    <animated.h1
      style={{
        transform: offset.interpolate(calc2),
        overflow: "hidden"
      }}
      className={styles.hasatu}
    >
      Sekilas !
    </animated.h1>
  );
}
