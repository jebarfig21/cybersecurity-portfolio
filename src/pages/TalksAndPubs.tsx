import PublicationGrid from "@/components/publications/PublicationGrid";
import { publicationsData } from "@/data/publications";

/**
 * TalksAndPublications page
 *
 * Purpose:
 * - Showcase public speaking engagements, conferences, and written content
 * - Highlight technical leadership and knowledge sharing
 *
 * This page is intentionally thin:
 * - No data manipulation
 * - No layout logic
 * - Composition only
 */
const TalksAndPublications = () => {
  return (
    <section className="animate-fadeIn">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className="text-cyan-400">&lt;</span> Talks &amp; Publications
          <span className="text-cyan-400">/&gt;</span>
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto">
          A selection of conference talks, technical articles, and blog posts
          where I share practical experience in cybersecurity, software
          engineering, and DevSecOps.
        </p>
      </header>

      <PublicationGrid publications={publicationsData} />
    </section>
  );
};

export default TalksAndPublications;
