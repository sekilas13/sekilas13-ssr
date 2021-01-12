---
Judul: Instalasi Palapa versi Desktop
Deskripsi: Penjelasan tentang cara bagaimana melakukan instalasi Palapa Chat App versi desktop, terkhusus untuk sistem operasi linux.
Penulis: Ezra Khairan Permana
TanggalDibuat: 12-1-2021 22:09
---

# Palapa, apa itu ?

[Palapa](https://landing.xecure.world/) adalah aplikasi perpesanan lokal buatan asli Indonesia yang dikembangkan oleh start up local [XecureIT](https://xecureit.com/). Aplikasi ini memiliki sederet fitur yang memiliki keamanan yang tinggi seperti Enkripsi Chat, Relay panggilan telepon, Keamanan Layar, Pin Anti pembajakan, dan lain-lain. Aplikasi ini sudah support diberbagai platform, dari di perangkat mobile maupun komputer.

## Instalasi Palapa

Jika anda mengunjungi website resmi [palapa](https://landing.xecure.world/), anda akan mendapatkan tiga pilihan menu instalasi yaitu Android, iPhone, dan Desktop. Untuk mendapatkan file desktop, kunjungi [https://landing.xecure.world/palapa/](https://landing.xecure.world/palapa/).

- Jika sistem operasi anda Windows, klik `windows`, dan klik file `exe` di browser
- Jika sistem operasi anda Windows, klik `mac`, dan klik file `dmg` di browser

Untuk sistem operasi Windows dan OS X (mac), instalasi tergolong cukup mudah. Tinggal klik-klik, selesai.

### Linux

Untuk sistem operasi linux umum, proses ini agak berbeda dengan yang lain, karena ini sepertinya versi `linux-unpacked` dari aplikasi (ElectronJS)[https://www.electronjs.org/] yang sudah di build (dilihat dari hasil extract download, ada sebuah file lisensi `LICENSE.electron.txt`, dimana electron sendiri dibuat oleh github). Ikuti langkah instalasi berikut ini.

1. #### Buka Terminal

Buka terminal dengan kombinasi tombol `Ctrl+Alt+T` atau `Cmd+Alt+T` untuk pengguna Mac.

2. #### Unduh file .tar.gz

Anda bisa mendownload file dengan klik file langsung di browser, tapi saya merekomendasikan dengan `wget`. Lakukan :

```sh
wget https://landing.xecure.world/palapa/linux/palapa-desktop-release-2.1.2-756079983-24-Sep-2020-17-41.tar.gz
```

> Catatan: Cek kembali ke link instalasi, sewaktu-waktu nama file akan berubah.

3. #### Extract file .tar.gz

Extract file .tar.gz ke folder `/tmp` untuk menyimpan sementara folder extract. Lakukan :

```sh
tar -zxvf palapa-desktop-release-2.1.2-756079983-24-Sep-2020-17-41.tar.gz -C /tmp
```

4. #### Ubah nama folder release menjadi Palapa

File hasil extract akan memiliki output folder `release`, nama folder seharusnya diubah. Lakukan :

```sh
mv /tmp/release /tmp/Palapa
```

5. #### Set Folder Palapa Menjadi SuperUser (sudo)

Palapa yang sudah tadi diekstrak akan berada di folder `/tmp/Palapa`. Supaya bisa diinstall ke sistem, ubah usernya menjadi sudo. Lakukan :

```sh
sudo chown -R root:root /tmp/Palapa
```

6. ### Pindahkan ke Folder `/opt`

Tujuan file dipindah ke folder `opt` supaya folder asli dari Palapa tidak mudah diubah-ubah dan tidak mengganggu symbolic link ke file instance palapa. Lakukan :

```sh
sudo mv /tmp/Palapa /opt/
```

7. ### Tambahkan Palapa ke System Path

Supaya bisa diakses, tambahkan symbolic link ke `/usr/bin`. Jalankan perintah ini.

```sh
sudo ln -s /opt/Palapa/linux-unpacked/palapa-desktop /usr/bin/palapa
```

### Menjalankannya

Karena sudah ditambahkan ke system path, file ini sudah bisa diakses dari terminal dengan menjalankan :

```sh
palapa
```

## Sumber Tulisan

- [https://www.pendrivelinux.com/how-to-open-a-tar-file-in-unix-or-linux/](https://www.pendrivelinux.com/how-to-open-a-tar-file-in-unix-or-linux/)
- [https://tekno.tempo.co/read/1389942/songsong-sumpah-pemuda-aplikasi-palapa-siap-menantang-whatsapp/full&view=ok](https://tekno.tempo.co/read/1389942/songsong-sumpah-pemuda-aplikasi-palapa-siap-menantang-whatsapp/full&view=ok)
- [https://sekilas13.vercel.app/blog/mxlinux-telegram](https://sekilas13.vercel.app/blog/mxlinux-telegram) => Sumber Utama

## Pranala Menarik

- [https://www.youtube.com/watch?v=u134QX3ZKg8](https://www.youtube.com/watch?v=u134QX3ZKg8)
- [https://www.youtube.com/watch?v=QVrhtoVQHko](https://www.youtube.com/watch?v=QVrhtoVQHko)
