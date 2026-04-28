import pdsbMb from "@/assets/portfolio/pdsb-mb.png";
import sultraMb from "@/assets/portfolio/sultra-mb.png";
import mebMb from "@/assets/portfolio/meb-mb.png";
import pacCash from "@/assets/portfolio/pac-cash.png";
import pdsbMerchant from "@/assets/portfolio/pdsb-merchant.jpg";
import sultraMerchant from "@/assets/portfolio/sultra-merchant.png";
import pdsbToken from "@/assets/portfolio/pdsb-token.png";
import hsiEdu from "@/assets/portfolio/hsi-edu.png";
import agreeFieldAssistant from "@/assets/portfolio/agree-field-assistant.png";
import agreeSuperapps from "@/assets/portfolio/agree-superapps.png";
import agreeMerchant from "@/assets/portfolio/agree-merchant.png";
import glomapsIndo from "@/assets/portfolio/glomaps-indo.png";
import livenessImg from "@/assets/portfolio/liveness-mobile.png";
import muslimPocketImg from "@/assets/portfolio/muslim-pocket.png";
import travelkuyImg from "@/assets/portfolio/travelkuy.jpg";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  featured: boolean;
  category: string;
  technologies: string[];
  features: string[];
  links: ProjectLink[];
  company?: string;
  duration: string;
  role: string;
  year: string;
}

