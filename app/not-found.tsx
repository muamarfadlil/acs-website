// app/not-found.tsx
// Halaman 404 — tampil saat URL tidak ditemukan
"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#f0f4fa] dark:bg-[#091832] text-center px-4 transition-colors duration-300">
      {/* Angka 404 besar */}
      <p className="font-['Bebas_Neue'] text-[180px] text-[#0a1f44]/10 dark:text-white/10 leading-none select-none">
        404
      </p>

      <div className="-mt-12 mb-6">
        <h1 className="font-['Bebas_Neue'] text-4xl text-[#0a1f44] dark:text-white tracking-wide mb-2">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-500 dark:text-white/50 text-base max-w-md mx-auto leading-relaxed">
          Halaman yang Anda cari tidak ada atau mungkin sudah dipindahkan.
          Gunakan navigasi di bawah untuk kembali.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            bg-[#0a1f44] dark:bg-white/10 text-white
            px-6 py-3 font-semibold text-sm rounded
            border border-transparent dark:border-white/20
            hover:bg-[#c41e1e] dark:hover:bg-[#c41e1e] transition-colors duration-200
          "
        >
          <Home size={15} />
          Ke Beranda
        </Link>
        <button
          onClick={() => window.history.back()}
          className="
            inline-flex items-center gap-2
            border-2 border-[#0a1f44]/20 dark:border-white/20 text-[#0a1f44] dark:text-white
            px-6 py-3 font-semibold text-sm rounded
            hover:border-[#0a1f44] dark:hover:border-white transition-colors duration-200
          "
        >
          <ArrowLeft size={15} />
          Kembali
        </button>
      </div>
    </div>
  );
}
