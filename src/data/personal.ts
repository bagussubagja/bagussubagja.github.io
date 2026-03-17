import { Github, Linkedin, Instagram } from "lucide-react";

export const personalInfo = {
  name: "Bagus",
  fullName: "Bagus Subagja",
  greeting: "Hi, I'm Bagus!",
  pronouns: "(He/Him)",
  description:
    "Mobile Engineer focused on building secure, high-performance apps. I care about maintainability, observability, and smooth user journeys for stable products you can trust.",
  email: "bagussubagja17@gmail.com",
  location: "Indonesia",
  resumeUrl: "#",
  contactUrl: "mailto:bagussubagja17@gmail.com",
};

export const roles = [
  "Mobile Engineer...",
  "Flutter Developer...",
  "Android & IOS Developer...",
];

export const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/bagussubagja/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/bagussubagja", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/_bagussubagja/", label: "Instagram" },
];

export const seoConfig = {
  home: {
    title: "Bagus - Mobile Engineer | Flutter & Android Developer",
    description:
      "Mobile Engineer focused on building secure, high-performance apps. Expert in Flutter, Android, and cross-platform mobile development. Available for new opportunities.",
    keywords:
      "Mobile Engineer, Flutter Developer, Android Developer, IOS Developer, Mobile App Development, Cross-Platform Development",
  },
  about: {
    title: "About Me | Bagus Subagja",
    description:
      "Get to know Bagus Subagja — a Mobile Engineer passionate about building secure, high-performance applications.",
  },
  projects: {
    title: "Projects - Bagus | Mobile Engineer Portfolio",
    description:
      "Explore my portfolio of mobile applications and projects built with Flutter, Android, IOS, and modern technologies.",
  },
  products: {
    title: "Digital Products - Bagus | Premium Templates & Plugins",
    description:
      "Discover premium digital products including web templates, mobile plugins, and developer tools.",
  },
};

export const featureFlags = {
  showDigitalProducts: false,
  showProjects: true,
  showExperience: true,
  showTestimonials: true,
};

export const footerConfig = {
  copyright: "Bagus Subagja",
  availabilityStatus: "Available for opportunities",
};
