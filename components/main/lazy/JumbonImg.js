import { animated } from 'react-spring'
import styles from "../../../styles/main/Jumbotron.module.css";

const calc = (o) => `translateY(${o * 0.17}px)`;

export default function JumbonImg({ src, loading, offset }) {
  return (
    <animated.img
      src={src}
      className={`${styles.gambar} img-fluid text-center rounded`}
      alt="Logo KIR"
      style={{
        filter: loading ? "blur(10px)" : "none",
        transform: offset.interpolate(calc),
        transition: "all 0.40s linear",
        overflow: "hidden",
      }}
    />
  );
}
