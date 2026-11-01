import { Monitor, Building2, FileText, Palette, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getMailtoLink = (subject: string, body: string) => {
  const email = "bagussubagja17@gmail.com";
  return `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      id: "mobile-development",
      icon: <Monitor className="w-5 h-5" />,
      title: t.services.mobile.title,
      description: t.services.mobile.description,
      emailSubject: language === "EN" ? "Mobile App Development Inquiry" : "Pertanyaan Pengembangan Aplikasi Mobile",
      emailBody: language === "EN" 
        ? `Hi Bagus,

I'm interested in your Mobile App Development services.

Project Overview:
- App Type: [iOS / Android / Both]
- Brief Description: [Describe your app idea]
- Target Users: [Who will use this app?]
- Timeline: [When do you need it?]
- Budget Range: [Your budget estimate]

Looking forward to hearing from you!

Best regards,
[Your Name]`
        : `Halo Bagus,

Saya tertarik dengan layanan Pengembangan Aplikasi Mobile Anda.

Ringkasan Proyek:
- Tipe Aplikasi: [iOS / Android / Keduanya]
- Deskripsi Singkat: [Jelaskan ide aplikasi Anda]
- Target Pengguna: [Siapa yang akan menggunakan aplikasi ini?]
- Timeline: [Kapan Anda membutuhkannya?]
- Estimasi Budget: [Perkiraan budget Anda]

Terima kasih!

Salam,
[Nama Anda]`,
    },
    {
      id: "web-development",
      icon: <Building2 className="w-5 h-5" />,
      title: t.services.web.title,
      description: t.services.web.description,
      emailSubject: language === "EN" ? "Web Development Inquiry" : "Pertanyaan Pengembangan Web",
      emailBody: language === "EN"
        ? `Hi Bagus,

I'm interested in your Web Development services.

Project Overview:
- Website Type: [Landing Page / Company Website / Web App / E-commerce]
- Brief Description: [What do you want the website to do?]
- Reference Sites: [Any websites you like?]
- Timeline: [When do you need it?]
- Budget Range: [Your budget estimate]

Looking forward to hearing from you!

Best regards,
[Your Name]`
        : `Halo Bagus,

Saya tertarik dengan layanan Pengembangan Web Anda.

Ringkasan Proyek:
- Tipe Website: [Landing Page / Website Perusahaan / Web App / E-commerce]
- Deskripsi Singkat: [Apa yang Anda inginkan dari website ini?]
- Referensi Website: [Website yang Anda suka?]
- Timeline: [Kapan Anda membutuhkannya?]
- Estimasi Budget: [Perkiraan budget Anda]

Terima kasih!

Salam,
[Nama Anda]`,
    },
    {
      id: "api-integration",
      icon: <FileText className="w-5 h-5" />,
      title: t.services.api.title,
      description: t.services.api.description,
      emailSubject: language === "EN" ? "API & System Integration Inquiry" : "Pertanyaan Integrasi API & Sistem",
      emailBody: language === "EN"
        ? `Hi Bagus,

I'm interested in your API & System Integration services.

Project Overview:
- Integration Type: [Payment Gateway / Data Sync / Automation / Other]
- Systems Involved: [What systems need to be connected?]
- Brief Description: [What problem are you trying to solve?]
- Timeline: [When do you need it?]
- Budget Range: [Your budget estimate]

Looking forward to hearing from you!

Best regards,
[Your Name]`
        : `Halo Bagus,

Saya tertarik dengan layanan Integrasi API & Sistem Anda.

Ringkasan Proyek:
- Tipe Integrasi: [Payment Gateway / Sinkronisasi Data / Otomasi / Lainnya]
- Sistem yang Terlibat: [Sistem apa yang perlu dihubungkan?]
- Deskripsi Singkat: [Masalah apa yang ingin Anda selesaikan?]
- Timeline: [Kapan Anda membutuhkannya?]
- Estimasi Budget: [Perkiraan budget Anda]

Terima kasih!

Salam,
[Nama Anda]`,
    },
    {
      id: "consulting",
      icon: <Palette className="w-5 h-5" />,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      emailSubject: language === "EN" ? "IT Consulting Inquiry" : "Pertanyaan Konsultasi IT",
      emailBody: language === "EN"
        ? `Hi Bagus,

I'm interested in your IT Consulting services.

Project Overview:
- Consultation Type: [Architecture Planning / Code Review / Security Audit / General Advice]
- Current Situation: [Describe your current setup or challenge]
- Goals: [What do you want to achieve?]
- Timeline: [When do you need the consultation?]
- Budget Range: [Your budget estimate]

Looking forward to hearing from you!

Best regards,
[Your Name]`
        : `Halo Bagus,

Saya tertarik dengan layanan Konsultasi IT Anda.

Ringkasan Proyek:
- Tipe Konsultasi: [Perencanaan Arsitektur / Code Review / Audit Keamanan / Saran Umum]
- Kondisi Saat Ini: [Jelaskan setup atau tantangan Anda saat ini]
- Tujuan: [Apa yang ingin Anda capai?]
- Timeline: [Kapan Anda membutuhkan konsultasi?]
- Estimasi Budget: [Perkiraan budget Anda]

Terima kasih!

Salam,
[Nama Anda]`,
    },
  ];

  return (
    <section
      id="services"
      className="section-gap"
      aria-labelledby="services-heading"
    >
      <div className="site-wrap">
        {/* Header */}
        <div className="mb-16">
          <h2
            id="services-heading"
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1] text-foreground uppercase"
            data-reveal="blur-in"
          >
            {t.services.title}
          </h2>
        </div>

        {/* Services List - each row has title left + description right */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid lg:grid-cols-2 gap-x-16 border-t border-border py-5 group"
              data-reveal="fade-up"
              data-reveal-delay={String(0.05 * index)}
            >
              {/* Left: Icon + Title */}
              <div className="flex items-center gap-4">
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="service-title">{service.title}</h3>
              </div>

              {/* Right: Description + Email Button */}
              <div className="flex items-start justify-between gap-4 mt-4 lg:mt-0">
                <p className="service-description">{service.description}</p>
                <a 
                  href={getMailtoLink(service.emailSubject, service.emailBody)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-arrow hover:bg-foreground hover:text-background"
                  aria-label={`Email about ${service.title}`}
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
          {/* Bottom border for last item */}
          <div className="border-t border-border"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
