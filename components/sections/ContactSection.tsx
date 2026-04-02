"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { company } from "@/lib/data";

/**
 * ContactSection Component
 * ------------------------
 * Menampilkan informasi kontak perusahaan dan footer website.
 * Dirancang dengan latar gelap (navy) untuk menutup halaman
 * secara visual yang bersih dan profesional.
 *
 * Terdiri dari:
 * 1. Blok CTA besar ("Siap Bekerja Sama?")
 * 2. Tiga kolom kontak detail
 * 3. Footer dengan copyright
 */
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
      <section
        id="contact"
        ref={sectionRef}
        className="py-24 bg-[#f0f4fa]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* === CTA BESAR === */}
          <div className="
            reveal
            bg-[#0a1f44] rounded overflow-hidden
            relative mb-16
          ">
            {/* Garis merah atas */}
            <div className="h-1 bg-[#c41e1e]" />

            {/* Pattern grid tipis */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(196,30,30,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(196,30,30,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
              <div className="text-center md:text-left">
                <h2 className="
                  font-['Bebas_Neue'] text-4xl md:text-5xl
                  text-white tracking-wide leading-tight mb-3
                ">
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
                    hover:bg-[#a01818] transition-colors duration-200
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
                    hover:border-white hover:bg-white/10 transition-all duration-200
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
            <div className="
              reveal
              bg-white border border-[#0a1f44]/10 rounded p-6
              hover:border-[#c41e1e]/30 hover:shadow-md
              transition-all duration-300
            ">
              <div className="flex items-center gap-3 mb-4">
                <div className="
                  w-10 h-10 bg-[#c41e1e] rounded
                  flex items-center justify-center
                ">
                  <MapPin size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a1f44] text-sm">Lokasi</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Kantor & Laboratorium
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {company.address.office}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Gudang
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {company.address.warehouse}
                  </p>
                </div>
              </div>
            </div>

            {/* Telepon */}
            <div className="
              reveal reveal-delay-1
              bg-white border border-[#0a1f44]/10 rounded p-6
              hover:border-[#c41e1e]/30 hover:shadow-md
              transition-all duration-300
            ">
              <div className="flex items-center gap-3 mb-4">
                <div className="
                  w-10 h-10 bg-[#0a1f44] rounded
                  flex items-center justify-center
                ">
                  <Phone size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a1f44] text-sm">Kontak</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    Telepon
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-[#0a1f44] font-semibold text-sm hover:text-[#c41e1e] transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    Fax
                  </p>
                  <p className="text-gray-700 text-sm">{company.fax}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    Email
                  </p>
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
            <div className="
              reveal reveal-delay-2
              bg-white border border-[#0a1f44]/10 rounded p-6
              hover:border-[#c41e1e]/30 hover:shadow-md
              transition-all duration-300
            ">
              <div className="flex items-center gap-3 mb-4">
                <div className="
                  w-10 h-10 bg-[#1a3a6e] rounded
                  flex items-center justify-center
                ">
                  <Globe size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a1f44] text-sm">Online</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    Website
                  </p>
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
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    Jam Operasional
                  </p>
                  <p className="text-gray-700 text-sm">Senin – Jumat</p>
                  <p className="text-gray-700 text-sm">08.00 – 17.00 WIB</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    Layanan Darurat
                  </p>
                  <p className="text-gray-700 text-sm">24/7 (On-call support)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#040d1a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Kiri: Logo + nama */}
            <div className="flex items-center gap-3">
              <div className="
                w-7 h-7 rounded-full bg-white
                flex items-center justify-center
                border border-[#c41e1e]
              ">
                <span className="text-[#0a1f44] font-bold text-[10px]">ACS</span>
              </div>
              <span className="text-white/50 text-xs">
                © {new Date().getFullYear()} PT Adiguna Cakra Semesta. All rights reserved.
              </span>
            </div>

            {/* Kanan: Link footer */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              {[
                { label: "Laboratorium", href: "/laboratory" },
                { label: "Klien", href: "/clients" },
                { label: "Karir", href: "/career" },
                { label: "Kontak", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white transition-colors"
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
