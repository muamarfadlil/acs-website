import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import BackToTop from "@/components/BackToTop"; // ← import komponen baru
import ThemeProvider from "@/components/ThemeProvider";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://acs-indonesia.com"),
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PT Adiguna Cakra Semesta",
    description: "Trusted Partner in Drilling Fluids & Cementing Services",
    url: "https://acs-indonesia.com",
    siteName: "PT ACS Indonesia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Adiguna Cakra Semesta",
    description: "Trusted Partner in Drilling Fluids & Cementing Services",
  },
};

// Data terstruktur Organization (schema.org) — membantu Google memahami
// identitas perusahaan (nama, alamat, kontak, sertifikasi) untuk rich snippet.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.shortName,
  url: "https://acs-indonesia.com",
  logo: "https://acs-indonesia.com/logo.png",
  foundingDate: "2004-05-15",
  description:
    "Perusahaan penyedia jasa Drilling-Completion Fluids dan Cementing untuk industri hulu migas dan geotermal di Indonesia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.office,
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone.replace(/[^\d+]/g, ""),
    email: company.email,
    contactType: "customer service",
  },
  hasCredential: ["ISO 9001", "ISO 14001", "ISO 45001"].map((name) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-white dark:bg-navy-900 text-inherit transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Sidebar />
          <main>{children}</main>

          {/*
            BackToTop diletakkan di layout (bukan di halaman individual)
            sehingga tombol muncul secara otomatis di semua halaman
            tanpa perlu ditambahkan satu per satu.
          */}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
