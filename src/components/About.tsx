"use client";

import { FaCode, FaGraduationCap, FaServer, FaTools, FaUniversity, FaUser } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
// Using other icon sets instead of Tabler Icons
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { GrAction } from "react-icons/gr";

export default function About() {
  const skills = [
    { name: "System Design", icon: <GrAction className="h-5 w-5" /> },
    { name: "Backend Development", icon: <FaServer className="h-5 w-5" /> },
    { name: "Frontend Development", icon: <FaCode className="h-5 w-5" /> },
    { name: "DevOps & Tooling", icon: <FaTools className="h-5 w-5" /> },
  ];

  return (
    <motion.section
      id="about"
      className="bg-muted/40  py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container max-w-5xl">
        <div className="text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-medium"
          >
            <FaUser className="mr-1 h-3 w-3" />
            About
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Senior Software Engineer building scalable, cloud‑native systems.
          </h2>
          <p className="mt-4 text-balance text-sm text-muted-foreground md:text-base">
            Backend‑focused full‑stack engineer with 7 years of experience designing
            microservices, event‑driven architectures, and production‑grade APIs in
            Java, Spring Boot, and Node.js.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,0.8fr)]">
          <Card className="border-muted/60 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl">Who I am</CardTitle>
              <CardDescription>
                <strong className="font-semibold">Senior engineer</strong> who enjoys turning complex requirements into clean,
                reliable services. I regularly explore new tools, patterns, and open‑source projects to
                keep my skills sharp and my perspectives fresh.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm font-medium/80 text-muted-foreground">
              {/* Narrative Intro - Keeping it punchy */}
              <div className="space-y-4">
                <p>
                  I'm <strong className="font-semibold text-foreground">Abhishek Maurya</strong>, a backend-leaning full-stack engineer based in Noida, India. I specialize in architecting <strong className="font-semibold text-foreground">RESTful and event-driven systems</strong> that solve complex business problems at scale.
                </p>
                <p>
                  With 7 years of experience, I’ve <strong className="font-semibold text-foreground">led platform migrations</strong> (Java 17/SpringBoot 3), built Kafka pipelines processing <strong className="font-semibold text-foreground">2M+ daily user activity events</strong>, and optimized high-throughput APIs for 30% faster response times.
                </p>
              </div>

              {/* Key Impact Points - Scannable Bulleted List */}
              <div className="grid gap-3 border-t pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/70">Technical Philosophy</h4>
                <ul className="grid gap-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong className="text-foreground font-semibold">Cloud-Native:</strong> Expert in AWS/GCP, Docker, and Kubernetes for resilient service orchestration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong className="text-foreground font-semibold">Operational Excellence:</strong> Strong focus on Observability (Grafana/Splunk) and high-performance SQL tuning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong className="text-foreground font-semibold">Engineering Efficiency:</strong> I build internal tools and CI/CD pipelines to shorten onboarding and reduce technical debt.</span>
                  </li>
                </ul>
              </div>

              <Separator className="my-4" />

              <div className="grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-lg border bg-background/40 px-3 py-2 text-xs text-foreground"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-muted/60 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-sm">Education</CardTitle>
                <CardDescription>
                  Formal education and continuous learning.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-muted-foreground">
                <div className="group relative rounded-sm border-l-2 border-primary/40 p-3 hover:bg-muted/50 transition-colors">
                  <div className="absolute -top-3 right-2 rounded bg-primary px-2 py-1 text-[10px] font-bold text-primary-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 pointer-events-none">
                    (MCA)
                  </div>
                  <p className="flex items-center gap-1.5 text-[13px] font-semibold text-foreground">
                    <FaGraduationCap className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Master of Computer Applications</span>
                  </p>
                  <p className="mt-1 flex items-center gap-1.5">
                    <FaUniversity className="h-3 w-3 text-indigo-500" />
                    <span>Galgotias University, Greater Noida</span>
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground/80">
                    <FiCalendar className="h-3 w-3 text-amber-500" />
                    <span>2017 – 2019</span>
                  </p>
                </div>
                <div className="group relative rounded-sm border-l-2 border-primary/40 p-3 hover:bg-muted/50 transition-colors">
                  <div className="absolute -top-3 right-2 rounded bg-primary px-2 py-1 text-[10px] font-bold text-primary-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 pointer-events-none">
                    (BCA)
                  </div>
                  <p className="flex items-center gap-1.5 text-[13px] font-semibold text-foreground">
                    <FaGraduationCap className="h-3.5 w-3.5 text-sky-500" />
                    <span>Bachelor of Computer Applications</span>
                  </p>
                  <p className="mt-1 flex items-center gap-1.5">
                    <FaUniversity className="h-3 w-3 text-indigo-500" />
                    <span>Babu Banarasi Das University, Lucknow</span>
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground/80">
                    <FiCalendar className="h-3 w-3 text-amber-500" />
                    <span>2014 – 2017</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
