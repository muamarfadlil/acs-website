"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./experience-map.css";
import {
  MARKERS,
  PALETTE,
  PROVINCE_BOUNDARIES,
  earliestYear,
  extractYear,
  normalizeProvinceName,
  type ExperienceItem,
} from "@/lib/experience-map/data";

type Detail = { kind: "prov"; prov: string } | { kind: "loc"; loc: string } | null;

function radiusForCount(count: number) {
  return 4 + Math.sqrt(count) * 3.5;
}

function RecordCard({ item }: { item: ExperienceItem }) {
  const icon = item.type === "Contract" ? "📄" : "🔧";
  return (
    <div className={`exp-rec rec-${item.type}`}>
      <div className="owner">{item.owner}</div>
      <div className="meta">
        <span className={`exp-badge ${item.type}`}>
          {icon} {item.type === "Contract" ? "Kontrak" : "Proyek"}
        </span>
        <span>{extractYear(item.date)}</span>
      </div>
    </div>
  );
}

export default function ExperienceMapWidget() {
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const provinceLayerRef = useRef<L.GeoJSON | null>(null);
  const circleByLocRef = useRef<Record<string, L.CircleMarker>>({});

  const [query, setQuery] = useState("");
  const [activeProv, setActiveProv] = useState<string | null>(null);
  const [detail, setDetail] = useState<Detail>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showDetailRef = useRef<(loc: string) => void>(() => {});
  const filterProvRef = useRef<(prov: string) => void>(() => {});

  const provColors = useMemo(() => {
    const colors: Record<string, string> = {};
    let idx = 0;
    MARKERS.forEach((m) => {
      if (!colors[m.prov]) {
        colors[m.prov] = PALETTE[idx % PALETTE.length];
        idx++;
      }
    });
    return colors;
  }, []);

  const provAgg = useMemo(() => {
    const agg: Record<string, { count: number; locs: number }> = {};
    MARKERS.forEach((m) => {
      if (!agg[m.prov]) agg[m.prov] = { count: 0, locs: 0 };
      agg[m.prov].count += m.count;
      agg[m.prov].locs += 1;
    });
    return agg;
  }, []);

  const provArr = useMemo(
    () => Object.entries(provAgg).sort((a, b) => b[1].count - a[1].count),
    [provAgg]
  );
  const maxProvCount = useMemo(
    () => Math.max(...provArr.map(([, agg]) => agg.count)),
    [provArr]
  );

  const stats = useMemo(() => {
    const totalRecords = MARKERS.reduce((s, m) => s + m.count, 0);
    const totalLocs = MARKERS.length;
    const totalProv = Object.keys(provAgg).length;
    const sinceYear = earliestYear();
    const allItems = MARKERS.flatMap((m) => m.items);
    const totalClients = new Set(allItems.map((it) => it.owner.trim().toLowerCase())).size;
    const totalContract = allItems.filter((it) => it.type === "Contract").length;
    const totalProject = allItems.filter((it) => it.type === "Project").length;
    return { totalRecords, totalLocs, totalProv, sinceYear, totalClients, totalContract, totalProject };
  }, [provAgg]);

  const legendSteps = useMemo(() => {
    const maxItemCount = Math.max(...MARKERS.map((m) => m.count));
    return Array.from(new Set([1, Math.max(2, Math.round(maxItemCount / 2)), maxItemCount]));
  }, []);

  const trimmedQuery = query.trim().toLowerCase();
  const searchMatch = useMemo(() => {
    if (!trimmedQuery) return null;
    const matchedLocs = new Set<string>();
    const matchedProvs = new Set<string>();
    MARKERS.forEach((m) => {
      const hay = (
        m.loc +
        " " +
        m.prov +
        " " +
        m.items.map((it) => it.owner + " " + it.title).join(" ")
      ).toLowerCase();
      if (hay.includes(trimmedQuery)) {
        matchedLocs.add(m.loc);
        matchedProvs.add(m.prov);
      }
    });
    return { matchedLocs, matchedProvs };
  }, [trimmedQuery]);

  const resetFilter = useCallback(() => {
    setQuery("");
    setActiveProv(null);
    setDetail(null);
    mapInstanceRef.current?.setView([-2.2, 113.5], 5);
  }, []);

  const showLocDetail = useCallback((loc: string) => {
    setDetail({ kind: "loc", loc });
    if (typeof window !== "undefined" && window.innerWidth <= 760) {
      setSidebarOpen(true);
    }
  }, []);

  const filterProv = useCallback(
    (prov: string) => {
      setActiveProv((prev) => {
        if (prev === prov) {
          resetFilter();
          return null;
        }
        setDetail({ kind: "prov", prov });
        return prov;
      });
    },
    [resetFilter]
  );

  useEffect(() => {
    showDetailRef.current = showLocDetail;
  }, [showLocDetail]);
  useEffect(() => {
    filterProvRef.current = filterProv;
  }, [filterProv]);

  // Inisialisasi peta Leaflet sekali saat komponen mount.
  useEffect(() => {
    if (!mapElRef.current) return;
    const entranceTimers: ReturnType<typeof setTimeout>[] = [];

    const map = L.map(mapElRef.current, {
      zoomControl: true,
      minZoom: 4,
      maxZoom: 9,
      attributionControl: false,
    }).setView([-2.2, 113.5], 5);
    mapInstanceRef.current = map;

    const provAggByLabel: Record<string, boolean> = {};
    MARKERS.forEach((m) => {
      provAggByLabel[m.prov] = true;
    });

    const provinceLayer = L.geoJSON(PROVINCE_BOUNDARIES, {
      style: (feature) => {
        const label = normalizeProvinceName(feature?.properties?.NAME_1);
        const hasData = !!provAggByLabel[label];
        return {
          fillColor: hasData ? provColors[label] : "#22314f",
          fillOpacity: hasData ? 0.22 : 0.5,
          color: hasData ? provColors[label] : "#33456b",
          weight: hasData ? 1.3 : 0.7,
          opacity: hasData ? 0.85 : 0.55,
        };
      },
      onEachFeature: (feature, layer) => {
        const label = normalizeProvinceName(feature?.properties?.NAME_1);
        const pathLayer = layer as L.Path;
        layer.bindTooltip(label, { sticky: true });
        layer.on("mouseover", () =>
          pathLayer.setStyle({ weight: 2.2, fillOpacity: provAggByLabel[label] ? 0.34 : 0.6 })
        );
        layer.on("mouseout", () => provinceLayer.resetStyle(layer));
        layer.on("click", () => {
          if (provAggByLabel[label]) filterProvRef.current(label);
        });
      },
    }).addTo(map);
    provinceLayerRef.current = provinceLayer;
    map.fitBounds(provinceLayer.getBounds(), { padding: [10, 10] });

    const circleByLoc: Record<string, L.CircleMarker> = {};
    MARKERS.forEach((m, i) => {
      const color = provColors[m.prov];
      const finalRadius = radiusForCount(m.count);
      const circle = L.circleMarker([m.lat, m.lng], {
        radius: 0,
        fillColor: color,
        fillOpacity: 0,
        color,
        weight: 1.5,
        opacity: 0,
      });

      const popupEl = document.createElement("div");
      const titleEl = document.createElement("div");
      titleEl.className = "exp-popup-title";
      titleEl.textContent = m.loc;
      const subEl = document.createElement("div");
      subEl.className = "exp-popup-sub";
      subEl.textContent = `${m.prov}, ${m.count} item pengalaman`;
      const btnEl = document.createElement("span");
      btnEl.className = "exp-popup-btn";
      btnEl.textContent = "Lihat detail →";
      btnEl.addEventListener("click", () => showDetailRef.current(m.loc));
      popupEl.append(titleEl, subEl, btnEl);
      circle.bindPopup(popupEl);
      circle.on("click", () => showDetailRef.current(m.loc));
      circle.addTo(map);
      circleByLoc[m.loc] = circle;

      const timer = setTimeout(() => {
        let t = 0;
        const dur = 320;
        const step = 16;
        const anim = setInterval(() => {
          t += step;
          const p = Math.min(1, t / dur);
          circle.setRadius(finalRadius * p);
          circle.setStyle({ fillOpacity: 0.35 * p, opacity: 0.65 * p });
          if (p >= 1) clearInterval(anim);
        }, step);
      }, i * 12);
      entranceTimers.push(timer);
    });
    circleByLocRef.current = circleByLoc;

    return () => {
      entranceTimers.forEach((t) => clearTimeout(t));
      map.remove();
      mapInstanceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Terapkan highlight marker sesuai filter provinsi aktif / hasil pencarian.
  useEffect(() => {
    const circleByLoc = circleByLocRef.current;
    const hasQuery = trimmedQuery.length > 0;

    MARKERS.forEach((m) => {
      const layer = circleByLoc[m.loc];
      if (!layer) return;
      let on: boolean | null;
      if (hasQuery) {
        on = searchMatch?.matchedLocs.has(m.loc) ?? false;
      } else if (activeProv) {
        on = m.prov === activeProv;
      } else {
        on = null;
      }
      if (on === null) {
        layer.setStyle({ fillOpacity: 0.35, opacity: 0.65, weight: 1.2 });
      } else if (on) {
        layer.setStyle({ fillOpacity: 0.5, opacity: 0.75, weight: 2 });
      } else {
        layer.setStyle({ fillOpacity: hasQuery ? 0.05 : 0.08, opacity: hasQuery ? 0.1 : 0.15, weight: 1 });
      }
    });

    const map = mapInstanceRef.current;
    if (!map) return;
    let bounds: [number, number][] = [];
    if (hasQuery) {
      bounds = MARKERS.filter((m) => searchMatch?.matchedLocs.has(m.loc)).map((m) => [m.lat, m.lng]);
    } else if (activeProv) {
      bounds = MARKERS.filter((m) => m.prov === activeProv).map((m) => [m.lat, m.lng]);
    }
    if (bounds.length === 1) map.setView(bounds[0], 7);
    else if (bounds.length > 1) map.fitBounds(bounds, { padding: [60, 60], maxZoom: 8 });
  }, [activeProv, trimmedQuery, searchMatch]);

  const showResetLink = query.length > 0 || activeProv !== null;

  return (
    <div className="exp-map-root">
      <div className="exp-header">
        <div>
          <h2>{"🗺️"} Peta Sebaran Pengalaman Kerja</h2>
          <p>
            PT Adiguna Cakra Semesta (ACS) — Kontrak &amp; Proyek Mud Engineering / Drilling Services di
            seluruh Indonesia
          </p>
        </div>
        <div className="exp-stats">
          <div className="exp-stat" style={{ "--stat-accent": PALETTE[0] } as CSSProperties}>
            <div className="num">{stats.totalRecords}</div>
            <div className="lbl">Total Item</div>
            <div className="sub">
              {stats.totalContract} Kontrak / {stats.totalProject} Proyek
            </div>
          </div>
          <div className="exp-stat" style={{ "--stat-accent": PALETTE[1] } as CSSProperties}>
            <div className="num">{stats.totalLocs}</div>
            <div className="lbl">Lokasi</div>
          </div>
          <div className="exp-stat" style={{ "--stat-accent": PALETTE[2] } as CSSProperties}>
            <div className="num">{stats.totalProv}</div>
            <div className="lbl">Provinsi</div>
          </div>
          <div className="exp-stat" style={{ "--stat-accent": PALETTE[3] } as CSSProperties}>
            <div className="num">{stats.totalClients}</div>
            <div className="lbl">Klien</div>
          </div>
          {stats.sinceYear ? (
            <div className="exp-stat" style={{ "--stat-accent": PALETTE[4] } as CSSProperties}>
              <div className="num">{stats.sinceYear}</div>
              <div className="lbl">Beroperasi Sejak</div>
            </div>
          ) : null}
        </div>
        <button type="button" className="exp-toggle-sidebar" onClick={() => setSidebarOpen((o) => !o)}>
          {"📋"} Daftar Wilayah
        </button>
      </div>

      <div className="exp-main">
        <div ref={mapElRef} className="exp-map" />

        <div className="exp-legend-box">
          <div className="lt">Keterangan</div>
          {legendSteps.map((c) => {
            const d = Math.round(radiusForCount(c) * 2);
            return (
              <div className="exp-legend-row" key={c}>
                <span className="exp-legend-circle" style={{ width: d, height: d }} />
                {c} item pengalaman
              </div>
            );
          })}
          <div className="exp-legend-row" style={{ marginTop: 6 }}>
            Warna = wilayah / provinsi
          </div>
          <div className="exp-legend-row" style={{ marginTop: 6, fontSize: 10, opacity: 0.7 }}>
            Batas wilayah: GADM v4.1
          </div>
        </div>

        <div className={`exp-sidebar${sidebarOpen ? " mobile-open" : ""}`}>
          <div className="head">
            <h3>
              Wilayah Operasi{" "}
              {showResetLink ? (
                <span className="exp-reset show" onClick={resetFilter}>
                  (reset)
                </span>
              ) : null}
            </h3>
            <div className="sub">Klik wilayah atau titik pada peta untuk melihat detail kontrak/proyek</div>
            <input
              className="exp-search"
              type="text"
              placeholder="Cari klien, lokasi, atau provinsi…"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="exp-filter-list">
            {provArr.map(([prov, agg]) => {
              const pct = Math.round((agg.count / maxProvCount) * 100);
              const isActive = activeProv === prov;
              const isMatch = trimmedQuery.length > 0 && searchMatch?.matchedProvs.has(prov);
              const isDim = trimmedQuery.length > 0 && !isMatch;
              return (
                <button
                  type="button"
                  key={prov}
                  className={`exp-prov-row${isActive ? " active" : ""}${isDim ? " dim" : ""}${
                    isMatch ? " match" : ""
                  }`}
                  onClick={() => filterProv(prov)}
                >
                  <div className="top-line">
                    <div className="left">
                      <span className="exp-dot" style={{ background: provColors[prov] }} />
                      <span className="exp-prov-name">{prov}</span>
                    </div>
                    <span className="exp-prov-count">
                      {agg.count} item, {agg.locs} lokasi
                    </span>
                  </div>
                  <div className="exp-prov-bar">
                    <div className="exp-prov-bar-fill" style={{ width: `${pct}%`, background: provColors[prov] }} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className={`exp-detail-panel${detail ? " open" : ""}`}>
            {detail?.kind === "loc"
              ? (() => {
                  const m = MARKERS.find((x) => x.loc === detail.loc);
                  if (!m) return null;
                  return (
                    <>
                      <h4>{m.loc}</h4>
                      <div className="exp-prov-tag">
                        {m.prov}, {m.count} item
                      </div>
                      {m.items.map((it, i) => (
                        <RecordCard item={it} key={i} />
                      ))}
                    </>
                  );
                })()
              : null}
            {detail?.kind === "prov"
              ? (() => {
                  const locsInProv = MARKERS.filter((m) => m.prov === detail.prov).sort(
                    (a, b) => b.count - a.count
                  );
                  const total = locsInProv.reduce((s, l) => s + l.count, 0);
                  return (
                    <>
                      <h4>{detail.prov}</h4>
                      <div className="exp-prov-tag">
                        {total} item di {locsInProv.length} lokasi
                      </div>
                      {locsInProv.map((loc) => (
                        <div key={loc.loc}>
                          <div className="exp-loc-heading">{"📍"} {loc.loc}</div>
                          {loc.items.map((it, i) => (
                            <RecordCard item={it} key={i} />
                          ))}
                        </div>
                      ))}
                    </>
                  );
                })()
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
