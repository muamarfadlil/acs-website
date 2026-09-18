// app/experience-map/layout.tsx
// Metadata untuk halaman Peta Sebaran Pengalaman Kerja (page.tsx adalah client component
// sehingga tidak bisa mengekspor metadata secara langsung)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peta Sebaran Pengalaman Kerja | PT Adiguna Cakra Semesta",
  description:
    "Peta interaktif sebaran kontrak & proyek Mud Engineering / Drilling Services PT ACS di seluruh Indonesia, dari Sumatera, Jawa, Kalimantan, hingga Papua.",
};

export default function ExperienceMapLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
