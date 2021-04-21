## sekilas13-ssr | Server Side Rendering

Ini adalah repositori refactor dari website client side rendering. Diubah ke versi server side rendering menggunakan [Next.js](https://nextjs.org/) karena kebutuhan search engine optimization.

### Local Development

Cloning repositori ini ke perangkat lokal.

```sh
git clone https://github.com/sekilas13/sekilas13-ssr.git

# atau versi ssh

git clone git@github.com:sekilas13/sekilas13-ssr.git
```

Masuk ke folder clone tadi dan install development dependencies.

```sh
cd sekilas13-ssr && npm i -D
```

Copy file `.env.example` menjadi `.env.local` dan isi variabel-variabelnya. Contoh :

```
GA_TRACKING_ID=G-XXXX
GOOGLE_VERIF=XXX_XXX-XXX
DEPLOYMENT_BASE_URL=https://sekilas13.vercel.app
```

Jalankan development mode

```sh
npm run dev
```

Bisa dibuka di http://localhost:3000 untuk melihatnya langsung di peramban.
