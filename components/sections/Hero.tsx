"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { stats } from "@/lib/data";

/**
 * Hero Section
 * ------------
 * Section pertama yang dilihat pengunjung. Terdiri dari:
 * - Headline utama
 * - Sub-headline dengan tagline perusahaan
 * - Dua tombol CTA (Call to Action)
 * - Statistik singkat perusahaan
 * - Indikator scroll ke bawah
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-[92vh] flex flex-col justify-center
        bg-[#0a1f44] overflow-hidden
      "
    >
      {/* === BACKGROUND: Pola grid geometris (efek teknis/industrial) === */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196,30,30,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,30,30,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient overlay kiri → tengah agar teks lebih terbaca */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/80 to-transparent" />

      {/* Lingkaran dekoratif di sudut kanan atas */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-[#c41e1e]/20 opacity-40" />
      <div className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full border border-[#c41e1e]/15 opacity-40" />

      {/* Garis vertikal dekoratif kiri */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#c41e1e] to-transparent" />

      {/* === KONTEN UTAMA === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge / Label kecil di atas headline */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-[#c41e1e]" />
            <span className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
              Est. 2004 · ISO Certified
            </span>
          </div>

          {/* Headline utama – menggunakan Bebas Neue agar impactful */}
          <h1
            className="
            font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl
            text-white leading-none tracking-wide
            mb-4
          "
          >
            Trusted Partner
            <br />
            <span className="text-[#c41e1e]">Drilling Fluids &</span>
            <br />
            Cementing
          </h1>

          {/* Sub-headline */}
          <p
            className="
            text-white/70 text-lg sm:text-xl
            max-w-xl leading-relaxed mb-8
          "
          >
            PT Adiguna Cakra Semesta — mitra terpercaya dalam penyediaan jasa
            Drilling-Completion Fluids, Cementing, dan Mud Logging untuk
            industri hulu migas dan geotermal Indonesia.
          </p>

          {/* Dua tombol CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="
                inline-flex items-center gap-2
                bg-[#c41e1e] text-white
                px-7 py-3.5 font-semibold text-sm
                hover:bg-[#a01818] transition-all duration-200
                hover:-translate-y-0.5 active:translate-y-0
                rounded
              "
            >
              Lihat Layanan Kami
              <ArrowRight size={16} />
            </a>
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                border-2 border-white/30 text-white
                px-7 py-3.5 font-semibold text-sm
                hover:border-white hover:bg-white/10
                transition-all duration-200
                rounded
              "
            >
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* === STATISTIK PERUSAHAAN === */}
        <div
          className="
          mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px
          bg-white/10 border border-white/10 rounded overflow-hidden
          max-w-2xl
        "
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="
                bg-[#091532] px-6 py-5
                flex flex-col items-center text-center
                hover:bg-[#0f2449] transition-colors duration-200
              "
            >
              {/* Angka besar menggunakan Bebas Neue */}
              <span
                className="
                font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#c41e1e]
                leading-none
              "
              >
                {stat.value}
              </span>
              <span className="text-white/50 text-xs mt-1 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* === INDIKATOR SCROLL KE BAWAH === */}
      <div
        className="
        absolute bottom-8 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-2 z-10
        animate-bounce
      "
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={20} className="text-white/40" />
      </div>
    </section>
  );
}
