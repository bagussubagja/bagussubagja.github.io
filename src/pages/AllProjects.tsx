import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { projects, getProjectCategories } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection, AnimatedList, AnimatedItem } from "@/components/animations/MotionWrapper";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getProjectCategories();

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <>
      <Helmet>
        <title>All Projects | Bagus Portfolio</title>
        <meta name="description" content="Explore all projects by Bagus - Mobile applications, web apps, IoT solutions, and more." />
      </Helmet>

      <div className="min-h-screen animated-gradient">
        <Navigation />

        <main className="pt-32 pb-24 px-4">
          <div className="container max-w-6xl mx-auto">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            {/* Header */}
            <AnimatedSection className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore a curated showcase of projects I've built — from ideas to real-world solutions.
              </p>
            </AnimatedSection>

            {/* Category Filter */}
            <motion.div
              className="relative z-10 flex flex-wrap items-center justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Filter className="w-4 h-4 text-muted-foreground" />
              <motion.button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 text-sm rounded-full transition-all border ${
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/60 text-foreground border-border/50 hover:bg-card/80 backdrop-blur-sm"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All
              </motion.button>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-all border ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card/60 text-foreground border-border/50 hover:bg-card/80 backdrop-blur-sm"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <AnimatedList key={selectedCategory || "all"} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <AnimatedItem key={project.id}>
                  <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to={`/projects/${project.id}`} className="group glass-card overflow-hidden cursor-pointer block">
                      <div className="relative h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="glass-nav px-2 py-1 text-xs font-medium">{project.category}</span>
                        </div>
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-primary/90 px-2 py-1 text-xs font-medium rounded-full text-primary-foreground">Featured</span>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.shortDescription}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-xs text-muted-foreground bg-muted/30 px-2 py-0.5 rounded">{tech}</span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-0.5 rounded">+{project.technologies.length - 3}</span>
                          )}
                        </div>
                        <div className="flex items-center text-primary text-sm font-medium">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </AnimatedItem>
              ))}
            </AnimatedList>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div className="text-center py-16 glass-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-muted-foreground">No projects found in this category.</p>
                <button onClick={() => setSelectedCategory(null)} className="glass-button-primary mt-4">Show All Projects</button>
              </motion.div>
            )}
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

export default AllProjects;
