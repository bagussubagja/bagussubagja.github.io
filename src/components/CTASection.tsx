import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { useLanguage } from "@/context/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-gap border-t border-border"
      aria-labelledby="cta-heading"
    >
      <div className="site-wrap">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p 
            className="cta-label"
            data-reveal="fade-up"
          >
            {t.cta.label}
          </p>

          {/* Main headline with word reveal */}
          <h2
            id="cta-heading"
            className="cta-h2"
            data-motion-text="words"
          >
            {t.cta.title}
          </h2>

          {/* CTA Button */}
          <div data-reveal="fade-up" data-reveal-delay="0.3">
            <a
              href={personalInfo.contactUrl}
              className="btn-primary inline-flex"
              data-magnetic
              data-magnetic-strength="0.25"
            >
              {t.hero.talkWithMe}
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Availability status */}
          <p
            className="cta-status"
            data-reveal="fade-up"
            data-reveal-delay="0.45"
          >
            <span className="cta-status-dot" aria-hidden="true" />
            {t.cta.available}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
