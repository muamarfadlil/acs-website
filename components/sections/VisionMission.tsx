"use client";

import { useEffect, useRef } from "react";
import { Target, Zap, Globe, Star, Truck, Headphones } from "lucide-react";
import { visionMission, whyACS } from "@/lib/data";

// Peta ikon untuk kartu "Why ACS?"
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe, Star, Truck, Headphones,
};

/**
 * VisionMission Section
 * ---------------------
 * Menampilkan Visi, Misi, dan keunggulan kompetitif (Why ACS?)
 * dalam satu section dengan dua bagian visual yang berbeda:
 * - Bagian atas: Latar putih, dua kolom visi/misi
 * - Bagian bawah: Latar light gray, grid 4 keunggulan
 */
export default function VisionMission() {
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
      id="vision"
      ref={sectionRef}
      className="py-24 bg-[#f0f4fa]"
    >
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
          <h2 className="
            reveal font-['Bebas_Neue'] text-5xl lg:text-6xl
            text-[#0a1f44] tracking-wide leading-tight
          ">
            Komitmen Kami untuk
            <br />
            <span className="text-[#c41e1e]">Industri & Pelanggan</span>
          </h2>
        </div>

        {/* === DUA KOLOM: VISI & MISI === */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Visi */}
          <div className="
            reveal
            bg-[#0a1f44] rounded overflow-hidden
            relative
          ">
            {/* Aksen garis merah di atas */}
            <div className="h-1 bg-[#c41e1e]" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="
                  w-10 h-10 rounded
                  bg-[#c41e1e] flex items-center justify-center
                ">
                  <Target size={18} className="text-white" />
                </div>
                <h3 className="
                  font-['Bebas_Neue'] text-3xl text-white tracking-wide
                ">
                  Visi
                </h3>
              </div>
              <p className="text-white/75 text-base leading-relaxed">
                {visionMission.vision}
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="reveal reveal-delay-1 bg-white rounded overflow-hidden border border-[#0a1f44]/10">
            <div className="h-1 bg-[#c41e1e]" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="
                  w-10 h-10 rounded
                  bg-[#0a1f44] flex items-center justify-center
                ">
                  <Zap size={18} className="text-white" />
                </div>
                <h3 className="
                  font-['Bebas_Neue'] text-3xl text-[#0a1f44] tracking-wide
                ">
                  Misi
                </h3>
              </div>
              <div className="space-y-3">
                {visionMission.missions.map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="
                      flex-shrink-0 w-5 h-5 rounded-full
                      bg-[#c41e1e] text-white
                      text-xs font-bold flex items-center justify-center
                      mt-0.5
                    ">
                      {i + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === WHY ACS? – EMPAT KEUNGGULAN === */}
        <div>
          <div className="reveal text-center mb-10">
            <h3 className="
              font-['Bebas_Neue'] text-4xl text-[#0a1f44]
              tracking-wide
            ">
              Mengapa Memilih{" "}
              <span className="text-[#c41e1e]">ACS?</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
              Dengan rangkaian produk berkualitas, logistik rantai pasokan terintegrasi,
              dan jangkauan global yang luas — ACS selalu siap memberikan solusi terbaik.
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
                    hover:border-[#c41e1e]/30 hover:shadow-lg
                    transition-all duration-300 group
                  `}
                >
                  <div className="
                    w-11 h-11 rounded
                    bg-[#f0f4fa] group-hover:bg-[#c41e1e]
                    flex items-center justify-center mb-4
                    transition-colors duration-300
                  ">
                    <Icon
                      size={20}
                      className="text-[#0a1f44] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-[#0a1f44] text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
