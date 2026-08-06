// app/contact/layout.tsx
// Metadata untuk halaman Kontak (page.tsx adalah client component
// sehingga tidak bisa mengekspor metadata secara langsung)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | PT Adiguna Cakra Semesta",
  description:
    "Hubungi PT Adiguna Cakra Semesta untuk kebutuhan Drilling-Completion Fluids, Cementing Services, dan penawaran kerja sama lainnya.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
