const img1 = require("../Img/normal/1.jpg?webp");
const img2 = require("../Img/normal/2.jpg?webp");
const img3 = require("../Img/normal/3.jpg?webp");
const img4 = require("../Img/normal/4.jpg?webp");
const img5 = require("../Img/normal/5.jpg?webp");
const img6 = require("../Img/normal/6.jpg?webp");

const img1holder = require("../Img/normal/1.jpg?resize&size=15&format=webp");
const img2holder = require("../Img/normal/2.jpg?resize&size=15&format=webp");
const img3holder = require("../Img/normal/3.jpg?resize&size=15&format=webp");
const img4holder = require("../Img/normal/4.jpg?resize&size=15&format=webp");
const img5holder = require("../Img/normal/5.jpg?resize&size=15&format=webp");
const img6holder = require("../Img/normal/6.jpg?resize&size=15&format=webp");

const ListGambar = [
  {
    placeholder: img1holder,
    src: img1,
    alt: "Demonstrasi roket air pada saat pengenalan eskul"
  },
  {
    placeholder: img2holder,
    src: img2,
    alt:
      "Eksperimen odol gajah yang reaksinya mengeluarkan odol yang ada di botol"
  },
  {
    placeholder: img3holder,
    src: img3,
    alt: "Anak kelas 7 ikut serta mencoba eksperimen odol gajah"
  },
  {
    placeholder: img4holder,
    src: img4,
    alt: "Anggota KIR yang melakukan eksperimen 'Nafas api'"
  },
  {
    placeholder: img5holder,
    src: img5,
    alt:
      "Anggota eksperimen meniup selang yg berisi tepung maizena untuk menghasilkan nafas api"
  },
  {
    placeholder: img6holder,
    src: img6,
    alt: "Anggota eksperimen sedang menyiapkan bahan dan alat"
  }
];

module.exports = ListGambar;
