import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./animations/MotionWrapper";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-24">
      <div className="container max-w-6xl mx-auto px-4 mb-12">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What <span className="text-primary">People Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            What people say about working with me
          </p>
        </AnimatedSection>
      </div>

      <motion.div
        ref={scrollRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex gap-6 px-4 py-4" style={{ width: "max-content" }}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.article
              key={`${testimonial.id}-${index}`}
              className="glass-card p-6 w-80 flex-shrink-0 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ y: -4 }}
            >
              <Quote className="w-8 h-8 text-primary/50" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
