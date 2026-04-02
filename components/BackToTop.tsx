"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Cek posisi awal saat komponen mount (penting saat halaman di-refresh di tengah)
    setVisible(window.scrollY > 300);

    const handleScroll = () => {
      // Threshold diturunkan ke 300px agar lebih mudah muncul
      setVisible(window.scrollY > 300);
    };

    // { passive: true } memberi tahu browser bahwa handler ini tidak akan
    // memanggil preventDefault(), sehingga browser bisa mengoptimalkan scroll.
    // Ini juga memperbaiki bug di mana scrollY terbaca terlambat.
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="
        fixed bottom-6 right-6 z-50
        w-11 h-11 rounded
        bg-[#c41e1e] text-white
        flex items-center justify-center
        shadow-lg hover:bg-[#a01818]
        hover:-translate-y-1
        transition-all duration-200
        border-2 border-white/20
      "
    >
      <ArrowUp size={18} />
    </button>
  );
}
