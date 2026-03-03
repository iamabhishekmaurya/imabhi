"use client";

import { DottedMap } from "@/components/ui/dotted-map";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { useMediaQuery } from "@/hooks/use-media-query";
import { TECH_ICONS } from "@/config/tech-stack";
import { Badge } from "./ui/badge";
import { BorderBeam } from "./ui/border-beam";

export default function TechOrbitSection() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  // Responsive configuration
  const config = {
    height: isMobile ? "h-[400px]" : isTablet ? "h-[720px]" : "h-[920px]",
    maxWidth: isMobile ? "max-w-sm" : isTablet ? "max-w-2xl" : "max-w-4xl",
    outerOrbits: isMobile ? [
      { iconSize: 24, radius: 140 },
      { iconSize: 22, radius: 110 },
      { iconSize: 20, radius: 85 },
      { iconSize: 18, radius: 65 },
    ] : isTablet ? [
      { iconSize: 34, radius: 350 },
      { iconSize: 34, radius: 300 },
      { iconSize: 34, radius: 240 },
      { iconSize: 34, radius: 190 },
    ] : [
      { iconSize: 36, radius: 420 },
      { iconSize: 36, radius: 360 },
      { iconSize: 36, radius: 290 },
      { iconSize: 36, radius: 230 },
    ],
    middleOrbit: isMobile ? { iconSize: 16, radius: 45 } : isTablet ? { iconSize: 26, radius: 140 } : { iconSize: 28, radius: 170 },
    innerOrbit: isMobile ? { iconSize: 14, radius: 25 } : isTablet ? { iconSize: 22, radius: 80 } : { iconSize: 24, radius: 95 },
  };

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Dotted map + theme-aware glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.26]">
          <DottedMap className="h-full w-full text-muted-foreground/15" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_color-mix(in_oklab,var(--primary)_40%,transparent),transparent_70%),radial-gradient(circle_at_bottom,_color-mix(in_oklab,var(--accent)_35%,transparent),transparent_60%)]" />
        {/* Top fade for seamless transition from previous section */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>

      <div className="relative z-10 container max-w-5xl flex flex-col items-center gap-10">
        <div className="text-center text-xs md:text-sm text-muted-foreground">
          <div className="relative inline-block mb-4 rounded-full">
            <Badge variant="outline"
              className="border-primary/20 bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-medium">
              <span className="tracking-[0.2em] text-primary/80">
                Tech stack & Tools Orbit
              </span>
            </Badge>
            <BorderBeam
              size={120}
              duration={7}
              borderWidth={1.5}
              colorFrom="#4f46e5"
              colorTo="#ec4899"
              className="opacity-90 rounded-full"
            />
          </div>
        </div>

        <div className={`relative flex ${config.height} w-full ${config.maxWidth} px-4 sm:px-0 flex-col items-center justify-center overflow-hidden`}>
          {/* Outermost orbit - Programming Languages (Most icons) */}
          <OrbitingCircles
            iconSize={config.outerOrbits[0].iconSize}
            radius={config.outerOrbits[0].radius}
            duration={40}
            className=""
            showLabels={true}
            labels={["Java", "TypeScript", "JavaScript", "Python", "Go", "SQL", "Bash", "JUnit 5", "Yaml", "C++"]}
          >
            {TECH_ICONS["Java"]}
            {TECH_ICONS["TypeScript"]}
            {TECH_ICONS["JavaScript"]}
            {TECH_ICONS["Python"]}
            {TECH_ICONS["Go"]}
            {TECH_ICONS["SQL"]}
            {TECH_ICONS["Bash"]}
            {TECH_ICONS["JUnit 5"]}
            {TECH_ICONS["Yaml"]}
            {TECH_ICONS["C++"]}
          </OrbitingCircles>

          {/* Second orbit - Frontend Development */}
          <OrbitingCircles
            iconSize={config.outerOrbits[1].iconSize}
            radius={config.outerOrbits[1].radius}
            reverse
            duration={38}
            className=""
            showLabels={true}
            labels={["React", "Next.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Shadcn UI", "Redux", "React Query"]}
          >
            {TECH_ICONS["React"]}
            {TECH_ICONS["Next.js"]}
            {TECH_ICONS["HTML5"]}
            {TECH_ICONS["CSS3"]}
            {TECH_ICONS["Bootstrap"]}
            {TECH_ICONS["Tailwind CSS"]}
            {TECH_ICONS["Shadcn UI"]}
            {TECH_ICONS["Redux"]}
            {TECH_ICONS["React Query"]}
          </OrbitingCircles>

          {/* Third orbit - Backend Development */}
          <OrbitingCircles
            iconSize={config.outerOrbits[2].iconSize}
            radius={config.outerOrbits[2].radius}
            duration={36}
            className=""
            showLabels={true}
            labels={["Spring Boot", "Node.js", "Nest.js", "Express.js", "Kafka", "REST API", "API Gateway", "Microservices"]}
          >
            {TECH_ICONS["Spring Boot"]}
            {TECH_ICONS["Node.js"]}
            {TECH_ICONS["Nest.js"]}
            {TECH_ICONS["Express.js"]}
            {TECH_ICONS["Kafka"]}
            {TECH_ICONS["REST API"]}
            {TECH_ICONS["API Gateway"]}
            {TECH_ICONS["Microservices"]}
          </OrbitingCircles>

          {/* Fourth orbit - Databases */}
          <OrbitingCircles
            iconSize={config.outerOrbits[3].iconSize}
            radius={config.outerOrbits[3].radius}
            reverse
            duration={34}
            className=""
            showLabels={true}
            labels={["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Elasticsearch"]}
          >
            {TECH_ICONS["PostgreSQL"]}
            {TECH_ICONS["MongoDB"]}
            {TECH_ICONS["MySQL"]}
            {TECH_ICONS["Redis"]}
            {TECH_ICONS["Firebase"]}
            {TECH_ICONS["Elasticsearch"]}
          </OrbitingCircles>

          {/* Middle reverse orbit - Cloud & DevOps */}
          <OrbitingCircles
            iconSize={config.middleOrbit.iconSize}
            radius={config.middleOrbit.radius}
            reverse
            speed={1.8}
            duration={30}
            className=""
            showLabels={true}
            labels={["GCP", "AWS", "Azure", "Docker", "Kubernetes", "Tilt", "CI/CD", "Nginx", "Jenkins", "Prometheus", "Terraform"]}
          >
            {TECH_ICONS["GCP"]}
            {TECH_ICONS["AWS"]}
            {TECH_ICONS["Azure"]}
            {TECH_ICONS["Docker"]}
            {TECH_ICONS["Kubernetes"]}
            {TECH_ICONS["Tilt"]}
            {TECH_ICONS["CI/CD"]}
            {TECH_ICONS["Nginx"]}
            {TECH_ICONS["Jenkins"]}
            {TECH_ICONS["Prometheus"]}
            {TECH_ICONS["Terraform"]}
          </OrbitingCircles>

          {/* Inner orbit - Development Tools (Fewer icons) */}
          <OrbitingCircles
            iconSize={config.innerOrbit.iconSize}
            radius={config.innerOrbit.radius}
            duration={26}
            className=""
            showLabels={true}
            labels={["Git", "GitHub", "VS Code", "Jest", "GitHub Copilot"]}
          >
            {TECH_ICONS["Git"]}
            {TECH_ICONS["GitHub"]}
            {TECH_ICONS["VS Code"]}
            {TECH_ICONS["Jest"]}
            {TECH_ICONS["GitHub Copilot"]}
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
