import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { FaAws, FaBitbucket, FaConfluence, FaGitAlt, FaGithub, FaGitlab, FaInfinity, FaJava, FaJira, FaNodeJs, FaPython } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineFilterTiltShift } from "react-icons/md";
import { SiAmazonapigateway, SiAmazoneks, SiAmazons3, SiApachejmeter, SiApachekafka, SiApachemaven, SiAwslambda, SiBootstrap, SiClaude, SiCplusplus, SiDatadog, SiDocker, SiEclipseide, SiElasticsearch, SiExpress, SiFirebase, SiGithubcopilot, SiGo, SiGooglebigquery, SiGooglecloud, SiGooglegemini, SiGradle, SiGrafana, SiGraphql, SiHibernate, SiIntellijidea, SiJenkins, SiJest, SiJunit5, SiJupyter, SiKubernetes, SiMicrostrategy, SiMongodb, SiNestjs, SiNextdotjs, SiNginx, SiNumpy, SiOpenai, SiOpencv, SiPandas, SiPostgresql, SiPostman, SiPrisma, SiPrometheus, SiReactquery, SiRedis, SiRedux, SiShadcnui, SiSplunk, SiSpring, SiSpringboot, SiSpringsecurity, SiStripe, SiSwagger, SiTailwindcss, SiTerraform, SiTypescript, SiYaml } from "react-icons/si";
import { TbApi, TbBrandMysql } from "react-icons/tb";
import { VscAzure, VscTerminalBash, VscVscode } from "react-icons/vsc";

/**
 * Standardize icon sizes, particularly useful for lists and grids.
 */
const DEFAULT_CLASS = "h-3.5 w-3.5";

/**
 * Centralized mapping of Technology names to their respective icons.
 * This ensures consistency in colors and sizes across all components (Hero, Experience, Orbit, Skills).
 */
