import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.jpg";
import { seoConfig, personalInfo } from "@/data/personal";
import { aboutIntro, timeline, values } from "@/data/about";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const AboutMe = () => {
  return (
    <>
      <Helmet>
        <title>{seoConfig.about.title}</title>
        <meta name="description" content={seoConfig.about.description} />
      </Helmet>

      <div className="min-h-screen animated-gradient">
        <Navigation />

        <main className="pt-32 pb-24 px-4">
          <div className="container max-w-5xl mx-auto">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            {/* ===== Chapter 1: Hero Intro ===== */}
            <section className="mb-32">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
                <motion.div
                  className="relative mx-auto lg:mx-0"
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                >
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-125" />
                  <div className="relative glass-card p-3 rounded-3xl">
                    <img
                      src={profilePhoto}
                      alt={personalInfo.fullName}
                      className="w-72 h-96 object-cover rounded-2xl"
                    />
                  </div>
                  <motion.div
                    className="absolute -bottom-6 -right-6 glass-card px-4 py-2 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <span className="text-sm font-medium text-primary">📍 {personalInfo.location}</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideFromRight}
                  className="text-center lg:text-left"
                >
                  <motion.p
                    className="text-primary font-medium mb-2 tracking-wider uppercase text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {aboutIntro.chapterLabel}
                  </motion.p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {aboutIntro.headline} <span className="text-primary">{aboutIntro.highlightName}</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {aboutIntro.description}
                  </p>
                  <div className="glass-card p-5 rounded-2xl">
                    <p className="text-muted-foreground italic text-sm leading-relaxed">
                      {aboutIntro.quote}
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ===== Chapter 2: My Story Timeline ===== */}
            <section className="mb-32">
              <motion.div
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Chapter 02 — The Journey</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  My <span className="text-primary">Story</span>
                </h2>
              </motion.div>

              <div className="relative">
                <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                <div className="space-y-16">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-80px" }}
                      variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                    >
                      <motion.div
                        className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                      />

                      <div className={`ml-16 lg:ml-0 lg:w-[45%] ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                        <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.accent} rounded-full blur-2xl -translate-y-8 translate-x-8`} />
                          
                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-primary" />
                              </div>
                              <span className="text-xs font-semibold tracking-wider uppercase text-primary/70">{item.year}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== Chapter 3: What I Value ===== */}
            <section className="mb-32">
              <motion.div
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Chapter 03 — The Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  What I <span className="text-primary">Value</span>
                </h2>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                {values.map((value) => (
                  <motion.div
                    key={value.title}
                    className="glass-card p-6 rounded-2xl group"
                    variants={staggerItem}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-foreground">{value.title}</h3>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* ===== Closing Statement ===== */}
            <section className="mb-16">
              <motion.div
                className="text-center glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-32" />
                <div className="relative z-10">
                  <p className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {aboutIntro.closingTitle} <span className="text-primary">{aboutIntro.closingHighlight}</span> {aboutIntro.closingSubtitle}
                  </p>
                  <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                    {aboutIntro.closingDescription}
                  </p>
                  <motion.a
                    href={aboutIntro.ctaEmail}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {aboutIntro.ctaText}
                  </motion.a>
                </div>
              </motion.div>
            </section>
          </div>
        </main>

        <Footer />

        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
