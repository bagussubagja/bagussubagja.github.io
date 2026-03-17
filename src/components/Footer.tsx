import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="py-12 px-4 border-t border-border/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. | {personalInfo.fullName}
          </p>

          <motion.button
            onClick={scrollToTop}
            className="glass-icon"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
