"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ 
          duration: 0.7,
          ease: [0.32, 0.72, 0, 1],
          y: {
            type: "spring",
            damping: 20,
            stiffness: 100
          }
        }}
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "5rem 1rem 2rem 1rem",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 