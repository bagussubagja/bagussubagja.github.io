import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/personal";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.nav.home, href: "/", isExternal: false },
    { label: t.experience.title, href: "#experience", isExternal: false },
    { label: t.nav.works, href: "#works", isExternal: false },
    { label: t.nav.services, href: "#services", isExternal: false },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Split links into two columns
  const half = Math.ceil(footerLinks.length / 2);
  const col1 = footerLinks.slice(0, half);
  const col2 = footerLinks.slice(half);

  const renderLink = (link: { label: string; href: string }) => {
    if (link.href.startsWith("#")) {
      return (
        <a
          href={link.href}
          onClick={(e) => handleAnchor(e, link.href)}
          className="footer-link"
        >
          {link.label}
        </a>
      );
    } else if (link.href.startsWith("http")) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">
          {link.label}
        </a>
      );
    } else {
      return (
        <Link to={link.href} className="footer-link">
          {link.label}
        </Link>
      );
    }
  };

  return (
    <footer 
      className="border-t border-border" 
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="site-wrap py-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-16">
          
          {/* Left: Wordmark + tagline */}
          <div 
            className="flex flex-col gap-4"
            data-reveal="blur-in"
          >
            <button
              onClick={scrollToTop}
              className="footer-wordmark text-left hover:text-foreground/80 transition-colors duration-200"
              data-magnetic
              data-magnetic-strength="0.1"
              aria-label="Back to top"
            >
              {personalInfo.fullName}
            </button>
            <p className="footer-tagline">
              {t.footer.tagline}
            </p>
          </div>

          {/* Right: Navigation columns */}
          <nav 
            aria-label="Footer navigation" 
            className="flex gap-16"
            data-reveal-group
          >
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {col1.map((link) => (
                <li key={link.label} data-reveal-item>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {col2.map((link) => (
                <li key={link.label} data-reveal-item>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="site-wrap py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.fullName}. {t.footer.copyright}
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-xs inline-flex items-center gap-1 
                           hover:text-foreground transition-colors duration-200"
                data-magnetic
                data-magnetic-strength="0.1"
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
