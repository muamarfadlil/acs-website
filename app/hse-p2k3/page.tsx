// app/hse-p2k3/page.tsx
// Halaman dokumentasi kegiatan CSR (Corporate Social Responsibility) & P2K3

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HeartHandshake,
  ArrowLeft,
  MapPin,
  Calendar,
  Mic,
} from "lucide-react";
import { csrK3Activities } from "@/lib/data";

const categoryLabel: Record<string, string> = {
  csr: "CSR",
  k3: "P2K3",
};

const categoryStyle: Record<string, string> = {
  csr: "bg-[#c41e1e]/10 text-[#c41e1e] border-[#c41e1e]/20",
  k3: "bg-[#1a3a6e]/10 text-[#1a3a6e] dark:bg-white/10 dark:text-white border-[#1a3a6e]/20 dark:border-white/20",
};

type CategoryFilter = "all" | "csr" | "k3";
type YearFilter = "all" | number;

export default function HseP2k3Page() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [year, setYear] = useState<YearFilter>("all");

  const years = useMemo(
    () =>
      Array.from(new Set(csrK3Activities.map((a) => a.year))).sort(
        (a, b) => b - a,
      ),
    [],
  );

  const filtered = csrK3Activities.filter(
    (a) =>
      (category === "all" || a.category === category) &&
      (year === "all" || a.year === year),
  );

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
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Kembali ke Beranda
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c41e1e] rounded flex items-center justify-center">
              <HeartHandshake size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
                Tanggung Jawab Sosial
              </p>
              <h1 className="font-['Bebas_Neue'] text-5xl text-white tracking-wide leading-tight">
                HSE &amp; P2K3
              </h1>
            </div>
          </div>

          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Dokumentasi kegiatan Corporate Social Responsibility (CSR) dan
            Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) PT Adiguna
            Cakra Semesta — komitmen kami terhadap masyarakat sekitar dan
            kesejahteraan karyawan.
          </p>
        </div>
      </div>

      {/* ===== FILTER ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {(["all", "csr", "k3"] as CategoryFilter[]).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`
                px-4 py-2 text-xs font-semibold rounded transition-all duration-200
                ${
                  category === c
                    ? "bg-[#0a1f44] dark:bg-white/10 text-white border border-transparent dark:border-white/20"
                    : "bg-white dark:bg-white/5 text-[#0a1f44] dark:text-white/70 border border-[#0a1f44]/10 dark:border-white/10 hover:border-[#c41e1e]/40"
                }
              `}
            >
              {c === "all" ? "Semua Kategori" : categoryLabel[c]}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-[#0a1f44]/10 dark:bg-white/10 hidden sm:block" />

        <div className="flex flex-wrap gap-2">
          {(["all", ...years] as YearFilter[]).map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`
                px-4 py-2 text-xs font-semibold rounded transition-all duration-200
                ${
                  year === y
                    ? "bg-[#c41e1e] text-white"
                    : "bg-white dark:bg-white/5 text-[#0a1f44] dark:text-white/70 border border-[#0a1f44]/10 dark:border-white/10 hover:border-[#c41e1e]/40"
                }
              `}
            >
              {y === "all" ? "Semua Tahun" : y}
            </button>
          ))}
        </div>
      </div>

      {/* ===== DAFTAR KEGIATAN ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <p className="text-gray-500 dark:text-white/50 text-sm text-center py-16">
            Tidak ada kegiatan untuk filter ini.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((activity) => (
              <div
                key={activity.id}
                className="
                  bg-white dark:bg-[#0a1f44] rounded border border-[#0a1f44]/10 dark:border-white/10
                  overflow-hidden hover:border-[#c41e1e]/30 hover:shadow-md
                  transition-all duration-200
                "
              >
                {/* Galeri foto */}
                <div
                  className={`grid gap-0.5 ${
                    activity.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {activity.photos.map((photo, i) => (
                    <div key={i} className="relative aspect-[4/3]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide rounded border ${categoryStyle[activity.category]}`}
                    >
                      {categoryLabel[activity.category]}
                    </span>
                    <span className="text-gray-400 dark:text-white/40 text-xs font-semibold">
                      {activity.year}
                    </span>
                  </div>

                  <h2 className="font-bold text-[#0a1f44] dark:text-white text-lg leading-snug mb-3">
                    {activity.title}
                  </h2>

                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-white/50 text-xs">
                      <Calendar size={12} /> {activity.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-white/50 text-xs">
                      <MapPin size={12} /> {activity.location}
                    </span>
                  </div>

                  {activity.speaker && (
                    <p className="inline-flex items-center gap-1.5 text-[#c41e1e] text-xs font-semibold mb-3">
                      <Mic size={12} /> {activity.speaker}
                    </p>
                  )}

                  <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
