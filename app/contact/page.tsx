// app/contact/page.tsx
// Halaman Kontak PT ACS — form pesan + detail kontak

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, Mail, Phone, MapPin, Send,
  CheckCircle2, Clock, Globe
} from "lucide-react";
import { company } from "@/lib/data";

/**
 * Halaman Kontak (/contact)
 * -------------------------
 * Halaman ini berisi:
 * 1. Form pengiriman pesan (nama, email, telepon, subjek, pesan)
 * 2. Informasi kontak detail (alamat, telepon, email)
 * 3. Peta lokasi placeholder (bisa diisi Google Maps embed)
 *
 * Form menggunakan state React untuk validasi sederhana di sisi klien.
 * Untuk produksi, sambungkan form ke layanan seperti:
 * - Resend (email)
 * - Formspree
 * - Nodemailer via API Route Next.js
 */
export default function ContactPage() {
  // State untuk nilai-nilai input form
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State untuk status pengiriman
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Handler perubahan input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handler submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // ===================================================================
    // TODO: Sambungkan ke API Route atau layanan email.
    // Contoh menggunakan API Route Next.js (app/api/contact/route.ts):
    //
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // if (res.ok) setStatus("success");
    // else setStatus("error");
    //
    // Untuk sekarang kita simulasikan dengan timeout:
    // ===================================================================
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f0f4fa]">

      {/* ===== HERO HALAMAN ===== */}
      <div className="bg-[#0a1f44] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(196,30,30,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196,30,30,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Kembali ke Beranda
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c41e1e] rounded flex items-center justify-center">
              <Mail size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[#c41e1e] text-xs font-semibold uppercase tracking-[0.2em]">
                Hubungi Kami
              </p>
              <h1 className="font-['Bebas_Neue'] text-5xl text-white tracking-wide leading-tight">
                Kontak
              </h1>
            </div>
          </div>

          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Tim ahli kami siap menjawab pertanyaan Anda mengenai layanan drilling fluids,
            cementing, dan mud logging. Kirim pesan atau hubungi kami langsung.
          </p>
        </div>
      </div>

      {/* ===== KONTEN UTAMA ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ===== FORM KONTAK (2/3 lebar) ===== */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded border border-[#0a1f44]/10 overflow-hidden">
              <div className="bg-[#0a1f44] px-6 py-4 flex items-center gap-3">
                <Send size={16} className="text-[#c41e1e]" />
                <h2 className="text-white font-bold text-sm uppercase tracking-wide">
                  Kirim Pesan
                </h2>
              </div>

              <div className="p-6 lg:p-8">

                {/* ===== PESAN SUKSES ===== */}
                {status === "success" && (
                  <div className="
                    flex items-start gap-4 p-5 rounded
                    bg-green-50 border border-green-200 mb-6
                  ">
                    <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-green-800 text-sm">
                        Pesan Berhasil Dikirim!
                      </p>
                      <p className="text-green-700 text-sm mt-1 leading-relaxed">
                        Terima kasih telah menghubungi kami. Tim kami akan merespons
                        pesan Anda dalam 1×24 jam kerja.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Baris 1: Nama + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0a1f44] uppercase tracking-wide mb-2">
                        Nama Lengkap <span className="text-[#c41e1e]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Budi Santoso"
                        className="
                          w-full px-4 py-3 border border-gray-200 rounded text-sm
                          text-gray-800 placeholder-gray-400
                          focus:outline-none focus:border-[#0a1f44] focus:ring-1 focus:ring-[#0a1f44]
                          transition-colors
                        "
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0a1f44] uppercase tracking-wide mb-2">
                        Alamat Email <span className="text-[#c41e1e]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="budi@perusahaan.com"
                        className="
                          w-full px-4 py-3 border border-gray-200 rounded text-sm
                          text-gray-800 placeholder-gray-400
                          focus:outline-none focus:border-[#0a1f44] focus:ring-1 focus:ring-[#0a1f44]
                          transition-colors
                        "
                      />
                    </div>
                  </div>

                  {/* Baris 2: Telepon + Subjek */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0a1f44] uppercase tracking-wide mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+62 812 3456 7890"
                        className="
                          w-full px-4 py-3 border border-gray-200 rounded text-sm
                          text-gray-800 placeholder-gray-400
                          focus:outline-none focus:border-[#0a1f44] focus:ring-1 focus:ring-[#0a1f44]
                          transition-colors
                        "
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0a1f44] uppercase tracking-wide mb-2">
                        Subjek <span className="text-[#c41e1e]">*</span>
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="
                          w-full px-4 py-3 border border-gray-200 rounded text-sm
                          text-gray-800
                          focus:outline-none focus:border-[#0a1f44] focus:ring-1 focus:ring-[#0a1f44]
                          transition-colors bg-white
                        "
                      >
                        <option value="">Pilih topik...</option>
                        <option value="drilling-fluids">Drilling Fluids Services</option>
                        <option value="cementing">Cementing Services</option>
                        <option value="mud-logging">Mud Logging Services</option>
                        <option value="tender">Penawaran / Tender</option>
                        <option value="partnership">Kemitraan</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  {/* Baris 3: Pesan */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0a1f44] uppercase tracking-wide mb-2">
                      Pesan <span className="text-[#c41e1e]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Ceritakan kebutuhan Anda, misalnya: jenis operasi pengeboran, lokasi, jadwal yang direncanakan, dan informasi lain yang relevan..."
                      className="
                        w-full px-4 py-3 border border-gray-200 rounded text-sm
                        text-gray-800 placeholder-gray-400
                        focus:outline-none focus:border-[#0a1f44] focus:ring-1 focus:ring-[#0a1f44]
                        transition-colors resize-none
                      "
                    />
                  </div>

                  {/* Tombol Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="
                      w-full sm:w-auto
                      inline-flex items-center justify-center gap-2
                      bg-[#c41e1e] text-white
                      px-10 py-3.5 font-semibold text-sm rounded
                      hover:bg-[#a01818] transition-colors duration-200
                      disabled:opacity-60 disabled:cursor-not-allowed
                    "
                  >
                    {status === "sending" ? (
                      <>
                        {/* Spinner animasi saat mengirim */}
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* ===== INFO KONTAK (1/3 lebar) ===== */}
          <div className="space-y-5">

            {/* Alamat */}
            <div className="bg-white rounded border border-[#0a1f44]/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#c41e1e] rounded flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0a1f44] text-sm">Alamat</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-[#c41e1e] uppercase tracking-widest mb-1">
                    Kantor &amp; Lab
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {company.address.office}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Gudang
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {company.address.warehouse}
                  </p>
                </div>
              </div>
            </div>

            {/* Telepon & Email */}
            <div className="bg-white rounded border border-[#0a1f44]/10 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#0a1f44] rounded flex items-center justify-center">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Telepon
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-[#0a1f44] font-semibold text-sm hover:text-[#c41e1e] transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1a3a6e] rounded flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[#0a1f44] font-semibold text-xs hover:text-[#c41e1e] transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center">
                  <Globe size={16} className="text-[#0a1f44]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
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
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="bg-[#0a1f44] rounded p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={16} className="text-[#c41e1e]" />
                <h3 className="text-white font-bold text-sm">Jam Operasional</h3>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Senin – Jumat", time: "08.00 – 17.00 WIB" },
                  { day: "Sabtu", time: "08.00 – 13.00 WIB" },
                  { day: "Minggu & Libur", time: "Tutup" },
                  { day: "On-call Support", time: "24 Jam / 7 Hari" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-xs">
                    <span className="text-white/50">{item.day}</span>
                    <span
                      className={`font-semibold ${
                        item.day === "Minggu & Libur"
                          ? "text-red-400"
                          : item.day === "On-call Support"
                          ? "text-[#c41e1e]"
                          : "text-white"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Peta Placeholder */}
            <div className="bg-white rounded border border-[#0a1f44]/10 overflow-hidden">
              <div className="bg-[#f0f4fa] h-40 flex flex-col items-center justify-center text-center px-4">
                <MapPin size={28} className="text-[#c41e1e] mb-2" />
                <p className="text-[#0a1f44] font-semibold text-xs">
                  Google Maps Embed
                </p>
                <p className="text-gray-400 text-[10px] mt-1 leading-relaxed">
                  Tambahkan iframe Google Maps di sini.
                  <br />
                  Paris Square Blok B2, BSD Tangerang Selatan
                </p>
              </div>
              {/*
                Cara menambahkan Google Maps:
                1. Buka maps.google.com → cari alamat kantor
                2. Klik "Bagikan" → "Sematkan peta"
                3. Salin kode <iframe> dan tempel di sini
                4. Tambahkan className="w-full h-full" pada iframe
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
