import { useEffect, useState, useContext, useRef } from "react";
import styles from "../../styles/main/KataOrang.module.css";
import { DarkModeContext } from "../../context/darkMode";
import LazyLoad from "react-lazyload";
import dynamic from "next/dynamic";

const Content = dynamic(() => import("./lazy/KataOrang"), { ssr: false });

export default function KataOrang() {
  const ref = useRef();
  const [ukuran, setUkuran] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const { isDark } = useContext(DarkModeContext);

  useEffect(() => {
    const curr = ref.current;
    const Ubah = { width: curr.offsetWidth, height: curr.offsetHeight };
    setUkuran(Object.assign({}, Ubah));

    function resize() {
      const forUbah = { width: curr.offsetWidth, height: curr.offsetHeight };
      setUkuran(Object.assign({}, forUbah));
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="KataOrang" id={styles.KataOrang} ref={ref}>
      <LazyLoad once>
        <Content ukuran={ukuran} theme={isDark} />
      </LazyLoad>
    </section>
  );
}
