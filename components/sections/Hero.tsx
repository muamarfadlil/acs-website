"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center bg-[#0a1f44] overflow-hidden"
    >
      {/* === BACKGROUND: Pola grid geometris === */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196,30,30,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,30,30,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial glow merah di balik konten kiri */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-[#c41e1e]/8 blur-3xl pointer-events-none" />

      {/* Gradient overlay kiri → tengah */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/85 to-[#0d2559]/40" />

      {/* Gradient overlay bawah untuk fade ke section berikutnya */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#091532] to-transparent" />

      {/* Lingkaran dekoratif kanan atas */}
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full border border-[#c41e1e]/15 animate-pulse-slow" />
      <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-[#c41e1e]/10 animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      {/* Garis vertikal dekoratif kiri */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#c41e1e] to-transparent opacity-80" />

      {/* === KONTEN UTAMA === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-[#c41e1e]" />
            <span className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
              Est. 2004 · ISO Certified
            </span>
          </div>

          {/* Headline */}
          <h1
            className="
              font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl
              text-white leading-none tracking-wide mb-4
              drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]
            "
          >
            Trusted Partner
            <br />
            <span className="text-[#c41e1e]">Drilling Fluids &</span>
            <br />
            Cementing
          </h1>

          {/* Sub-headline */}
          <p className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-8">
            PT Adiguna Cakra Semesta — mitra terpercaya dalam penyediaan jasa
            Drilling-Completion Fluids, Cementing, dan Mud Logging untuk
            industri hulu migas dan geotermal Indonesia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="
                inline-flex items-center gap-2
                bg-[#c41e1e] text-white
                px-7 py-3.5 font-semibold text-sm rounded
                shadow-[0_4px_20px_rgba(196,30,30,0.4)]
                hover:bg-[#a01818] hover:-translate-y-0.5
                hover:shadow-[0_8px_28px_rgba(196,30,30,0.5)]
                active:translate-y-0
                transition-all duration-200
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
                px-7 py-3.5 font-semibold text-sm rounded
                hover:border-white hover:bg-white/10
                hover:-translate-y-0.5
                transition-all duration-200
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
            max-w-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)]
          "
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="
                bg-[#091532] px-6 py-5
                flex flex-col items-center text-center
                hover:bg-[#0f2855] transition-colors duration-250
                group cursor-default
              "
            >
              <span
                className="
                  font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#c41e1e]
                  leading-none group-hover:scale-105 transition-transform duration-200
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

      {/* === INDIKATOR SCROLL === */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}
