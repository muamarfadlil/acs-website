"use client";

import { useEffect, type RefObject } from "react";

const REVEAL_SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

// Mengamati elemen ".reveal*" di dalam ref dan menambahkan class "visible"
// begitu elemen masuk viewport. deps opsional untuk memicu observer ulang
// saat daftar elemen berubah (mis. hasil filter).
export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T>,
  deps: unknown[] = [],
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(REVEAL_SELECTOR).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
