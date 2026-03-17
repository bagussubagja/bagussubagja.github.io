export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  category: string;
  features: string[];
  techStack: string[];
  includes: string[];
  demoUrl?: string;
  purchaseUrl?: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "company-profile-starter",
    title: "Company Profile Starter",
    shortDescription: "Modern company profile website template with smooth animations",
    description: "A beautifully designed company profile template built for startups and SMEs. Features modern animations, responsive design, and easy customization. Perfect for establishing your online presence quickly and professionally.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    price: "$49",
    originalPrice: "$89",
    category: "Web Template",
    features: [
      "Fully responsive design for all devices",
      "Smooth scroll animations with Framer Motion",
      "SEO optimized with meta tags",
      "Contact form with validation",
      "Direct WhatsApp integration",
      "Light & Dark mode support"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    includes: [
      "Complete source code",
      "Setup documentation",
      "1 year free updates",
      "Email support"
    ],
    demoUrl: "https://demo.example.com",
    purchaseUrl: "#",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller"
  },
  {
    id: "react-native-auth-kit",
    title: "React Native Auth Kit",
    shortDescription: "Complete authentication library for React Native applications",
    description: "An all-in-one authentication solution for your React Native apps. Supports email login, social login (Google, Apple, Facebook), biometric authentication, and JWT token management. Save up to 80% of development time.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop",
    price: "$79",
    originalPrice: "$149",
    category: "Mobile Plugin",
    features: [
      "Email & password authentication",
      "Social login (Google, Apple, Facebook)",
      "Biometric authentication (Face ID, Touch ID)",
      "JWT token auto-refresh",
      "Secure storage integration",
      "Full TypeScript support"
    ],
    techStack: ["React Native", "TypeScript", "Expo", "AsyncStorage"],
    includes: [
      "NPM package",
      "Example project",
      "API documentation",
      "Discord community access"
    ],
    demoUrl: "https://expo.dev/@demo/auth-kit",
    purchaseUrl: "#",
    rating: 4.9,
    reviews: 89,
    badge: "New"
  },
  {
    id: "admin-dashboard-pro",
    title: "Admin Dashboard Pro",
    shortDescription: "Professional admin dashboard with analytics and data visualization",
    description: "A comprehensive admin dashboard featuring analytics, user management, and data visualization. Built for high performance with a modern UI. Ideal for SaaS, e-commerce, or enterprise applications.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    price: "$129",
    originalPrice: "$249",
    category: "Web Template",
    features: [
      "20+ ready-to-use pages",
      "Charts & data visualization",
      "User role management",
      "Real-time notifications",
      "Export data to Excel/PDF",
      "API integration ready"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "TanStack Table"],
    includes: [
      "Complete source code",
      "Figma design file",
      "Backend API template",
      "Video setup tutorial"
    ],
    demoUrl: "https://demo.example.com/admin",
    purchaseUrl: "#",
    rating: 4.7,
    reviews: 203
  },
  {
    id: "flutter-payment-gateway",
    title: "Flutter Payment Gateway",
    shortDescription: "Payment gateway integration for Flutter applications",
    description: "A Flutter plugin for integrating popular payment gateways (Stripe, PayPal, Square). Supports various payment methods: credit cards, digital wallets, and bank transfers. Complete documentation with implementation examples.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    price: "$59",
    category: "Mobile Plugin",
    features: [
      "Stripe, PayPal, Square support",
      "Credit/debit card payments",
      "Digital wallets (Apple Pay, Google Pay)",
      "Bank transfers",
      "Subscription billing",
      "Webhook handling"
    ],
    techStack: ["Flutter", "Dart", "REST API"],
    includes: [
      "Flutter package",
      "Backend webhook template",
      "Integration guide",
      "6 months email support"
    ],
    purchaseUrl: "#",
    rating: 4.6,
    reviews: 67
  },
  {
    id: "landing-page-collection",
    title: "Landing Page Collection",
    shortDescription: "Collection of 15+ landing page templates for various industries",
    description: "A comprehensive collection of landing page templates designed for high conversion. Covers various industries: SaaS, agency, restaurant, real estate, and more. Each template is optimized for SEO and performance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    price: "$89",
    originalPrice: "$179",
    category: "Web Template",
    features: [
      "15+ landing page templates",
      "Conversion-optimized design",
      "A/B testing ready",
      "Analytics integration",
      "Form handling",
      "Speed optimized (90+ Lighthouse)"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel Analytics"],
    includes: [
      "All source code",
      "Figma design files",
      "Copywriting templates",
      "Lifetime updates"
    ],
    demoUrl: "https://demo.example.com/landing",
    purchaseUrl: "#",
    rating: 4.8,
    reviews: 156,
    badge: "Popular"
  },
  {
    id: "api-boilerplate-nodejs",
    title: "Node.js API Boilerplate",
    shortDescription: "API starter template with authentication, database, and documentation",
    description: "A production-ready backend API boilerplate. Includes authentication system, database integration, rate limiting, logging, and Swagger documentation. Clean architecture that scales easily.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    price: "$45",
    category: "Backend Template",
    features: [
      "JWT authentication",
      "PostgreSQL + Prisma ORM",
      "Rate limiting & security",
      "Swagger API docs",
      "Docker ready",
      "Unit & integration tests"
    ],
    techStack: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL"],
    includes: [
      "Source code",
      "Docker compose",
      "CI/CD pipeline",
      "Architecture documentation"
    ],
    demoUrl: "https://api.example.com/docs",
    purchaseUrl: "#",
    rating: 4.5,
    reviews: 92
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductCategories = (): string[] => {
  return [...new Set(products.map((product) => product.category))];
};
