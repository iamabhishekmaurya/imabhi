"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTab } from "@/contexts/TabContext";
import { fetchGitHubRepos, mapGitHubRepoToProject } from "@/lib/github";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArchive, FiBriefcase, FiClock, FiCode, FiExternalLink, FiGithub, FiLoader, FiRefreshCw, FiStar } from "react-icons/fi";
import { TECH_ICONS } from "@/config/tech-stack";

// Add blinking animation for the in-progress tab
const blinkValue = {
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  '@keyframes pulse': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.3 },
  },
};

type ProjectCategory = 'all' | 'featured' | 'open-source' | 'in-progress' | 'maintenance' | 'archived';

interface Project {
  title: string;
  description: string;
  tags: string[];
  role: string;
  github?: string;
  live?: string;
  category: ProjectCategory;
  lastUpdated?: string;
  featured?: boolean;
  problem?: string;
  approach?: string;
  impact?: string;
}

const projects: Project[] = [
  // Keep some featured manual projects as fallback
  {
    title: "Personal Portfolio",
    description: "A fast, content‑driven portfolio site built with modern web technologies.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    role: "Design, implementation, and deployment",
    github: "https://github.com/iamabhishekmaurya/iamabhishekmaurya",
    live: "#",
    category: 'maintenance',
    lastUpdated: 'Nov 2023',
    featured: true
  }
];

const projectTechIcons: Record<string, React.ReactNode> = {
  "Next.js": TECH_ICONS["Next.js"],
  "nextjs": TECH_ICONS["Next.js"],
  "next-js": TECH_ICONS["Next.js"],
  "Stripe": TECH_ICONS["Stripe"],
  "stripe": TECH_ICONS["Stripe"],
  "PostgreSQL": TECH_ICONS["PostgreSQL"],
  "postgresql": TECH_ICONS["PostgreSQL"],
  "postgres": TECH_ICONS["PostgreSQL"],
  "React": TECH_ICONS["React"],
  "react": TECH_ICONS["React"],
  "reactjs": TECH_ICONS["React"],
  "TypeScript": TECH_ICONS["TypeScript"],
  "typescript": TECH_ICONS["TypeScript"],
  "ts": TECH_ICONS["TypeScript"],
  "Firebase": TECH_ICONS["Firebase"],
  "firebase": TECH_ICONS["Firebase"],
  "Tailwind CSS": TECH_ICONS["Tailwind CSS"],
  "tailwindcss": TECH_ICONS["Tailwind CSS"],
  "tailwind": TECH_ICONS["Tailwind CSS"],
  "Java": TECH_ICONS["Java"],
  "java": TECH_ICONS["Java"],
  "Spring": TECH_ICONS["Spring Boot"],
  "spring": TECH_ICONS["Spring Boot"],
  "Spring Boot": TECH_ICONS["Spring Boot"],
  "springboot": TECH_ICONS["Spring Boot"],
  "spring-boot": TECH_ICONS["Spring Boot"],
  "Spring MVC": TECH_ICONS["Spring MVC"],
  "spring-mvc": TECH_ICONS["Spring MVC"],
  "Spring Data JPA": TECH_ICONS["Spring Data JPA"],
  "spring-data-jpa": TECH_ICONS["Spring Data JPA"],
  "Hibernate": TECH_ICONS["Hibernate"],
  "hibernate": TECH_ICONS["Hibernate"],
  "MySQL": TECH_ICONS["MySQL"],
  "mysql": TECH_ICONS["MySQL"],
  "JavaScript": TECH_ICONS["JavaScript"],
  "javascript": TECH_ICONS["JavaScript"],
  "js": TECH_ICONS["JavaScript"],
  "Nest.js": TECH_ICONS["Nest.js"],
  "nestjs": TECH_ICONS["Nest.js"],
  "nest-js": TECH_ICONS["Nest.js"],
  "Node.js": TECH_ICONS["Node.js"],
  "nodejs": TECH_ICONS["Node.js"],
  "node-js": TECH_ICONS["Node.js"],
  "Docker": TECH_ICONS["Docker"],
  "docker": TECH_ICONS["Docker"],
  "Kubernetes": TECH_ICONS["Kubernetes"],
  "kubernetes": TECH_ICONS["Kubernetes"],
  "k8s": TECH_ICONS["Kubernetes"],
  "AWS": TECH_ICONS["AWS"],
  "aws": TECH_ICONS["AWS"],
  "GCP": TECH_ICONS["GCP"],
  "gcp": TECH_ICONS["GCP"],
  "Redis": TECH_ICONS["Redis"],
  "redis": TECH_ICONS["Redis"],
  "MongoDB": TECH_ICONS["MongoDB"],
  "mongodb": TECH_ICONS["MongoDB"],
  "Prisma": TECH_ICONS["Prisma"],
  "prisma": TECH_ICONS["Prisma"],
  "GraphQL": TECH_ICONS["GraphQL"],
  "graphql": TECH_ICONS["GraphQL"],
};

