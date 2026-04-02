"use client";

import { useState, useEffect } from "react";
import { type LucideIcon } from "lucide-react"; // Tipe resmi Lucide — sudah mencakup semua prop dengan benar
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FlaskConical,
  Briefcase,
  UserCheck,
  Mail,
  X,
  Home,
  ChevronRight,
} from "lucide-react";
import { sidebarLinks } from "@/lib/data";

// Perbaikan: gunakan LucideIcon sebagai tipe, bukan definisi manual.
// LucideIcon adalah tipe resmi dari lucide-react yang sudah mendeskripsikan
// prop size sebagai string | number, sehingga cocok dengan implementasi internalnya.
const iconMap: Record<string, LucideIcon> = {
  FlaskConical,
  Briefcase,
  UserCheck,
  Mail,
};

/**
 * Sidebar Component
 * -----------------
 * Panel navigasi yang muncul dari sisi kiri layar saat tombol
 * hamburger di Header diklik. Berisi link ke halaman terpisah
 * seperti /laboratory, /clients, /contact, dll.
 *
 * Cara komunikasi dengan Header:
 * Header mengirim CustomEvent "toggleSidebar" → Sidebar mendengarkan
 * event tersebut dan memperbarui state open/close-nya.
 */
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Untuk menyoroti link halaman aktif

  // Mendengarkan event dari Header.tsx
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setIsOpen(e.detail as boolean);
    };
    window.addEventListener("toggleSidebar", handler as EventListener);
    return () =>
      window.removeEventListener("toggleSidebar", handler as EventListener);
  }, []);

  // Tutup sidebar saat menekan tombol Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const close = () => {
    setIsOpen(false);
    // Sinkronkan status ke Header juga
    window.dispatchEvent(new CustomEvent("toggleSidebar", { detail: false }));
  };

  return (
    <>
      {/*
        OVERLAY gelap di belakang sidebar.
        Klik overlay = tutup sidebar (UX yang familiar bagi pengguna).
      */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* === PANEL SIDEBAR === */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-[#0a1f44] border-r-2 border-[#c41e1e]
          flex flex-col
          transition-transform duration-350 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Navigasi halaman"
      >
        {/* Header sidebar: logo + tombol close */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="
              w-8 h-8 rounded-full bg-white
              flex items-center justify-center
              border-2 border-[#c41e1e]
            "
            >
              <span className="text-[#0a1f44] font-bold text-xs">ACS</span>
            </div>
            <span className="text-white font-semibold text-sm">Menu</span>
          </div>
          <button
            onClick={close}
            aria-label="Tutup sidebar"
            className="text-white/50 hover:text-white hover:bg-white/10 p-1.5 rounded transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Link ke halaman utama */}
        <div className="px-3 pt-4 pb-2">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-widest px-2 mb-2">
            Navigasi
          </p>
          <Link
            href="/"
            onClick={close}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded text-sm
              transition-colors duration-150 group
              ${
                pathname === "/"
                  ? "bg-[#c41e1e] text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }
            `}
          >
            <Home size={16} className="flex-shrink-0" />
            <span>Halaman Utama</span>
            {pathname === "/" && <ChevronRight size={14} className="ml-auto" />}
          </Link>
        </div>

        {/* Divider */}
        <div className="px-5 pb-2">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-widest px-2 mb-2">
            Halaman Lainnya
          </p>
        </div>

        {/* Link ke halaman-halaman terpisah */}
        <nav className="px-3 flex flex-col gap-1 flex-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = iconMap[link.icon] || Mail;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded text-sm
                  transition-all duration-150 group
                  ${
                    isActive
                      ? "bg-[#c41e1e] text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <Icon size={16} className="flex-shrink-0" />
                <span>{link.label}</span>
                <ChevronRight
                  size={14}
                  className={`
                    ml-auto opacity-0 group-hover:opacity-100
                    transition-opacity duration-150
                    ${isActive ? "opacity-100" : ""}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Footer sidebar: info kontak singkat */}
        <div className="px-5 py-5 border-t border-white/10">
          <p className="text-white/40 text-xs leading-relaxed">
            📞 (+62) 21 53160137
          </p>
          <p className="text-white/40 text-xs mt-1 leading-relaxed">
            ✉️ adiguna@acs-indonesia.com
          </p>
          <p className="text-white/25 text-xs mt-3">
            © 2024 PT Adiguna Cakra Semesta
          </p>
        </div>
      </aside>
    </>
  );
}