export const TECH_ICONS: Record<string, React.ReactNode> = {
    // Programming Languages
    "Java": <FaJava className={`${DEFAULT_CLASS} text-orange-500`} />,
    "TypeScript": <SiTypescript className={`${DEFAULT_CLASS} text-blue-600`} />,
    "JavaScript": <DiJavascript1 className={`${DEFAULT_CLASS} text-yellow-400`} />,
    "Python": <FaPython className={`${DEFAULT_CLASS} text-yellow-600`} />,
    "Go": <SiGo className={`${DEFAULT_CLASS} text-cyan-500`} />,
    "SQL": <FiDatabase className={`${DEFAULT_CLASS} text-blue-400`} />,
    "Bash/Shell": <VscTerminalBash className={`${DEFAULT_CLASS} text-gray-600`} />,
    "Bash": <VscTerminalBash className={`${DEFAULT_CLASS} text-gray-600`} />,
    "C++": <SiCplusplus className={`${DEFAULT_CLASS} text-blue-500`} />,

    // Backend Development
    "Spring Boot": <SiSpringboot className={`${DEFAULT_CLASS} text-emerald-500`} />,
    "Spring Security": <SiSpringsecurity className={`${DEFAULT_CLASS} text-emerald-500`} />,
    "Spring Data JPA": <SiSpring className={`${DEFAULT_CLASS} text-emerald-500`} />,
    "Spring MVC": <SiSpring className={`${DEFAULT_CLASS} text-emerald-500`} />,
    "Node.js": <FaNodeJs className={`${DEFAULT_CLASS} text-green-500`} />,
    "Nest.js": <SiNestjs className={`${DEFAULT_CLASS} text-red-500`} />,
    "Express.js": <SiExpress className={`${DEFAULT_CLASS} text-gray-800 dark:text-gray-200`} />,
    "Kafka": <SiApachekafka className={`${DEFAULT_CLASS} text-orange-600`} />,
    "REST API": <TbApi className={`${DEFAULT_CLASS} text-red-500`} />,
    "Microservices": <SiMicrostrategy className={`${DEFAULT_CLASS} text-blue-600`} />,
    "GRPC": <TbApi className={`${DEFAULT_CLASS} text-red-500`} />,
    "API Gateway": <SiAmazonapigateway className={`${DEFAULT_CLASS} text-purple-600`} />,
    "Apigee": <SiAmazonapigateway className={`${DEFAULT_CLASS} text-amber-500`} />,

    // Frontend Development
    "React": <DiReact className={`${DEFAULT_CLASS} text-blue-400`} />,
    "Next.js": <SiNextdotjs className={`${DEFAULT_CLASS}`} />,
    "HTML5": <DiHtml5 className={`${DEFAULT_CLASS} text-orange-400`} />,
    "CSS3": <DiCss3 className={`${DEFAULT_CLASS} text-blue-400`} />,
    "Bootstrap": <SiBootstrap className={`${DEFAULT_CLASS} text-purple-600`} />,
    "Tailwind CSS": <SiTailwindcss className={`${DEFAULT_CLASS} text-cyan-400`} />,
    "Shadcn UI": <SiShadcnui className={`${DEFAULT_CLASS} text-gray-800 dark:text-gray-200`} />,
    "Redux": <SiRedux className={`${DEFAULT_CLASS} text-purple-400`} />,
    "React Query": <SiReactquery className={`${DEFAULT_CLASS} text-red-400`} />,
    "Stripe": <SiStripe className={`${DEFAULT_CLASS} text-indigo-400`} />,
    "Prisma": <SiPrisma className={`${DEFAULT_CLASS} text-slate-100`} />,
    "GraphQL": <SiGraphql className={`${DEFAULT_CLASS} text-pink-500`} />,

    // Databases
    "MySQL": <TbBrandMysql className={`${DEFAULT_CLASS} text-blue-500`} />,
    "Hibernate": <SiHibernate className={`${DEFAULT_CLASS} text-orange-700`} />,
    "PostgreSQL": <SiPostgresql className={`${DEFAULT_CLASS} text-sky-700`} />,
    "MongoDB": <SiMongodb className={`${DEFAULT_CLASS} text-green-600`} />,
    "Redis": <SiRedis className={`${DEFAULT_CLASS} text-red-600`} />,
    "Firebase": <SiFirebase className={`${DEFAULT_CLASS} text-yellow-500`} />,
    "BigQuery": <SiGooglebigquery className={`${DEFAULT_CLASS} text-blue-500`} />,
    "Elasticsearch": <SiElasticsearch className={`${DEFAULT_CLASS} text-yellow-500`} />,

    // Cloud & DevOps
    "GCP": <SiGooglecloud className={`${DEFAULT_CLASS} text-blue-500`} />,
    "AWS": <FaAws className={`${DEFAULT_CLASS} text-amber-500`} />,
    "AWS S3": <SiAmazons3 className={`${DEFAULT_CLASS} text-amber-500`} />,
    "AWS Lambda": <SiAwslambda className={`${DEFAULT_CLASS} text-blue-500`} />,
    "AWS EKS": <SiAmazoneks className={`${DEFAULT_CLASS} text-blue-500`} />,
    "Azure": <VscAzure className={`${DEFAULT_CLASS} text-blue-600`} />,
    "Docker": <SiDocker className={`${DEFAULT_CLASS} text-blue-500`} />,
    "Kubernetes": <SiKubernetes className={`${DEFAULT_CLASS} text-blue-600`} />,
    "Tilt": <MdOutlineFilterTiltShift className={`${DEFAULT_CLASS} text-green-600`} />,
    "CI/CD": <FaInfinity className={`${DEFAULT_CLASS} text-green-500`} />,
    "Nginx": <SiNginx className={`${DEFAULT_CLASS} text-green-600`} />,
    "Jenkins": <SiJenkins className={`${DEFAULT_CLASS} text-red-600`} />,
    "Prometheus": <SiPrometheus className={`${DEFAULT_CLASS} text-orange-600`} />,
    "Grafana": <SiGrafana className={`${DEFAULT_CLASS} text-orange-500`} />,
    "Terraform": <SiTerraform className={`${DEFAULT_CLASS} text-purple-600`} />,

    // Tools & Platforms
    "Git": <FaGitAlt className={`${DEFAULT_CLASS} text-red-500`} />,
    "GitHub": <FaGithub className={`${DEFAULT_CLASS} text-gray-800 dark:text-gray-200`} />,
    "GitLab": <FaGitlab className={`${DEFAULT_CLASS} text-orange-600`} />,
    "Bitbucket": <FaBitbucket className={`${DEFAULT_CLASS} text-blue-600`} />,
    "Jira": <FaJira className={`${DEFAULT_CLASS} text-blue-600`} />,
    "Confluence": <FaConfluence className={`${DEFAULT_CLASS} text-blue-500`} />,
    "Postman": <SiPostman className={`${DEFAULT_CLASS} text-orange-600`} />,
    "VS Code": <VscVscode className={`${DEFAULT_CLASS} text-blue-600`} />,
    "IntelliJ IDEA": <SiIntellijidea className={`${DEFAULT_CLASS} text-dark-500`} />,
    "Eclipse IDE": <SiEclipseide className={`${DEFAULT_CLASS} text-gray-600`} />,
    "Jupyter": <SiJupyter className={`${DEFAULT_CLASS} text-orange-600`} />,
    "Maven": <SiApachemaven className={`${DEFAULT_CLASS} text-red-600`} />,
    "Gradle": <SiGradle className={`${DEFAULT_CLASS} text-green-600`} />,

    // Testing & Quality
    "JUnit 5": <SiJunit5 className={`${DEFAULT_CLASS} text-red-600`} />,
    "Mockito": <FaJava className={`${DEFAULT_CLASS} text-red-600`} />,
    "JMeter": <SiApachejmeter className={`${DEFAULT_CLASS} text-red-600`} />,
    "Jest": <SiJest className={`${DEFAULT_CLASS} text-red-600`} />,
    "Swagger": <SiSwagger className={`${DEFAULT_CLASS} text-green-600`} />,
    "Splunk": <SiSplunk className={`${DEFAULT_CLASS} text-orange-600`} />,
    "Datadog": <SiDatadog className={`${DEFAULT_CLASS} text-purple-600`} />,

    // AI/ML & AI Assistants
    "Pandas": <SiPandas className={`${DEFAULT_CLASS} text-blue-600`} />,
    "NumPy": <SiNumpy className={`${DEFAULT_CLASS} text-blue-600`} />,
    "OpenCV": <SiOpencv className={`${DEFAULT_CLASS} text-green-600`} />,
    "GitHub Copilot": <SiGithubcopilot className={`${DEFAULT_CLASS} text-gray-800 dark:text-gray-200`} />,
    "Opus": <SiOpenai className={`${DEFAULT_CLASS} text-green-600`} />,
    "Claude": <SiClaude className={`${DEFAULT_CLASS} text-orange-600`} />,
    "Gemini": <SiGooglegemini className={`${DEFAULT_CLASS} text-blue-600`} />,

    // Custom Utilities (Often grouped in previous arrays)
    "Yaml": <SiYaml className={`${DEFAULT_CLASS} text-orange-600`} />,
};
