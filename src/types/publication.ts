export type PublicationType = "Talk" | "Conference" | "Article" | "Blog";

export interface Publication {
  id: number;
  title: string;
  summary: string;
  type: PublicationType;
  event?: string;      // Conference / meetup name
  platform?: string;  // Medium, personal blog, etc.
  date: string;       // ISO date
  links: {
    url: string;
    slides?: string;
    video?: string;
  };
}
