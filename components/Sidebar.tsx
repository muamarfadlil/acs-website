"use client";

import { useState, useEffect } from "react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

const iconMap: Record<string, LucideIcon> = {
  FlaskConical,
  Briefcase,
  UserCheck,
  Mail,
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setIsOpen(e.detail as boolean);
    };
    window.addEventListener("toggleSidebar", handler as EventListener);
    return () => window.removeEventListener("toggleSidebar", handler as EventListener);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const close = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("toggleSidebar", { detail: false }));
  };

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-gradient-to-b from-[#0d2559] via-[#0a1f44] to-[#08192f]
          border-r-2 border-[#c41e1e]
          shadow-[4px_0_32px_rgba(0,0,0,0.5)]
          flex flex-col
          transition-transform duration-350 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Navigasi halaman"
      >
        {/* Header sidebar */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo PT Adiguna Cakra Semesta"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white font-semibold text-sm">Menu</span>
          </div>
          <button
            onClick={close}
            aria-label="Tutup sidebar"
            className="
              text-white/50 hover:text-white
              hover:bg-white/10 p-1.5 rounded
              transition-all duration-200
            "
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
              transition-all duration-200 group
              ${
                pathname === "/"
                  ? "bg-[#c41e1e] text-white shadow-[0_4px_12px_rgba(196,30,30,0.35)]"
                  : "text-white/70 hover:text-white hover:bg-white/8"
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

        {/* Link halaman-halaman lain */}
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
                  transition-all duration-200 group
                  ${
                    isActive
                      ? "bg-[#c41e1e] text-white shadow-[0_4px_12px_rgba(196,30,30,0.35)]"
                      : "text-white/70 hover:text-white hover:bg-white/8"
                  }
                `}
              >
                <Icon size={16} className="flex-shrink-0" />
                <span>{link.label}</span>
                <ChevronRight
                  size={14}
                  className={`
                    ml-auto transition-all duration-200
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Footer sidebar */}
        <div className="px-5 py-5 border-t border-white/10 bg-black/20">
          <p className="text-white/40 text-xs leading-relaxed">
            📞 (+62) 21 53160137
          </p>
          <p className="text-white/40 text-xs mt-1 leading-relaxed">
            ✉️ adiguna@acs-indonesia.com
          </p>
          <p className="text-white/20 text-xs mt-3">
            © {new Date().getFullYear()} PT Adiguna Cakra Semesta
          </p>
        </div>
      </aside>
    </>
  );
}
