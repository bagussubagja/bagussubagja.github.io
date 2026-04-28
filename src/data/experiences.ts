export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
  products?: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Mobile Engineer",
    company: "Fortress Digital Services",
    location: "Bandung, Indonesia",
    period: "Jan 2024 - Present",
    isCurrent: true,
    responsibilities: [
      "Built and maintained core financial features across multiple mobile banking apps covering top-up, bill payments, BI-Fast transfers, Virtual Account, time deposits, and online onboarding used by customers across different demographics and banking behaviors.",
      "Designed features around how mobile banking users actually think and behave from first-time users to daily active users which helped drive adoption across different customer profiles.",
      "Added transaction validation, biometric login, and device security checks to the app making it harder for fraudulent activity to slip through without disrupting the user experience.",
      "Developed the payment flow for GoPay, Dana, OVO, and QRIS within the app from UI to API integration so users can transact without leaving the app.",
      "Reached 90% automation coverage with Katalon and 80% unit test coverage in Flutter consistently across multiple projects.",
      "Kept the app at a 97% crash-free rate and 94% SonarQube score through regular code reviews and proactive issue tracking.",
      "Kept the app up-to-date with Google Play and App Store policy changes, including security requirements around data handling and user authentication.",
      "Monitored both dev and production environments regularly, catching and fixing issues before they reached users keeping release cycles stable and predictable.",
      "Worked closely with backend, QA, PM, and product teams from requirements discussion all the way to deployment bridging gaps between teams to keep releases on track.",
    ],
    products: [
      "PDSB Mobile Banking",
      "Sultra Mobile Banking",
      "Movin (Mandiri Taspen)",
      "Maspion Electronic Banking (MEB)",
      "PAC Cash",
      "PDSB Mobile Approval",
      "Sultra Mobile Merchant",
      "Bank Woori Saudara (BWS) Mobile",
      "PDSB Mobile Merchant",
      "BTPNS (Tepat Mobile)",
      "Smart Branch System DP Taspen",
      "CTBC Mobile Banking"
    ],
    skills: [
      "Mobile Banking",
      "Flutter",
      "Android Native (Java and Kotlin)",
      "iOS (SwiftUI and UIKit)",
      "Mobile Development",
      "Mobile Security",
      "XCode",
      "Fintech",
    ],
  },
  {
    id: 2,
    title: "Flutter Developer",
    company: "Yayasan HSI AbdullahRoy",
    location: "Yogyakarta, Indonesia (Freelance)",
    period: "Jul 2025 - Apr 2026",
    isCurrent: false,
    responsibilities: [
      "Fixed bugs and resolved technical issues across the Flutter app including UI glitches, logic errors, and performance problems found by analyzing the existing codebase.",
      "Built a donation feature integrated with a payment gateway to support the foundation's fundraising campaigns and events.",
      "Worked on a Muslim learning app with multiple features Quran learning, Islamic study events, donations, and more so I got exposure to a fairly broad codebase.",
      "Worked with backend developers and designers to implement fixes and new features throughout the project.",
      "Joined code reviews to help keep the code clean, readable, and easy to maintain.",
      "Picked up Flutter best practices along the way by working directly on a live, multi-feature app with a real team.",
    ],
    products: [
      "HSI Edu",
    ],
    skills: [
      "Mobile Development",
      "Android",
      "iOS",
      "Flutter",
      "Clean Architecture",
      "BLoC",
    ],
  },
  {
    id: 3,
    title: "Mobile Developer",
    company: "Telkom Indonesia",
    location: "Jakarta, Indonesia",
    period: "Jan 2023 - Dec 2023",
    isCurrent: false,
    responsibilities: [
      "Worked on mobile apps for agriculture covering field operations, merchant tools, and smart farming across multiple platforms.",
      "Built features for different user types: field workers who manage daily tasks, and merchants who handle products, orders, and customers. Each segment had different needs, so I made sure the features reflected that.",
      "Added IoT and real-time monitoring support to the app, helping farmers track and automate their farming activities from their phone.",
      "Regularly tracked down bugs and performance issues both during development and in production and fixed them before they became bigger problems.",
      "Took part in code reviews and testing to keep the codebase clean and consistent with the team's standards.",
      "Got hands-on experience with how a real mobile development team operates from picking up tickets and going through code reviews, to understanding how features move from design to production in an actual product team.",
    ],
    products: [
      "Agree Field Assistant",
      "Agree Superapps",
      "Agree Merchant",
    ],
    skills: [
      "React Native",
      "Kotlin",
      "Android",
      "Agile",
      "Team Collaboration",
    ],
  },
  {
    id: 4,
    title: "Junior WordPress Developer",
    company: "PT. Global Mapping Studio Indonesia",
    location: "Bogor, Indonesia (Freelance)",
    period: "Jun 2022 - Mar 2023",
    isCurrent: false,
    responsibilities: [
      "Built and maintained WordPress sites for corporate clients mostly company profiles, landing pages, and product pages tailored to each client's branding and needs.",
      "Customized themes and plugins to match project requirements, adjusting layouts and functionality without always building from scratch.",
      "Added features like contact forms, maps, and basic data-driven elements to make the sites more useful for the client's business.",
      "Kept sites running smoothly by handling plugin and theme updates, security patches, and performance fixes on a regular basis.",
      "Picked up SEO basics and responsiveness along the way making sure what I delivered actually worked well for end users, not just looked good.",
    ],
    products: [
      "Website Glomaps",
    ],
    skills: [
      "WordPress",
      "Web Development",
      "SEO",
      "PHP",
      "HTML/CSS",
    ],
  },
  {
    id: 5,
    title: "Teaching Assistant – Data Structures & Algorithms and IT Fundamentals",
    company: "Universitas Pendidikan Indonesia",
    location: "Bandung, Indonesia (Hybrid)",
    period: "Feb 2022 - May 2022",
    isCurrent: false,
    responsibilities: [
      "Ran practicum sessions for Data Structures & Algorithms, guiding students through topics like linked lists, trees, sorting, and searching making sure they understood the concepts, not just the syntax.",
      "Also assisted in Introduction to Information Technology practicum, helping students connect the theory they learned in class to actual practice.",
      "Helped prepare practicum materials together with the lecturer, including exercises and examples that focused on problem-solving and logical thinking.",
      "Stepped in as a substitute a few times to deliver the session when the lecturer wasn't available handling both the explanation and the hands-on part.",
      "Sat with students one-on-one during sessions to help them debug their code, understand where their logic went wrong, and improve their implementations.",
    ],
    skills: [
      "Data Structures",
      "Algorithms",
      "Teaching",
      "Mentoring",
      "Problem Solving",
    ],
  },
];

export const calculateDuration = (period: string): string => {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const parts = period.split(" - ");
  const [startMonth, startYear] = parts[0].split(" ");
  const start = new Date(parseInt(startYear), months[startMonth]);
  let end: Date;
  if (parts[1] === "Present") {
    end = new Date();
  } else {
    const [endMonth, endYear] = parts[1].split(" ");
    end = new Date(parseInt(endYear), months[endMonth]);
  }
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  if (years > 0 && remainingMonths > 0)
    return `${years} yr ${remainingMonths} mos`;
  if (years > 0) return `${years} yr`;
  return `${remainingMonths} mos`;
};
