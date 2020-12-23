import { useState, useEffect, ref, useRef } from "react";

export default function KataOrang() {
  const ref = useRef();
  const [ukuran, setUkuran] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  return <section ref={ref}></section>;
}
