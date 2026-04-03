"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    const next = !sidebarOpen;
    setSidebarOpen(next);
    window.dispatchEvent(new CustomEvent("toggleSidebar", { detail: next }));
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${
            scrolled
              ? "bg-[#0a1f44] shadow-[0_4px_24px_rgba(0,0,0,0.4)] border-b border-white/5"
              : "bg-[#0a1f44]/95 backdrop-blur-sm"
          }
        `}
      >
        {/* Garis aksen merah tipis di bawah header saat di-scroll */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 h-[2px]
            bg-gradient-to-r from-transparent via-[#c41e1e]/50 to-transparent
            transition-opacity duration-300
            ${scrolled ? "opacity-100" : "opacity-0"}
          `}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* === KIRI: Tombol sidebar + Logo === */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
                className="
                  flex items-center justify-center w-9 h-9
                  text-white/70 hover:text-white
                  border border-white/20 hover:border-[#c41e1e]
                  hover:bg-[#c41e1e]
                  hover:shadow-[0_0_12px_rgba(196,30,30,0.4)]
                  rounded transition-all duration-200
                "
              >
                {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-9 h-9 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/logo.png"
                    alt="Logo PT Adiguna Cakra Semesta"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <p className="text-white font-bold text-sm leading-tight tracking-wide group-hover:text-white/90 transition-colors duration-200">
                    PT Adiguna Cakra Semesta
                  </p>
                  <p className="text-white/45 text-xs leading-tight">
                    Drilling-Completion Fluids & Cementing Services
                  </p>
                </div>
              </Link>
            </div>

            {/* === TENGAH: Menu navigasi desktop === */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    px-4 py-2 text-sm font-medium text-white/70
                    hover:text-white hover:bg-white/8
                    rounded transition-all duration-150 relative group
                  "
                >
                  {link.label}
                  <span
                    className="
                      absolute bottom-0 left-1/2 -translate-x-1/2
                      w-0 group-hover:w-4 h-0.5 bg-[#c41e1e]
                      transition-all duration-200
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* === KANAN: CTA + Mobile toggle === */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="
                  hidden sm:flex items-center gap-1.5
                  px-4 py-2 text-sm font-semibold
                  bg-[#c41e1e] text-white rounded
                  shadow-[0_2px_12px_rgba(196,30,30,0.35)]
                  hover:bg-[#a01818] hover:shadow-[0_4px_16px_rgba(196,30,30,0.5)]
                  hover:-translate-y-px
                  transition-all duration-200
                "
              >
                Hubungi Kami
                <ChevronRight size={14} />
              </Link>

              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden text-white/70 hover:text-white transition-colors duration-150"
                aria-label="Toggle mobile navigation"
              >
                {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* === MENU MOBILE === */}
        {mobileNavOpen && (
          <div className="lg:hidden bg-[#091532] border-t border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
            <nav className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="
                    px-3 py-2.5 text-sm text-white/70 hover:text-white
                    hover:bg-white/8 rounded transition-colors
                  "
                >
                  {link.label}
                </Link>
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

      <div className="h-16" />
    </>
  );
}
