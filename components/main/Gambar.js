import styles from "../../styles/main/Gambar.module.css";
import LazyLoad from "react-lazyload";
import dynamic from "next/dynamic";

const Content = dynamic(() => import("./lazy/Gambar"), { ssr: false });

export default function Gambar() {
  return (
    <section className="gambar" id={styles.gambar}>
      <LazyLoad once>
        <Content />
      </LazyLoad>
    </section>
  );
}
