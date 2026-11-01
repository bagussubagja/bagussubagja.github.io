import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/personal";

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.experience.title, href: "#experience" },
    { label: t.nav.works, href: "#works" },
    { label: t.nav.services, href: "#services" },
  ];

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll spy - detect which section is in view
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["experience", "works", "services"];
    
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Find which section is currently in view
      const scrollPos = window.scrollY + 150; // offset for navbar height
      
      let currentSection = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // If at the very top, consider it "home"
      if (window.scrollY < 100) {
        currentSection = "home";
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    // For non-home pages
    if (location.pathname !== "/") {
      if (href === "/") return false;
      if (href.startsWith("#")) return false;
      return location.pathname.startsWith(href);
    }
    
    // For home page with sections
    if (href === "/") {
      return activeSection === "home" || activeSection === "";
    }
    if (href.startsWith("#")) {
      const sectionId = href.replace("#", "");
      return activeSection === sectionId;
    }
    return false;
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ID" : "EN");
  };

  return (
    <header className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="site-wrap nav-inner">

        {/* LEFT: Logo/Name */}
        <Link 
          to="/"
          className="text-lg font-semibold text-foreground"
          data-reveal="fade-up"
        >
          {personalInfo.name}
        </Link>

        {/* CENTER: Navigation Links */}
        <nav 
          aria-label="Main navigation" 
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link, i) => (
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
                data-reveal="fade-up"
                data-reveal-delay={String(0.05 + i * 0.03)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
                data-reveal="fade-up"
                data-reveal-delay={String(0.05 + i * 0.03)}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* RIGHT: Theme Toggle + Language Switch */}
        <div className="flex items-center gap-3">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="nav-cta"
            data-magnetic
            data-magnetic-strength="0.15"
            data-reveal="fade-up"
            data-reveal-delay="0.2"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted && (
              theme === "dark" ? (
                <Sun className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4" aria-hidden="true" />
              )
            )}
          </button>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="nav-cta"
            data-magnetic
            data-magnetic-strength="0.15"
            data-reveal="fade-up"
            data-reveal-delay="0.25"
            aria-label={`Switch to ${language === "EN" ? "Indonesian" : "English"}`}
          >
            <span className="text-xs font-medium">{language}</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navigation;