export const projects: Project[] = [
  // Fortress Digital Service
  {
    id: "pdsb-mobile-banking",
    title: "PDSB Mobile Banking",
    shortDescription: "Mobile banking app by PT Bank Panin Dubai Syariah for online and realtime sharia banking transactions.",
    description: "PDSB Mobile by PT Bank Panin Dubai Syariah delivers convenience, ease, and security for conducting online and realtime banking transactions right from your smartphone. Enjoy seamless banking at your fingertips.",
    image: pdsbMb,
    featured: true,
    category: "Mobile Banking",
    technologies: ["Flutter", "Dart", "BLoC", "REST API", "Firebase", "SQLite", "Dio", "Secure Storage"],
    features: [
      "Online & realtime banking transactions",
      "Transfer (Overbook, Online, BI-Fast)",
      "Bill payments & purchases",
      "Biometric authentication & device security",
      "E-wallet integration (GoPay, Dana, OVO)",
      "QRIS payment support",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/id/app/pdsb-mobile-banking/id6447231714" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pactindo.mb.pdsb" },
    ],
    company: "Fortress Digital Service",
    duration: "Ongoing",
    role: "Mobile Developer",
    year: "2024",
  },
  {
    id: "sultra-mobile-banking",
    title: "Sultra Mobile Banking",
    shortDescription: "Bank Sultra's mobile banking service for fast, easy, and secure transactions directly from your smartphone.",
    description: "Mobile Banking Bank Sultra is a banking service that allows you to transact directly from your smartphone — securely, easily, and quickly. It provides balance inquiries, fund transfers, phone bill payments, PLN electricity payments, mobile top-ups, and more.",
    image: sultraMb,
    featured: true,
    category: "Mobile Banking",
    technologies: ["Flutter", "Dart", "BLoC", "REST API", "Firebase", "SQLite", "Dio", "Secure Storage"],
    features: [
      "Balance inquiry & account information",
      "Fund transfer between banks",
      "Phone & PLN bill payments",
      "Mobile top-up purchases",
      "Biometric authentication",
      "QRIS payment support",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/id/app/mobile-banking-bank-sultra/id1543325057" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=id.co.banksultra.mobilebanking" },
    ],
    company: "Fortress Digital Service",
    duration: "Ongoing",
    role: "Mobile Developer",
    year: "2024",
  },
  {
    id: "maspion-electronic-banking",
    title: "Maspion Electronic Banking (MEB)",
    shortDescription: "Bank Maspion's mobile banking app with comprehensive digital banking services in one application.",
    description: "MEB (Maspion Electronic Banking) is a mobile banking app by Bank Maspion that provides complete digital banking services — from balance inquiries, inter-bank transfers, bill payments, to mobile top-ups — all in one secure and user-friendly application.",
    image: mebMb,
    featured: false,
    category: "Mobile Banking",
    technologies: ["Flutter", "Dart", "BLoC", "REST API", "Firebase", "SQLite", "Dio", "Secure Storage"],
    features: [
      "Complete digital banking services",
      "Inter-bank fund transfers",
      "Bill payments & mobile top-up",
      "Balance & transaction history",
      "Secure authentication system",
      "User-friendly interface",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/id/app/meb/id6450219969" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pactindo.revamp.bmi" },
    ],
    company: "Fortress Digital Service",
    duration: "Ongoing",
    role: "Mobile Developer",
    year: "2024",
  },
  {
    id: "pac-cash",
    title: "PAC Cash",
    shortDescription: "E-money application for fast and secure digital transactions including top-up, payments, and transfers.",
    description: "PAC Cash is an e-money application that enables users to perform various digital transactions such as top-up, payments, and transfers quickly and securely. Available on both Android and iOS platforms with an optimized native experience on each.",
    image: pacCash,
    featured: false,
    category: "Fintech",
    technologies: ["Android", "Java", "iOS", "Swift", "Storyboard", "REST API", "SQLite", "Firebase"],
    features: [
      "E-money top-up & balance management",
      "Digital payments & transfers",
      "Native Android (Java) & iOS (Swift) apps",
      "Secure transaction processing",
      "Transaction history & receipts",
      "QR code payment support",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/id/app/pac-cash/id1516408924" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pactindo.emoney" },
    ],
    company: "Fortress Digital Service",
    duration: "Ongoing",
    role: "Mobile Developer",
    year: "2024",
  },
  {
    id: "pdsb-mobile-approval",
    title: "PDSB Mobile Approval",
    shortDescription: "Mobile security app with dynamic OTP technology for extra protection on sharia banking transactions.",
    description: "PDSB Mobile Token is a mobile-based security application designed to provide extra protection for every sharia banking transaction. Using dynamic One-Time Password (OTP) technology, this app ensures that every transaction you make is safe and secure.",
    image: pdsbToken,
    featured: false,
    category: "Mobile Banking",
    technologies: ["Flutter", "Dart", "BLoC", "OTP", "Biometric Auth", "Secure Storage", "REST API"],
    features: [
      "Dynamic One-Time Password (OTP) generation",
      "Biometric authentication support",
      "Secure transaction approval workflow",
      "Real-time push notification alerts",
      "Device binding for extra security",
      "Seamless integration with PDSB Mobile Banking",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/id/app/pdsb-mobile-token/id6471043740" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=id.com.pdsb.mobileibb" },
    ],
    company: "Fortress Digital Service",
    duration: "Ongoing",
    role: "Mobile Developer",
    year: "2024",
  },
  {
    id: "sultra-mobile-merchant",
    title: "Sultra Mobile Merchant",
    shortDescription: "Bank Sultra's merchant app for real-time business transaction monitoring anytime, anywhere.",
    description: "Sultra Merchant is a mobile application by Bank Sultra designed to help business partners monitor and control their transactions in real time, accessible anytime and anywhere.",
    image: sultraMerchant,
    featured: false,
    category: "Merchant",
    technologies: ["Android", "Java", "QRIS", "REST API", "SQLite", "Firebase"],
    features: [
      "Real-time transaction monitoring",
      "QRIS payment acceptance",
      "Transaction history & reporting",
      "Merchant dashboard & analytics",
      "Push notification for transactions",
      "Accessible anytime, anywhere",
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dwidasa.sultra.mbqris.android" },
    ],
    company: "Fortress Digital Service",
    duration: "Ongoing",
    role: "Mobile Developer",
    year: "2024",
  },
  {
    id: "pdsb-mobile-merchant",
    title: "PDSB Mobile Merchant",
    shortDescription: "Bank Panin Dubai Syariah's merchant app for accepting digital payments and managing business transactions.",
    description: "PDSB Mobile Merchant is a merchant application by Bank Panin Dubai Syariah that enables business partners to accept digital payments, monitor transactions in real-time, and manage business activities easily from their smartphone.",
    image: pdsbMerchant,
    featured: false,
    category: "Merchant",
    technologies: ["Flutter", "Dart", "GetX", "REST API", "QRIS", "Firebase", "Secure Storage"],
    features: [
      "Digital payment acceptance",
      "Real-time transaction monitoring",
      "QRIS integration",
      "Business activity management",
      "Transaction reports & analytics",
      "Secure merchant authentication",
    ],
    links: [],
    company: "Fortress Digital Service",
    duration: "Ongoing",
    role: "Mobile Developer",
    year: "2024",
  },

  // Yayasan HSI AbdullahRoy
  {
    id: "hsi-edu",
    title: "HSI Edu",
    shortDescription: "Learning app for HSI AbdullahRoy participants with donation feature integrated with payment gateway.",
    description: "HSI EDU provides convenience for HSI AbdullahRoy participants to join learning sessions in the HSI AbdullahRoy Study Group. Equipped with a donation feature integrated with a payment gateway to support foundation events and activities.",
    image: hsiEdu,
    featured: true,
    category: "Education",
    technologies: ["Flutter", "Dart", "BLoC", "REST API", "Firebase", "Payment Gateway", "Clean Architecture"],
    features: [
      "Online learning platform for HSI participants",
      "Group-based learning system",
      "Donation feature with payment gateway integration",
      "Event & fundraising management",
      "Clean architecture implementation",
      "Cross-platform (Android & iOS)",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/id/app/edu-hsi/id6738020139" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=id.hsi.edu" },
    ],
    company: "Yayasan HSI AbdullahRoy",
    duration: "Ongoing",
    role: "Flutter Developer",
    year: "2025",
  },

  // Telkom Indonesia
  {
    id: "agree-field-assistant",
    title: "Agree Field Assistant",
    shortDescription: "Field companion app for Agree Partner members to support agricultural field operations.",
    description: "Agree Field Assistant is part of Agree Partner. This application is designed for field workers who have partnered with Agree to manage and monitor agricultural field operations efficiently. This application is not open to the public, but only for users who have worked with Agree Partners.",
    image: agreeFieldAssistant,
    featured: false,
    category: "Agriculture",
    technologies: ["React Native", "Redux", "JavaScript", "REST API", "Firebase", "Google Maps", "Push Notifications"],
    features: [
      "Field operation management & monitoring",
      "GPS-based location tracking",
      "Data collection & reporting tools",
      "Real-time sync with Agree platform",
      "Offline mode support",
      "Push notification alerts",
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.agree.surveyor" },
    ],
    company: "Telkom Indonesia",
    duration: "11 months",
    role: "Mobile Developer",
    year: "2023",
  },
  {
    id: "agree-superapps",
    title: "Agree Superapps",
    shortDescription: "Large-scale application for monitoring cultivation processes in agriculture, fisheries, and livestock sectors.",
    description: "Agree is a large-scale application that functions to monitor the cultivation process in the agriculture, fisheries, livestock and integrated farming sectors. Providing comprehensive tools for farmers and stakeholders to manage their operations effectively.",
    image: agreeSuperapps,
    featured: false,
    category: "Agriculture",
    technologies: ["Kotlin", "Android", "MVVM", "Retrofit", "Room", "Firebase", "Google Maps", "IoT Integration", "Coroutines"],
    features: [
      "Cultivation process monitoring",
      "Agriculture, fisheries & livestock sectors",
      "IoT integration for smart farming",
      "Real-time data visualization",
      "Multi-stakeholder platform",
      "Comprehensive reporting & analytics",
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.agree.ecosystem" },
    ],
    company: "Telkom Indonesia",
    duration: "11 months",
    role: "Mobile Developer",
    year: "2023",
  },
  {
    id: "agree-merchant",
    title: "Agree Merchant",
    shortDescription: "Application for grocery sellers to grow their business easily and efficiently on the Agree Mart platform.",
    description: "Agree Merchant is an application that helps grocery sellers develop their business easily and efficiently on the Agree Mart platform. A loyal partner in managing products, orders, and customer interactions throughout the business journey.",
    image: agreeMerchant,
    featured: false,
    category: "Merchant",
    technologies: ["React Native", "Redux", "JavaScript", "REST API", "Firebase", "Push Notifications"],
    features: [
      "Product catalog management",
      "Order processing & tracking",
      "Customer interaction tools",
      "Sales reporting & analytics",
      "Push notification for new orders",
      "Integration with Agree Mart platform",
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.agree.mart.merchant" },
    ],
    company: "Telkom Indonesia",
    duration: "11 months",
    role: "Mobile Developer",
    year: "2023",
  },

  // PT. Global Mapping Studio Indonesia
  {
    id: "website-glomaps",
    title: "Website Glomaps",
    shortDescription: "Company profile website for PT. Global Mapping Studio Indonesia showcasing mapping and geospatial services.",
    description: "Company profile website for PT. Global Mapping Studio Indonesia, showcasing mapping, geospatial, and location-based data solutions. Built with WordPress for easy content management.",
    image: glomapsIndo,
    featured: false,
    category: "Web Development",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "SEO", "Elementor"],
    features: [
      "Company profile & service showcase",
      "Responsive design across devices",
      "SEO optimized content",
      "Contact form integration",
      "Google Maps integration",
      "Easy content management via WordPress",
    ],
    links: [],
    company: "PT. Global Mapping Studio Indonesia",
    duration: "9 months",
    role: "Junior WordPress Developer",
    year: "2022",
  },

  // Freelance
  {
    id: "flutter-liveness-detection",
    title: "Flutter Liveness Detection Plugin",
    shortDescription: "Flutter plugin for liveness detection with randomized challenge-response method for secure biometric authentication.",
    description: "A Flutter plugin for liveness detection with randomized challenge response method with an interaction mechanism between the user and the system in the form of a movement challenge that indicates life is detected on the face. This plugin helps implement secure biometric authentication by detecting real human presence through dynamic facial verification challenges.",
    image: livenessImg,
    featured: true,
    category: "Flutter Package",
    technologies: ["Flutter", "Dart", "ML Kit", "Face Detection", "Camera API", "Platform Channels"],
    features: [
      "Randomized facial movement challenges",
      "Real-time face detection using ML Kit",
      "Anti-spoofing protection against photo & video attacks",
      "Customizable challenge sequences and UI",
      "Cross-platform support (Android & iOS)",
      "Easy integration with existing Flutter projects",
    ],
    links: [
      { label: "pub.dev", url: "https://pub.dev/packages/flutter_liveness_detection_randomized_plugin" },
    ],
    duration: "Freelance",
    role: "Flutter Developer",
    year: "2024",
  },
  {
    id: "muslim-pocket-app",
    title: "Muslim Pocket",
    shortDescription: "Comprehensive Islamic app providing Al-Quran, prayers, hadiths, tafsir, and Islamic study videos.",
    description: "Muslim Pocket App is a mobile application that provides various needs of a Muslim in everyday life. Such as the features of the Al-Quran, a collection of prayers and hadiths, and interpretations of surahs (Tafsir) of the Al-Quran. In addition, users can search for Islamic study videos provided by Islamic YouTube channels in Indonesia, as well as various other features that can give you knowledge about Islam.",
    image: muslimPocketImg,
    featured: false,
    category: "Islamic App",
    technologies: ["Flutter", "Dart", "GetX", "REST API", "YouTube API", "Local Storage", "Google Fonts", "Cached Network Image"],
    features: [
      "Complete Al-Quran with Arabic text & translations",
      "Collection of daily prayers (doa) & hadiths",
      "Tafsir (interpretation) of Al-Quran surahs",
      "Islamic study videos from YouTube channels",
      "Bookmark & favorite surahs",
      "Clean and intuitive user interface",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/bagussubagja/muslim-pocket-app" },
    ],
    duration: "Freelance",
    role: "Flutter Developer",
    year: "2023",
  },
  {
    id: "travelkuy-app",
    title: "TravelKuy",
    shortDescription: "Travel app providing information about famous tourist destinations across Indonesia for your vacation plans.",
    description: "Travel Kuy App is an application that can provide you with information about famous tourist destinations in Indonesia. You can search for tourist destinations for your vacation plans. You can save tourist destinations that you will visit and save time for your vacation visits.",
    image: travelkuyImg,
    featured: false,
    category: "Travel",
    technologies: ["Flutter", "Dart", "Provider", "REST API", "Google Maps", "Local Storage", "Cached Network Image"],
    features: [
      "Browse famous tourist destinations across Indonesia",
      "Search & filter destinations by category",
      "Save favorite destinations for vacation plans",
      "Detailed destination info with images",
      "Offline access to saved destinations",
      "Smooth UI with Provider state management",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/bagussubagja/travel-kuy-app" },
    ],
    duration: "Freelance",
    role: "Flutter Developer",
    year: "2022",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectCategories = (): string[] => {
  return [...new Set(projects.map((p) => p.category))];
};
