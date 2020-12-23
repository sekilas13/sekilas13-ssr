import dynamic from "next/dynamic";
import JumbotronTop from "./JumbotronTop";
import Deskripsi from "./Deskripsi";

const KataOrang = dynamic(() => import("./KataOrang"), { ssr: false });
const Gambar = dynamic(() => import("./Gambar"), { ssr: false });

export default function Main() {
  return (
    <>
      <JumbotronTop />
      <Deskripsi />
      <KataOrang />
      <Gambar />
    </>
  );
}
