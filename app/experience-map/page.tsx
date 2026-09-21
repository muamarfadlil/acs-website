// app/experience-map/page.tsx
// Halaman Peta Sebaran Pengalaman Kerja PT ACS

"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MapPinned, ArrowLeft } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExperienceMapWidget = dynamic(() => import("./ExperienceMapWidget"), {
  ssr: false,
  loading: () => (
    <div className="h-[78vh] min-h-[560px] max-h-[860px] w-full rounded-xl border border-[#0a1f44]/10 dark:border-white/10 bg-white dark:bg-[#0a1f44] flex items-center justify-center">
      <p className="text-gray-400 dark:text-white/40 text-sm">Memuat peta…</p>
    </div>
  ),
});

export default function ExperienceMapPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollReveal(contentRef);

  return (
    <div className="min-h-screen bg-[#f0f4fa] dark:bg-[#091832] transition-colors duration-300">
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
              <MapPinned size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
                Rekam Jejak
              </p>
              <h1 className="font-['Bebas_Neue'] text-5xl text-white tracking-wide leading-tight">
                Peta Sebaran Pengalaman Kerja
              </h1>
            </div>
          </div>

          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Jelajahi sebaran kontrak layanan Drilling &amp; Completion Fluids maupun Cementing
            PT ACS di seluruh Indonesia secara interaktif — pilih kategori layanan, klik wilayah
            pada peta, atau cari klien, lokasi, maupun provinsi untuk melihat detail riwayat kerja.
          </p>
        </div>
      </div>

      {/* ===== KONTEN UTAMA ===== */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="reveal">
          <ExperienceMapWidget />
        </div>
      </div>
    </div>
  );
}
