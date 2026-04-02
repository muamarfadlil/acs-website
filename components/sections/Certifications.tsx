"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/data";

/**
 * Certifications Section
 * ----------------------
 * Menampilkan tiga sertifikasi ISO yang dimiliki PT ACS.
 * Latar belakang putih dengan kartu border berwarna sesuai
 * kategori sertifikasi (biru=kualitas, hijau=lingkungan, oranye=K3).
 */
export default function Certifications() {
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
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === HEADER === */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#c41e1e]" />
            <span className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
              Sertifikasi
            </span>
            <span className="w-10 h-0.5 bg-[#c41e1e]" />
          </div>
          <h2 className="
            reveal font-['Bebas_Neue'] text-5xl lg:text-6xl
            text-[#0a1f44] tracking-wide leading-tight
          ">
            Standar Internasional
            <br />
            <span className="text-[#c41e1e]">yang Kami Pegang</span>
          </h2>
          <p className="
            reveal reveal-delay-1 text-gray-500 text-base
            max-w-xl mx-auto mt-4 leading-relaxed
          ">
            PT ACS telah tersertifikasi oleh lembaga independen berstandar
            internasional (IAF · KAN) sejak September 2023, valid hingga September 2026.
          </p>
        </div>

        {/* === TIGA KARTU SERTIFIKASI === */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`
                reveal reveal-delay-${idx + 1}
                rounded border-2 p-8
                hover:shadow-lg transition-all duration-300
                hover:-translate-y-1
                ${cert.color}
              `}
            >
              {/* Ikon shield */}
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck size={28} className={cert.iconColor} />
                <div>
                  <p className="font-bold text-[#0a1f44] text-sm leading-tight">
                    {cert.code}
                  </p>
                  <p className={`text-xs font-semibold ${cert.iconColor} mt-0.5`}>
                    Sertifikasi Aktif
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-[#0a1f44] text-base mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Info validitas */}
              <div className="
                mt-5 pt-4 border-t border-current/10
                flex justify-between text-xs text-gray-400
              ">
                <span>Awal: 27 Sep 2023</span>
                <span>Berakhir: 26 Sep 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* === TAMBAHAN: Sertifikasi CSMS & SPDA === */}
        <div className="
          reveal
          border border-[#0a1f44]/10 rounded bg-[#f0f4fa] p-8
        ">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="
                font-['Bebas_Neue'] text-3xl text-[#0a1f44] tracking-wide mb-3
              ">
                Diakui oleh SKK Migas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                PT ACS telah terdaftar dalam sistem SPDA CIVD (Contractor Vendor
                Information Database) SKK Migas dan memiliki sertifikat e-CSMS
                (Contractor Safety Management System) dari berbagai KKKS terkemuka.
              </p>
              <div className="space-y-1.5">
                {[
                  "SPDA CIVD – PT Pertamina EP (Vendor ID: 1749)",
                  "e-CSMS – PT Tiarabumi Petroleum",
                  "e-CSMS – PT Pertamina EP",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e1e] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Logo / badge placeholder */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {["SKK Migas", "PT Pertamina EP", "IAF · KAN", "MSA Certification"].map((label) => (
                <div
                  key={label}
                  className="
                    px-5 py-3 bg-white border border-[#0a1f44]/15 rounded
                    text-xs font-bold text-[#0a1f44]
                    shadow-sm
                  "
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
