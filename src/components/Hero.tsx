import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeLeft, fadeRight, scaleUp } from "./animations/MotionWrapper";
import profilePhoto from "@/assets/profile-photo.jpg";
import { personalInfo, roles, socialLinks } from "@/data/personal";
import ResumePreview from "./ResumePreview";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showWhisper, setShowWhisper] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setShowWhisper(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Social Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            <div className="flex flex-col items-center gap-8">
              <Link to="/about" className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110" />
                
                <motion.div
                  className="relative glass-card p-2 rounded-2xl overflow-hidden"
                  variants={scaleUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={profilePhoto}
                    alt={`${personalInfo.name} - Mobile Engineer`}
                    className="w-64 h-80 object-cover rounded-xl transition-all duration-500 group-hover:brightness-90"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6 rounded-2xl">
                    <span className="text-primary-foreground bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      Get to know me →
                    </span>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {showWhisper && (
                    <motion.div
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -4] }}
                      transition={{ duration: 3, times: [0, 0.2, 0.7, 1], repeat: Infinity, repeatDelay: 4 }}
                    >
                      <span className="text-xs text-primary/70 font-medium tracking-wide flex items-center gap-1">
                        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>✦</motion.span>
                        tap to explore
                        <motion.span animate={{ x: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>✦</motion.span>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
              </Link>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
                }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="glass-icon"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div>
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {personalInfo.greeting} <span className="text-lg font-normal text-muted-foreground/60">{personalInfo.pronouns}</span>
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl text-primary font-medium h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I'm a {displayText}
                <span className={`${isTyping ? "animate-blink" : "opacity-0"}`}>|</span>
              </motion.p>
            </div>

            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.description}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button
                onClick={() => setShowResume(true)}
                className="glass-button flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                See my resume
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
              <motion.a
                href={personalInfo.contactUrl}
                className="glass-button-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ResumePreview open={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
};

export default Hero;
