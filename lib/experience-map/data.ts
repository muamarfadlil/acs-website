// Data peta sebaran pengalaman kerja PT Adiguna Cakra Semesta.
// Sumber: peta_pengalaman_kerja_acs.html — diekstrak ke JSON agar dapat dipakai di komponen React.

import rawMarkers from "./markers.json";
import provinceLabelsRaw from "./province-labels.json";
import provinceBoundariesRaw from "./province-boundaries.json";
import type { FeatureCollection } from "geojson";

export type RecordType = "Contract" | "Project";

export interface ExperienceItem {
  owner: string;
  title: string;
  date: string;
  type: RecordType;
}

export interface ExperienceMarker {
  loc: string;
  lat: number;
  lng: number;
  prov: string;
  count: number;
  items: ExperienceItem[];
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

export const MARKERS: ExperienceMarker[] = dedupeMarkers(rawMarkers as ExperienceMarker[]);

export const PROVINCE_LABELS: Record<string, string> = provinceLabelsRaw;

export const PROVINCE_BOUNDARIES = provinceBoundariesRaw as unknown as FeatureCollection;

export function normalizeProvinceName(raw: string): string {
  return PROVINCE_LABELS[raw] || raw;
}

export function earliestYear(): number | null {
  let min: number | null = null;
  const re = /(19|20)\d{2}/g;
  MARKERS.forEach((m) =>
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

export const PALETTE = [
  "#2fb5c8",
  "#f4a340",
  "#e05d5d",
  "#8b6ce0",
  "#4caf7d",
  "#e0c23e",
  "#5da8e0",
  "#c9538a",
  "#7ec850",
  "#c97f3a",
  "#5e7ce0",
  "#e0895d",
];
