---
Judul: Instalasi Telegram Desktop di MX Linux 19.3
Deskripsi: Tutorial bagaimana cara menginstall Telegram di MX Linux 19.3 Patito Feo dengan benar.
Penulis: Ezra Khairan Permana
TanggalDibuat: 5-1-2021 21:55
TanggalDiubah: 7-1-2021 10:43
---

# Apa itu Telegram

[Telegram](https://telegram.org/) adalah aplikasi berkirim pesan yang cukup cepat dan juga aman. Aplikasi ini bisa mengirim pesan, foto, video dan file dengan tipe apapun hingga 1,5 Gigabyte. Aplikasi ini bersifat multiplatform, bisa digunakan di perangkat selular ([Android](<https://id.wikipedia.org/wiki/Android_(operating_system)>), [IOS](https://id.wikipedia.org/wiki/IOS)) dan juga perangkat komputer ([Windows](https://id.wikipedia.org/wiki/Microsoft_Windows), [OS X](https://id.wikipedia.org/wiki/OS_X), [Linux](https://id.wikipedia.org/wiki/Linux)). Aplikasi ini berbasis awan, artinya kamu bisa mengakses telegram dari perangkat manapun tanpa harus perangkat utama yang mendaftarkan terhubung ke internet.

## Instalasi di MX Linux

1. ### Unduh File Tar Telegram

Buka [https://desktop.telegram.org/](https://desktop.telegram.org/) dan dapatkan File `.tar.xz` yang nanti digunakan.

2. ### Buka Terminal

Buka terminal dengan kombinasi tombol `Ctrl+Alt+T` atau `Cmd+Alt+T` untuk pengguna Mac.

3. ### Ekstrak File

Ekstrak file yang tadi sudah didownload, arahkan ke folder file berada dan lakukan

```sh
tar xvf tsetup*.tar.xz -C /tmp/
```

4. ### Set Folder Telegram Sebagai SuperUser (sudo)

Telegram yang sudah tadi diekstrak akan berada di folder `/tmp/Telegram`. Supaya bisa diinstall ke sistem, ubah usernya menjadi sudo.

```sh
sudo chown -R root:root /tmp/Telegram
```

5. ### Pindahkan ke Folder `/opt`

Tujuan file dipindah ke folder `opt` supaya file asli dari Telegram tidak mudah diubah-ubah dan tidak mengganggu symbolic link ke file instance telegram. Jalankan perintah ini.

```sh
sudo mv /tmp/Telegram /opt/
```

6. ### Tambahkan Telegram ke System Path

Supaya bisa diakses, tambahkan symbolic link ke `/usr/local/bin`. Jalankan perintah ini.

```sh
sudo ln -s /opt/Telegram/Telegram /usr/local/bin/Telegram
```

## Sumber Tulisan

- [https://tutorialforlinux.com/2019/07/29/how-to-install-telegram-on-mx-linux-easy-guide/](https://tutorialforlinux.com/2019/07/29/how-to-install-telegram-on-mx-linux-easy-guide/)
- [https://id.wikipedia.org/wiki/Telegram\_(aplikasi)](<https://id.wikipedia.org/wiki/Telegram_(aplikasi)>)

## Pranala Menarik

- [https://www.centerklik.com/apa-aplikasi-telegram-cara-menggunakan-telegram/](https://www.centerklik.com/apa-aplikasi-telegram-cara-menggunakan-telegram/)
- [https://www.brilio.net/gadget/10-keunggulan-telegram-dibandingkan-whatsapp-yang-jarang-orang-tahu-1605055.html](https://www.brilio.net/gadget/10-keunggulan-telegram-dibandingkan-whatsapp-yang-jarang-orang-tahu-1605055.html)
- [https://kirim.email/aplikasi-telegram-dan-5-kelebihannya/](https://kirim.email/aplikasi-telegram-dan-5-kelebihannya/)
