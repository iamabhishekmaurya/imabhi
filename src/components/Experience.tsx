"use client";

import { Badge } from "@/components/ui/badge";
import { TimelineItem } from "@/components/ui/timeline-item";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FiCode, FiServer, FiTarget } from "react-icons/fi";
import { FaCodeBranch } from "react-icons/fa";
import { TECH_ICONS } from "@/config/tech-stack";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
  stack: { name: string; icon: ReactNode }[];
  icon?: ReactNode;
};

const roles: Role[] = [
  {
    company: "Carelon Global Solutions",
    title: "Senior Software Engineer II",
    period: "Nov 2023 – Present",
    location: "Gurgaon, India",
    icon: <FiServer className="h-4 w-4" />,
    highlights: [
      "Led migration of a large enterprise platform to Java 17 & Spring Boot 3, improving API response times by ~30%.",
      "Designed and delivered RESTful microservices using Spring Boot, JPA, Redis, and OpenAPI for internal and external consumers.",
      "Implemented secure JWT-based authentication and standardized API security patterns across services.",
      "Built asynchronous, event-driven modules and optimized slow APIs through caching and SQL tuning.",
    ],
    stack: [
      { name: "Java 17", icon: TECH_ICONS["Java"] },
      { name: "Spring Boot 3", icon: TECH_ICONS["Spring Boot"] },
      { name: "JavaScript", icon: TECH_ICONS["JavaScript"] },
      { name: "TypeScript", icon: TECH_ICONS["TypeScript"] },
      { name: "Python", icon: TECH_ICONS["Python"] },
      { name: "Node.js", icon: TECH_ICONS["Node.js"] },
      { name: "Nest.js", icon: TECH_ICONS["Nest.js"] },
      { name: "React", icon: TECH_ICONS["React"] },
      { name: "Redis", icon: TECH_ICONS["Redis"] },
      { name: "PostgreSQL", icon: TECH_ICONS["PostgreSQL"] },
      { name: "MongoDB", icon: TECH_ICONS["MongoDB"] },
      { name: "Kafka", icon: TECH_ICONS["Kafka"] },
      { name: "AWS", icon: TECH_ICONS["AWS"] },
      { name: "AWS S3", icon: TECH_ICONS["AWS S3"] },
      { name: "AWS Lambda", icon: TECH_ICONS["AWS Lambda"] },
      { name: "AWS EKS", icon: TECH_ICONS["AWS EKS"] },
      { name: "Splunk", icon: TECH_ICONS["Splunk"] },
      { name: "Apigee", icon: TECH_ICONS["Apigee"] },
      { name: "Docker", icon: TECH_ICONS["Docker"] },
    ],
  },
  {
    company: "Innobit System",
    title: "Senior Software Engineer (Technical Staff)",
    period: "Jan 2022 – Nov 2023",
    location: "Greater Noida, India",
    icon: <FiCode className="h-4 w-4" />,
    highlights: [
      "Built Spring Boot microservices integrated with Kafka, processing 2M+ transactions per day.",
      "Developed and optimized REST APIs with Redis caching and async execution to reduce latency and load on core services.",
      "Integrated services with Azure DevOps (POC), Azure Key Vault, and hardened deployments with secure configuration.",
      "Reduced onboarding time by ~40% via reusable components, documentation, and structured code reviews.",
    ],
    stack: [
      { name: "Java", icon: TECH_ICONS["Java"] },
      { name: "Node.js", icon: TECH_ICONS["Node.js"] },
      { name: "Spring Boot 3", icon: TECH_ICONS["Spring Boot"] },
      { name: "Spring Security", icon: TECH_ICONS["Spring Security"] },
      { name: "Spring Data JPA", icon: TECH_ICONS["Spring Data JPA"] },
      { name: "Nest.js", icon: TECH_ICONS["Nest.js"] },
      { name: "Express.js", icon: TECH_ICONS["Express.js"] },
      { name: "Kafka", icon: TECH_ICONS["Kafka"] },
      { name: "Redis", icon: TECH_ICONS["Redis"] },
      { name: "GCP", icon: TECH_ICONS["GCP"] },
      { name: "Docker", icon: TECH_ICONS["Docker"] },
      { name: "Kubernetes", icon: TECH_ICONS["Kubernetes"] },
    ],
  },
  {
    company: "Netprophets Cyberwork",
    title: "Software Engineer",
    period: "Apr 2019 – Dec 2021",
    location: "Noida, India",
    icon: <FaCodeBranch className="h-4 w-4" />,
    highlights: [
      "Developed 50+ REST APIs with Redis caching and optimized SQL, improving load performance by ~25% across key modules.",
      "Built reusable Excel/PDF reporting modules, reducing reporting turnaround time by ~35%.",
      "Collaborated closely with product and QA to ship production-ready features with predictable releases.",
    ],
    stack: [
      { name: "Java", icon: TECH_ICONS["Java"] },
      { name: "Spring MVC", icon: TECH_ICONS["Spring Boot"] },
      { name: "Spring Data JPA", icon: TECH_ICONS["Spring Boot"] },
      { name: "Hibernate", icon: TECH_ICONS["Hibernate"] }, // Close enough representation for Data layer
      { name: "MySQL", icon: TECH_ICONS["MySQL"] },
      { name: "JavaScript", icon: TECH_ICONS["JavaScript"] },
      { name: "Nest.js", icon: TECH_ICONS["Nest.js"] },
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container max-w-6xl px-4 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-medium"
          >
            <FiTarget className="mr-1.5 h-3 w-3" />
            Professional Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Experience & Expertise
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            A timeline of my professional journey, highlighting key roles, responsibilities, and technologies I've worked with.
          </p>
        </motion.div>

        <div className="relative">
          <ol className="relative space-y-2">
            {/* Continuous timeline line */}
            <div className="absolute left-[11px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-transparent z-0" />

            {roles.map((role, index) => (
              <TimelineItem
                key={role.company}
                role={role}
                isLast={index === roles.length - 1}
                index={index}
              />
            ))}
          </ol>
        </div>
      </div>
    </motion.section>
  );
}