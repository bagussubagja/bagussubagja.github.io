import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { seoConfig } from "@/data/personal";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{seoConfig.home.title}</title>
        <meta name="description" content={seoConfig.home.description} />
        <meta name="keywords" content={seoConfig.home.keywords} />
        <meta property="og:title" content={seoConfig.home.title} />
        <meta property="og:description" content={seoConfig.home.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main>
          {/* 1. Hero */}
          <Hero />

          {/* 2. Working Experience + Achievements */}
          <Experience />

          {/* 3. Selected works */}
          <Projects />

          {/* 4. Services */}
          <Services />

          {/* 5. Single testimonial pull-quote */}
          <Testimonials />

          {/* 6. CTA */}
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
