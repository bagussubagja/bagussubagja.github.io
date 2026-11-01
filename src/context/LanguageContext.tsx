import { createContext, useContext, useState, ReactNode } from "react";

type Language = "EN" | "ID";

interface Translations {
  nav: {
    home: string;
    services: string;
    works: string;
    about: string;
  };
  hero: {
    greeting: string;
    role: string;
    location: string;
    description: string;
    talkWithMe: string;
    seeMyWork: string;
    availableBadge: string;
  };
  experience: {
    title: string;
    highlights: string;
  };
  services: {
    title: string;
    seeMyWork: string;
    mobile: {
      title: string;
      description: string;
    };
    web: {
      title: string;
      description: string;
    };
    api: {
      title: string;
      description: string;
    };
    consulting: {
      title: string;
      description: string;
    };
  };
  projects: {
    title: string;
    viewProject: string;
  };
  testimonials: {
    title: string;
  };
  cta: {
    label: string;
    title: string;
    available: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    connect: string;
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  EN: {
    nav: {
      home: "Home",
      services: "Services",
      works: "Works",
      about: "About me",
    },
    hero: {
      greeting: "Hello! I'm",
      role: "Mobile Engineer",
      location: "based in Bandung, Indonesia.",
      description: "3+ years building Flutter, Android & iOS apps across fintech, agriculture, edutech. Delivering production features for 30K+ users.",
      talkWithMe: "Talk with me",
      seeMyWork: "See my work",
      availableBadge: "Available to work remote/relocate",
    },
    experience: {
      title: "Experience",
      highlights: "Key Highlights",
    },
    services: {
      title: "Services",
      seeMyWork: "See my work",
      mobile: {
        title: "Mobile App Development",
        description: "Turn your ideas into apps that people love to use. Whether it's for your business, customers, or internal team - I build apps that work smoothly on both iPhone and Android.",
      },
      web: {
        title: "Web Development",
        description: "Need a website that looks professional and loads fast? From simple landing pages to complex web apps, I create sites that help you reach more customers online.",
      },
      api: {
        title: "API & System Integration",
        description: "Connect your apps with payment systems, sync data between platforms, or automate workflows. I help different systems talk to each other seamlessly.",
      },
      consulting: {
        title: "IT Consulting & Solutions",
        description: "Not sure where to start with your tech project? I can help you plan, review existing systems, and find the right solutions for your business needs.",
      },
    },
    projects: {
      title: "Selected Works",
      viewProject: "View Project",
    },
    testimonials: {
      title: "What People Say",
    },
    cta: {
      label: "Have a project in mind?",
      title: "Let's talk with me",
      available: "Available to work remote/relocate",
    },
    footer: {
      tagline: "Building digital experiences that matter.",
      navigation: "Navigation",
      connect: "Connect",
      copyright: "All rights reserved.",
    },
  },
  ID: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      works: "Karya",
      about: "Tentang",
    },
    hero: {
      greeting: "Halo! Saya",
      role: "Mobile Engineer",
      location: "berbasis di Bandung, Indonesia.",
      description: "3+ tahun membangun aplikasi Flutter, Android & iOS di bidang fintech, pertanian, dan edutech. Menghadirkan fitur produksi untuk 30K+ pengguna.",
      talkWithMe: "Hubungi saya",
      seeMyWork: "Lihat karya",
      availableBadge: "Tersedia untuk remote/relokasi",
    },
    experience: {
      title: "Pengalaman",
      highlights: "Pencapaian Utama",
    },
    services: {
      title: "Layanan",
      seeMyWork: "Lihat karya",
      mobile: {
        title: "Pengembangan Aplikasi Mobile",
        description: "Wujudkan ide Anda menjadi aplikasi yang disukai pengguna. Baik untuk bisnis, pelanggan, atau tim internal - saya membangun aplikasi yang berjalan lancar di iPhone dan Android.",
      },
      web: {
        title: "Pengembangan Web",
        description: "Butuh website yang profesional dan cepat? Dari landing page sederhana hingga web app kompleks, saya membuat situs yang membantu Anda menjangkau lebih banyak pelanggan.",
      },
      api: {
        title: "Integrasi API & Sistem",
        description: "Hubungkan aplikasi dengan sistem pembayaran, sinkronkan data antar platform, atau otomatisasi alur kerja. Saya membantu berbagai sistem berkomunikasi dengan mulus.",
      },
      consulting: {
        title: "Konsultasi & Solusi IT",
        description: "Bingung memulai proyek teknologi? Saya bisa membantu perencanaan, review sistem yang ada, dan menemukan solusi tepat untuk kebutuhan bisnis Anda.",
      },
    },
    projects: {
      title: "Karya Pilihan",
      viewProject: "Lihat Proyek",
    },
    testimonials: {
      title: "Apa Kata Mereka",
    },
    cta: {
      label: "Punya proyek?",
      title: "Mari berbicara",
      available: "Tersedia untuk remote/relokasi",
    },
    footer: {
      tagline: "Membangun pengalaman digital yang bermakna.",
      navigation: "Navigasi",
      connect: "Terhubung",
      copyright: "Hak cipta dilindungi.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("EN");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
