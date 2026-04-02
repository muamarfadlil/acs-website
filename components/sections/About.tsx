"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, Building2, Calendar, Award } from "lucide-react";
import { company, sisterCompanies } from "@/lib/data";

/**
 * About Section
 * -------------
 * Menampilkan profil singkat perusahaan, tahun berdiri,
 * informasi dasar legalitas, dan perusahaan sister.
 *
 * Menggunakan IntersectionObserver untuk efek scroll-reveal
 * tanpa dependensi library animasi eksternal.
 */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-reveal: elemen dengan kelas .reveal menjadi visible
  // saat masuk viewport 80% dari bawah layar.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Data kartu informasi singkat (di bawah foto/visual)
  const highlights = [
    {
      icon: Calendar,
      label: "Didirikan",
      value: company.founded,
      sub: "Perusahaan swasta Indonesia",
    },
    {
      icon: Building2,
      label: "Industri",
      value: "Hulu Migas & Geotermal",
      sub: "Upstream Oil, Gas & Geothermal",
    },
    {
      icon: Award,
      label: "Sertifikasi",
      value: "ISO 9001 · 14001 · 45001",
      sub: "Tiga sistem manajemen terintegrasi",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === LAYOUT DUA KOLOM === */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* KOLOM KIRI: Teks utama */}
          <div>
            {/* Label section */}
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#c41e1e]" />
              <span className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
                Tentang Kami
              </span>
            </div>

            {/* Judul section */}
            <h2 className="
              reveal font-['Bebas_Neue'] text-5xl lg:text-6xl
              text-[#0a1f44] leading-tight tracking-wide mb-6
            ">
              Dua Dekade Melayani
              <br />
              <span className="text-[#c41e1e]">Industri Migas</span>
              <br />
              Indonesia
            </h2>

            {/* Paragraf deskripsi perusahaan */}
            <p className="reveal text-gray-600 text-base leading-relaxed mb-4 reveal-delay-1">
              PT Adiguna Cakra Semesta berdiri pada 15 Mei 2004 sebagai perusahaan
              swasta Indonesia yang bergerak di bidang jasa Drilling-Completion
              Fluids dan Cementing. Perusahaan ini melayani industri hulu minyak,
              gas, dan geotermal — menemani klien di setiap fase kehidupan lapangan.
            </p>
            <p className="reveal text-gray-600 text-base leading-relaxed mb-6 reveal-delay-2">
              Tim kami terdiri dari para profesional berpengalaman dengan keahlian
              mendalam di bidang teknik fluida pemboran dan sementasi. Kami
              berkomitmen membangun hubungan jangka panjang dengan pelanggan melalui
              perhatian maksimal, layanan prima, produk berkualitas, dan harga
              kompetitif.
            </p>

            {/* Tiga divisi bisnis utama */}
            <div className="reveal reveal-delay-3 space-y-3 mb-8">
              <p className="text-sm font-semibold text-[#0a1f44] uppercase tracking-wide mb-3">
                Tiga Divisi Bisnis Utama
              </p>
              {[
                "Drilling-Completion Fluids Services",
                "Cementing Services",
                "Drilling Evaluation (Mud Logging) Services",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#c41e1e] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Perusahaan sister */}
            <div className="reveal reveal-delay-4 border-t border-gray-100 pt-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Perusahaan Sister
              </p>
              <div className="flex flex-wrap gap-3">
                {sisterCompanies.map((sc) => (
                  <div
                    key={sc.name}
                    className="
                      px-4 py-2 border border-[#0a1f44]/20 rounded
                      text-xs font-medium text-[#0a1f44]
                    "
                  >
                    <span className="font-semibold">{sc.name}</span>
                    <span className="text-gray-400 ml-1">— {sc.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Visual + Kartu informasi */}
          <div className="reveal reveal-delay-1">

            {/* Visual latar belakang industrial (placeholder untuk foto) */}
            <div className="
              relative bg-[#0a1f44] rounded overflow-hidden
              aspect-[4/3] mb-6
            ">
              {/* Pattern grid di dalam kotak visual */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(196,30,30,0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(196,30,30,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Teks placeholder – ganti dengan <Image> foto lapangan */}
              <div className="
                absolute inset-0 flex flex-col items-center justify-center
                text-center px-8
              ">
                <div className="
                  w-20 h-20 rounded-full bg-white/10
                  flex items-center justify-center mb-4
                  border-2 border-[#c41e1e]
                ">
                  <span className="
                    font-['Bebas_Neue'] text-3xl text-white tracking-wide
                  ">
                    ACS
                  </span>
                </div>
                <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                  Foto operasional lapangan dapat ditambahkan di sini
                  (ganti dengan komponen{" "}
                  <code className="text-[#c41e1e] bg-white/10 px-1 rounded text-xs">
                    &lt;Image&gt;
                  </code>{" "}
                  dari Next.js)
                </p>
              </div>

              {/* Badge "Est. 2004" di pojok */}
              <div className="
                absolute bottom-4 right-4
                bg-[#c41e1e] text-white text-xs font-bold
                px-3 py-1.5 rounded
              ">
                Est. 2004
              </div>
            </div>

            {/* Tiga kartu highlight informasi */}
            <div className="grid grid-cols-3 gap-3">
              {highlights.map(({ icon: Icon, label, value, sub }, i) => (
                <div
                  key={i}
                  className="
                    bg-[#f0f4fa] border border-[#0a1f44]/10 rounded p-4
                    flex flex-col gap-2
                    hover:border-[#c41e1e]/30 hover:bg-white
                    transition-all duration-200
                  "
                >
                  <Icon size={18} className="text-[#c41e1e]" />
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">
                    {label}
                  </p>
                  <p className="text-[#0a1f44] font-bold text-xs leading-snug">
                    {value}
                  </p>
                  <p className="text-gray-400 text-[10px] leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
