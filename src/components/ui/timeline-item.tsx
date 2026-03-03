"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding } from "react-icons/fa";
import { FiCalendar, FiMapPin } from "react-icons/fi";

export function TimelineItem({ role, isLast, index, }: {
  readonly role: {
    company: string;
    title: string;
    period: string;
    location: string;
    highlights: string[];
    stack: { name: string; icon: React.ReactNode }[];
  };
  readonly isLast: boolean;
  readonly index: number;
}) {
  return (
    <li className="relative flex gap-4 md:gap-6 group">
      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0 mt-1.5">
        <motion.div
          className={cn(
            "h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center bg-background",
            "group-hover:bg-primary/10 transition-colors duration-300"
          )}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="h-2 w-2 rounded-full bg-primary" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className={cn(
          "flex-1 mb-12 pb-6 border-b border-muted/50 group-last:border-b-0 group-last:pb-6 group-last:mb-0",
          "relative overflow-hidden rounded-xl py-5 md:p-6 bg-gradient-to-br from-muted/10 to-muted/5 backdrop-blur-sm",
          "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-primary/10"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 -z-10 rounded-xl transition-opacity duration-500" />

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <FaBriefcase className="text-primary" />
                {role.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <FaBuilding className="h-3.5 w-3.5 text-indigo-500" />
                  {role.company}
                </span>
                <span className="mx-1 text-muted-foreground/50">
                  •
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="h-3.5 w-3.5" />
                  {role.location}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <FiCalendar className="h-3.5 w-3.5" />
              <span>{role.period}</span>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {role.highlights.map((highlight, i) => (
              <motion.li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70"
                key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{
                  delay: index * 0.1 + 0.2 + i * 0.05, duration: 0.3,
                }}>
                {highlight}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {role.stack.map((tech, i) => (
              <motion.div key={tech.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.3 + i * 0.05, }}>
                <Badge variant="outline" className={cn("border-muted-foreground/20 bg-background/60 text-xs font-normal",
                  "hover:bg-primary/5 hover:border-primary/30 transition-colors cursor-default")}>
                  <span className="mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-foreground/5 p-0.5">
                    {tech.icon}
                  </span>
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </li>
  );
}
