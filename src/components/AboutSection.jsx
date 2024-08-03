"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const AboutSection = ({
  videoMobile,
  videoLoptap,
  title,
  description,
  textButton,
  bg,
  tc,
  link,
}) => {
  const variant1 = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };
  const variant2 = {
    hidden: { y: "160%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    },
  };
  const variant3 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5,
      },
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <section className="sticky top-0 w-screen h-screen ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoLoptap} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoMobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="max-w-screen-xxl w-full h-full relative overflow-hidden">
          <div className="flex w-full flex-col items-center lg:items-start justify-center absolute bottom-10 p-2 lg:px-14 ">
            <motion.h1
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variant1}
              className="font-bold text-6xl lg:text-8xl mb-5 lg:mb-6 text-white overflow-hidden"
            >
              {title}{" "}
            </motion.h1>
            <motion.span
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variant2}
              className="text-white text-xl lg:text-2xl  text-center"
            >
              {description}
            </motion.span>
            <Link href={`/${link}/about`}>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variant3}
              >
                <Button
                  className={`${bg} w-fit ${tc} hover:bg-shockersAEC hover:text-white text-base my-8`}
                >
                  {textButton}
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
