// app/clients/layout.tsx
// Metadata untuk halaman Klien & Proyek (page.tsx adalah client component
// sehingga tidak bisa mengekspor metadata secara langsung)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klien & Proyek | PT Adiguna Cakra Semesta",
  description:
    "Rekam jejak proyek PT ACS mencakup 28+ kontrak dengan KKKS terkemuka seperti Pertamina, Kondur Petroleum, EMP, dan lainnya sejak tahun 2005.",
};

export default function ClientsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
