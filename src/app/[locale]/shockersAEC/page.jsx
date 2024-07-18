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
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
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
  const variant4 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };
  const variant5 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
  const variant6 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    },
  };
  const variant7 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.9,
      },
    },
  };
  const variant8 = {
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
  const controls1 = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);
  return (
    <>
      <LottieAnimation animationData={animationData} />
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
                    <Button className="bg-white w-fit text-seconds  text-base mb-6 mt-5 lg:mb-12 lg:mt-6  ">
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
      <section className="bg-seconds w-screen h-screen flex items-center justify-center z-10">
        <div className="flex w-full h-full flex-col xl:flex-row justify-center items-center    lg:px-2 overflow-hidden">
          <div className="content text-white flex-1  flex flex-col items-center justify-center overflow-hidden">
            <motion.h1
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={variant4}
              className="text-6xl lg:text-8xl font-bold my-8 "
            >
              Services
            </motion.h1>
            <ul>
              <motion.li
                ref={ref1}
                initial="hidden"
                animate={controls1}
                variants={variant5}
                className="flex items-center text-xl xl:text-3xl mb-3"
              >
                <CircleCheckBig />
                <span className="mx-2">Architectural Services</span>
              </motion.li>
              <motion.li
                ref={ref1}
                initial="hidden"
                animate={controls1}
                variants={variant6}
                className="flex items-center text-xl xl:text-3xl mb-3"
              >
                <CircleCheckBig />
                <span className="mx-2">Engineering Services</span>
              </motion.li>
              <motion.li
                ref={ref1}
                initial="hidden"
                animate={controls1}
                variants={variant7}
                className="flex items-center text-xl xl:text-3xl mb-3"
              >
                <CircleCheckBig />
                <span className="mx-2">Construction Services</span>
              </motion.li>
            </ul>
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={variant8}
            >
              <Link href="/shockersAEC/projects">
                <Button className="bg-white w-fit text-seconds  text-base my-8  ">
                  Read More..
                </Button>
              </Link>
            </motion.div>
          </div>
          <Image
            src="/assets/services.jpg"
            width={4900}
            height={3200}
            alt="services"
            className="w-screen h-[50vh] xl:h-screen xl:w-[50vw] object-cover "
          />
        </div>
      </section>
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
