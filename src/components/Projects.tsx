import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

const featured = projects.filter((p) => p.featured).slice(0, 4);

/**
 * Brooks-style Selected Works
 * - 2 column grid
 * - Card with image collage (main + side thumbnails)
 * - Title, category, date, description below
 * - "View detail works" button
 * - On hover: card body slides up over image area
 */
const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="works"
      className="section-gap"
      aria-labelledby="works-heading"
    >
      <div className="site-wrap">
        {/* Section Header with See All button */}
        <div className="flex items-center justify-between mb-10" data-reveal="fade-up">
          <p className="section-label" id="works-heading">
            {t.projects.title}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {language === "EN" ? "See all work" : "Lihat semua"}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-column card grid */}
        <div className="works-grid" data-reveal-group>
          {featured.map((project, i) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="works-card group"
              aria-label={`View ${project.title} project`}
              data-reveal-item
            >
              {/* Image Area - single image */}
              <div className="works-card-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="works-card-img"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>

              {/* Card Body - slides up on hover */}
              <div className="works-card-body">
                <h3 className="works-card-title">{project.title}</h3>
                <p className="works-card-cat">
                  {language === "ID" ? project.categoryId : project.category}
                </p>
                <p className="works-card-date">
                  {project.duration === "Ongoing"
                    ? `${project.year} – ${language === "EN" ? "Present" : "Sekarang"}`
                    : project.year}
                </p>
                <p className="works-card-desc">
                  {language === "ID" ? project.shortDescriptionId : project.shortDescription}
                </p>

                {/* View detail button */}
                <span className="works-card-btn">
                  {language === "EN" ? "View detail works" : "Lihat detail"}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
