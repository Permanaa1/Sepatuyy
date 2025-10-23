# 🧼 Sepatuyy API

**Sepatuyy API** adalah REST API sederhana untuk layanan **daftar barang cuci sepatu**, dibangun menggunakan **Node.js** dan **Express.js**, dengan penyimpanan data di **Supabase**.  
API ini mendukung operasi **CRUD (Create, Read, Update, Delete)**.

---

## 🚀 Tujuan Proyek

Proyek ini dibuat untuk memenuhi tugas pembuatan **REST API sederhana** menggunakan Node.js dan Express.js dengan database eksternal (Supabase), serta deployment ke Vercel.

API ini dirancang agar pengguna atau admin dapat:
- Menambahkan data sepatu yang sedang dicuci.  
- Melihat seluruh daftar sepatu (dengan opsi filter berdasarkan status).  
- Memperbarui status cucian sepatu.  
- Menghapus data sepatu yang sudah selesai.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|------------|
| ➕ **Create** | Tambah data sepatu baru ke daftar cucian |
| 📋 **Read** | Ambil semua data sepatu atau filter berdasarkan status |
| ✏️ **Update** | Ubah informasi atau status cucian sepatu |
| ❌ **Delete** | Hapus data sepatu dari daftar |
---

## 🧱 Struktur Data

Data disimpan di **Supabase** dengan struktur tabel `items` seperti berikut:

| Kolom | Tipe Data | Deskripsi |
|--------|------------|-----------|
| `id` | integer (auto increment) | ID unik untuk tiap sepatu |
| `customer_name` | varchar | Nama pemilik sepatu |
| `nama` | varchar | Nama atau merek sepatu |
| `status` | varchar | Status pengerjaan (misal: "Menunggu", "Sedang Dicuci", "Selesai") |
| `tanggal_masuk` | date | Tanggal sepatu diterima |
| `tanggal_selesai` | date (nullable) | Tanggal sepatu selesai dicuci |

---

## 🔗 Endpoint API

### 1. **GET /api/item**
Menampilkan seluruh daftar sepatu yang sedang dicuci.  
Tambahkan parameter `status` untuk memfilter data.

**Contoh Request:**
```bash
GET https://sepatuyy.vercel.app/api/item
```

**Contoh Response:**
```json
[
  {
    "id": 1,
    "customer_name": "Budi",
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggal_masuk": "2025-10-01",
    "tanggal_selesai": "2025-10-03"
  }
]
```

---

### 2. **POST /api/item**
Menambahkan data sepatu baru ke daftar cucian.

**Body Request:**
```json
{
  "customer_name": "Budi",
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
```

**Response:**
```json
{
  "message": "Data sepatu berhasil ditambahkan."
}
```

---

### 3. **PUT /api/item/:id**
Memperbarui data sepatu, seperti status atau tanggal selesai.

**Body Request:**
```json
{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
```

**Response:**
```json
{
  "message": "Status sepatu berhasil diperbarui."
}
```

---

### 4. **DELETE /api/item/:id**
Menghapus data sepatu berdasarkan ID.

**Contoh Request:**
```bash
DELETE https://sepatuyy.vercel.app/api/item/1
```

**Response:**
```json
{
  "message": "Data sepatu berhasil dihapus."
}
```

---

## ⚙️ Cara Instalasi & Menjalankan API Secara Lokal

### 1. Clone repository
```bash
git clone https://github.com/Permanaa1/Sepatuyy.git
cd Sepatuyy
```

### 2. Install dependency
```bash
npm install
```

### 3. Buat file `.env` di root folder
Isi dengan konfigurasi Supabase kamu:
```bash
SUPABASE_URL="https://<your-supabase-project>.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="<your-service-role-key>"
PORT=3000
```

### 4. Jalankan server lokal
```bash
npm run dev
```

Server akan berjalan di:
```
http://localhost:3000/api/item
```

---

## 🌐 Deployment ke Vercel

### 1. Login ke Vercel
Masuk ke [https://vercel.com](https://vercel.com) dan hubungkan dengan akun GitHub kamu.

### 2. Deploy proyek
- Pilih repository `Sepatuyy`.
- Tambahkan variabel environment dari `.env` ke menu **Settings → Environment Variables**.
- Klik **Deploy**.

**Contoh URL Deployment:**  
👉 `https://sepatuyy.vercel.app/api/item`

---

## 🧰 Teknologi yang Digunakan
| Teknologi | Deskripsi |
|------------|------------|
| 🟢 **Node.js** | Runtime JavaScript di sisi server |
| ⚙️ **Express.js** | Framework backend REST API |
| 🧩 **Supabase** | Layanan database berbasis PostgreSQL |
| ☁️ **Vercel** | Platform deployment serverless |
| 💾 **JSON** | Format utama pertukaran data antar sistem |

---

## 🧠 Alur Kerja API

1. Pengguna mengirimkan permintaan HTTP (GET, POST, PUT, DELETE) ke server.  
2. Server memproses permintaan menggunakan **Express.js**.  
3. Data disimpan atau diambil dari **Supabase**.  
4. Server mengembalikan respons dalam format **JSON**.  

---

## 👨‍💻 Pengembang

Dibuat oleh **[Razzaq Permana - Kelompok 10]**  
Sebagai bagian dari tugas **Praktikum Pemrograman Perangkat Bergerak – Modul 1: Pembuatan REST API (Express + Supabase)**  

📦 Repository: [https://github.com/Permanaa1/Sepatuyy.git](https://github.com/Permanaa1/Sepatuyy.git)  
🌐 Deployment: [https://sepatuyy.vercel.app/api/item](https://sepatuyy.vercel.app/api/item)

---

## 🏁 Hasil Akhir

Dengan adanya **SepatuYY API**, proses pengelolaan data sepatu menjadi lebih:
- 🧾 **Terstruktur**  
- ⚡ **Cepat**  
- ☁️ **Terintegrasi dengan database cloud (Supabase)**  
- 💡 **Siap dikembangkan ke frontend seperti dashboard web atau aplikasi mobile di masa depan**  

---

**© 2025 – Sepatuyy API**
