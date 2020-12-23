import img1 from "../Img/normal/1.jpg";
import img2 from "../Img/normal/2.jpg";
import img3 from "../Img/normal/3.jpg";
import img4 from "../Img/normal/4.jpg";
import img5 from "../Img/normal/5.jpg";
import img6 from "../Img/normal/6.jpg";

import img1holder from "../Img/normal/blur/1.jpg";
import img2holder from "../Img/normal/blur/2.jpg";
import img3holder from "../Img/normal/blur/3.jpg";
import img4holder from "../Img/normal/blur/4.jpg";
import img5holder from "../Img/normal/blur/5.jpg";
import img6holder from "../Img/normal/blur/6.jpg";

import webp1 from "../Img/webp/1.webp";
import webp2 from "../Img/webp/2.webp";
import webp3 from "../Img/webp/3.webp";
import webp4 from "../Img/webp/4.webp";
import webp5 from "../Img/webp/5.webp";
import webp6 from "../Img/webp/6.webp";

import webp1holder from "../Img/webp/blur/1.webp";
import webp2holder from "../Img/webp/blur/2.webp";
import webp3holder from "../Img/webp/blur/3.webp";
import webp4holder from "../Img/webp/blur/4.webp";
import webp5holder from "../Img/webp/blur/5.webp";
import webp6holder from "../Img/webp/blur/6.webp";

import isSupport from "../../utils/isSupportWebp";

const ListGambar = [
  {
    placeholder: isSupport ? webp1holder : img1holder,
    src: isSupport ? webp1 : img1,
    alt: "Demonstrasi roket air pada saat pengenalan eskul",
  },
  {
    placeholder: isSupport ? webp2holder : img2holder,
    src: isSupport ? webp2 : img2,
    alt:
      "Eksperimen odol gajah yang reaksinya mengeluarkan odol yang ada di botol",
  },
  {
    placeholder: isSupport ? webp3holder : img3holder,
    src: isSupport ? webp3 : img3,
    alt: "Anak kelas 7 ikut serta mencoba eksperimen odol gajah",
  },
  {
    placeholder: isSupport ? webp4holder : img4holder,
    src: isSupport ? webp4 : img4,
    alt: "Anggota KIR yang melakukan eksperimen 'Nafas api'",
  },
  {
    placeholder: isSupport ? webp5holder : img5holder,
    src: isSupport ? webp5 : img5,
    alt:
      "Anggota eksperimen meniup selang yg berisi tepung maizena untuk menghasilkan nafas api",
  },
  {
    placeholder: isSupport ? webp6holder : img6holder,
    src: isSupport ? webp6 : img6,
    alt: "Anggota eksperimen sedang menyiapkan bahan dan alat",
  },
];

export default ListGambar;
