"use client";

// Komponen ini harus "use client" karena:
// 1. Memantau posisi scroll (window.scrollY) — hanya tersedia di browser
// 2. Menggunakan useState dan useEffect
// 3. Memanggil window.scrollTo() saat tombol diklik

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  // Tombol hanya muncul setelah pengguna scroll ke bawah cukup jauh
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tampilkan tombol setelah scroll 400px ke bawah
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Jika belum scroll cukup jauh, komponen tidak merender apapun
  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`
        fixed bottom-6 right-6 z-50
        w-11 h-11 rounded
        bg-[#c41e1e] text-white
        flex items-center justify-center
        shadow-lg hover:bg-[#a01818]
        hover:-translate-y-1
        transition-all duration-200
        border-2 border-white/20
      `}
    >
      <ArrowUp size={18} />
    </button>
  );
}
