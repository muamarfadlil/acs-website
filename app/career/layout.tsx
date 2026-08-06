// app/career/layout.tsx
// Metadata untuk halaman Karir (page.tsx adalah client component
// sehingga tidak bisa mengekspor metadata secara langsung)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karir | PT Adiguna Cakra Semesta",
  description:
    "Bergabunglah dengan tim profesional PT ACS. Kami mencari individu berpengalaman di bidang teknik fluida pemboran, sementasi, dan mud logging.",
};

export default function CareerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
