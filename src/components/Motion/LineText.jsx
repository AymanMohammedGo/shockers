import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedText = () => {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controls.start("visibleLine");
      await controls.start("hiddenLine");
      await controls.start("visibleText");
    }
    sequence();
  }, [controls]);

  const lineVariants = {
    hidden: { width: 0 },
    visibleLine: { width: "100%", transition: { duration: 2 } },
    hiddenLine: { width: "100%", opacity: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visibleText: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="flex flex-col items-center justify-center w-fit h-screen">
      <motion.div
        className="bg-seconds h-[2px] mb-[10px]"
        initial="hidden"
        animate={controls}
        variants={lineVariants}
      />
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={textVariants}
        style={{ fontSize: "24px", textAlign: "center" }}
      >
        kjnkjnknkm jnkmnlkml lnmlkm{" "}
      </motion.h1>
      <motion.div
        style={{ height: "2px", backgroundColor: "black", marginTop: "10px" }}
        initial="hidden"
        animate={controls}
        variants={lineVariants}
      />
    </div>
  );
};

export default AnimatedText;
