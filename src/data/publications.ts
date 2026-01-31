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
    title: "The Dark Side of Awareness: How Internal Phishing Can Save Your Companys",
    summary:
      "Cybersecurity talk focused on deploying local phishing exercises for companies using free software and free CPA cloud technologies",
    type: "Talk",
    event: "BugCon 2023",
    date: "2023-11-20",
    links: {
      url: "https://bugcon.org/",
     
    },
  },
  {
    id: 2,
    title: "Vulnerability Analysis of WiFi Video Surveillance Systems",
    summary:
      "Thesis to obtain the bachelor's degree focused on analyzing the vulnerability of a TP-Link video camera, the pdf will be public later",
    type: "Article",
    platform: "Tesis UNAM",
    date: "2026",
    links: {
      url:  "https://portfolio.jbarajas.com/comingSoon"
    },
  },
  ];
