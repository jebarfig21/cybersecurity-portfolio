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
    title: "Security Software Portfolio (This Website)",
    description:
      "Full-stack portfolio built with React, Tailwind & Node.js. Showcases modern, responsive UI, reusable components, and scalable backend architecture. A clean, professional hub for my projects & coding expertise",
    category: "Development",
    techStack: ["react", "tailwind", "node"],
    links: {
      github: "https://github.com/jebarfig21/cybersecurity-portfolio",
      demo: "https://portfolio.jbarajas.com/",
    },
  },
  {
    id: 2,
    title: "Restaurant Landing Page",
    description:
      "Full-featured restaurant web app built with React, Tailwind & Node.js. Users can view menus, make reservations, and explore a polished landing page. Modern, responsive design with scalable backend and seamless UX.",
    category: "Development",
    techStack: ["Java", "CSS", "HTML"],
    links: {
      github: "https://github.com/jebarfig21/restaurant_app",
      demo: "https://restaurant.jbarajas.com/",
    },
  },
  {
    id: 3,
    title: "N8N Workflow Automation Hub (Coming Soon)",
    description: "Workflow automation project built with N8N, integrating multiple APIs and services to automate repetitive tasks. Includes real-time notifications, logging, and dashboard metrics. Designed to showcase scalable automation and process optimization skills.",
    category: "DevSecOps",
    techStack: ["N8N", "Node.js", "APIs", "Webhook Integrations"],
    links: {
    }
  },
    {
    id: 4,
    title: "Amazon recommendation system",
    description: "This project involves recommending the best Amazon products available to users based on past rating data using recommendation systems techniques. Part of MIT certificate",
    category: "Machine Learning",
    techStack: ["Python", "IA"],
    links: {
     
    }
  },
  
];
