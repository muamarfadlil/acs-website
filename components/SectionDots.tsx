"use client";

import { useEffect, useState } from "react";

// Urutan & id harus sesuai dengan section di app/page.tsx
const sections = [
  { id: "hero", label: "Beranda" },
  { id: "about", label: "Tentang Kami" },
  { id: "services", label: "Layanan" },
  { id: "csr", label: "HSE & CSR" },
  { id: "vision", label: "Visi & Misi" },
  { id: "certifications", label: "Sertifikasi" },
  { id: "contact", label: "Kontak" },
];

// Tinggi header fixed (h-16), dikurangkan saat scroll ke section
const HEADER_OFFSET = 64;

export default function SectionDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    // Band tipis di tengah viewport — section yang melintasinya dianggap aktif
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Navigasi antar-bagian halaman"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 px-2 py-4 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-[#0a1f44]/10 dark:border-white/10 shadow-lg"
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollToSection(s.id)}
          aria-label={s.label}
          aria-current={active === s.id ? "true" : undefined}
          className="group relative flex items-center justify-center w-4 h-4"
        >
          <span
            className={`
              rounded-full transition-all duration-300
              ${
                active === s.id
                  ? "w-2.5 h-2.5 bg-[#c41e1e]"
                  : "w-1.5 h-1.5 bg-[#0a1f44]/25 dark:bg-white/25 group-hover:bg-[#c41e1e]/60"
              }
            `}
          />
          <span
            className="
              pointer-events-none absolute right-full mr-3
              px-2.5 py-1 rounded bg-[#0a1f44] text-white text-[11px] font-medium whitespace-nowrap
              opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-200 shadow-lg
            "
          >
            {s.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
