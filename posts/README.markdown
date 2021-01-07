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
Penulis: <Nama anda>
TanggalDibuat: <Tanggal>-<Bulan>-<Tahun> <Jam>:<Menit>
TanggalDiubah: <Tanggal>-<Bulan>-<Tahun> <Jam>:<Menit>
---
```

Format penanggalan :

```
TanggalDibuat: DD-MM-YYYY HH:MM
TanggalDiubah: DD-MM-YYYY HH:MM
```

Keterangan:

- `DD` Date (tanggal)
- `MM` Month (Bulan)
- `YYYY` Year (Tahun)
- `HH` Hour (Jam)
- `MM` Minute (Menit)

Sebagai contoh seperti ini :

```
---
Judul: Postingan Kedua
Deskripsi: Postingan kedua dimana ini cuman contoh
Penulis: Ezra Khairan Permana
TanggalBuat: 2-1-2021 14:42
TanggalDiubah: 7-1-2021 10:43
---
```

Properti `TanggalDiubah` ditambahkan jika ada perubahan pada konten, jika tulisan tersebut tulisan baru, tidak usah menambahkan `TanggalDiubah`. Judul dan deskripsi nantinya akan digunakan di website, Jadi usahakan Judul singkat tetapi langsung ke Topik dari tulisan tersebut.

> Waktu yang digunakan adalah [Waktu Indonesia Barat UTC+07:00](https://id.wikipedia.org/wiki/UTC%2B07:00)

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
