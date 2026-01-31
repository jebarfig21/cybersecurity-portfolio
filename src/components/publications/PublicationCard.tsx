import {
  FaExternalLinkAlt,
  FaMicrophone,
  FaPenFancy,
  FaVideo,
  FaSlideshare,
} from "react-icons/fa";
import type { Publication } from "@/types/publication";

interface PublicationCardProps {
  /** Publication entity to be rendered */
  publication: Publication;
}

/**
 * Renders a single publication card.
 *
 * This component is:
 * - purely presentational
 * - visually consistent with ProjectCard
 * - reusable across pages or grids
 */
const PublicationCard = ({ publication }: PublicationCardProps) => {
  const typeIcon =
    publication.type === "Talk" || publication.type === "Conference" ? (
      <FaMicrophone size={20} />
    ) : (
      <FaPenFancy size={20} />
    );

  return (
    <article className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] group">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-cyan-300">
          {typeIcon}
        </div>
        <h2 className="text-xl font-bold text-slate-200 group-hover:text-white truncate">
          {publication.title}
        </h2>
      </div>

      {/* Summary */}
      <p className="text-slate-400 text-sm mb-6 line-clamp-3">
        {publication.summary}
      </p>

      {/* Footer */}
      <div className="flex flex-col gap-4">
        {/* Metadata */}
        <div className="text-xs text-slate-500">
          <span className="font-medium text-slate-400">
            {publication.event || publication.platform}
          </span>
          {" · "}
          {publication.date}
        </div>

        <div className="h-px bg-slate-800 w-full my-2" />

        {/* Links */}
        <div className="flex justify-end gap-4">
          {publication.links.url && (
            <a
              href={publication.links.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400"
            >
              <FaExternalLinkAlt /> View
            </a>
          )}

          {publication.links.slides && (
            <a
              href={publication.links.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400"
            >
              <FaSlideshare /> Slides
            </a>
          )}

          {publication.links.video && (
            <a
              href={publication.links.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400"
            >
              <FaVideo /> Video
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default PublicationCard;
