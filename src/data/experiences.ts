export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
  products?: string[];
  achievements: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Mobile Developer",
    company: "PT. Sarana Pactindo",
    location: "Bandung, Indonesia",
    period: "Jan 2024 - Present",
    isCurrent: true,
    responsibilities: [
      "Developed and maintained a wide range of core financial features across multiple mobile banking applications, including top-up, bill payments, transfers (Overbook, Online, BI-Fast), Virtual Account, purchases, time deposits, and online customer onboarding.",
      "Built user-centric features tailored to the specific needs of mobile banking users, ensuring relevance and high adoption across diverse user segments.",
      "Implemented security enhancements such as advanced transaction validation, biometric authentication, and device security validation to reduce fraud risks.",
      "Integrated third-party services including e-wallets (GoPay, Dana, OVO) and QRIS for seamless digital transactions.",
      "Achieved high test coverage across projects: up to 90% automation test coverage (Katalon) and 80% unit test coverage (Flutter).",
      "Improved code quality and application reliability, maintaining 85% crash-free rate and 88% SonarQube score.",
      "Ensured compliance with the latest Google Play and App Store policies, including robust security measures to prevent breaches.",
      "Proactively maintained project health by monitoring and resolving both development and production issues, ensuring consistent app stability and the best possible quality at every release cycle.",
      "Working and communicating perfectly with backend, QA, PM, and product teams throughout the development lifecycle from requirements clarification deployment to ensure smooth and high-quality feature delivery.",
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
    achievements: [
      "Enhanced app security with biometric authentication, transaction validation, and device security to reduce fraud risks",
      "Maintained 85% crash-free rate and 88% SonarQube score",
      "Developed and maintained a wide range of core financial features across multiple mobile banking applications",
      "Integrated e-wallets, transfer, bill payment, purchase and QRIS for seamless transactions",
      "Delivered core banking features across mobile banking products",
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
    location: "Yogyakarta, Indonesia (Remote)",
    period: "Jul 2025 - Apr 2026",
    isCurrent: false,
    responsibilities: [
      "Developed donation features integrated with payment gateway to support foundation events and fundraising activities.",
      "Fixing bugs and resolving technical issues across the Flutter application",
      "Analyzing existing code to identify performance, UI, and logic problems",
      "Working together with backend developers, designers, and team to implement fixes and improvements",
      "Assisting in code reviews to maintain clean, readable, and maintainable code",
      "Helping ensure best practices in Flutter development were followed across the project",
    ],
    products: [
      "HSI Edu",
    ],
    achievements: [
      "Improved app stability by identifying and resolving critical bugs",
      "Maintained clean and maintainable codebase through active code reviews",
      "Ensured Flutter best practices adoption across the project",
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
      "Developed and maintained mobile applications across multiple platforms (React Native & Android Native/Kotlin) to support agricultural field operations, merchant transactions, and smart farming automation.",
      "Built user-centric features tailored to the specific needs of each user segment — from field workers managing daily operations to merchants handling products, orders, and customer interactions.",
      "Implemented IoT integration and real-time monitoring features to support smart agriculture technology through mobile application.",
      "Enhanced app performance, stability, and user experience by actively identifying and resolving development and production issues across projects.",
      "Maintained high code quality through active participation in code reviews and testing efforts, ensuring adherence to best practices and coding standards.",
      "Collaborated with designers, backend developers, and QA teams throughout the development lifecycle to make sure smooth delivery of both functional and non-functional requirements.",
    ],
    products: [
      "Agree Field Assistant",
      "Agree Superapps",
      "Agree Merchant",
    ],
    achievements: [
      "Improved app performance & stability through reviews/testing",
      "Ensured smooth delivery via cross-team collaboration",
      "Supported digital adoption in agriculture & merchant services",
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
    location: "Bogor, Indonesia (Remote)",
    period: "Jun 2022 - Mar 2023",
    isCurrent: false,
    responsibilities: [
      "Developing and maintaining company and client websites using WordPress",
      "Customizing WordPress themes and plugins based on project requirements",
      "Building landing pages, company profiles, and product pages",
      "Integrating websites with additional features such as forms, maps, and data-driven systems",
      "Optimizing website performance, responsiveness, and basic SEO",
      "Handling routine maintenance including plugin updates, theme updates, and security patches",
    ],
    products: [
      "Website Glomaps",
    ],
    achievements: [
      "Delivered multiple client websites including landing pages and company profiles",
      "Improved website performance and SEO through optimization efforts",
      "Maintained website security and stability through routine updates and patches",
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
      "Led and facilitated hands-on practicum sessions for Data Structures and Algorithms, ensuring students mastered core concepts such as linked lists, trees, sorting, searching, and algorithm optimization techniques.",
      "Conducted practical labs for Introduction to Information Technology, bridging foundational IT theory with real-world applications to enhance student understanding.",
      "Collaborated closely with lecturers to design, prepare, and deliver engaging practicum materials that emphasize problem-solving skills and algorithmic thinking.",
      "Acted as a substitute instructor, confidently delivering both theoretical lessons and practical exercises, demonstrating strong communication skills and deep subject matter expertise.",
      "Provided one-on-one mentoring and support to students during practicum sessions, helping them debug code, optimize algorithms, and develop efficient data structure implementations.",
    ],
    achievements: [
      "Led practicum sessions covering core DSA concepts for students",
      "Designed engaging materials emphasizing problem-solving and algorithmic thinking",
      "Mentored students in debugging code and optimizing algorithm implementations",
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
