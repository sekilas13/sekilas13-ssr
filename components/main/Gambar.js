import styles from "../../styles/main/Gambar.module.css";
import dynamic from "next/dynamic";

const Content = dynamic(() => import("./lazy/Gambar"));

export default function Gambar() {
  return (
    <section className="gambar" id={styles.gambar}>
      <Content />
    </section>
  );
}
