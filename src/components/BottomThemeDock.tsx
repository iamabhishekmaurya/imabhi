"use client";

import { useEffect, useState } from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Button } from "./ui/button";

const THEME_KEY = "abhishek-theme";
const AUTO_THEME_KEY = "abhishek-theme-auto";

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

  root.classList.remove("theme-ocean", "theme-forest", "theme-rose", "theme-solar");

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

export function BottomThemeDock() {
  const [theme, setTheme] = useState<string>("light");
  const [autoMode, setAutoMode] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(THEME_KEY);
    const initial = stored && themes.some((t) => t.id === stored) ? stored : "light";
    setTheme(initial);
    applyTheme(initial);
    const storedAuto = window.localStorage.getItem(AUTO_THEME_KEY);
    // Enable auto mode by default if not previously set
    const autoEnabled = storedAuto === null ? true : storedAuto === "true";
    setAutoMode(autoEnabled);
    // Store the default auto mode setting
    if (storedAuto === null && typeof window !== "undefined") {
      window.localStorage.setItem(AUTO_THEME_KEY, "true");
    }
  }, []);

  const handleChange = (value: string) => {
    setTheme(value);
    applyTheme(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, value);
    }
  };

  // Auto theme cycling every 15 seconds when enabled
  useEffect(() => {
    if (!autoMode) return;
    const interval = setInterval(() => {
      setTheme((current) => {
        const currentIndex = themes.findIndex((t) => t.id === current);
        const available = themes.filter((_, i) => i !== currentIndex);
        const next = available[Math.floor(Math.random() * available.length)] ?? themes[0];
        applyTheme(next.id);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(THEME_KEY, next.id);
        }
        return next.id;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, [autoMode]);

  return (
    <div className="fixed right-4 z-40 pointer-events-none bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-col items-center">
      <div className={`pointer-events-auto absolute bottom-full mb-2 right-0 md:static md:mb-0 transition-all duration-300 origin-bottom md:origin-center ${isMobileOpen
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-4 scale-95 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0 md:scale-100"
        }`}>
        <Dock
          iconSize={32}
          iconMagnification={40}
          iconDistance={120}
          className="flex-col h-auto bg-background/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-2 py-3 md:px-0 md:py-0 border md:border-none border-border shadow-xl md:shadow-none min-h-[auto] rounded-[2rem] md:rounded-full"
        >
          {themes.map((t) => (
            <DockIcon
              key={t.id}
              disableMagnification={true}
              className="my-1 flex items-center justify-center"
              onClick={() => {
                // When user manually selects a theme, disable auto mode
                setAutoMode(false);
                if (typeof window !== "undefined") {
                  window.localStorage.setItem(AUTO_THEME_KEY, "false");
                }
                handleChange(t.id);
                setIsMobileOpen(false);
              }}
            >
              <Button
                type="button"
                size="sm"
                variant={t.id === theme ? "default" : "ghost"}
                className={`h-7 px-2 text-[11px] whitespace-nowrap ${t.id === theme
                  ? "rounded-full"
                  : "rounded-full text-muted-foreground"
                  }`}
              >
                <span className="text-[13px] leading-none">{t.icon}</span>
                {/* {t.label} */}
              </Button>
            </DockIcon>
          ))}

          {/* Auto mode toggle */}
          <DockIcon
            disableMagnification={true}
            className="mt-2 flex items-center justify-center pointer-events-auto"
            onClick={() => {
              setAutoMode((prev) => {
                const next = !prev;
                if (typeof window !== "undefined") {
                  window.localStorage.setItem(AUTO_THEME_KEY, String(next));
                }
                return next;
              });
              setIsMobileOpen(false);
            }}
          >
            <Button
              type="button"
              size="sm"
              variant={autoMode ? "default" : "ghost"}
              className={`h-7 px-2 text-[11px] whitespace-nowrap ${autoMode ? "rounded-full" : "rounded-full text-muted-foreground"
                }`}
            >
              <span className="text-[13px] leading-none">
                {autoMode ? "🔁" : "▶️"}
              </span>
              {/* Auto */}
            </Button>
          </DockIcon>
        </Dock>
      </div>

      <div className="md:hidden pointer-events-auto">
        <Button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="h-10 w-10 p-0 rounded-full shadow-xl bg-background border border-border flex items-center justify-center hover:bg-accent transition-transform"
          variant="outline"
        >
          <span className="text-[15px] leading-none">
            {isMobileOpen ? "✖️" : themes.find(t => t.id === theme)?.icon || "🎨"}
          </span>
        </Button>
      </div>
    </div>
  );
}
