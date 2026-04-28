import { User, Briefcase, Building2, MessageSquare, ShoppingBag, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import { footerConfig } from "@/data/personal";

const navItems = [
  { id: "profile", icon: User, label: "Profile" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "products", icon: ShoppingBag, label: "Products" },
  { id: "experience", icon: Building2, label: "Experience" },
  { id: "testimonials", icon: MessageSquare, label: "Reviews" },
];

const mobileNavItems = navItems.filter((item) => item.id !== "products");

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map((item) => item.id);
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className={`glass-nav hidden md:block transition-all duration-500 ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="flex items-center justify-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-secondary/50"
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {activeSection === item.id && (
                <span className="text-sm font-medium animate-fade-in">{item.label}</span>
              )}
            </button>
          ))}

          <div className="w-px h-6 bg-border/50 mx-2" />

          <ThemeToggle />

          <span className="text-sm text-primary ml-2 relative">
            {footerConfig.availabilityStatus}
            <svg 
              className="absolute -bottom-2 left-0 w-full h-3"
              viewBox="0 0 120 12" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0 6C8 2 16 10 24 6C32 2 40 10 48 6C56 2 64 10 72 6C80 2 88 10 96 6C104 2 112 10 120 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                className="text-primary/60"
              />
            </svg>
          </span>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav className="glass-bottom-nav md:hidden">
        <div className="flex items-center justify-around w-full">
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <div className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-primary/20 scale-110"
                  : "hover:bg-secondary/50"
              }`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-medium transition-all duration-300 ${
                activeSection === item.id ? "opacity-100" : "opacity-70"
              }`}>
                {item.label}
              </span>
            </button>
          ))}

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 text-muted-foreground"
            >
              <div className="p-2 rounded-full transition-all duration-300 hover:bg-secondary/50">
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </div>
              <span className="text-xs font-medium opacity-70">Theme</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
