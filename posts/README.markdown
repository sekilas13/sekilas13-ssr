# Panduan Kontribusi Tulisan

## Aturan

Anda bebas berkontribusi untuk blog web ini, tetapi dengan catatan :

1. **Dilarang keras** menyebarkan informasi hoax, SARA, konten NSFW, atau apapun yang tidak pantas berada di ruang publik.
2. Informasi yang diberikan bisa dipertanggung-jawabkan kebenarannya. Jika tidak postingan bisa dihapus.
3. Jika tulisan anda juga bersumber dari tulisan orang lain, Cantumkan link ke tulisan yang bersangkutan di akhir tulisan anda.

## Penulisan

### Metadata Tulisan

Metadata adalah informasi tulisan yang wajib anda cantumkan. Format metadata seperti berikut :

```
---
Judul: <Judul>
Deskripsi: <Deskripsi singkat tulisan>
penulis: <Nama anda>
Tanggal: <Tanggal>-<Bulan>-<Tahun>
---
```

Sebagai contoh seperti ini :

```
---
Judul: Postingan Kedua
Deskripsi: Postingan kedua dimana ini cuman contoh
penulis: Ezra Khairan Permana
Tanggal: 2-Januari-2021
---
```

Judul dan deskripsi nantinya akan digunakan di website, Jadi usahakan Judul singkat tetapi langsung ke Topik dari tulisan tersebut.

### Ektensi dan Penamaan File

File yang digunakan dalam penulisan blog adalah [Markdown](https://id.wikipedia.org/wiki/Markdown) dengan ekstensi `.md` di akhir file. Berikan nama file yang relevan dengan judul metadata file dengan pengganti spasi yaitu `-` dengan contoh :

```
reactjs-hook.md
```

Tambahkan file `.md` ke folder saat ini. Jangan menggunakan spasi dalam penamaan file, tulisan anda tidak bisa dibaca oleh sistem.

### Draft

Jika belum yakin dengan tulisan anda, bisa dibuat sebagai draft. Tambahkan prefix `DRAFT-` supaya bisa di-ignore oleh git.

## Preview

Jika anda mengerti cara menjalankan aplikasi [Node.JS](https://nodejs.org/), lakukan instalasi seperti biasa dan jalankan `npm run dev`. Buka website di http://localhost:3000/blog/ dan anda bisa langsung melihat hasilnya di web.
