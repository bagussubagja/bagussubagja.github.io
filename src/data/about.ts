import {
  Code2,
  Heart,
  Lightbulb,
  Rocket,
  Target,
  Coffee,
  Gamepad2,
  BookOpen,
  Music,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface InterestItem {
  icon: LucideIcon;
  label: string;
}

export const aboutIntro = {
  chapterLabel: "Chapter 01 — The Person",
  headline: "Hi, I'm",
  highlightName: "Bagus",
  description:
    "A Mobile Engineer who believes that the best apps are the ones you barely notice — because they just work. I craft digital experiences that feel natural, perform flawlessly, and solve real problems for real people.",
  quote:
    "Strive for perfection in everything you do. Take the best that exists and make it better. When it does not exist, design it. — Sir Henry Royce",
  closingTitle: "Let's build something",
  closingHighlight: "amazing",
  closingSubtitle: "together.",
  closingDescription:
    "Whether you need a mobile app, a digital product, or just want to chat about technology — I'd love to hear from you.",
  ctaText: "Say Hello",
  ctaEmail: "mailto:bagussubagja17@gmail.com",
};

export const timeline: TimelineItem[] = [
  {
    year: "Early Days",
    title: "Where It All Began",
    description:
      "I first got into programming back in middle school. It all started from my obsession with messing around with Android devices—like rooting, flashing custom ROMs, installing TWRP, and doing all sorts of tweaks.",
    icon: Lightbulb,
    accent: "from-primary/20 to-primary/5",
  },
  {
    year: "The Journey",
    title: "Diving Deep into Mobile",
    description:
      "Fast forward to college, I decided to major in Software Engineering, and that’s when things really got serious. I started diving deep into the ins and outs of software development and all that engineering stuff, which eventually led me to find my absolute passion in mobile development.",
    icon: Code2,
    accent: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    year: "Growth",
    title: "From Developer to Engineer",
    description:
      "After finishing my degree, I jumped straight into the workforce as a Mobile Developer. I’ve learned a ton and gained some seriously valuable experience since then. Dealing with all the ups and downs and non-stop challenges in the industry has really shaped me into a better developer day by day.",
    icon: Rocket,
    accent: "from-blue-500/20 to-blue-500/5",
  },
  {
    year: "Today",
    title: "Building What Matters",
    description:
      "Now, as an experienced Mobile Engineer, my focus has shifted from just building apps to truly making an impact. I believe great engineering isn't just about the tech—it's about finding the right solutions and making sure every challenge ends with a happy user and a job well done.",
    icon: Target,
    accent: "from-amber-500/20 to-amber-500/5",
  },
];

export const values: ValueItem[] = [
  {
    icon: Heart,
    title: "User First",
    description:
      "Every decision starts with the people who'll use what I build",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Maintainable, testable, and readable — code is communication",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    description:
      "Technology evolves, and so do I — curiosity is my superpower",
  },
  {
    icon: Target,
    title: "Impact Driven",
    description:
      "I measure success by the problems solved, not lines written",
  },
];

export const interests: InterestItem[] = [
  { icon: Coffee, label: "Coffee Enthusiast" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: BookOpen, label: "Tech Articles" },
  { icon: Music, label: "Lo-fi & Jazz" },
];
