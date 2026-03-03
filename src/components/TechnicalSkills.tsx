"use client";

import { TECH_ICONS } from "@/config/tech-stack";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AiFillCode } from "react-icons/ai";
import { GoStack } from "react-icons/go";
import { FiCheckCircle, FiCloud, FiCode, FiDatabase, FiMonitor, FiServer } from "react-icons/fi";
import { FaBrain, FaTools } from "react-icons/fa";
import { TbPrompt } from "react-icons/tb";
import { MdMonitorHeart } from "react-icons/md";

export default function TechnicalSkills() {
  // Tech Skills Categories
  const techSkills = [
    {
      category: "Backend & Architecture",
      icon: <FiServer className="h-3.5 w-3.5 text-orange-500" />,
      skills: [
        { name: "Spring Boot", icon: TECH_ICONS["Spring Boot"] },
        { name: "Node.js", icon: TECH_ICONS["Node.js"] },
        { name: "Nest.js", icon: TECH_ICONS["Nest.js"] },
        { name: "Express.js", icon: TECH_ICONS["Express.js"] },
        { name: "Kafka", icon: TECH_ICONS["Kafka"] },
        { name: "Rest API", icon: TECH_ICONS["REST API"] },
        { name: "Microservices", icon: TECH_ICONS["Microservices"] },
        { name: "GRPC", icon: TECH_ICONS["GRPC"] },
        { name: "API Gateway", icon: TECH_ICONS["API Gateway"] },
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <FiCloud className="h-3.5 w-3.5 text-blue-600" />,
      skills: [
        { name: "GCP", icon: TECH_ICONS["GCP"] },
        { name: "AWS", icon: TECH_ICONS["AWS"] },
        // { name: "Azure", icon: TECH_ICONS["Azure"] },
        { name: "Docker", icon: TECH_ICONS["Docker"] },
        { name: "Kubernetes", icon: TECH_ICONS["Kubernetes"] },
        { name: "Tilt", icon: TECH_ICONS["Tilt"] },
        { name: "CI/CD", icon: TECH_ICONS["CI/CD"] },
        { name: "Nginx", icon: TECH_ICONS["Nginx"] },
        { name: "Jenkins", icon: TECH_ICONS["Jenkins"] },
        // { name: "Terraform", icon: TECH_ICONS["Terraform"] },
      ]
    },
    {
      category: "Databases",
      icon: <FiDatabase className="h-3.5 w-3.5 text-purple-500" />,
      skills: [
        { name: "MySQL", icon: TECH_ICONS["MySQL"] },
        { name: "PostgreSQL", icon: TECH_ICONS["PostgreSQL"] },
        { name: "MongoDB", icon: TECH_ICONS["MongoDB"] },
        { name: "Redis", icon: TECH_ICONS["Redis"] },
        { name: "Firebase", icon: TECH_ICONS["Firebase"] },
        { name: "BigQuery", icon: TECH_ICONS["BigQuery"] },
        { name: "Elasticsearch", icon: TECH_ICONS["Elasticsearch"] },
      ]
    },
    {
      category: "Programming Languages",
      icon: <FiCode className="h-3.5 w-3.5 text-blue-500" />,
      skills: [
        { name: "Java", icon: TECH_ICONS["Java"] },
        { name: "TypeScript", icon: TECH_ICONS["TypeScript"] },
        { name: "JavaScript", icon: TECH_ICONS["JavaScript"] },
        { name: "Python", icon: TECH_ICONS["Python"] },
        { name: "Go", icon: TECH_ICONS["Go"] },
        { name: "SQL", icon: TECH_ICONS["SQL"] },
        { name: "Bash/Shell", icon: TECH_ICONS["Bash/Shell"] },
      ]
    },
    {
      category: "Frontend Development",
      icon: <FiMonitor className="h-3.5 w-3.5 text-green-500" />,
      skills: [
        { name: "React", icon: TECH_ICONS["React"] },
        { name: "Next.js", icon: TECH_ICONS["Next.js"] },
        { name: "HTML5", icon: TECH_ICONS["HTML5"] },
        { name: "CSS3", icon: TECH_ICONS["CSS3"] },
        { name: "Bootstrap", icon: TECH_ICONS["Bootstrap"] },
        { name: "Tailwind CSS", icon: TECH_ICONS["Tailwind CSS"] },
        { name: "Shadcn UI", icon: TECH_ICONS["Shadcn UI"] },
        { name: "Redux", icon: TECH_ICONS["Redux"] },
        { name: "React Query", icon: TECH_ICONS["React Query"] },
      ]
    },
    {
      category: "Testing & API Documentation",
      icon: <FiCheckCircle className="h-3.5 w-3.5 text-green-600" />,
      skills: [
        { name: "JUnit 5", icon: TECH_ICONS["JUnit 5"] },
        { name: "Mockito", icon: TECH_ICONS["Mockito"] },
        { name: "JMeter", icon: TECH_ICONS["JMeter"] },
        { name: "Jest", icon: TECH_ICONS["Jest"] },
        { name: "Swagger", icon: TECH_ICONS["Swagger"] },
      ]
    },
    // {
    //   category: "AI/ML & Data Science",
    //   icon: <FaBrain className="h-3.5 w-3.5 text-purple-600" />,
    //   skills: [
    //     // { name: "TensorFlow", icon: TECH_ICONS["TensorFlow"] },
    //     // { name: "PyTorch", icon: TECH_ICONS["PyTorch"] },
    //     // { name: "Keras", icon: TECH_ICONS["Keras"] },
    //     // { name: "Scikit-learn", icon: TECH_ICONS["Scikit-learn"] },
    //     { name: "Pandas", icon: TECH_ICONS["Pandas"] },
    //     { name: "NumPy", icon: TECH_ICONS["NumPy"] },
    //     { name: "OpenCV", icon: TECH_ICONS["OpenCV"] },
    //   ]
    // },
    {
      category: "Observability & Monitoring",
      icon: <MdMonitorHeart className="h-3.5 w-3.5 text-gray-600" />,
      skills: [
        { name: "Prometheus", icon: TECH_ICONS["Prometheus"] },
        { name: "Grafana", icon: TECH_ICONS["Grafana"] },
        { name: "Splunk", icon: TECH_ICONS["Splunk"] },
        { name: "Datadog", icon: TECH_ICONS["Datadog"] },
      ]
    },
    {
      category: "AI Coding Assistants",
      icon: <AiFillCode className="h-3.5 w-3.5 text-gray-600" />,
      skills: [
        { name: "GitHub Copilot", icon: TECH_ICONS["GitHub Copilot"] },
        { name: "Claude", icon: TECH_ICONS["Claude"] },
        { name: "Gemini", icon: TECH_ICONS["Gemini"] },
        { name: "Opus", icon: TECH_ICONS["Opus"] },
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <FaTools className="h-3.5 w-3.5 text-gray-600" />,
      skills: [
        { name: "Git", icon: TECH_ICONS["Git"] },
        { name: "GitHub", icon: TECH_ICONS["GitHub"] },
        { name: "GitLab", icon: TECH_ICONS["GitLab"] },
        { name: "Bitbucket", icon: TECH_ICONS["Bitbucket"] },
        // { name: "Jira", icon: TECH_ICONS["Jira"] },
        // { name: "Confluence", icon: TECH_ICONS["Confluence"] },
        { name: "Postman", icon: TECH_ICONS["Postman"] },
        // { name: "VS Code", icon: TECH_ICONS["VS Code"] },
        // { name: "IntelliJ IDEA", icon: TECH_ICONS["IntelliJ IDEA"] },
        // { name: "Eclipse IDE", icon: TECH_ICONS["Eclipse IDE"] },
        { name: "Jupyter", icon: TECH_ICONS["Jupyter"] },
        { name: "Maven", icon: TECH_ICONS["Maven"] },
        { name: "Gradle", icon: TECH_ICONS["Gradle"] },
        // { name: "Anaconda Navigator", icon: TECH_ICONS["Anaconda Navigator"] },
      ]
    },
  ];

  return (
    <motion.section
      id="technical-skills"
      className="relative pt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background with adjusted gradients for better blending */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_color-mix(in_oklab,var(--primary)_40%,transparent),transparent_70%),radial-gradient(circle_at_top,_color-mix(in_oklab,var(--accent)_35%,transparent),transparent_60%)]" />
        {/* Bottom fade for seamless transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="container max-w-5xl py-4">
        <div className="text-center">
          <Badge variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-medium">
            <FaTools className="mr-1 h-3 w-3" />
            Skills
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Technical Skills & Tools
          </h2>
          <p className="mt-4 text-balance text-sm text-muted-foreground md:text-base">
            I have deep expertise across multiple programming languages, modern frameworks, cloud platforms, and development tools. From frontend technologies like React and Next.js to backend systems with Java and Spring Boot, plus comprehensive DevOps automation and AI/ML integration capabilities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-xs">
              <GoStack className="mr-1 h-3 w-3" />
              Full-Stack Development
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <FiCloud className="mr-1 h-3 w-3" />
              Cloud & DevOps
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <FaBrain className="mr-1 h-3 w-3" />
              AI/ML Integration
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <MdMonitorHeart className="mr-1 h-3 w-3" />
              Observability
            </Badge>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,1fr))]">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Tech Skills Section */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {techSkills.map((category, index) => (
                  <div key={index} className="rounded-xl border bg-background/40 p-4 backdrop-blur">
                    <p className="flex items-center gap-1.5 text-xs font-medium text-foreground/70">
                      {category.icon}
                      <span>{category.category}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs font-medium/50 flex border border-primary/10 items-center gap-1">
                          {skill.icon}
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
