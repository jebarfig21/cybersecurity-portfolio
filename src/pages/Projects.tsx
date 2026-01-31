import ProjectGrid from "@/components/projects/ProjectGrid";
import { projectsData } from "@/data/projects";

const Projects = () => {
  return (
    <section>
        <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className="text-cyan-400">&lt;</span> Projects
          <span className="text-cyan-400">/&gt;</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A curated selection of projects across cybersecurity, software
          development, and DevSecOps.
        </p>
      </header>
      <ProjectGrid projects={projectsData} />
    </section>
  );
};

export default Projects;
