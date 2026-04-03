"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Globe, ArrowRight } from "lucide-react";
import { company } from "@/lib/data";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" ref={sectionRef} className="py-24 bg-[#f0f4fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* === CTA BESAR === */}
          <div
            className="
              reveal
              bg-gradient-to-br from-[#0d2559] via-[#0a1f44] to-[#091532]
              rounded overflow-hidden relative mb-16
              shadow-[0_16px_64px_rgba(10,31,68,0.35)]
            "
          >
            {/* Garis merah atas */}
            <div className="h-[3px] bg-gradient-to-r from-[#c41e1e] via-[#e83333] to-[#c41e1e]" />

            {/* Pattern grid tipis */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(196,30,30,0.6) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(196,30,30,0.6) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Radial glow kanan */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c41e1e]/8 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
              <div className="text-center md:text-left">
                <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-white tracking-wide leading-tight mb-3">
                  Siap Bekerja Sama?
                  <br />
                  <span className="text-[#c41e1e]">Mari Berdiskusi</span>
                </h2>
                <p className="text-white/60 text-sm max-w-md leading-relaxed">
                  Tim ahli kami siap membantu Anda merancang solusi fluida pemboran
                  dan sementasi yang tepat untuk operasi Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center gap-2
                    bg-[#c41e1e] text-white
                    px-8 py-3.5 font-semibold text-sm rounded
                    shadow-[0_4px_20px_rgba(196,30,30,0.4)]
                    hover:bg-[#a01818] hover:-translate-y-0.5
                    hover:shadow-[0_8px_28px_rgba(196,30,30,0.5)]
                    transition-all duration-200
                  "
                >
                  Kirim Pesan
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={`tel:${company.phone}`}
                  className="
                    inline-flex items-center justify-center gap-2
                    border-2 border-white/30 text-white
                    px-8 py-3.5 font-semibold text-sm rounded
                    hover:border-white hover:bg-white/10
                    hover:-translate-y-0.5
                    transition-all duration-200
                  "
                >
                  <Phone size={15} />
                  Telepon
                </a>
              </div>
            </div>
          </div>

          {/* === TIGA KOLOM INFO KONTAK === */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Alamat */}
            <div
              className="
                reveal
                bg-white border border-[#0a1f44]/10 rounded p-6
                hover:border-[#c41e1e]/30 hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c41e1e] rounded flex items-center justify-center shadow-[0_4px_12px_rgba(196,30,30,0.3)]">
                  <MapPin size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a1f44] text-sm">Lokasi</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Kantor & Laboratorium
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">{company.address.office}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Gudang
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">{company.address.warehouse}</p>
                </div>
              </div>
            </div>

            {/* Telepon */}
            <div
              className="
                reveal reveal-delay-1
                bg-white border border-[#0a1f44]/10 rounded p-6
                hover:border-[#c41e1e]/30 hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0a1f44] rounded flex items-center justify-center shadow-[0_4px_12px_rgba(10,31,68,0.25)]">
                  <Phone size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a1f44] text-sm">Kontak</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Telepon</p>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-[#0a1f44] font-semibold text-sm hover:text-[#c41e1e] transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Fax</p>
                  <p className="text-gray-700 text-sm">{company.fax}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[#0a1f44] font-semibold text-sm hover:text-[#c41e1e] transition-colors break-all"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Website & Jam Kerja */}
            <div
              className="
                reveal reveal-delay-2
                bg-white border border-[#0a1f44]/10 rounded p-6
                hover:border-[#c41e1e]/30 hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1a3a6e] rounded flex items-center justify-center shadow-[0_4px_12px_rgba(26,58,110,0.25)]">
                  <Globe size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a1f44] text-sm">Online</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Website</p>
                  <a
                    href={`https://${company.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0a1f44] font-semibold text-sm hover:text-[#c41e1e] transition-colors"
                  >
                    {company.website}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Jam Operasional</p>
                  <p className="text-gray-700 text-sm">Senin – Jumat</p>
                  <p className="text-gray-700 text-sm">08.00 – 17.00 WIB</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Layanan Darurat</p>
                  <p className="text-gray-700 text-sm">24/7 (On-call support)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gradient-to-b from-[#060e1e] to-[#040d1a] border-t border-white/5">
        {/* Garis aksen atas */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c41e1e]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Kiri: Logo + copyright */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-200">
                <Image
                  src="/logo.png"
                  alt="Logo PT Adiguna Cakra Semesta"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white/40 text-xs">
                © {new Date().getFullYear()} PT Adiguna Cakra Semesta. All rights reserved.
              </span>
            </div>

            {/* Kanan: Link footer */}
            <div className="flex flex-wrap items-center gap-5 text-xs">
              {[
                { label: "Laboratorium", href: "/laboratory" },
                { label: "Klien", href: "/clients" },
                { label: "Karir", href: "/career" },
                { label: "Kontak", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    text-white/35 hover:text-white
                    relative after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-px after:bg-[#c41e1e]
                    hover:after:w-full after:transition-all after:duration-300
                    transition-colors duration-200
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
