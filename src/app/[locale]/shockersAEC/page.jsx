"use client";
import SlideProject from "@/components/SlideProject";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/Motion/AnimatedText";

const ShockersHome = () => {
  return (
    <>
      <section className=" w-full h-[700px] ">
        <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
          <div className="absolute bottom-0 text-6xl lg:text-8xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
            <AnimatedText text="DARED" delay={1}></AnimatedText>
            <AnimatedText text="TO BE" delay={1.5}></AnimatedText>
            <AnimatedText text="SHOCKED" delay={2}></AnimatedText>
          </div>
        </div>
      </section>
      <section>
        <div className="relative w-full h-[700px] ">
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
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                className="flex flex-col items-center lg:items-start justify-center absolute bottom-0 p-2"
              >
                <h1 className="text-6xl lg:text-8xl font-bold mb-5 lg:mb-6 text-white">
                  About US
                </h1>
                <span className="text-white text-xl text-center">
                  Shockers AEC (Architecture, Engineering, and Construction)
                </span>
                <Button className="bg-white w-fit text-seconds  text-base mb-6 mt-5 lg:mb-12 lg:mt-6  ">
                  Read More..
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-seconds">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center  max-w-screen-xxl m-auto lg:px-2">
          <div className="content text-white flex-1  flex flex-col items-center xl:items-start overflow-hidden">
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0,
              }}
              className="text-6xl lg:text-8xl font-bold my-8 "
            >
              Services
            </motion.h1>
            <ul>
              <motion.li
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
                className="flex items-center text-xl xl:text-3xl mb-3"
              >
                <CircleCheckBig />
                <span className="mx-2">Architectural Services</span>
              </motion.li>
              <motion.li
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                }}
                className="flex items-center text-xl xl:text-3xl mb-3"
              >
                <CircleCheckBig />
                <span className="mx-2">Engineering Services</span>
              </motion.li>
              <motion.li
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                  delay: 2,
                }}
                className="flex items-center text-xl xl:text-3xl mb-3"
              >
                <CircleCheckBig />
                <span className="mx-2">Construction Services</span>
              </motion.li>
            </ul>
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 2,
              }}
            >
              <Button className="bg-white w-fit text-seconds  text-base my-8  ">
                Read More..
              </Button>
            </motion.div>
          </div>
          <Image
            src="/assets/services.jpg"
            width={700}
            height={700}
            alt="services"
          />
        </div>
      </section>
      <h2 className="font-bold  text-seconds  text-3xl text-center my-12">
        PROJECTS
      </h2>
      <SlideProject />
    </>
  );
};

export default ShockersHome;
