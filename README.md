# Guess The Number - Node.js Mini Game

## Deskripsi
Guess The Number adalah game sederhana berbasis web yang dibuat menggunakan Node.js. Pemain harus menebak angka acak yang dipilih oleh komputer antara 1 sampai 100.

Game ini dibuat sebagai tugas praktik pengganti mata kuliah **Service** pada tanggal 26 Oktober 2026.

## Fitur
- Menebak angka secara acak dari 1–100.
- Petunjuk jika tebakan terlalu besar atau terlalu kecil.
- Penghitung jumlah percobaan.
- Notifikasi ketika pemain berhasil menebak angka.
- Tombol untuk memulai permainan baru.
- Validasi input angka.
- Tampilan modern dengan tema dark mode.

## Teknologi yang Digunakan
- **Node.js** – Backend dan HTTP Server.
- **HTML** – Struktur halaman game.
- **CSS** – Desain dan tampilan antarmuka.
- **JavaScript** – Logika permainan dan interaksi.
- **Fetch API** – Komunikasi antara frontend dan backend.
- **JSON** – Format pertukaran data.

## Struktur Project

```text
Tugas-Service-NodeJS/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── package.json
└── server.js
```

## Cara Menjalankan Project

1. Pastikan Node.js sudah terinstal di komputer.
2. Clone repository:

```bash
git clone URL_REPOSITORY
```

3. Masuk ke folder project:

```bash
cd Tugas-Service-NodeJS
```

4. Jalankan server:

```bash
node server.js
```

5. Buka browser dan akses:

```text
http://localhost:3000
```

## Endpoint API

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/new-game` | Memulai permainan baru |
| POST | `/api/guess` | Mengirim dan memeriksa tebakan |

## Tujuan Pembelajaran

Melalui project ini, mahasiswa dapat memahami dasar penggunaan Node.js, pembuatan HTTP Server, pengelolaan request dan response, pembuatan API sederhana, serta komunikasi antara frontend dan backend menggunakan JSON.

## Mata Kuliah
**Aplikasi Berbasis Service**

Universitas Nahdlatul Ulama Indonesia (UNUSIA)

## Pengembang
Gibran Wicaksono

Teknik Informatika

---