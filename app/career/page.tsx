// app/career/page.tsx
// Halaman Karir PT ACS

import type { Metadata } from "next";
import Link from "next/link";
import { UserCheck, ArrowLeft, Briefcase, MapPin, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Karir | PT Adiguna Cakra Semesta",
  description:
    "Bergabunglah dengan tim profesional PT ACS. Kami mencari individu berpengalaman di bidang teknik fluida pemboran, sementasi, dan mud logging.",
};

// Data posisi yang sedang dibuka
// Perbarui array ini sesuai kebutuhan rekrutmen terkini
const openings = [
  {
    id: 1,
    title: "Senior Fluid Engineer",
    department: "Operations",
    location: "Lapangan (Sumatera / Kalimantan / Papua)",
    type: "Penuh Waktu",
    experience: "Min. 5 tahun pengalaman di drilling fluids",
    description:
      "Bertanggung jawab atas perencanaan, pemantauan, dan evaluasi sistem fluida pemboran di lokasi pengeboran. Memastikan parameter lumpur sesuai dengan program pengeboran yang telah disetujui.",
    requirements: [
      "S1 Teknik Perminyakan / Kimia / terkait",
      "Min. 5 tahun pengalaman sebagai Mud Engineer",
      "Memahami sistem WBM dan OBM",
      "Menguasai software HydPRO / MudPRO (nilai lebih)",
      "Bersedia ditempatkan di seluruh wilayah Indonesia",
    ],
  },
  {
    id: 2,
    title: "Junior Fluid Engineer",
    department: "Operations",
    location: "Lapangan (Berbagai Lokasi)",
    type: "Penuh Waktu",
    experience: "Fresh graduate / Maks. 2 tahun pengalaman",
    description:
      "Mendukung operasi fluida pemboran di bawah supervisi Senior Fluid Engineer. Melakukan pengujian lumpur harian, mencatat data, dan menyiapkan laporan rutin.",
    requirements: [
      "S1 Teknik Perminyakan / Kimia / Geologi",
      "IPK min. 3.00",
      "Fresh graduate atau maks. 2 tahun pengalaman",
      "Kemampuan analisis laboratorium dasar",
      "Mampu bekerja di bawah tekanan dan di luar kantor",
    ],
  },
  {
    id: 3,
    title: "Cementing Engineer",
    department: "Operations",
    location: "Lapangan (Sumatera / Kalimantan)",
    type: "Penuh Waktu",
    experience: "Min. 3 tahun pengalaman sementasi sumur",
    description:
      "Merancang dan melaksanakan operasi sementasi sumur, termasuk perhitungan volume semen, tekanan pompa, dan evaluasi hasil pekerjaan.",
    requirements: [
      "S1 Teknik Perminyakan atau terkait",
      "Min. 3 tahun pengalaman di cementing services",
      "Memahami operasi primary dan remedial cementing",
      "Kemampuan membaca well schematic dan program sementasi",
    ],
  },
  {
    id: 4,
    title: "Laboratory Technician",
    department: "Laboratory",
    location: "BSD, Tangerang Selatan (Kantor Pusat)",
    type: "Penuh Waktu",
    experience: "Min. 1 tahun pengalaman lab",
    description:
      "Bertanggung jawab atas pengujian dan analisis sampel lumpur, pemeliharaan peralatan laboratorium, dan penyusunan laporan hasil uji.",
    requirements: [
      "D3/S1 Teknik Kimia / Analis Kimia / terkait",
      "Min. 1 tahun pengalaman di laboratorium teknis",
      "Mampu mengoperasikan peralatan uji API (Fann, filtration press, dll.)",
      "Teliti dan terorganisir dalam pendokumentasian",
    ],
  },
  {
    id: 5,
    title: "Business Development Executive",
    department: "Business Development",
    location: "BSD, Tangerang Selatan (Kantor Pusat)",
    type: "Penuh Waktu",
    experience: "Min. 3 tahun pengalaman BD di industri migas",
    description:
      "Mengidentifikasi peluang bisnis baru, mengelola hubungan dengan klien eksisting, menyiapkan proposal tender, dan memimpin negosiasi kontrak.",
    requirements: [
      "S1 semua jurusan (teknik / bisnis lebih disukai)",
      "Min. 3 tahun pengalaman BD di sektor migas/EPC",
      "Memiliki jaringan yang luas di KKKS dan kontraktor migas",
      "Kemampuan komunikasi dan presentasi yang sangat baik",
      "Menguasai Microsoft Office dan penyusunan dokumen tender",
    ],
  },
];

