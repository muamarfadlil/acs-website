"""One-off script: rebuild experience-map marker JSON from ACS Portofolio_Filter.xlsx.

Reads the two sheets (Drilling Fluids, Cementing), forward-fills blank
Owner/Location cells (spreadsheet convention: blank = same as row above),
resolves each location to lat/lng/province via a manual alias table built
from the previous lib/experience-map/markers.json (so the map keeps the same
visual placement), and writes two marker JSON files consumed by
lib/experience-map/data.ts.

Run once with: python scripts/build_experience_data.py
"""

import json
import re
import openpyxl

SRC = "ACS Portofolio_Filter.xlsx"
OUT_DRILLING = "lib/experience-map/markers-drilling.json"
OUT_CEMENTING = "lib/experience-map/markers-cementing.json"

INDO_MONTHS = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
]

# loc text (as it appears in the xlsx, after forward-fill) -> (lat, lng, province)
# Coordinates/provinces reused from the previous markers.json so the map pins
# land in the same places as before.
LOCATION_COORDS = {
    # Drilling Fluids sheet
    "Pekanbaru Riau": (0.53, 101.45, "Riau"),
    "Kalimantan Timur": (0.5, 116.5, "Kalimantan Timur"),
    "Sumatera Selatan": (-3.3, 104, "Sumatera Selatan"),
    "Tanjung Kalimantan Selatan": (-2.17, 115.4, "Kalimantan Selatan"),
    "Benakat Sumatera": (-3.4, 103.65, "Sumatera Selatan"),
    "Pabuaran, Subang - Jawa Barat": (-6.55, 107.77, "Jawa Barat"),
    "Sumatera Utara": (2.5, 98.7, "Sumatera Utara"),
    "Lapangan Air Benakat - Sumatera Selatan": (-3.4, 103.65, "Sumatera Selatan"),
    "Blok Pasir, Kalimantan Timur": (-1.9, 116.2, "Kalimantan Timur"),
    "Blok Bengara, Kalimantan Utara": (3.75, 117.55, "Kalimantan Utara"),
    "Jambi, Sumatera": (-1.61, 103.61, "Jambi"),
    "Kruh Pendopo, Sumatera Selatan": (-3.32, 103.95, "Sumatera Selatan"),
    "Blok Baturaja, Sumatera Selatan": (-4.13, 104.17, "Sumatera Selatan"),
    "Betun, Sumatera Selatan": (-3.35, 104, "Sumatera Selatan"),
    "Sidoarjo, Jawa Timur": (-7.45, 112.72, "Jawa Timur"),
    "Kurau, Pulau padang": (0.35, 102.95, "Riau"),
    "Tanjung Darat": (-3.4, 104.1, "Sumatera Selatan"),
    "Prabumulih, Sumatera Selatan": (-3.43, 104.24, "Sumatera Selatan"),
    "Kab. Pali Sumatera Selatan": (-3.35, 104.05, "Sumatera Selatan"),
    "Sorong - Papua": (-0.88, 131.25, "Papua Barat"),
    "Riau": (0.5, 101.45, "Riau"),
    "Jawa Barat": (-6.9, 107.6, "Jawa Barat"),
    "Tuban - Jawa Timur": (-6.9, 112.06, "Jawa Timur"),
    # Cementing sheet
    "West Sangata": (0.5, 117.5, "Kalimantan Timur"),
    "Nuangel": (-1.6, 130.3, "Maluku"),
    "South Sumatera": (-3.3, 104, "Sumatera Selatan"),
    "Sumatera": (-1.5, 102.5, "Sumatera"),
    "East Java": (-7.6, 112.3, "Jawa Timur"),
    "Pendopo - South Sumatera": (-3.28, 103.85, "Sumatera Selatan"),
    "North Sumatera": (2.5, 98.7, "Sumatera Utara"),
    "Jambi - Sumatera": (-1.61, 103.61, "Jambi"),
    "Block Paser - East Kalimantan": (-1.9, 116.2, "Kalimantan Timur"),
    "Cepu - East Java": (-7.15, 111.58, "Jawa Timur"),
    "Air Hitam - Sumatera": (-3.15, 103.8, "Sumatera Selatan"),
    "Kruh Pendopo - South Sumatera": (-3.32, 103.95, "Sumatera Selatan"),
    "Bunyu Tapa - North Kalimantan": (3.48, 117.85, "Kalimantan Utara"),
    "Kuau - Pulau Padang": (0.35, 102.95, "Riau"),
    "Kurau - Pulau padang": (0.35, 102.95, "Riau"),
    "Gebang - Sumatera": (-3.4, 103.9, "Sumatera Selatan"),
    "Tuban - East Java": (-6.9, 112.06, "Jawa Timur"),
    "West Belani - South Sumatera": (-3.5, 103.9, "Sumatera Selatan"),
    "Pendalian, Riau - Sumatera": (0.9, 101, "Riau"),
    "Kalimantan": (0, 114, "Kalimantan"),
}

# Manual fix for an obvious source typo (see plan notes).
DATE_FIXES = {
    "2 November 2015 - 28 November 20216": "2 November 2015 - 28 November 2016",
}


def fmt_date(v):
    if hasattr(v, "strftime"):
        return f"{v.day:02d} {INDO_MONTHS[v.month - 1]} {v.year}"
    s = re.sub(r"\s+", " ", str(v)).strip()
    return DATE_FIXES.get(s, s)


def build_markers(rows):
    by_loc = {}
    order = []
    for owner, loc, date in rows:
        if loc not in LOCATION_COORDS:
            raise SystemExit(f"No coordinate mapping for location: {loc!r}")
        lat, lng, prov = LOCATION_COORDS[loc]
        if loc not in by_loc:
            by_loc[loc] = {"loc": loc, "lat": lat, "lng": lng, "prov": prov, "count": 0, "items": []}
            order.append(loc)
        by_loc[loc]["count"] += 1
        by_loc[loc]["items"].append({"owner": owner.strip(), "date": fmt_date(date)})
    return [by_loc[k] for k in order]


def main():
    wb = openpyxl.load_workbook(SRC, data_only=True)

    ws = wb["Drilling Fluids"]
    rows = []
    last_owner = last_loc = None
    for r in range(7, ws.max_row + 1):
        owner = ws.cell(r, 3).value
        loc = ws.cell(r, 6).value
        title = ws.cell(r, 5).value
        date = ws.cell(r, 7).value
        if owner:
            last_owner = owner
        if loc:
            last_loc = loc
        if title is None and date is None:
            continue
        rows.append((last_owner, last_loc, date))
    drilling_markers = build_markers(rows)

    ws2 = wb["Cementing"]
    rows2 = []
    for r in range(7, ws2.max_row + 1):
        owner = ws2.cell(r, 3).value
        loc = ws2.cell(r, 4).value
        date = ws2.cell(r, 5).value
        if owner is None and loc is None and date is None:
            continue
        rows2.append((owner, loc, date))
    cementing_markers = build_markers(rows2)

    with open(OUT_DRILLING, "w", encoding="utf-8") as f:
        json.dump(drilling_markers, f, ensure_ascii=False, indent=2)
        f.write("\n")
    with open(OUT_CEMENTING, "w", encoding="utf-8") as f:
        json.dump(cementing_markers, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"Drilling: {len(rows)} rows -> {len(drilling_markers)} locations -> {OUT_DRILLING}")
    print(f"Cementing: {len(rows2)} rows -> {len(cementing_markers)} locations -> {OUT_CEMENTING}")


if __name__ == "__main__":
    main()
