"use client";
import { animate, AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const animation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "-100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const Transition = ({ bg }) => {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (
      pathname !== "/en/shockersAEC" &&
      pathname !== "/ar/shockersAEC" &&
      pathname !== "/kr/shockersAEC" &&
      pathname !== "/en/baytuna" &&
      pathname !== "/ar/baytuna" &&
      pathname !== "/kr/baytuna" &&
      pathname !== "/en/deca" &&
      pathname !== "/ar/deca" &&
      pathname !== "/kr/deca"
    )
      setIsLoaded(false);
  }, [pathname]);
  useEffect(() => {
    // افتراضيا تقوم هذه الوظيفة بمحاكاة تحميل الصفحة
    const handleLoad = () => setIsLoaded(true);

    // هنا يمكن استبدالها بعملية تحقق من تحميل الصفحة بالكامل أو أي شرط آخر
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isLoaded && (
        <div key={pathname}>
          <div className="flex h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50">
            <motion.div
              variants={animation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0 }}
              className={`w-full h-full ${bg} relative`}
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Transition;
