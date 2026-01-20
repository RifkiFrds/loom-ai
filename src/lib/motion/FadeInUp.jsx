import { motion } from "framer-motion";

export default function FadeInUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
