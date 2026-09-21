// Data peta sebaran pengalaman kerja PT Adiguna Cakra Semesta.
// Sumber: ACS Portofolio_Filter.xlsx (sheet "Drilling Fluids" & "Cementing"),
// diekstrak via scripts/build_experience_data.py ke JSON per lini layanan.

import rawDrillingMarkers from "./markers-drilling.json";
import rawCementingMarkers from "./markers-cementing.json";
import provinceLabelsRaw from "./province-labels.json";
import provinceBoundariesRaw from "./province-boundaries.json";
import type { FeatureCollection } from "geojson";

export interface ExperienceItem {
  owner: string;
  date: string;
}

export interface ExperienceMarker {
  loc: string;
  lat: number;
  lng: number;
  prov: string;
  count: number;
  items: ExperienceItem[];
}

export interface ExperienceCategory {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
  markers: ExperienceMarker[];
}

// Gabungkan titik dengan koordinat identik (mis. beda penulisan nama lokasi untuk titik yang sama)
function dedupeMarkers(list: ExperienceMarker[]): ExperienceMarker[] {
  const byKey: Record<string, ExperienceMarker> = {};
  const order: string[] = [];
  list.forEach((m) => {
    const key = `${m.lat},${m.lng}`;
    const existing = byKey[key];
    if (!existing) {
      byKey[key] = { ...m, items: [...m.items] };
      order.push(key);
    } else {
      existing.count += m.count;
      existing.items = existing.items.concat(m.items);
      if (m.loc.length > existing.loc.length) existing.loc = m.loc;
    }
  });
  return order.map((k) => byKey[k]);
}

export const DRILLING_MARKERS: ExperienceMarker[] = dedupeMarkers(
  rawDrillingMarkers as ExperienceMarker[]
);
export const CEMENTING_MARKERS: ExperienceMarker[] = dedupeMarkers(
  rawCementingMarkers as ExperienceMarker[]
);

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    id: "drilling",
    label: "Drilling & Completion Fluids Services",
    shortLabel: "Drilling Fluids",
    icon: "🛢️",
    markers: DRILLING_MARKERS,
  },
  {
    id: "cementing",
    label: "Cementing Services",
    shortLabel: "Cementing",
    icon: "🧱",
    markers: CEMENTING_MARKERS,
  },
];

export const PROVINCE_LABELS: Record<string, string> = provinceLabelsRaw;

export const PROVINCE_BOUNDARIES = provinceBoundariesRaw as unknown as FeatureCollection;

export function normalizeProvinceName(raw: string): string {
  return PROVINCE_LABELS[raw] || raw;
}

export function extractYear(dateStr: string): string {
  const years = Array.from(new Set((dateStr.match(/(19|20)\d{2}/g) || [])));
  if (years.length === 0) return dateStr;
  if (years.length === 1) return years[0];
  return `${years[0]}–${years[years.length - 1]}`;
}

export function earliestYear(markers: ExperienceMarker[]): number | null {
  let min: number | null = null;
  const re = /(19|20)\d{2}/g;
  markers.forEach((m) =>
    m.items.forEach((it) => {
      const found = (it.date || "").match(re);
      if (found) {
        found.forEach((y) => {
          const year = Number(y);
          if (min === null || year < min) min = year;
        });
      }
    })
  );
  return min;
}

// Turunan warna brand ACS (navy #0a1f44, biru #1a3a6e, merah #c41e1e) —
// disusun berselang-seling agar wilayah yang bersebelahan tetap mudah dibedakan.
export const PALETTE = [
  "#1a3a6e",
  "#c41e1e",
  "#4a72a8",
  "#8f1616",
  "#0a1f44",
  "#e2574f",
  "#2f5590",
  "#a83232",
  "#6f8fc2",
  "#c76b6b",
  "#12294f",
  "#6b7280",
];
