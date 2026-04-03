"use client";

import { useEffect, useRef } from "react";
import {
  type LucideIcon,
  Target,
  Zap,
  Globe,
  Star,
  Truck,
  Headphones,
} from "lucide-react";
import { visionMission, whyACS } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Star,
  Truck,
  Headphones,
};

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="py-24 bg-[#f0f4fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === HEADER === */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#c41e1e]" />
            <span className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
              Visi & Misi
            </span>
            <span className="w-10 h-0.5 bg-[#c41e1e]" />
          </div>
          <h2 className="reveal font-['Bebas_Neue'] text-5xl lg:text-6xl text-[#0a1f44] tracking-wide leading-tight">
            Komitmen Kami untuk
            <br />
            <span className="text-[#c41e1e]">Industri & Pelanggan</span>
          </h2>
        </div>

        {/* === DUA KOLOM: VISI & MISI === */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Visi */}
          <div
            className="
              reveal bg-gradient-to-br from-[#0d2559] to-[#0a1f44]
              rounded overflow-hidden relative
              shadow-[0_8px_32px_rgba(10,31,68,0.25)]
              hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,31,68,0.35)]
              transition-all duration-300
            "
          >
            <div className="h-[3px] bg-gradient-to-r from-[#c41e1e] to-[#e83333]" />
            {/* Subtle glow di pojok kanan atas */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c41e1e]/8 blur-2xl rounded-full pointer-events-none" />
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded bg-[#c41e1e] flex items-center justify-center shadow-[0_4px_12px_rgba(196,30,30,0.4)]">
                  <Target size={18} className="text-white" />
                </div>
                <h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">
                  Visi
                </h3>
              </div>
              <p className="text-white/75 text-base leading-relaxed">
                {visionMission.vision}
              </p>
            </div>
          </div>

          {/* Misi */}
          <div
            className="
              reveal reveal-delay-1 bg-white rounded overflow-hidden
              border border-[#0a1f44]/10
              shadow-[0_8px_32px_rgba(10,31,68,0.1)]
              hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,31,68,0.18)]
              transition-all duration-300
            "
          >
            <div className="h-[3px] bg-gradient-to-r from-[#c41e1e] to-[#e83333]" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded bg-[#0a1f44] flex items-center justify-center shadow-[0_4px_12px_rgba(10,31,68,0.3)]">
                  <Zap size={18} className="text-white" />
                </div>
                <h3 className="font-['Bebas_Neue'] text-3xl text-[#0a1f44] tracking-wide">
                  Misi
                </h3>
              </div>
              <div className="space-y-3">
                {visionMission.missions.map((m, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <span
                      className="
                        flex-shrink-0 w-5 h-5 rounded-full
                        bg-[#c41e1e] text-white
                        text-xs font-bold flex items-center justify-center mt-0.5
                        group-hover:scale-110 transition-transform duration-200
                      "
                    >
                      {i + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === WHY ACS? === */}
        <div>
          <div className="reveal text-center mb-10">
            <h3 className="font-['Bebas_Neue'] text-4xl text-[#0a1f44] tracking-wide">
              Mengapa Memilih <span className="text-[#c41e1e]">ACS?</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
              Dengan rangkaian produk berkualitas, logistik rantai pasokan
              terintegrasi, dan jangkauan global yang luas — ACS selalu siap
              memberikan solusi terbaik.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyACS.map((item, idx) => {
              const Icon = iconMap[item.icon] || Globe;
              return (
                <div
                  key={idx}
                  className={`
                    reveal reveal-delay-${idx + 1}
                    bg-white border border-[#0a1f44]/10 rounded p-6
                    hover:border-[#c41e1e]/30
                    hover:-translate-y-1.5
                    hover:shadow-[0_12px_32px_rgba(10,31,68,0.14)]
                    transition-all duration-300 group
                  `}
                >
                  <div
                    className="
                      w-11 h-11 rounded
                      bg-[#f0f4fa] group-hover:bg-[#c41e1e]
                      flex items-center justify-center mb-4
                      group-hover:shadow-[0_4px_16px_rgba(196,30,30,0.3)]
                      transition-all duration-300
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#0a1f44] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-[#0a1f44] text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
