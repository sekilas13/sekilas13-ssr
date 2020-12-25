const img1 = require("../Img/normal/1.jpg");
const img2 = require("../Img/normal/2.jpg");
const img3 = require("../Img/normal/3.jpg");
const img4 = require("../Img/normal/4.jpg");
const img5 = require("../Img/normal/5.jpg");
const img6 = require("../Img/normal/6.jpg");

const img1holder = require("../Img/normal/1.jpg?resize&size=15");
const img2holder = require("../Img/normal/2.jpg?resize&size=15");
const img3holder = require("../Img/normal/3.jpg?resize&size=15");
const img4holder = require("../Img/normal/4.jpg?resize&size=15");
const img5holder = require("../Img/normal/5.jpg?resize&size=15");
const img6holder = require("../Img/normal/6.jpg?resize&size=15");

const webp1 = require("../Img/webp/1.webp");
const webp2 = require("../Img/webp/2.webp");
const webp3 = require("../Img/webp/3.webp");
const webp4 = require("../Img/webp/4.webp");
const webp5 = require("../Img/webp/5.webp");
const webp6 = require("../Img/webp/6.webp");

const webp1holder = require("../Img/webp/1.webp?resize&size=15");
const webp2holder = require("../Img/webp/2.webp?resize&size=15");
const webp3holder = require("../Img/webp/3.webp?resize&size=15");
const webp4holder = require("../Img/webp/4.webp?resize&size=15");
const webp5holder = require("../Img/webp/5.webp?resize&size=15");
const webp6holder = require("../Img/webp/6.webp?resize&size=15");

const isSupport = require("../../utils/isSupportWebp");

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

module.exports = ListGambar;
