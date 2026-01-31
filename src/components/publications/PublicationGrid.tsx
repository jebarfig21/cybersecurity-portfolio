import type { Publication } from "@/types/publication";
import PublicationCard from "./PublicationCard";

interface PublicationGridProps {
  /**
   * List of publications to be rendered.
   * The grid is intentionally agnostic of the data source
   * (static file, API, CMS, etc.).
   */
  publications: Publication[];
}

/**
 * PublicationGrid
 *
 * Responsibility:
 * - Layout and iteration only
 * - No business logic
 * - No knowledge of page-level concerns
 *
 * This mirrors the role of ProjectGrid to keep
 * architectural consistency across the app.
 */
const PublicationGrid = ({ publications }: PublicationGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {publications.map((publication) => (
        <PublicationCard
          key={publication.id}
          publication={publication}
        />
      ))}
    </div>
  );
};

export default PublicationGrid;
