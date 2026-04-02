// app/clients/page.tsx
// Halaman Klien & Pengalaman Proyek PT ACS

import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ArrowLeft,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react";
import { clients, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Klien & Proyek | PT Adiguna Cakra Semesta",
  description:
    "Rekam jejak proyek PT ACS mencakup 28+ kontrak dengan KKKS terkemuka seperti Pertamina, Kondur Petroleum, EMP, dan lainnya sejak tahun 2005.",
};

/**
 * Halaman Klien & Proyek (/clients)
 * -----------------------------------
 * Menampilkan:
 * 1. Daftar mitra/klien yang pernah bekerja sama (dalam bentuk badge/grid)
 * 2. Tabel riwayat proyek lengkap dengan lokasi, tanggal, dan nilai kontrak
 *
 * Ini adalah halaman terpisah yang dapat diakses dari Sidebar,
 * bukan bagian dari landing page.
 */
export default function ClientsPage() {
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
            className="
              inline-flex items-center gap-2 text-white/50 hover:text-white
              text-sm mb-6 transition-colors
            "
          >
            <ArrowLeft size={14} />
            Kembali ke Beranda
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c41e1e] rounded flex items-center justify-center">
              <Briefcase size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
                Rekam Jejak
              </p>
              <h1 className="font-['Bebas_Neue'] text-5xl text-white tracking-wide leading-tight">
                Klien &amp; Proyek
              </h1>
            </div>
          </div>

          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Sejak berdiri pada 2004, PT ACS telah menyelesaikan lebih dari 28
            kontrak kerja dengan KKKS (Kontraktor Kontrak Kerja Sama) terkemuka
            di Indonesia — mencakup wilayah Sumatera, Jawa, Kalimantan, hingga
            Papua.
          </p>

          {/* Statistik cepat */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { label: "Total Proyek", value: "28+" },
              { label: "KKKS Dilayani", value: "12+" },
              { label: "Wilayah Kerja", value: "5 Pulau" },
              { label: "Tahun Aktif", value: "2004–Sekarang" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-['Bebas_Neue'] text-3xl text-[#c41e1e] leading-none">
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== KONTEN UTAMA ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* DAFTAR KLIEN / MITRA */}
        <div className="bg-white rounded border border-[#0a1f44]/10 p-8">
          <h2 className="font-['Bebas_Neue'] text-3xl text-[#0a1f44] tracking-wide mb-2">
            Klien &amp; Mitra Kami
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            PT ACS telah bermitra dengan berbagai KKKS nasional dan
            internasional dalam operasi pengeboran di seluruh kepulauan
            Indonesia.
          </p>
          <div className="flex flex-wrap gap-3">
            {clients.map((client, i) => (
              <span
                key={i}
                className="
                  px-4 py-2.5 border-2 border-[#0a1f44]/15 rounded
                  text-sm font-medium text-[#0a1f44]
                  hover:border-[#c41e1e] hover:bg-[#c41e1e]/5
                  transition-all duration-200 cursor-default
                "
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* TABEL RIWAYAT PROYEK */}
        <div className="bg-white rounded border border-[#0a1f44]/10 overflow-hidden">
          <div className="bg-[#0a1f44] px-6 py-4 flex items-center gap-3">
            <h2 className="text-white font-bold text-sm uppercase tracking-wide">
              Riwayat Proyek (2005 – 2022)
            </h2>
          </div>

          {/* Mobile: Kartu per proyek */}
          <div className="md:hidden divide-y divide-gray-100">
            {projects.map((project) => (
              <div key={project.no} className="p-5 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="
                    w-7 h-7 bg-[#c41e1e] text-white rounded
                    text-xs font-bold flex items-center justify-center flex-shrink-0
                  "
                  >
                    {project.no}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#0a1f44] text-sm leading-tight">
                      {project.company}
                    </p>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                      {project.job}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pl-10">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={11} /> {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={11} /> {project.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0a1f44]">
                    <DollarSign size={11} /> {project.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Tabel */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f0f4fa] border-b border-[#0a1f44]/10">
                  <th className="px-4 py-3 text-left text-xs font-bold text-[#0a1f44] uppercase tracking-wide w-10">
                    No.
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[#0a1f44] uppercase tracking-wide">
                    Perusahaan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[#0a1f44] uppercase tracking-wide">
                    Pekerjaan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[#0a1f44] uppercase tracking-wide">
                    Lokasi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[#0a1f44] uppercase tracking-wide">
                    Tanggal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((project, idx) => (
                  <tr
                    key={project.no}
                    className={`
                      hover:bg-[#f0f4fa] transition-colors
                      ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    `}
                  >
                    <td className="px-4 py-3.5">
                      <span
                        className="
                        w-6 h-6 bg-[#c41e1e]/10 text-[#c41e1e]
                        text-xs font-bold rounded
                        flex items-center justify-center
                      "
                      >
                        {project.no}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-medium text-[#0a1f44] text-xs">
                      {project.company}
                    </td>
                    <td className="px-4 py-3.5 text-gray-600 text-xs max-w-xs leading-snug">
                      {project.job}
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={10} />
                        {project.location}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">
                      {project.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Bawah */}
        <div className="text-center py-6">
          <p className="text-gray-500 text-sm mb-4">
            Tertarik bergabung sebagai mitra operasional kami?
          </p>
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              bg-[#0a1f44] text-white
              px-8 py-3 font-semibold text-sm rounded
              hover:bg-[#c41e1e] transition-colors duration-200
            "
          >
            Hubungi Tim Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
