"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/assets/S.json";
const About = () => {
  return (
    <div>
      <ImageOverlaysTop namePage="ABOUT" title="Shockers AEC" />
      <Draw_S animationData={S_json} />

      <section className="lg:my-5 max-w-screen-xxl m-auto lg:px-2 overflow-hidden">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:my-8  flex flex-col items-center lg:flex-row justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <span className="font-bold block text-3xl  py-2  px-4 ">
              About Baytuna
            </span>
            <p className=" text-2xl p-4  mb-6">
              Established in December 2022, Baytuna emerged as a progressive
              housing brand from Shockers Company. Focused on residential
              projects, we prioritize quality and sustainability throughout the
              development process. Our comprehensive services encompass design,
              engineering, and construction, along with material supply all
              conveniently accessible through a user-friendly digital platform.
            </p>
          </div>
          <Image
            className="lg:w-1/3"
            src="/assets/services.jpg"
            width={1500}
            height={500}
            alt="project"
          />
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:my-8  flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <span className="font-bold block text-3xl  py-2  px-4 ">
              Years of experience and performance
            </span>
            <p className=" text-2xl px-4   mb-6">
              We built on the expertise of our established engineering,
              architectural, and construction teams that have over 7 years of
              experience delivering high-performance housing. With a team of
              talented contractors, engineers, and workers, we translate those
              designs into reality, focusing on quality and functionality in
              every step.
            </p>
          </div>
          <Image
            className="lg:w-1/3"
            src="/assets/services.jpg"
            width={1500}
            height={500}
            alt="project"
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:my-8  flex flex-col items-center  lg:flex-row justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <span className="font-bold block text-3xl px-4 py-2 ">
              Mission{" "}
            </span>
            <p className=" text-2xl  px-4  mb-6">
              Our mission is to merge visionary architecture with cutting-edge
              sustainability techniques to create homes that harmonize with
              nature and enrich the lives of generations to come. We strive to
              lead by example, prioritizing resource efficiency and renewable
              energy integration, and provide eco-conscious materials throughout
              every stage of the building process.
            </p>
          </div>
          <Image
            className="lg:w-1/3"
            src="/assets/services.jpg"
            width={1500}
            height={500}
            alt="project"
          />
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:my-8  flex flex-col items-center  lg:flex-row-reverse justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <span className="font-bold block text-3xl px-4 py-2 ">Vision </span>
            <p className=" text-2xl  px-4  mb-6">
              Fostering a future where sustainability is synonymous with
              excellence, we aim to revolutionize house design, construction
              practices, and material supply chains. We envision a world where
              every structure embodies ecological harmony, is powered by
              renewable energy, and is constructed with responsibly sourced
              materials. By integrating innovative design, advanced construction
              techniques, and ethical material procurement, we aspire to set a
              new standard for environmentally conscious building industries.
            </p>
          </div>
          <Image
            className="lg:w-1/3"
            src="/assets/services.jpg"
            width={1500}
            height={500}
            alt="project"
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:my-8  flex flex-col items-center  lg:flex-row justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <span className="font-bold block text-3xl px-4 py-2 ">
              Value and quality
            </span>
            <p className=" text-2xl  px-4  mb-6">
              At Baytuna, sustainability is the driving force behind our values.
              We prioritize both value and quality in every aspect, underpinned
              by principles of honesty, client commitment, innovation,
              integrity, collaboration, durability, and ethical material
              sourcing.
            </p>
          </div>
          <Image
            className="lg:w-1/3"
            src="/assets/services.jpg"
            width={1500}
            height={500}
            alt="project"
          />
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:my-8  flex flex-col items-center  lg:flex-row-reverse justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <span className="font-bold block text-3xl px-4 py-2 ">Staff </span>
            <p className=" text-2xl  px-4  mb-6">
              Our team is the key consistency of experienced architectural
              engineers with a professional digital platform application to keep
              you updated. Our construction staff – engineers, contractors,
              surveyors, and workers deliver efficient, sustainable projects you
              can trust.
            </p>
          </div>
          <Image
            className="lg:w-1/3"
            src="/assets/services.jpg"
            width={1500}
            height={500}
            alt="project"
          />
        </motion.div>
      </section>
      <Link href="/shockersAEC/projects">
        <ImageOverlaysCenter title="VIEW OUR PROJECTS" />
      </Link>
    </div>
  );
};

export default About;
