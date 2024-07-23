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
              About ShockersAEC
            </span>
            <p className=" text-2xl p-4  mb-6">
              Shockers AEC is a full-service firm encompassing architecture,
              engineering, and construction. Through collaborative practices and
              a dedication to innovation, they serve as a leading force in
              shaping the built environment
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
              Since 2017, our architects, engineers, and managers teams have
              grown through dedication and continuous learning. We combine
              experience and creativity, transforming your vision into a
              remarkable reality. Every project reflects our commitment to top
              quality and designs that impress and inspire every client.
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
              Our mission is to enhance society through the application of
              innovative architectural designs that embody imaginative and
              creative thinking. Our team of skilled architects is dedicated to
              unlocking the full potential of your projects, offering solutions
              even for the most intricate design challenges. By providing
              creative and effective solutions, we strive to enhance the lives
              and businesses of our clients.
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
              Our vision is to deliver exceptional design solutions of the
              highest quality by leveraging our imaginative visualization skills
              and transforming them into tangible reality. We aim to create
              captivating and innovative designs that inspire and surpass
              expectations, leaving a lasting impact on the built environment.
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
              Value and quality{" "}
            </span>
            <p className=" text-2xl  px-4  mb-6">
              At Shockers AEC, integrity guides everything. Honesty, trust, and
              commitment to excellence fuel our passion for continuous learning
              and innovation. We value diversity and teamwork, striving for
              constant improvement to deliver superior results for every client.
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
              Our team is led by highly skilled architectural, engineering, and
              construction design teams. we are constantly expanding across all
              the departments to meet our targets.
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
