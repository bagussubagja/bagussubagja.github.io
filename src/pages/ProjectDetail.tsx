import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getProjectById } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection, AnimatedList, AnimatedItem, fadeUp, scaleUp } from "@/components/animations/MotionWrapper";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");
  const { language } = useLanguage();

  if (!project) {
    return (
      <div className="min-h-screen animated-gradient flex items-center justify-center">
        <motion.div className="text-center glass-card p-12" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <h1 className="text-2xl font-bold mb-4">
            {language === "ID" ? "Proyek Tidak Ditemukan" : "Project Not Found"}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === "ID" ? "Proyek yang Anda cari tidak ada." : "The project you're looking for doesn't exist."}
          </p>
          <Link to="/projects" className="glass-button-primary">
            {language === "ID" ? "Lihat Semua Proyek" : "View All Projects"}
          </Link>
        </motion.div>
      </div>
    );
  }

  // Get translated content
  const category = language === "ID" ? project.categoryId : project.category;
  const shortDescription = language === "ID" ? project.shortDescriptionId : project.shortDescription;
  const description = language === "ID" ? project.descriptionId : project.description;
  const features = language === "ID" ? project.featuresId : project.features;
  const duration = language === "ID" ? project.durationId : project.duration;

  return (
    <>
      <Helmet>
        <title>{project.title} | Bagus Portfolio</title>
        <meta name="description" content={shortDescription} />
        <meta property="og:title" content={`${project.title} | Bagus Portfolio`} />
        <meta property="og:description" content={shortDescription} />
      </Helmet>

      <div className="min-h-screen animated-gradient">
        <Navigation />

        <main className="pt-32 pb-24 px-4">
          <div className="container max-w-5xl mx-auto">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                {language === "ID" ? "Kembali ke Proyek" : "Back to Projects"}
              </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.div
              className="glass-card overflow-hidden mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative h-64 md:h-96">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.span
                    className="inline-block px-3 py-1 text-xs font-medium mb-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {category}
                  </motion.span>
                  <motion.h1
                    className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {project.title}
                  </motion.h1>
                  <motion.p
                    className="text-muted-foreground max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {shortDescription}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <AnimatedSection className="glass-card p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-4">
                    {language === "ID" ? "Tentang Proyek Ini" : "About This Project"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </AnimatedSection>

                <AnimatedSection className="glass-card p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    {language === "ID" ? "Fitur Utama" : "Key Features"}
                  </h2>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </AnimatedSection>



              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <AnimatedSection className="glass-card p-6">
                  <h2 className="text-lg font-bold mb-4">
                    {language === "ID" ? "Info Proyek" : "Project Info"}
                  </h2>
                  <div className="space-y-3 text-sm">
                    {project.company && (
                      <div>
                        <span className="text-muted-foreground">
                          {language === "ID" ? "Perusahaan" : "Company"}
                        </span>
                        <p className="font-medium text-foreground">{project.company}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-muted-foreground">
                        {language === "ID" ? "Tahun" : "Year"}
                      </span>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection className="glass-card p-6">
                  <h2 className="text-lg font-bold mb-4">
                    {language === "ID" ? "Link Proyek" : "Project Links"}
                  </h2>
                  <div className="space-y-3">
                    {project.links.length > 0 ? project.links.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${i === 0 ? 'glass-button-primary' : 'glass-button'} w-full flex items-center justify-center gap-2`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <ExternalLink className="w-4 h-4" />{link.label}
                      </motion.a>
                    )) : (
                      <p className="text-sm text-muted-foreground text-center">
                        {language === "ID" ? "Link proyek tidak tersedia" : "Project links not available"}
                      </p>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </main>

        <Footer />

        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
