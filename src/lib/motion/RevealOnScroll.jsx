import { motion } from "framer-motion";

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        ease: "easeOut",
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
