"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiHome, FiUser, FiBriefcase, FiGrid, FiMail, FiClock, FiCode } from "react-icons/fi";
import { useTab } from "@/contexts/TabContext";

const navItems = [
  { name: "Home", href: "#home", icon: FiHome, colorClass: "text-sky-500" },
  { name: "About", href: "#about", icon: FiUser, colorClass: "text-violet-500" },
  { name: "Skills", href: "#technical-skills", icon: FiCode, colorClass: "text-blue-500" },
  { name: "Experience", href: "#experience", icon: FiBriefcase, colorClass: "text-amber-500" },
  { name: "Projects", href: "#projects", icon: FiGrid, colorClass: "text-emerald-500" },
  { name: "Contact", href: "#contact", icon: FiMail, colorClass: "text-rose-500" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { setActiveTab } = useTab();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-2 z-50 flex justify-center px-2 sm:px-4 pointer-events-none"
    >
      <div className="w-full max-w-6xl px-2 sm:px-0 pointer-events-auto">
        <div
          className={`flex items-center justify-center gap-3 rounded-2xl border px-4 py-2 sm:py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-background/95 border-border/70 shadow-lg backdrop-blur-sm"
              : "bg-background/90 border-border/50 shadow-sm backdrop-blur-sm"
          }`}
        >
          {/* Centered nav (all breakpoints) */}
          <div className="flex-1 flex justify-left">
            <div className="flex items-center gap-3 text-sm">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className={`h-3.5 w-3.5 ${item.colorClass}`} />
                    <span className="hidden text-xs sm:inline">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Right side - buttons */}
          <div className="flex-1 flex justify-end items-center gap-2">
            {/* In Progress Indicator */}
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                setActiveTab("in-progress");
              }}
              className="relative flex h-8 w-8 items-center justify-center rounded-full border border-red-300 bg-background hover:bg-red-50 transition-colors"
              aria-label="In progress projects"
            >
              <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}