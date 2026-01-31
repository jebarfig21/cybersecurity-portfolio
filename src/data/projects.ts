import type { Project } from "../types/project";

/**
 * Portfolio projects data source.
 *
 * NOTE:
 * - This file intentionally contains NO JSX.
 * - It can be easily migrated to:
 *   - a REST API
 *   - a CMS (Contentful, Sanity, etc.)
 *   - a static JSON file
 */
export const projectsData: Project[] = [
  {
    id: 1,
    title: "DevSecOps BABALU Portfolio (This Website)",
    description:
      "Modern SPA built with React, TypeScript, and Tailwind CSS. Focused on clean architecture, performance, and scalable UI composition.",
    category: "Development",
    techStack: ["react", "tailwind", "node"],
    links: {
      github: "https://github.com/your-user/portfolio",
      demo: "https://your-portfolio.com",
    },
  },
  {
    id: 2,
    title: "Python Recon Automation Toolkit",
    description:
      "Python-based automation tool orchestrating Nmap, Sublist3r, and Gobuster to streamline the reconnaissance phase in penetration testing.",
    category: "Cybersecurity",
    techStack: ["python", "kali", "terminal"],
    links: {
      github: "https://github.com/your-user/recon-script",
      writeup: "https://your-blog.com/recon-automation",
    },
  },
  {
    id: 3,
    title: "Secure CI/CD Pipeline with Docker",
    description:
      "GitHub Actions pipeline integrating SAST and Docker image vulnerability scanning prior to deployment.",
    category: "DevSecOps",
    techStack: ["docker", "github"],
    links: {
      github: "https://github.com/your-user/secure-pipeline-demo",
    },
  },
];
