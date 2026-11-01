import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300); // fade out duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];
  const content = language === "ID" ? current.contentId : current.content;
  const role = language === "ID" ? current.roleId : current.role;

  return (
    <section
      id="testimonials"
      className="section-gap border-t border-border"
      aria-labelledby="testi-heading"
    >
      <div className="site-wrap">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="relative">
            {/* Quote mark decoration */}
            <span 
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-foreground/10 font-serif"
              aria-hidden="true"
            >
              "
            </span>

            {/* Quote text with fade animation */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="testi-quote">
                "{content}"
              </p>

              {/* Attribution */}
              <footer className="mt-10">
                <cite className="not-italic">
                  <p className="text-base font-semibold text-foreground mb-1">
                    {current.name}
                  </p>
                  <p className="testi-attr">
                    {role}
                  </p>
                </cite>
              </footer>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-foreground w-6" 
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
