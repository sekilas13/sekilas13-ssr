import dynamic from "next/dynamic";
import JumbotronTop from "./JumbotronTop";
import Deskripsi from "./Deskripsi";

const KataOrang = dynamic(() => import("./KataOrang"), { ssr: false });
const Gambar = dynamic(() => import("./Gambar"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function Main({ theme }) {
  return (
    <>
      <JumbotronTop prefetch={false} />
      <Deskripsi />
      <KataOrang theme={theme} />
      <Gambar />
      <Footer />
    </>
  );
}
