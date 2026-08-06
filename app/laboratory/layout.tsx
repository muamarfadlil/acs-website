// app/laboratory/layout.tsx
// Metadata untuk halaman Laboratorium (page.tsx adalah client component
// sehingga tidak bisa mengekspor metadata secara langsung)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fasilitas Laboratorium | PT Adiguna Cakra Semesta",
  description:
    "Laboratorium drilling fluids PT ACS dilengkapi dengan peralatan uji modern termasuk Fann iX 77, HTHP, Linear Swelling Meter, dan software Pegasus Vertex.",
};

export default function LaboratoryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
