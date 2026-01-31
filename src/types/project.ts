/**
 * Defines the allowed project categories displayed in the portfolio.
 * Keeping this as a union type provides strong type safety
 * and avoids category mismatches across the app.
 */
export type ProjectCategory =
  | "Development"
  | "Cybersecurity"
  | "DevSecOps";

/**
 * Core Project entity.
 * This interface represents a single portfolio project,
 * independent from how it is rendered in the UI.
 */
export interface Project {
  /** Unique identifier (used as React key and internal reference) */
  id: number;

  /** Project title displayed in the UI */
  title: string;

  /** Short project summary shown in the card body */
  description: string;

  /** High-level project classification */
  category: ProjectCategory;

  /**
   * List of technology identifiers.
   * These IDs are mapped to icons in the UI layer.
   * Example: ["react", "tailwind", "node"]
   */
  techStack: string[];

  /** Optional external resources related to the project */
  links: {
    github?: string;
    demo?: string;
    writeup?: string;
  };
}
