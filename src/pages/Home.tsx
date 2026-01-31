import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";

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
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-900 font-medium hover:bg-cyan-400 transition"
          >
            View Projects
          </a>

          <a
            href="/talksAndPubs"
            className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-white transition"
          >
            Talks & Publications
          </a>
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
          <a
            href="/projects"
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
          >
            View all projects →
          </a>
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
