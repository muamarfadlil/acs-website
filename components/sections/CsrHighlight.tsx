"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { csrK3Activities } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categoryLabel: Record<string, string> = {
  csr: "CSR",
  k3: "P2K3",
};

export default function CsrHighlight() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const latest = [...csrK3Activities]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  return (
    <section id="csr" ref={sectionRef} className="py-24 bg-white dark:bg-[#0a1f44] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#c41e1e]" />
            <span className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
              HSE &amp; P2K3
            </span>
            <span className="w-10 h-0.5 bg-[#c41e1e]" />
          </div>
          <h2 className="reveal font-['Bebas_Neue'] text-5xl lg:text-6xl text-[#0a1f44] dark:text-white tracking-wide leading-tight">
            Peduli Masyarakat &amp;
            <br />
            <span className="text-[#c41e1e]">Kesejahteraan Karyawan</span>
          </h2>
          <p className="reveal reveal-delay-1 text-gray-500 dark:text-white/50 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Rangkaian kegiatan Health, Safety &amp; Environment (HSE), Panitia
            Pembina Keselamatan dan Kesehatan Kerja (P2K3), dan tanggung jawab
            sosial perusahaan (CSR) yang kami selenggarakan sepanjang
            2025–2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {latest.map((activity, idx) => (
            <div
              key={activity.id}
              className={`
                reveal-scale reveal-delay-${idx + 1}
                bg-white dark:bg-white/5 border border-[#0a1f44]/10 dark:border-white/10 rounded overflow-hidden
                hover:border-[#c41e1e]/30 hover:-translate-y-1 hover:shadow-lg
                transition-all duration-300
              `}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={activity.photos[0].src}
                  alt={activity.photos[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#c41e1e] text-white text-[10px] font-bold uppercase tracking-wide rounded">
                  {categoryLabel[activity.category]} · {activity.year}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0a1f44] dark:text-white text-sm leading-snug mb-2">
                  {activity.title}
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-white/50 text-xs">
                    <Calendar size={11} /> {activity.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-white/50 text-xs">
                    <MapPin size={11} /> {activity.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <Link
            href="/hse-p2k3"
            className="
              inline-flex items-center gap-2
              bg-[#0a1f44] dark:bg-white/10 text-white
              px-7 py-3 font-semibold text-sm rounded
              border border-transparent dark:border-white/20
              hover:bg-[#c41e1e] dark:hover:bg-[#c41e1e] transition-all duration-200
            "
          >
            Lihat Semua Kegiatan
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
