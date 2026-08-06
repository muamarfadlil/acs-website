// app/hse-p2k3/layout.tsx
// Metadata untuk halaman HSE & P2K3 (page.tsx adalah client component
// sehingga tidak bisa mengekspor metadata secara langsung)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSE & P2K3 | PT Adiguna Cakra Semesta",
  description:
    "Dokumentasi kegiatan Corporate Social Responsibility (CSR) dan Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) PT Adiguna Cakra Semesta.",
};

export default function HseP2k3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
