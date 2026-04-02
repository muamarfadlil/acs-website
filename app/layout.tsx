import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// Metadata ini akan muncul di tab browser dan hasil pencarian Google
export const metadata: Metadata = {
  title: "PT Adiguna Cakra Semesta | Drilling & Cementing Services",
  description:
    "PT ACS adalah perusahaan penyedia jasa Drilling-Completion Fluids dan Cementing untuk industri hulu migas dan geotermal di Indonesia. Berdiri sejak 2004, bersertifikat ISO 9001, 14001, dan 45001.",
  keywords: [
    "drilling fluids",
    "cementing services",
    "mud logging",
    "oil gas Indonesia",
    "PT Adiguna Cakra Semesta",
    "ACS Indonesia",
  ],
  openGraph: {
    title: "PT Adiguna Cakra Semesta",
    description: "Trusted Partner in Drilling Fluids & Cementing Services",
    url: "https://acs-indonesia.com",
    siteName: "PT ACS Indonesia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/*
          Memuat font dari Google Fonts.
          Bebas Neue = font display tebal untuk judul besar
          Barlow      = font bersih untuk teks isi
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-body antialiased">
        {/* Header selalu tampil di semua halaman */}
        <Header />

        {/* Sidebar navigasi kiri untuk halaman-halaman terpisah */}
        <Sidebar />

        {/* Konten utama tiap halaman */}
        <main>{children}</main>
      </body>
    </html>
  );
}
