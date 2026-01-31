import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaTerminal,
} from "react-icons/fa";
import type { Project } from "@/types/project";
import { techIcons } from "@/utils/techIcons";

interface ProjectCardProps {
  /** Project entity to be rendered */
  project: Project;
}

/**
 * Renders a single project card.
 *
 * This component is:
 * - purely presentational
 * - reusable across pages or layouts
 * - easy to unit test
 */
const ProjectCard = ({ project }: ProjectCardProps) => {
  const categoryIcon =
    project.category === "Cybersecurity" ||
    project.category === "DevSecOps" ? (
      <FaTerminal size={20} />
    ) : (
      <FaCode size={20} />
    );

  return (
    <article className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] group">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-cyan-300">
          {categoryIcon}
        </div>
        <h2 className="text-xl font-bold text-slate-200 group-hover:text-white truncate">
          {project.title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-6 line-clamp-3">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex flex-col gap-4">
        {/* Tech stack */}
        <div className="flex flex-wrap gap-3 text-slate-500">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="hover:text-cyan-400 transition-colors text-lg"
              title={tech}
            >
              {techIcons[tech]}
            </span>
          ))}
        </div>

        <div className="h-px bg-slate-800 w-full my-2" />

        {/* Links */}
        <div className="flex justify-end gap-4">
          {project.links.writeup && (
            <a
              href={project.links.writeup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400"
            >
              <FaExternalLinkAlt /> Write-up
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400"
            >
              <FaGithub size={18} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
