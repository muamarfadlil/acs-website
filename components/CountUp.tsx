"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  // Contoh: "20+", "28+", "3", "45+" — angka di depan dianimasikan,
  // sisanya (mis. "+") ditampilkan apa adanya.
  value: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 1500, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const [display, setDisplay] = useState(match ? "0" : value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(String(Math.round(eased * target)));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, match]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