const benefits = [
  "Gaji kompetitif sesuai pengalaman",
  "Tunjangan lapangan (untuk posisi operasional)",
  "BPJS Kesehatan & Ketenagakerjaan",
  "Asuransi tambahan",
  "Pelatihan teknis berkala",
  "Lingkungan kerja profesional",
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-[#f0f4fa]">

      {/* ===== HERO HALAMAN ===== */}
      <div className="bg-[#0a1f44] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(196,30,30,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196,30,30,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Kembali ke Beranda
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c41e1e] rounded flex items-center justify-center">
              <UserCheck size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
                Bergabung Bersama Kami
              </p>
              <h1 className="font-['Bebas_Neue'] text-5xl text-white tracking-wide leading-tight">
                Karir
              </h1>
            </div>
          </div>

          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            PT ACS terdiri dari para profesional berpengalaman yang berdedikasi di bidang
            teknik fluida pemboran dan sementasi. Kami selalu mencari individu berbakat
            untuk bergabung dan berkembang bersama kami.
          </p>
        </div>
      </div>

      {/* ===== KONTEN ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ===== DAFTAR LOWONGAN (2/3) ===== */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="font-['Bebas_Neue'] text-3xl text-[#0a1f44] tracking-wide">
              Posisi yang Tersedia
            </h2>
            <p className="text-gray-500 text-sm -mt-2">
              {openings.length} posisi terbuka · Diperbarui April 2024
            </p>

            {openings.map((job) => (
              <div
                key={job.id}
                className="
                  bg-white rounded border border-[#0a1f44]/10 overflow-hidden
                  hover:border-[#c41e1e]/30 hover:shadow-md
                  transition-all duration-200 group
                "
              >
                {/* Header kartu */}
                <div className="p-5 pb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-[#0a1f44] text-base leading-tight">
                        {job.title}
                      </h3>
                      <p className="text-[#c41e1e] text-xs font-semibold mt-0.5">
                        {job.department}
                      </p>
                    </div>
                    <span className="
                      flex-shrink-0 px-2.5 py-1 bg-[#0a1f44]/10 text-[#0a1f44]
                      text-xs font-semibold rounded
                    ">
                      {job.type}
                    </span>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-gray-500 text-xs">
                      <MapPin size={11} /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-gray-500 text-xs">
                      <Clock size={11} /> {job.experience}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Persyaratan (collapsible-style, tapi disimpan semuanya) */}
                <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                  <p className="text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-2.5">
                    Persyaratan
                  </p>
                  <div className="space-y-1.5">
                    {job.requirements.map((req, ri) => (
                      <div key={ri} className="flex items-start gap-2 text-xs text-gray-600">
                        <ChevronRight size={12} className="text-[#c41e1e] flex-shrink-0 mt-0.5" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tombol Apply */}
                <div className="px-5 pb-5">
                  <Link
                    href={`/contact?subject=Lamaran: ${encodeURIComponent(job.title)}`}
                    className="
                      inline-flex items-center gap-2
                      bg-[#0a1f44] text-white
                      px-5 py-2.5 text-xs font-semibold rounded
                      hover:bg-[#c41e1e] transition-colors duration-200
                      group-hover:bg-[#c41e1e]
                    "
                  >
                    Lamar Posisi Ini
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ===== SIDEBAR (1/3): Benefit & Info ===== */}
          <div className="space-y-6">

            {/* Keuntungan bekerja di ACS */}
            <div className="bg-white rounded border border-[#0a1f44]/10 p-6">
              <h3 className="font-bold text-[#0a1f44] text-sm uppercase tracking-wide mb-4">
                Keuntungan Bergabung
              </h3>
              <div className="space-y-2.5">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <div className="
                      w-4 h-4 bg-[#c41e1e] rounded-full flex-shrink-0
                      flex items-center justify-center mt-0.5
                    ">
                      <span className="text-white text-[8px] font-bold">✓</span>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Cara Melamar */}
            <div className="bg-[#0a1f44] rounded p-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
                Cara Melamar
              </h3>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Pilih posisi yang sesuai" },
                  { step: "2", text: 'Klik tombol "Lamar Posisi Ini"' },
                  { step: "3", text: "Isi form dengan data lengkap" },
                  { step: "4", text: "Lampirkan CV dan portofolio jika ada" },
                  { step: "5", text: "Tim HR akan menghubungi dalam 5–7 hari kerja" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="
                      w-5 h-5 bg-[#c41e1e] text-white rounded-full
                      text-[10px] font-bold flex items-center justify-center
                      flex-shrink-0 mt-0.5
                    ">
                      {item.step}
                    </span>
                    <p className="text-white/70 text-xs leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kirim CV Spontan */}
            <div className="bg-[#f0f4fa] border border-[#0a1f44]/10 rounded p-5 text-center">
              <Briefcase size={24} className="text-[#c41e1e] mx-auto mb-3" />
              <p className="font-bold text-[#0a1f44] text-sm mb-2">
                Tidak Ada Posisi yang Cocok?
              </p>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                Kirim CV Anda secara spontan. Kami akan menyimpannya untuk
                peluang yang sesuai di masa mendatang.
              </p>
              <a
                href="mailto:adiguna@acs-indonesia.com?subject=CV%20Spontan%20-%20[Nama%20Anda]"
                className="
                  inline-flex items-center gap-2
                  bg-[#0a1f44] text-white
                  px-5 py-2.5 text-xs font-semibold rounded
                  hover:bg-[#c41e1e] transition-colors duration-200
                "
              >
                Kirim CV via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
