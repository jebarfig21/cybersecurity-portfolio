import type { Publication } from "@/types/publication";

/**
 * Mock data for talks, publications, and written content.
 *
 * NOTE:
 * - All data is fictional and intended as placeholders.
 * - Replace titles, links, and dates with real content when available.
 * - Structure is designed to scale to CMS / API sources.
 */
export const publicationsData: Publication[] = [
  {
    id: 1,
    title: "Secure Video Streaming in IoT Environments",
    summary:
      "Conference talk focused on the challenges of securing real-time video streams in IoT devices, including transport-layer weaknesses and proprietary encryption mechanisms.",
    type: "Talk",
    event: "Latin American Cybersecurity Conference 2024",
    date: "2024-09-18",
    links: {
      url: "https://conference-site.com/talks/secure-video-streaming",
      slides: "https://slides.com/your-user/secure-video-streaming",
      video: "https://youtube.com/watch?v=example",
    },
  },
  {
    id: 2,
    title: "Automating Reconnaissance in Modern Penetration Testing",
    summary:
      "Technical blog post describing how to automate the reconnaissance phase in pentesting using Python, Nmap, and open-source tooling.",
    type: "Blog",
    platform: "Medium",
    date: "2024-06-10",
    links: {
      url: "https://medium.com/@your-user/automating-reconnaissance",
    },
  },
  {
    id: 3,
    title: "Designing Secure CI/CD Pipelines with DevSecOps Principles",
    summary:
      "Article exploring how to integrate security controls into CI/CD pipelines, including SAST, dependency scanning, and container security.",
    type: "Article",
    platform: "Medium",
    date: "2024-04-02",
    links: {
      url: "https://medium.com/@your-user/secure-cicd-devsecops",
    },
  },
  {
    id: 4,
    title: "Threat Modeling for Small Engineering Teams",
    summary:
      "Practical guide to implementing lightweight threat modeling processes in small or fast-moving engineering teams.",
    type: "Blog",
    platform: "Medium",
    date: "2023-12-15",
    links: {
      url: "https://medium.com/@your-user/threat-modeling-small-teams",
    },
  },
  {
    id: 5,
    title: "Analysis of Unencrypted Video Transmission in Consumer IoT Devices",
    summary:
      "Undergraduate thesis analyzing insecure video transmission mechanisms in consumer-grade IoT cameras, highlighting risks and mitigation strategies.",
    type: "Article",
    platform: "Bachelor Thesis",
    date: "2022-07-01",
    links: {
      url: "https://your-university.edu/thesis/your-thesis-id",
    },
  },
];
