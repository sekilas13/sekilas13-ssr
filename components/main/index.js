import { memo } from "react";
import dynamic from "next/dynamic";

import JumbotronTop from "./JumbotronTop";
import Deskripsi from "./Deskripsi";
import Footer from "./Footer";
import Galeri from "./Galeri";

const KataOrang = dynamic(() => import("./KataOrang"), { ssr: false });

const main = () => (
  <>
    <JumbotronTop />
    <Deskripsi />
    <KataOrang />
    <Galeri />
    <Footer />
  </>
);

export default memo(main);
