"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import Image from "next/image";

/**
 * Header Component
 * ----------------
 * Komponen header yang:
 * - Selalu berada di atas layar (fixed/sticky)
 * - Berubah tampilan saat di-scroll (lebih gelap & ada shadow)
 * - Memiliki navigasi smooth-scroll ke section di halaman utama
 * - Memiliki tombol hamburger untuk membuka Sidebar di desktop/mobile
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Deteksi posisi scroll untuk mengubah tampilan header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle sidebar kiri dan kirim event agar Sidebar.tsx mendengarnya
  const toggleSidebar = () => {
    const next = !sidebarOpen;
    setSidebarOpen(next);
    // Menggunakan CustomEvent agar Sidebar yang terpisah bisa bereaksi
    window.dispatchEvent(new CustomEvent("toggleSidebar", { detail: next }));
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${
            scrolled
              ? "bg-[#0a1f44] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              : "bg-[#0a1f44]/95 backdrop-blur-sm"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* === KIRI: Tombol sidebar + Logo === */}
            <div className="flex items-center gap-4">
              {/* Tombol hamburger untuk membuka/menutup sidebar */}
              <button
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
                className="
                  flex items-center justify-center w-9 h-9
                  text-white/70 hover:text-white
                  border border-white/20 hover:border-[#c41e1e]
                  hover:bg-[#c41e1e] rounded
                  transition-all duration-200
                "
              >
                {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

              {/* Logo & Nama Perusahaan */}
              <Link href="/" className="flex items-center gap-3 group">
                {/* Logo placeholder – ganti dengan <Image> saat ada file logo */}
                <Image
                  src="/logo.png" // Pastikan file logo.png ada di folder public
                  alt="PT ACS Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />

                <div className="hidden sm:block">
                  <p className="text-white font-bold text-sm leading-tight tracking-wide">
                    PT Adiguna Cakra Semesta
                  </p>
                  <p className="text-white/50 text-xs leading-tight">
                    Drilling & Cementing Services
                  </p>
                </div>
              </Link>
            </div>

            {/* === TENGAH: Menu navigasi (hanya tampil di desktop) === */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    px-4 py-2 text-sm font-medium text-white/75
                    hover:text-white hover:bg-white/10
                    rounded transition-all duration-150
                    relative group
                  "
                >
                  {link.label}
                  {/* Garis merah di bawah item aktif saat hover */}
                  <span
                    className="
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    w-0 group-hover:w-4 h-0.5 bg-[#c41e1e]
                    transition-all duration-200
                  "
                  />
                </a>
              ))}
            </nav>

            {/* === KANAN: CTA Button + Mobile menu toggle === */}
            <div className="flex items-center gap-3">
              {/* Tombol CTA ke halaman kontak */}
              <Link
                href="/contact"
                className="
                  hidden sm:flex items-center gap-1.5
                  px-4 py-2 text-sm font-semibold
                  bg-[#c41e1e] text-white rounded
                  hover:bg-[#a01818] transition-colors duration-200
                "
              >
                Hubungi Kami
                <ChevronRight size={14} />
              </Link>

              {/* Tombol menu mobile (hanya tampil di layar kecil) */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden text-white/75 hover:text-white"
                aria-label="Toggle mobile navigation"
              >
                {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* === MENU MOBILE (dropdown di bawah header) === */}
        {mobileNavOpen && (
          <div className="lg:hidden bg-[#091532] border-t border-white/10">
            <nav className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="
                    px-3 py-2.5 text-sm text-white/75 hover:text-white
                    hover:bg-white/10 rounded transition-colors
                  "
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="
                  mt-2 px-3 py-2.5 text-sm font-semibold text-center
                  bg-[#c41e1e] text-white rounded hover:bg-[#a01818]
                  transition-colors
                "
              >
                Hubungi Kami
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer agar konten tidak tertimpa header fixed */}
      <div className="h-16" />
    </>
  );
}
