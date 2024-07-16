"use client";
import SlideProject from "@/components/SlideProject";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/Motion/AnimatedText";
import LottieAnimation from "@/components/litte";
import animationData from "/public/assets/S.json"; // تأكد من مسار الملف
import "../globals.css";
import { useState, useEffect } from "react";

import Link from "next/link";
import LineText from "@/components/Motion/LineText";
const ShockersHome = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);
  const lines = {
    animate: { width: ["0%", "100%", "0%"] },
    transition: { duration: 1 },
  };
  const lines1 = {
    // initial: { height: "0%" },
    animate: { height: ["0%", "90%", "0%"] },
    // exit: { height: "0%" },
    transition: { duration: 1 },
  };

  const text = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    transition: { duration: 1, delay: 1 },
  };
  return (
    <>
      {/* <div class="lottie-container">
        <div id="lottie-animation" class="lottie-animation">
          <LottieAnimation animationData={animationData} />
        </div>
      </div> */}
      {/* <LineText /> */}

      <LottieAnimation animationData={animationData} />
      {/* <motion.div animate={{ x: [0, 100, 0] }} className="mt-96">
        dfdfdfdfdfdfdfdfdfdf
      </motion.div> */}
      <section className=" w-full h-lvh ">
        <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
          <div className="absolute bottom-0 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
            {["DARED", "TO BE", "SHOCKED"].map((textContent, index) => (
              <div key={index} className="relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-2 w-[2px] bg-current"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ ...lines1.transition }}
                  variants={lines1}
                />
                <motion.div
                  className="absolute top-1/3 left-0 h-[2px] bg-current"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ ...lines.transition }}
                  variants={lines}
                />
                <motion.div
                  className="absolute top-1/2 left-0 h-[2px] bg-current"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ ...lines.transition }}
                  variants={lines}
                />
                <motion.div
                  className="absolute top-2/3 left-0 h-[2px] bg-current"
                  initial="initial"
                  animate="animate"
                  // exit="exit"
                  transition={{ ...lines.transition }}
                  variants={lines}
                />
                <AnimatedText text={textContent} delay={1}></AnimatedText>

                {/* <motion.div
                  initial="initial"
                  animate="animate"
                  transition={{ ...text.transition }}
                  variants={text}
                  className="relative overflow-hidden"
                >
                  {textContent}
                </motion.div> */}
              </div>
            ))}
          </div>
          {/* <div className="absolute bottom-0 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
            {["DARED", "TO BE", "SHOCKED"].map((textContent, index) => (
              <div key={index} className="relative overflow-hidden">
                {isVisible && (
                  <div>
                    <motion.div
                      className="absolute top-0 left-2 w-[2px] bg-current"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ ...lines1.transition }}
                      variants={lines1}
                    />
                    <motion.div
                      className="absolute top-1/3 left-0 h-[2px] bg-current"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ ...lines.transition }}
                      variants={lines}
                    />
                    <motion.div
                      className="absolute top-1/2 left-0 h-[2px] bg-current"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ ...lines.transition }}
                      variants={lines}
                    />
                    <motion.div
                      className="absolute top-2/3 left-0 h-[2px] bg-current"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ ...lines.transition }}
                      variants={lines}
                    />
                  </div>
                )}

                <motion.div
                  initial="initial"
                  animate="animate"
                  transition={{ ...text.transition }}
                  variants={text}
                  className="relative"
                >
                  {textContent}
                </motion.div>
              </div>
            ))}
          </div> */}
          {/* <div className="absolute bottom-0 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
            <AnimatedText text="DARED" delay={1}></AnimatedText>
            <AnimatedText text="TO BE" delay={1.5}></AnimatedText>
            <AnimatedText text="SHOCKED" delay={2}></AnimatedText>
          </div> */}
        </div>
      </section>
      <section>
        <div className="relative w-full h-lvh ">
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
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                  }}
                  className="text-6xl overflow-hidden lg:text-8xl font-bold mb-5 lg:mb-6 text-white"
                >
                  About US
                </motion.h1>
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  className="text-white text-xl text-center"
                >
                  Shockers AEC (Architecture, Engineering, and Construction)
                </motion.span>

                <Link href="/shockersAEC/about">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1,
                      delay: 2,
                    }}
                  >
                    <Button className="bg-white w-fit text-seconds  text-base mb-6 mt-5 lg:mb-12 lg:mt-6  ">
                      Read More..
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-seconds h-lvh flex items-center justify-center z-10">
        <div className="flex w-full flex-col xl:flex-row justify-center xl:justify-between items-center   m-auto lg:px-2">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
            }}
            className="content text-white flex-1  flex flex-col items-center overflow-hidden"
          >
            <h1 className="text-6xl lg:text-8xl font-bold my-8 ">Services</h1>
            <ul>
              <li className="flex items-center text-xl xl:text-3xl mb-3">
                <CircleCheckBig />
                <span className="mx-2">Architectural Services</span>
              </li>
              <li className="flex items-center text-xl xl:text-3xl mb-3">
                <CircleCheckBig />
                <span className="mx-2">Engineering Services</span>
              </li>
              <li className="flex items-center text-xl xl:text-3xl mb-3">
                <CircleCheckBig />
                <span className="mx-2">Construction Services</span>
              </li>
            </ul>
            <div>
              <Link href="/shockersAEC/projects">
                <Button className="bg-white w-fit text-seconds  text-base my-8  ">
                  Read More..
                </Button>
              </Link>
            </div>
          </motion.div>
          <Image
            src="/assets/services.jpg"
            width={700}
            height={700}
            alt="services"
            className=" w-full h-full xl:h-screen xl:w-1/2"
          />
        </div>
      </section>
      <motion.h2
        initial={{ y: "-150%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 1,
        }}
        className="font-bold overflow-hidden  text-white bg-seconds rounded-lg w-fit px-4 py-3 z-0  text-3xl mx-auto mt-6 mb-[16px]"
      >
        PROJECTS
      </motion.h2>
      <SlideProject />
    </>
  );
};

export default ShockersHome;
