// app/laboratory/page.tsx
// Halaman terpisah untuk fasilitas laboratorium PT ACS

import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, Monitor, ArrowLeft, CheckCircle2 } from "lucide-react";
import { labEquipment, software, personnel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fasilitas Laboratorium | PT Adiguna Cakra Semesta",
  description:
    "Laboratorium drilling fluids PT ACS dilengkapi dengan peralatan uji modern termasuk Fann iX 77, HTHP, Linear Swelling Meter, dan software Pegasus Vertex.",
};

/**
 * Halaman Laboratorium (/laboratory)
 * ------------------------------------
 * Halaman ini berdiri sendiri (terpisah dari landing page).
 * Menampilkan detail fasilitas laboratorium, peralatan pengujian,
 * software yang digunakan, dan susunan personel di lapangan.
 *
 * Halaman ini dapat diakses melalui Sidebar navigasi.
 */
export default function LaboratoryPage() {
  return (
    <div className="min-h-screen bg-[#f0f4fa]">

      {/* ===== HERO HALAMAN ===== */}
      <div className="bg-[#0a1f44] relative overflow-hidden">
        {/* Pattern */}
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
          {/* Breadcrumb */}
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
            <div className="
              w-12 h-12 bg-[#c41e1e] rounded
              flex items-center justify-center
            ">
              <FlaskConical size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
                Fasilitas
              </p>
              <h1 className="
                font-['Bebas_Neue'] text-5xl text-white tracking-wide leading-tight
              ">
                Laboratorium
              </h1>
            </div>
          </div>

          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Laboratorium PT ACS berlokasi di kantor pusat BSD, Tangerang Selatan.
            Dilengkapi dengan peralatan uji berstandar API dan software dari Pegasus Vertex, Inc.
            untuk mendukung perencanaan dan pemantauan fluida pemboran.
          </p>
        </div>
      </div>

      {/* ===== KONTEN UTAMA ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ===== KOLOM KIRI (2/3): Peralatan & Software ===== */}
          <div className="lg:col-span-2 space-y-8">

            {/* PERALATAN LAB */}
            <div className="bg-white rounded border border-[#0a1f44]/10 overflow-hidden">
              <div className="bg-[#0a1f44] px-6 py-4 flex items-center gap-3">
                <FlaskConical size={18} className="text-[#c41e1e]" />
                <h2 className="text-white font-bold text-sm uppercase tracking-wide">
                  Peralatan Pengujian (Testing Equipment)
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Laboratorium kami dilengkapi dengan peralatan uji berstandar API yang
                  memungkinkan analisis fluida pemboran secara komprehensif — mulai dari
                  viskositas, filtrasi, hingga pengujian HTHP (High Temperature High Pressure).
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {labEquipment.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex items-start gap-2.5
                        p-3 rounded bg-[#f0f4fa]
                        border border-[#0a1f44]/5
                        hover:border-[#c41e1e]/20 transition-colors
                      "
                    >
                      <CheckCircle2 size={14} className="text-[#c41e1e] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SOFTWARE */}
            <div className="bg-white rounded border border-[#0a1f44]/10 overflow-hidden">
              <div className="bg-[#1a3a6e] px-6 py-4 flex items-center gap-3">
                <Monitor size={18} className="text-[#c41e1e]" />
                <h2 className="text-white font-bold text-sm uppercase tracking-wide">
                  Software Teknis
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  PT ACS menggunakan software dari Pegasus Vertex, Inc. — pemimpin industri
                  dalam solusi perangkat lunak untuk teknik fluida pemboran.
                </p>
                <div className="space-y-4">
                  {software.map((sw, i) => (
                    <div
                      key={i}
                      className="
                        flex items-start gap-4 p-4 rounded
                        bg-[#0a1f44] border border-white/10
                        hover:border-[#c41e1e]/30 transition-colors group
                      "
                    >
                      <div className="
                        w-10 h-10 bg-[#c41e1e] rounded flex-shrink-0
                        flex items-center justify-center
                      ">
                        <span className="text-white font-bold text-xs">
                          {sw.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{sw.name}</p>
                        <p className="text-white/40 text-xs">{sw.vendor}</p>
                        <p className="text-white/60 text-xs mt-1">{sw.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== KOLOM KANAN (1/3): Personel & Fasilitas ===== */}
          <div className="space-y-6">

            {/* LOKASI FASILITAS */}
            <div className="bg-white rounded border border-[#0a1f44]/10 p-6">
              <h3 className="font-bold text-[#0a1f44] text-sm mb-4 uppercase tracking-wide">
                Lokasi Fasilitas
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[#c41e1e] uppercase tracking-wide mb-1">
                    Laboratorium
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Paris Square Blok B2 No. 38–40, Jl. Letnan Sutopo, BSD,
                    Tangerang Selatan 15321
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-[#0a1f44] uppercase tracking-wide mb-1">
                    Gudang 1
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Pergudangan Pantai Indah Dadap, Blok CG No. 11, Tangerang
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-[#0a1f44] uppercase tracking-wide mb-1">
                    Gudang 2
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Pergudangan Bizhub Blok GG No. 11, Gunung Sindur, Bogor
                  </p>
                </div>
              </div>
            </div>

            {/* PERSONEL DI LAPANGAN */}
            <div className="bg-[#0a1f44] rounded overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                  Personel di Lapangan
                </h3>
              </div>
              <div className="divide-y divide-white/5">
                {personnel.map((p, i) => (
                  <div
                    key={i}
                    className="
                      flex items-center justify-between
                      px-6 py-3.5 hover:bg-white/5 transition-colors
                    "
                  >
                    <span className="text-white/70 text-xs leading-snug">
                      {p.role}
                    </span>
                    <span className="
                      text-[#c41e1e] font-['Bebas_Neue'] text-lg
                      leading-none
                    ">
                      {p.count}
                    </span>
                  </div>
                ))}
                {/* Total */}
                <div className="
                  flex items-center justify-between px-6 py-3.5
                  bg-[#c41e1e]
                ">
                  <span className="text-white text-xs font-bold">Total Personel</span>
                  <span className="text-white font-['Bebas_Neue'] text-lg leading-none">
                    {personnel.reduce((sum, p) => sum + p.count, 0)}+
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#f0f4fa] border border-[#0a1f44]/10 rounded p-5 text-center">
              <p className="text-[#0a1f44] font-bold text-sm mb-2">
                Butuh Konsultasi Teknis?
              </p>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                Tim ahli kami siap membantu Anda memilih solusi yang tepat.
              </p>
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-2
                  bg-[#c41e1e] text-white
                  px-5 py-2.5 text-xs font-semibold rounded
                  hover:bg-[#a01818] transition-colors
                "
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
