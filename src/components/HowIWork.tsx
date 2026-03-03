"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FiTarget, FiUsers, FiCheckCircle, FiActivity, FiTool, FiSearch, FiLayers, FiMessageSquare, FiTrendingUp } from "react-icons/fi";
import { FaBullseye, FaUsers, FaChartLine, FaTools } from "react-icons/fa";

export default function HowIWork() {
  const principles = [
    {
      title: "Understand the problem first",
      description:
        "I start by understanding context, constraints, and the real problem before proposing solutions.",
      icon: <FiSearch className="h-5 w-5 text-blue-500" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Design for evolution",
      description:
        "I prefer simple, well-documented designs that can evolve as the product and team grow.",
      icon: <FiLayers className="h-5 w-5 text-emerald-500" />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Collaborate openly",
      description:
        "I communicate clearly with product, design, and engineering to avoid surprises late in the cycle.",
      icon: <FiMessageSquare className="h-5 w-5 text-amber-500" />,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Measure and improve",
      description:
        "I care about observability, feedback loops, and incremental improvements over big risky changes.",
      icon: <FiTrendingUp className="h-5 w-5 text-purple-500" />,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
  ];

  return (
    <motion.section
      className="bg-muted/40 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-medium"
          >
            <span className="inline-flex items-center gap-2">
              <FiTool className="h-3.5 w-3.5" />
              <span>How I work</span>
            </span>
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How I like to solve engineering problems.
          </h2>
          <p className="mt-4 text-balance text-sm text-muted-foreground md:text-base">
            A few principles that guide how I approach projects, teams, and long-term systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((principle) => (
            <Card key={principle.title} className="border-muted/60 bg-card/80 backdrop-blur">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className={`p-2.5 rounded-full ${principle.bg} ${principle.color}`}>
                  {principle.icon}
                </div>
                <CardTitle className="text-sm md:text-base">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-xs md:text-sm text-muted-foreground">
                {principle.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] md:text-xs text-muted-foreground">
          I plan to add more detailed case studies and write-ups here in the future.
        </p>
      </div>
    </motion.section>
  );
}

