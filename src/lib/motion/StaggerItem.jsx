import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export default function StaggerItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
