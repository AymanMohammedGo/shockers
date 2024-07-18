"use client";
import SlideProject from "@/components/SlideProject";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/Motion/AnimatedText";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/assets/S.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "../globals.css";
import ServicesSection from "@/components/ServicesSection";

const ShockersHome = () => {
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
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
  const variant3 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
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
    <>
      <Draw_S animationData={S_json} />
      <section className=" w-screen h-screen ">
        <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
          <div className="absolute bottom-0 text-[70px] leading-none md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
            <AnimatedText text="DARED" delay={1.5}></AnimatedText>
            <AnimatedText text="TO BE" delay={2}></AnimatedText>
            <AnimatedText text="SHOCKED" delay={2.5}></AnimatedText>
          </div>
        </div>
      </section>
      <section>
        <div className="relative w-screen h-screen ">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-screen-xxl w-full h-full relative overflow-hidden">
              <div className="flex  flex-col items-center lg:items-start justify-center absolute bottom-0 p-2">
                <motion.h1
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={variant1}
                  className="text-6xl overflow-hidden lg:text-8xl font-bold mb-5 lg:mb-6 text-white"
                >
                  About US
                </motion.h1>
                <motion.span
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={variant2}
                  className="text-white text-xl text-center"
                >
                  Shockers AEC (Architecture, Engineering, and Construction)
                </motion.span>
                <Link href="/shockersAEC/about">
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variant3}
                  >
                    <Button className="bg-white w-fit text-seconds hover:bg-shockersAEC hover:text-white hover:outline text-base my-8  ">
                      Read More..
                    </Button>
                  </motion.div>
                </Link>

                {/* <AnimatedComponent variant={variant1} />
                <AnimatedComponent variant={variant2} />
                <AnimatedComponent variant={variant3} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <motion.h2
        initial={{ y: "-150%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 1,
        }}
        className="font-bold overflow-hidden  text-white bg-seconds rounded-lg w-fit px-4 py-3 z-0 text-xl  lg:text-3xl mx-auto mt-6 mb-[16px]"
      >
        PROJECTS
      </motion.h2>
      <SlideProject />
    </>
  );
};

export default ShockersHome;
