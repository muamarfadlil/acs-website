"use client";

import { useEffect, useRef } from "react";
import {
  type LucideIcon,
  Droplets,
  Layers,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Layers,
  Activity,
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-[#0a1f44] relative overflow-hidden"
    >
      {/* Background gradient depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#091532] via-[#0a1f44] to-[#091532]" />

      {/* Pattern geometris tipis */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow merah subtle di tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c41e1e]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === HEADER SECTION === */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#c41e1e]" />
            <span className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
              Layanan Kami
            </span>
            <span className="w-10 h-0.5 bg-[#c41e1e]" />
          </div>
          <h2 className="reveal font-['Bebas_Neue'] text-5xl lg:text-6xl text-white tracking-wide leading-tight">
            Solusi Lengkap untuk
            <br />
            <span className="text-[#c41e1e]">Operasi Pengeboran</span>
          </h2>
          <p className="reveal reveal-delay-1 text-white/60 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Dari perencanaan fluida pemboran hingga sementasi sumur — kami
            menyediakan layanan terintegrasi yang memastikan operasi Anda
            berjalan efisien, aman, dan menguntungkan.
          </p>
        </div>

        {/* === KARTU LAYANAN === */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Droplets;
            return (
              <div
                key={service.id}
                className={`
                  reveal reveal-delay-${idx + 1}
                  group relative
                  bg-gradient-to-b from-[#0f2449] to-[#091532]
                  border border-white/10 rounded overflow-hidden
                  hover:border-[#c41e1e]/50
                  hover:-translate-y-1.5
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                  transition-all duration-300
                `}
              >
                {/* Garis atas – animasi grow saat hover */}
                <div className="h-[3px] bg-gradient-to-r from-[#c41e1e] via-[#e83333] to-transparent group-hover:to-[#c41e1e] transition-all duration-500" />

                <div className="p-7">
                  {/* Ikon */}
                  <div
                    className="
                      w-12 h-12 rounded
                      bg-[#c41e1e]/15 border border-[#c41e1e]/30
                      flex items-center justify-center mb-5
                      group-hover:bg-[#c41e1e] group-hover:border-[#c41e1e]
                      group-hover:shadow-[0_0_16px_rgba(196,30,30,0.4)]
                      transition-all duration-300
                    "
                  >
                    <Icon
                      size={22}
                      className="text-[#c41e1e] group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Judul */}
                  <h3 className="font-['Bebas_Neue'] text-2xl text-white tracking-wide leading-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Fitur */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={14}
                          className="text-[#c41e1e] flex-shrink-0 mt-0.5"
                        />
                        <span className="text-white/70 text-xs leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#c41e1e] hover:text-white border-b border-[#c41e1e]/40 hover:border-white pb-0.5 transition-all duration-200 group/link"
                  >
                    Pelajari lebih lanjut
                    <ArrowRight
                      size={12}
                      className="group-hover/link:translate-x-1 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* === SUPPLY CHAIN SERVICES === */}
        <div className="reveal mt-12 border border-white/10 rounded p-8 bg-gradient-to-br from-[#0f2449] to-[#091532] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <h3 className="text-white font-semibold text-center mb-8 text-sm uppercase tracking-widest">
            Dukungan Rantai Pasokan
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Supply Chain Management",
                desc: "Jaringan mitra luas untuk memastikan pasokan material terjamin ke seluruh lokasi di Indonesia.",
              },
              {
                title: "Consignment Stock Management",
                desc: "Pengelolaan stok material atas nama klien, invoicing sesuai barang yang digunakan per sumur.",
              },
              {
                title: "Document Compliance",
                desc: "Penyediaan dokumentasi lengkap sesuai persyaratan regulasi, termasuk sertifikat kesesuaian.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center group px-2 py-4 rounded hover:bg-white/5 transition-colors duration-200"
              >
                <div className="w-8 h-0.5 bg-[#c41e1e] mb-4 group-hover:w-12 transition-all duration-300" />
                <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
