import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";
import { NavLink } from "react-router-dom";

/**
 * Home page
 *
 * Purpose:
 * - Immediate positioning (who / what / value)
 * - Showcase featured work
 * - Drive users to Projects and Publications
 */
const Home = () => {
  const featuredProjects = projectsData.slice(0, 3); // solo lo mejor

  return (
    <main className="animate-fadeIn">
      {/* ===================== */}
      {/* Hero Section */}
      {/* ===================== */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          José de Jesús Barajas
        </h1>

        <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-6">
          Senior Security Software Engineer
        </h2>

        <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
          I design and build secure backend systems, automate security operations,
          and develop scalable solutions across cloud and distributed environments.
          My work focuses on security engineering, DevSecOps, and privacy-first systems.
        </p>

        {/* CTAs */}
        <div className="flex justify-center gap-4 mt-10">
            <NavLink to="/projects" end>
              Projects
            </NavLink>
     
              <NavLink to="/talksAndPubs" end>
               Talks And Publications Happy
            </NavLink>
        </div>
      </section>

      {/* ===================== */}
      {/* Featured Projects */}
      {/* ===================== */}
      <section className="max-w-6xl mx-auto mb-20">
        <header className="mb-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Featured Work
          </h3>
          <p className="text-slate-400 text-sm">
            A selection of projects focused on security, automation, and scalable systems.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Link to all projects */}
        <div className="text-center mt-10">
                 <NavLink to="/talksAndPubs" end>
              /Talks And Publications
            </NavLink>
     
        </div>
      </section>

      {/* ===================== */}
      {/* Soft Beyond Work */}
      {/* ===================== */}
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm">
          Beyond my professional work, I enjoy teaching, technical writing,
          and sharing knowledge through talks and community initiatives.
        </p>
      </section>
    </main>
  );
};

export default Home;
