# PT Adiguna Cakra Semesta — Website Resmi

Website company profile **PT Adiguna Cakra Semesta (PT ACS)**, perusahaan jasa
Drilling-Completion Fluids & Cementing untuk industri hulu migas dan geotermal Indonesia.

## 🛠️ Teknologi

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Font:** Bebas Neue (judul) + Barlow (isi)

## 📁 Struktur Proyek

```
acs-website/
├── app/                    # Halaman-halaman (App Router Next.js)
│   ├── page.tsx            # Landing page utama
│   ├── layout.tsx          # Layout global (Header + Sidebar)
│   ├── laboratory/         # Halaman Laboratorium (/laboratory)
│   ├── clients/            # Halaman Klien & Proyek (/clients)
│   ├── contact/            # Halaman Kontak (/contact)
│   ├── career/             # Halaman Karir (/career)
│   └── api/contact/        # API endpoint form kontak
├── components/
│   ├── Header.tsx          # Navigasi atas (sticky)
│   ├── Sidebar.tsx         # Panel navigasi kiri
│   └── sections/           # Section-section di landing page
├── lib/
│   └── data.ts             # ⭐ Semua konten & data perusahaan
└── public/                 # Aset statis (gambar, logo, dll.)
```

## 🚀 Cara Menjalankan

```bash
# Install dependensi
npm install

# Development (http://localhost:3000)
npm run dev

# Build untuk produksi
npm run build

# Jalankan versi produksi
npm start
```

## ✏️ Cara Update Konten

Semua data perusahaan tersimpan di **`lib/data.ts`**.
Edit file tersebut untuk memperbarui:
- Informasi kontak
- Daftar layanan
- Riwayat proyek
- Peralatan laboratorium
- Dll.

## 📖 Panduan Lengkap

Lihat file **`INSTRUKSI.md`** untuk panduan lengkap mulai dari instalasi,
cara deploy ke Vercel, hingga cara menghubungkan domain via cPanel.

---

© 2024 PT Adiguna Cakra Semesta · [acs-indonesia.com](https://acs-indonesia.com)
