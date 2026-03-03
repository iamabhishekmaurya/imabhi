"use client";

import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TECH_ICONS } from "@/config/tech-stack";
import { FiActivity, FiClock, FiInfo, FiLayers, FiTarget } from "react-icons/fi";
import { fetchLastUpdateDate } from "@/lib/github";

export default function Hero() {
  const [lastUpdateDate, setLastUpdateDate] = useState<string | null>(null);

  useEffect(() => {
    fetchLastUpdateDate()
      .then(date => setLastUpdateDate(date))
      .catch(console.error);
  }, []);

  const handleSnapshotMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    card.style.transition = "transform 80ms ease-out";
  };

  const handleSnapshotLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
    card.style.transition = "transform 200ms ease-out";
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-background via-background to-slate-950/5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,116,144,0.18),transparent_55%)]" />
      <Meteors
        number={25}
        minDelay={0.1}
        maxDelay={0.8}
        minDuration={1.5}
        maxDuration={6}
        className="absolute inset-0 z-0"
      />

      <div className="container relative z-10 pt-28 md:pt-32">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="relative inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              <BorderBeam
                size={100}
                duration={7}
                borderWidth={1.5}
                colorFrom="#4f46e5"
                colorTo="#ec4899"
                className="opacity-90"
              />
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>Available for freelance & full‑time opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="flex flex-wrap items-center gap-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                <span className="inline-block animate-wave-hand text-3xl md:text-4xl">👋</span>
                <span className="bg-[linear-gradient(to_right,_#4f46e5,_#0ea5e9,_#22c55e,_#f59e0b,_#ec4899,_#a855f7)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-text">
                  Hi, I'm Abhishek Maurya
                </span>
                {/* <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/80 text-amber-400 shadow-sm">
                  <FiStar className="h-4 w-4" />
                </span> */}
              </h1>
              <p className="text-balance text-lg text-muted-foreground md:text-xl">
                Senior Software Engineer focused on scalable microservices, event-driven
                systems, and cloud-native platforms.
              </p>
              <p className="text-sm text-muted-foreground/90 md:text-base">
                Currently working as a senior backend-focused engineer helping teams modernise
                legacy systems into reliable, cloud-ready platforms.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Let&apos;s work together</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#experience">View experience</Link>
              </Button>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Badge variant="outline" className="flex items-center gap-2 border-solid px-3 py-1">
                  <span className="flex items-center gap-1 text-[11px] text-foreground/80">
                    {TECH_ICONS["Java"]}
                    <span>Java</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-foreground/80">
                    {TECH_ICONS["Spring Boot"]}
                    <span>Spring Boot</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-foreground/80">
                    {TECH_ICONS["Kafka"]}
                    <span>Kafka</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-foreground/80">
                    {TECH_ICONS["Node.js"]}
                    <span>Node</span>
                  </span>
                </Badge>
              </div>
            </div>

            <div className="grid gap-4 text-xs text-muted-foreground sm:grid-cols-3">
              <div className="rounded-xl border bg-background/40 p-4 backdrop-blur">
                <p className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/70">
                  <FiTarget className="h-3 w-3 text-emerald-500" />
                  <span>Focus</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">Scalable microservices & reliability</p>
              </div>
              <div className="rounded-xl border bg-background/40 p-4 backdrop-blur">
                <p className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/70">
                  <FiLayers className="h-3 w-3 text-sky-500" />
                  <span>Specialties</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">Java, Spring Boot, Node.js, Kafka, Redis</p>
              </div>
              <div className="rounded-xl border bg-background/40 p-4 backdrop-blur">
                <p className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/70">
                  <FiActivity className="h-3 w-3 text-amber-500" />
                  <span>Currently</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">Architecting a high-throughput dynamic QR & link routing platform</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div className="relative mx-auto max-w-xs [perspective:900px]">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/40 via-sky-500/30 to-emerald-400/40 blur-3xl" />
              <div
                className="relative overflow-hidden rounded-3xl border bg-background/80 p-6 shadow-lg backdrop-blur will-change-transform"
                onMouseMove={handleSnapshotMove}
                onMouseLeave={handleSnapshotLeave}
              >
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <FiInfo className="h-3.5 w-3.5 text-blue-500" />
                  <span>Snapshot</span>
                </p>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Backend‑focused full‑stack engineer designing systems that are resilient,
                  observable, and easy for teams to evolve.
                </p>
                <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <p>• 7 years engineering distributed, event-driven microservices at scale</p>
                  <p>• Strong ownership culture spanning architecture, CI/CD, and observability</p>
                  <p>• Force multiplier known for performance tuning and team mentorship</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none mt-16 flex justify-center text-xs text-muted-foreground">
          <div className="flex items-center gap-2 rounded-full border bg-background/70 px-4 py-1 shadow-sm backdrop-blur">
            {/* <span className="h-1 w-1 rounded-full bg-muted-foreground" /> */}
            <FiClock className="h-3 w-3 text-emerald-500" /><span>Last Update in {lastUpdateDate || "Mar 2026"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
