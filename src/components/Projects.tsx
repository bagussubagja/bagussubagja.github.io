import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { AnimatedSection, AnimatedList, AnimatedItem, fadeUp } from "./animations/MotionWrapper";

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Highlighted <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated selection of projects that showcase my expertise in building impactful mobile and web applications
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <AnimatedList className="grid lg:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project) => (
            <AnimatedItem key={project.id}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  to={`/projects/${project.id}`}
                  className="group glass-card overflow-hidden cursor-pointer block"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedList>

        {/* See All Button */}
        <AnimatedSection className="flex justify-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link to="/projects" className="glass-button-primary flex items-center gap-2 group">
              See All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
