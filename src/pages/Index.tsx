import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import DigitalProducts from "@/components/DigitalProducts";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import PromoToast from "@/components/PromoToast";
import { featureFlags } from "@/data/personal";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Bagus - Mobile Engineer | Personal Portfolio</title>
        <meta 
          name="description" 
          content="Mobile Engineer focused on building secure, high-performance apps. Expert in Flutter, Android, IOS, and cross-platform mobile development. Available for new opportunities." 
        />
        <meta name="keywords" content="Mobile Engineer, Flutter Developer, Android Developer, IOS Developer, Mobile App Development, Cross-Platform Development" />
        <meta property="og:title" content=">Bagus - Mobile Engineer | Personal Portfolio" />
        <meta property="og:description" content="Mobile Engineer focused on building secure, high-performance apps with Flutter, Android and IOS Native." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen animated-gradient">
        <Navigation />
        <PromoToast />
        
        <main>
          <Hero />
          {featureFlags.showProjects && <Projects />}
          {featureFlags.showDigitalProducts && <DigitalProducts />}
          {featureFlags.showExperience && <Experience />}
          {featureFlags.showTestimonials && <Testimonials />}
        </main>

        <Footer />

        {/* Ambient glow effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>
      </div>
    </>
  );
};

export default Index;
