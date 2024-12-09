"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideRight" | "scale";
  delay?: number;
}

export default function AnimateOnScroll({ 
  children, 
  animation = "fadeIn",
  delay = 0 
}: Props) {
  const { scrollYProgress } = useScroll();
  
  const getAnimationProps = () => {
    const baseProps = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-20%" },
      transition: { 
        duration: 0.9,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Exponential easing
      }
    };

    switch (animation) {
      case "slideUp":
        return {
          ...baseProps,
          initial: { opacity: 0, y: 100 },
          whileInView: { 
            opacity: 1, 
            y: 0,
            transition: {
              ...baseProps.transition,
              y: { type: "spring", stiffness: 100, damping: 15 }
            }
          }
        };
      case "slideRight":
        return {
          ...baseProps,
          initial: { opacity: 0, x: -100 },
          whileInView: { 
            opacity: 1, 
            x: 0,
            transition: {
              ...baseProps.transition,
              x: { type: "spring", stiffness: 100, damping: 15 }
            }
          }
        };
      case "scale":
        return {
          ...baseProps,
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { 
            opacity: 1, 
            scale: 1,
            transition: {
              ...baseProps.transition,
              scale: { type: "spring", stiffness: 100, damping: 15 }
            }
          }
        };
      default:
        return baseProps;
    }
  };

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 0.9, 1]
  );

  return (
    <motion.div 
      {...getAnimationProps()}
      style={{ opacity }}
    >
      {children}
    </motion.div>
  );
} 