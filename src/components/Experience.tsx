/** 
 * Experience Section - Brooks Style
 * Left: Work Experience timeline
 * Right: Key Achievements per company
 */

import { useLanguage } from "@/context/LanguageContext";

const workExperienceEN = [
  {
    id: 1,
    title: "Mobile Engineer",
    company: "Fortress Digital Services",
    type: "Full Time",
    period: "January 2024 – Present",
  },
  {
    id: 2,
    title: "Flutter Developer",
    company: "Yayasan HSI AbdullahRoy",
    type: "Freelance",
    period: "July 2025 – April 2026",
  },
  {
    id: 3,
    title: "Mobile Developer",
    company: "Agree - Telkom Indonesia",
    type: "Internship",
    period: "January 2023 – December 2023",
  },
  {
    id: 4,
    title: "WordPress Developer",
    company: "PT. Global Mapping Studio",
    type: "Freelance",
    period: "June 2022 – March 2023",
  },
  {
    id: 5,
    title: "Teaching Assistant – DSA",
    company: "Universitas Pendidikan Indonesia",
    type: "Part Time",
    period: "February 2022 – May 2022",
  },
];

const workExperienceID = [
  {
    id: 1,
    title: "Mobile Engineer",
    company: "Fortress Digital Services",
    type: "Penuh Waktu",
    period: "Januari 2024 – Sekarang",
  },
  {
    id: 2,
    title: "Flutter Developer",
    company: "Yayasan HSI AbdullahRoy",
    type: "Freelance",
    period: "Juli 2025 – April 2026",
  },
  {
    id: 3,
    title: "Mobile Developer",
    company: "Agree - Telkom Indonesia",
    type: "Magang",
    period: "Januari 2023 – Desember 2023",
  },
  {
    id: 4,
    title: "WordPress Developer",
    company: "PT. Global Mapping Studio",
    type: "Freelance",
    period: "Juni 2022 – Maret 2023",
  },
  {
    id: 5,
    title: "Asisten Praktikum – DSA",
    company: "Universitas Pendidikan Indonesia",
    type: "Paruh Waktu",
    period: "Februari 2022 – Mei 2022",
  },
];

const companyHighlightsEN = [
  "Mobile Engineer who delivers secure, production-grade banking and payment features (BI-Fast, Virtual Accounts, e-Wallets, and GoPay/DANA/OVO/QRIS integrations) for 30k+ users across Flutter, Kotlin, and Swift, backed by Clean Architecture, 90% unit test coverage, SonarQube quality gates, MobSF-driven security remediation, and automated GitLab CI/CD releases.",
  "Flutter Engineer who refactored core modules of an Islamic education app to eliminate memory leaks and run smoothly on low-end devices, built a secure donation engine with Midtrans and Xendit (real-time webhook updates, live campaign progress tracking), and led code reviews and API/design-system alignment with backend and product teams to keep the codebase clean and scalable.",
  "Mobile Engineer who architected and deployed multi-role agritech apps on React Native and Android Native for Telkom's agricultural ecosystem, delivering real-time IoT sensor monitoring (MQTT), offline-first data sync for field workers in low-connectivity areas, and end-to-end supply chain tools (order tracking, inventory, digital invoicing) for farmers and B2B merchants.",
  "Web Developer who built custom WordPress themes and plugins (PHP, JavaScript, MySQL) with responsive interfaces and tailored business logic for corporate clients, while keeping sites fast, secure, and consistently online through caching, database query tuning, and routine vulnerability patching.",
  "Teaching Assistant who guided 60+ students through core data structures and algorithms (Linked Lists, Trees, Graphs, Sorting, Big-O analysis) in C++ and Java, mentoring them in debugging and logic optimization through 20+ self-designed algorithmic problem sets that built strong computer science fundamentals.",
];

const companyHighlightsID = [
  "Mobile Engineer yang menghadirkan fitur perbankan dan pembayaran production-grade yang aman (BI-Fast, Virtual Account, e-Wallet, dan integrasi GoPay/DANA/OVO/QRIS) untuk 30k+ pengguna di Flutter, Kotlin, dan Swift, didukung Clean Architecture, 90% unit test coverage, SonarQube quality gates, remediasi keamanan berbasis MobSF, dan rilis otomatis GitLab CI/CD.",
  "Flutter Engineer yang melakukan refactor modul inti aplikasi edukasi Islam untuk menghilangkan memory leak dan berjalan lancar di perangkat low-end, membangun engine donasi aman dengan Midtrans dan Xendit (update webhook real-time, tracking progres kampanye live), serta memimpin code review dan penyelarasan API/design-system dengan tim backend dan product untuk menjaga codebase tetap bersih dan scalable.",
  "Mobile Engineer yang merancang dan men-deploy aplikasi agritech multi-role di React Native dan Android Native untuk ekosistem pertanian Telkom, menghadirkan monitoring sensor IoT real-time (MQTT), sinkronisasi data offline-first untuk pekerja lapangan di area konektivitas rendah, dan tools supply chain end-to-end (pelacakan order, inventaris, invoicing digital) untuk petani dan merchant B2B.",
  "Web Developer yang membangun tema dan plugin WordPress custom (PHP, JavaScript, MySQL) dengan antarmuka responsif dan logika bisnis khusus untuk klien korporat, sambil menjaga situs tetap cepat, aman, dan selalu online melalui caching, tuning query database, dan patching kerentanan rutin.",
  "Asisten Praktikum yang membimbing 60+ mahasiswa melalui struktur data dan algoritma inti (Linked List, Tree, Graph, Sorting, analisis Big-O) dalam C++ dan Java, membimbing mereka dalam debugging dan optimasi logika melalui 20+ set soal algoritmik yang dirancang sendiri untuk membangun fondasi ilmu komputer yang kuat.",
];

const Experience = () => {
  const { t, language } = useLanguage();
  const workExperience = language === "EN" ? workExperienceEN : workExperienceID;
  const companyHighlights = language === "EN" ? companyHighlightsEN : companyHighlightsID;

  return (
    <section 
      id="experience" 
      className="section-gap border-t border-border" 
      aria-labelledby="exp-heading"
    >
      <div className="site-wrap">
        {/* Section Headers */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-8">
          <p
            className="section-label"
            id="exp-heading"
            data-reveal="fade-up"
          >
            {t.experience.title}
          </p>
          <p
            className="section-label hidden lg:block"
            data-reveal="fade-up"
            data-reveal-delay="0.1"
          >
            {language === "EN" ? "Key Achievements" : "Pencapaian Utama"}
          </p>
        </div>

        {/* Experience rows - each row has experience left, achievement right */}
        <div data-reveal-group>
          {workExperience.map((exp, i) => (
            <div 
              key={exp.id}
              className="grid lg:grid-cols-2 gap-8 lg:gap-24 border-t border-border py-6"
              data-reveal-item
            >
              {/* Left: Experience */}
              <article className="group">
                <h3 className="exp-title group-hover:text-foreground/80 transition-colors">
                  {exp.title} {language === "EN" ? "at" : "di"} {exp.company}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="exp-type">{exp.type}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <time className="exp-period">{exp.period}</time>
                </div>
              </article>

              {/* Right: Key Achievement */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {companyHighlights[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
