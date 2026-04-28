import { useState } from "react";
import { MapPin, Calendar, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, AnimatedList, AnimatedItem, staggerContainer, staggerItem } from "./animations/MotionWrapper";
import { experiences, calculateDuration } from "@/data/experiences";

const RESPONSIBILITIES_LIMIT = 3;

const Experience = () => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey delivering impactful digital solutions across various industries
          </p>
        </AnimatedSection>

        <AnimatedList className="space-y-8">
          {experiences.map((exp) => (
            <AnimatedItem key={exp.id}>
              <motion.article
                className="glass-card p-8"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div>
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      {exp.isCurrent && (
                        <motion.span
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Current
                        </motion.span>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold text-foreground mb-2">{exp.company}</h4>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Clock className="w-3 h-3" />
                        {calculateDuration(exp.period)}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-2">
                      {(expandedIds.has(exp.id)
                        ? exp.responsibilities
                        : exp.responsibilities.slice(0, RESPONSIBILITIES_LIMIT)
                      ).map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">-</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                    {exp.responsibilities.length > RESPONSIBILITIES_LIMIT && (
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="flex items-center gap-1 text-xs text-primary hover:underline mb-6 cursor-pointer"
                      >
                        {expandedIds.has(exp.id) ? (
                          <>Show less <ChevronUp className="w-3 h-3" /></>
                        ) : (
                          <>Read more ({exp.responsibilities.length - RESPONSIBILITIES_LIMIT} more) <ChevronDown className="w-3 h-3" /></>
                        )}
                      </button>
                    )}
                    {(exp.responsibilities.length <= RESPONSIBILITIES_LIMIT || !expandedIds.has(exp.id)) && (
                      <div className="mb-4" />
                    )}

                    {exp.products && (
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-2">
                          Key projects and contributions:
                        </p>
                        <ul className="grid grid-cols-2 gap-1">
                          {exp.products.map((product, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h5 className="text-sm font-semibold text-primary mb-3">Skills</h5>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                      >
                        {exp.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="skill-badge"
                            variants={staggerItem}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
};

export default Experience;
