import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

// Fade up with spring
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Fade in from left
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Fade in from right
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Scale up
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Blur in
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Section wrapper with viewport animation
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export const AnimatedSection = ({ children, className, variants = fadeUp, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={variants}
    className={className}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Animated list container
export const AnimatedList = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.div>
);

// Animated list item
export const AnimatedItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);