const ProjectCard = ({ project, index, isExpanded, onExpand, onClose, }: {
  project: Project; index: number; isExpanded: boolean; onExpand: () => void;
  onClose: () => void;
}) => (
  <motion.div layout id={`project-card-${index}`} key={project.title} initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
    whileHover={isExpanded ? undefined : { y: -6, scale: 1.01 }} className={isExpanded ? "col-span-full" : ""}>
    <Card className="h-full flex flex-col border-muted/60 bg-card/80 backdrop-blur shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
          {project.category === 'in-progress' && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-500 border border-amber-500/20">
              <FiClock className="h-3 w-3" />
              WIP
            </span>
          )}
          {project.category === 'maintenance' && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-500 border border-blue-500/20">
              <FiRefreshCw className="h-3 w-3" />
              Live
            </span>
          )}
        </div>

        {project.lastUpdated && (
          <div className="flex items-center text-xs text-muted-foreground mt-1 mb-2">
            <span className="font-medium">Last updated: {project.lastUpdated}</span>
          </div>
        )}

        <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent id={`project-details-${index}`} aria-hidden={!isExpanded} className="flex-1 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Stack</span>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags
              .filter(tag => tag && tag !== 'Unknown')
              .map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted/80 border border-border/50 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm transition-all hover:bg-muted"
                >
                  <span className="flex h-4 w-4 items-center justify-center shrink-0">
                    {projectTechIcons[tag] || <FiCode className="h-3 w-3 text-muted-foreground" />}
                  </span>
                  {tag}
                </span>
              ))}
          </div>

          {isExpanded && (
            <>
              <div className="pt-2">
                <p className="text-xs font-medium text-muted-foreground/80 leading-relaxed">{project.role}</p>
              </div>

              {project.problem && project.approach && project.impact && (
                <div className="mt-4 space-y-3 rounded-xl border border-muted/40 bg-muted/20 p-4 text-[13px] text-muted-foreground leading-relaxed">
                  <p className="flex items-center gap-2 font-bold text-foreground text-xs uppercase tracking-wider">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    Impact Summary
                  </p>
                  <div className="space-y-2">
                    <p><span className="font-bold text-foreground/90">Challenge:</span> {project.problem}</p>
                    <p><span className="font-bold text-foreground/90">Solution:</span> {project.approach}</p>
                    <p><span className="font-bold text-foreground/90">Result:</span> {project.impact}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2 pt-0">
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              <FiGithub className="h-4 w-4 text-primary" />
              {/* Code */}
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              <FiExternalLink className="h-4 w-4 text-primary" />
              Live Demo
            </a>
          )}
        </div>
        <button
          type="button"
          onClick={isExpanded ? onClose : onExpand}
          aria-expanded={isExpanded}
          aria-controls={`project-details-${index}`}
          className="inline-flex items-center gap-1 cursor-pointer rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {isExpanded ? "Close details" : "See more"}
        </button>
      </CardFooter>
    </Card>
  </motion.div>
);

export default function Projects() {
  const { activeTab, setActiveTab } = useTab();
  const [mounted, setMounted] = useState(false);
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Custom tech stack overrides for specific repositories
  const customProjectTech: Record<string, string[]> = {
    "Zaplink": ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Kafka", "Docker"],
    "Iamabhishekmaurya": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    "DsaPrepration": ["Java", "Data Structures", "Algorithms"],
    "Inventory Management": ["TypeScript", "Nest.js", "PostgreSQL", "Prisma"],
    "Inventory Dashboard": ["TypeScript", "React", "Tailwind CSS", "Redux"],
    "Examweb": ["TypeScript", "React", "Tailwind CSS"]
  };

  // Fetch GitHub repositories on component mount
  useEffect(() => {
    const loadGitHubProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const repos = await fetchGitHubRepos();
        let mappedProjects = repos.map(mapGitHubRepoToProject);

        // Apply custom overrides
        mappedProjects = mappedProjects.map(project => {
          if (customProjectTech[project.title]) {
            // Merge custom tech with existing topics, filtering out generic ones
            const existingTags = project.tags.filter(t => !['Unknown', 'in-progress', 'wip', 'maintenance', 'archived'].includes(t));
            const newTags = Array.from(new Set([...customProjectTech[project.title], ...existingTags]));
            return {
              ...project,
              tags: newTags
            };
          }
          return project;
        });

        setGithubProjects(mappedProjects);
      } catch (err) {
        console.error('Failed to load GitHub projects:', err);
        setError(err instanceof Error ? err.message : 'Failed to load projects from GitHub');
      } finally {
        setLoading(false);
      }
    };

    if (mounted) {
      loadGitHubProjects();
    }
  }, [mounted]);

  // When a project is expanded, scroll it into view and focus the close button for accessibility.
  useEffect(() => {
    if (!expandedTitle) return;

    const idx = projects.findIndex((p) => p.title === expandedTitle);
    if (idx === -1) return;

    const el = document.getElementById(`project-card-${idx}`);
    if (!el) return;

    // Call scrollIntoView multiple times across the animation to ensure the
    // viewport follows the expanding card (helps when layout shifts occur).
    const doScroll = () => el.scrollIntoView({ behavior: "smooth", block: "center" });

    // immediate
    doScroll();

    // subsequent attempts at staggered intervals to follow layout shifts
    const t1 = globalThis.setTimeout(doScroll, 120);
    const t2 = globalThis.setTimeout(doScroll, 350);
    const t3 = globalThis.setTimeout(() => {
      doScroll();
      // Move focus to the expanded card's close button if present
      const btn = el.querySelector('button[aria-expanded="true"]');
      if (btn && typeof (btn as HTMLElement).focus === 'function') (btn as HTMLElement).focus();
    }, 700);

    return () => {
      for (const t of [t1, t2, t3]) {
        globalThis.clearTimeout(t);
      }
    };
  }, [expandedTitle]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Combine manual projects with GitHub projects
  const allProjects = [...githubProjects, ...projects];

  const filteredProjects = allProjects.filter(project => {
    switch (activeTab) {
      case 'all':
        return true;
      case 'featured':
        return project.featured === true;
      case 'open-source':
        return project.category === 'open-source';
      case 'in-progress':
        return project.category === 'in-progress';
      case 'maintenance':
        return project.category === 'maintenance';
      case 'archived':
        return project.category === 'archived';
      default:
        return project.featured === true;
    }
  });

  return (
    <motion.section
      id="projects"
      className="bg-muted/40 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container max-w-5xl">
        <div className="text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-medium"
          >
            <FiBriefcase className="mr-1 h-3 w-3" />
            <span>Selected work</span>
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Projects that reflect how I think and build.
          </h2>
          <p className="mt-4 text-balance text-sm text-muted-foreground md:text-base">
            A few examples of the kind of problems I like working on — from
            product‑focused apps to polished front‑end experiences.
          </p>
        </div>

        <div className="mt-8">
          <Tabs
            value={activeTab}
            className="w-full"
            onValueChange={(value) => {
              setExpandedTitle(null);
              setActiveTab(value as ProjectCategory);
            }}
          >
            {/* Mobile-friendly, scrollable tab bar */}
            <TabsList className="mx-auto flex h-auto w-full flex-nowrap justify-start overflow-x-auto p-1 gap-1 sm:max-w-2xl sm:justify-center">
              <TabsTrigger
                value="all"
                className="flex items-center gap-1 whitespace-nowrap cursor-pointer px-2 py-1 text-[11px] sm:px-2.5 sm:py-1.5 sm:text-xs"
              >
                <FiBriefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-500" />
                <span>All Work</span>
              </TabsTrigger>
              <TabsTrigger
                value="featured"
                className="flex items-center gap-1 whitespace-nowrap cursor-pointer px-2 py-1 text-[11px] sm:px-2.5 sm:py-1.5 sm:text-xs"
              >
                <FiStar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-yellow-400" />
                <span>Featured</span>
              </TabsTrigger>
              <TabsTrigger
                value="open-source"
                className="flex items-center gap-1 whitespace-nowrap cursor-pointer px-2 py-1 text-[11px] sm:px-2.5 sm:py-1.5 sm:text-xs"
              >
                <FiGithub className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-800 dark:text-slate-100" />
                <span>Open Source</span>
              </TabsTrigger>
              <TabsTrigger
                value="in-progress"
                className="group relative flex items-center gap-1 whitespace-nowrap cursor-pointer px-2 py-1 text-[11px] sm:px-2.5 sm:py-1.5 sm:text-xs"
                onClick={() => {
                  // Update URL hash using history API (preserve back navigation), scroll to projects and update tab state
                  if (typeof globalThis !== 'undefined' && globalThis.history && typeof globalThis.history.pushState === 'function') {
                    globalThis.history.pushState(null, '', '#in-progress');
                  } else if (typeof globalThis !== 'undefined') {
                    globalThis.location.hash = 'in-progress';
                  }

                  // Scroll to projects section
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  // Update tab state
                  setActiveTab('in-progress');
                }}
              >
                <FiClock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-500" />
                <span>In Progress</span>
                <span
                  className="blinking-dot ml-1 h-2 w-2 rounded-full bg-red-600"
                />
              </TabsTrigger>
              <TabsTrigger
                value="maintenance"
                className="flex items-center gap-1 whitespace-nowrap px-2 py-1 text-[11px] sm:px-2.5 sm:py-1.5 sm:text-xs"
              >
                <FiRefreshCw className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-sky-500" />
                <span>Maintenance</span>
              </TabsTrigger>
              <TabsTrigger
                value="archived"
                className="flex items-center gap-1 whitespace-nowrap px-2 py-1 text-[11px] sm:px-2.5 sm:py-1.5 sm:text-xs"
              >
                <FiArchive className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-rose-500" />
                <span>Archived</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value={activeTab}>
                {loading ? (
                  <div className="mt-6 rounded-md border bg-background/60 p-8 text-center">
                    <FiLoader className="mx-auto h-8 w-8 animate-spin text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground">Loading projects from GitHub...</p>
                  </div>
                ) : error ? (
                  <div className="mt-6 rounded-md border border-red-200 bg-red-50/50 p-6 text-center">
                    <p className="font-medium text-red-800 mb-2">Failed to load GitHub projects</p>
                    <p className="text-sm text-red-600 mb-4">{error}</p>
                    <p className="text-sm text-muted-foreground">Showing fallback projects instead.</p>
                  </div>
                ) : filteredProjects.length === 0 ? (
                  <div className="mt-6 rounded-md border bg-background/60 p-6 text-center text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">No projects to show</p>
                    <p className="mt-2">There are no projects in this category yet. Try another tab or check back later.</p>
                  </div>
                ) : (
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      layout
                      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                      {filteredProjects.map((project, index) => {
                        const isExpanded = expandedTitle === project.title;
                        const isHidden = expandedTitle !== null && !isExpanded;

                        if (isHidden) {
                          return null;
                        }

                        return (
                          <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            isExpanded={isExpanded}
                            onExpand={() => setExpandedTitle(project.title)}
                            onClose={() => setExpandedTitle(null)}
                          />
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                )}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </motion.section>
  );
}
