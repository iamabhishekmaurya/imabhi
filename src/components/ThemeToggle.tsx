"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const THEME_KEY = "abhishek-theme";

const themes = [
  { id: "light", label: "Light", icon: "☀️" },
  { id: "dark", label: "Dark", icon: "🌙" },
  { id: "ocean", label: "Ocean", icon: "🌊" },
  { id: "forest", label: "Forest", icon: "🌲" },
  { id: "rose", label: "Rose", icon: "🌹" },
  { id: "solar", label: "Solar", icon: "🌤️" },
];

function applyTheme(theme: string) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  // Remove previous theme-* classes
  root.classList.remove("theme-ocean", "theme-forest", "theme-rose", "theme-solar");

  // Handle dark vs light + custom themes
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  if (theme === "ocean") root.classList.add("theme-ocean");
  if (theme === "forest") root.classList.add("theme-forest");
  if (theme === "rose") root.classList.add("theme-rose");
  if (theme === "solar") root.classList.add("theme-solar");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(THEME_KEY);
    const initial = stored && themes.some((t) => t.id === stored) ? stored : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const handleChange = (value: string) => {
    setTheme(value);
    applyTheme(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, value);
    }
  };

  return (
    <div className="hidden items-center gap-1 rounded-full border bg-background/70 px-1 py-0.5 text-xs text-muted-foreground shadow-sm backdrop-blur md:flex">
      {themes.map((t) => (
        <Button
          key={t.id}
          type="button"
          size="sm"
          variant={t.id === theme ? "default" : "ghost"}
          className={`h-7 px-2 text-[11px] ${t.id === theme ? "rounded-full" : "rounded-full text-muted-foreground"
            }`}
          onClick={() => handleChange(t.id)}
        >
          <span className="mr-1 text-[13px] leading-none">{t.icon}</span>
          {t.label}
        </Button>
      ))}
    </div>
  );
}
