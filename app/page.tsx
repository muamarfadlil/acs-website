// app/page.tsx
// Halaman utama (landing page) — menggabungkan semua section

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CsrHighlight from "@/components/sections/CsrHighlight";
import VisionMission from "@/components/sections/VisionMission";
import Certifications from "@/components/sections/Certifications";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Halaman Utama (/)
 * -----------------
 * Ini adalah root page yang merakit semua komponen section
 * menjadi satu halaman panjang (long-scroll landing page).
 *
 * Urutan section:
 * 1. Hero          → tampilan pertama (above the fold)
 * 2. About         → profil perusahaan
 * 3. Services      → tiga layanan utama
 * 4. CsrHighlight  → cuplikan kegiatan CSR & K3
 * 5. VisionMission → visi, misi, dan keunggulan
 * 6. Certifications→ sertifikasi ISO
 * 7. Contact       → info kontak + footer
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CsrHighlight />
      <VisionMission />
      <Certifications />
      <ContactSection />
    </>
  );
}
