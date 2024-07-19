
import { delay, motion } from "framer-motion";

const AnimatedText = ({ text, delay }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
