"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className="
        flex items-center justify-center w-9 h-9
        text-white/70 hover:text-white
        border border-white/20 hover:border-[#c41e1e]
        hover:bg-[#c41e1e]
        hover:shadow-[0_0_12px_rgba(196,30,30,0.4)]
        rounded transition-all duration-200
      "
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
