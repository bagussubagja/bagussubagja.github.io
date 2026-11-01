import { ArrowUpRight, Download } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { useLanguage } from "@/context/LanguageContext";
import profilePhoto from "@/assets/profile-photo.png";
import cvFile from "@/assets/CV_Bagus_Subagja_Mobile_Engineer.pdf";

const Hero = () => {
  const { t, language } = useLanguage();

  const handleScrollToWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="profile"
      className="min-h-screen flex items-center pt-[100px] pb-16 lg:pb-24"
      aria-labelledby="hero-name"
    >
      <div className="site-wrap w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col gap-8">

            {/* Main headline - with highlight effect */}
            <h1
              id="hero-name"
              className="hero-h1"
              data-reveal="blur-in"
            >
              <span>{t.hero.greeting}</span>{" "}
              <span className="highlight-text">{personalInfo.fullName.split(" ")[0]}</span>{" "}
              <span className="highlight-text">{personalInfo.fullName.split(" ")[1]}</span>
            </h1>

            {/* Subtitles with blur-in animation */}
            <div className="flex flex-col gap-2">
              <p
                className="hero-sub"
                data-reveal="blur-in"
                data-reveal-delay="0.35"
              >
                {language === "EN" 
                  ? <>A <span className="highlight-text-sm">Mobile Engineer</span> based in Bandung, Indonesia.</>
                  : <>Seorang <span className="highlight-text-sm">Mobile Engineer</span> berbasis di Bandung, Indonesia.</>
                }
              </p>
              <p
                className="hero-sub"
                data-reveal="blur-in"
                data-reveal-delay="0.5"
              >
                {t.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 pt-2"
              data-reveal="fade-up"
              data-reveal-delay="0.65"
            >
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-magnetic
                data-magnetic-strength="0.2"
              >
                {t.hero.talkWithMe}
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={cvFile}
                download="CV_Bagus_Subagja_Mobile_Engineer.pdf"
                className="btn-outline"
                data-magnetic
                data-magnetic-strength="0.15"
              >
                {language === "EN" ? "Download CV" : "Unduh CV"}
                <Download className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Profile Photo ── */}
          <div 
            className="relative flex-shrink-0 self-start lg:self-center flex flex-col items-center"
            data-parallax-section
          >
            {/* Photo */}
            <figure
              className="relative w-[280px] lg:w-[350px] m-0"
              data-reveal="fade-up"
              data-reveal-delay="0.5"
            >
              <img
                src={profilePhoto}
                alt={`${personalInfo.fullName} - Mobile Engineer`}
                className="w-full h-auto"
              />
            </figure>

            {/* Availability badge below image */}
            <div
              className="-mt-8 status-badge bg-black/60 backdrop-blur-md relative z-10"
              aria-label="Available for work"
            >
              <span className="status-badge-dot" aria-hidden="true" />
              <span className="text-xs font-medium text-white">{t.hero.availableBadge}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
