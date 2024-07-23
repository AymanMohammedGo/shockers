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
      {/* <Draw_S animationData={S_json} /> */}

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
              About Deca{" "}
            </span>
            <p className=" text-2xl p-4  mb-6">
              In 2022, Deca emerged as a leader in comprehensive interior and
              exterior designs. The name” Deca” symbolizes perfection which
              reflects our unwavering commitment to the industry. We prioritize
              clear communication, transparency, and professionalism throughout
              the design process.
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
              Launched in 2022, Deca leverages the extensive experience (since
              2017) of Shockers Company is designs and manufacturing teams. This
              experience creates a unique synergy, allowing us to translate
              client visions into reality through custom furniture, design, and
              décor
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
              Transforming spaces into personalized sanctuaries that elevate
              everyday living, our mission at Deca is to redefine the art of
              interior and exterior design and décor and to collaborate with
              clients to unlock the full potential of their environments,
              creating bespoke interiors that inspire, comfort, and delight.
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
              Embracing the boundless possibilities of design, our vision at
              Deca is to set the standard for transformative interior and
              exterior experiences worldwide. We envision a future where every
              space tells a story, senses emotion, and sparks creativity. By
              extending the boundaries of design and embracing new technologies,
              we aim to set new standards for excellence in the interior and
              exterior design, décor, and furnishing industry.
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
              Deca prioritizes honesty, attention to detail, trust, and
              innovation. We value uniqueness, integrity, and sustainability and
              offer a range of supervision services to ensure impeccable
              execution and exceed your expectations.
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
              Deca leverages the combined expertise of its team of architects,
              designers, engineers, and construction to deliver exceptional
              results for its clients. We continuously improve our team based on
              market needs, ensuring that you are working with the most skilled
              and artistic professionals available.
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
