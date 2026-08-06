// app/csr-k3/layout.tsx
// Metadata untuk halaman CSR & K3 (page.tsx adalah client component
// sehingga tidak bisa mengekspor metadata secara langsung)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSR & K3 | PT Adiguna Cakra Semesta",
  description:
    "Dokumentasi kegiatan Corporate Social Responsibility (CSR) dan Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) PT Adiguna Cakra Semesta.",
};

export default function CsrK3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
