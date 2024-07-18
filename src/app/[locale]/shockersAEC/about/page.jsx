"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <ImageOverlaysTop namePage="ABOUT" title="Shockers AEC" />
      <section className="lg:my-5 max-w-screen-xxl m-auto lg:px-2">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:my-8  flex flex-col lg:flex-row justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <p className=" text-2xl p-4  mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sapiente, consequuntur quos nobis deleniti quisquam eum eius optio
              nostrum aut. Maxime recusandae qui nam iste soluta molestiae
              dolorum? Nobis, harum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Molestias tempore aliquam quisquam sed, delectus
              voluptas ratione ab distinctio, dolorem libero nobis nesciunt
              error hic assumenda ea accusamus maiores fuga eveniet.
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
          className="lg:my-8  flex flex-col lg:flex-row-reverse justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <p className=" text-2xl p-4  mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sapiente, consequuntur quos nobis deleniti quisquam eum eius optio
              nostrum aut. Maxime recusandae qui nam iste soluta molestiae
              dolorum? Nobis, harum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Molestias tempore aliquam quisquam sed, delectus
              voluptas ratione ab distinctio, dolorem libero nobis nesciunt
              error hic assumenda ea accusamus maiores fuga eveniet.
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
          className="lg:my-8  flex flex-col lg:flex-row justify-center lg:justify-between"
        >
          <div className="content text-seconds flex-1 flex flex-col items-center xl:items-start">
            <p className=" text-2xl p-4  mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sapiente, consequuntur quos nobis deleniti quisquam eum eius optio
              nostrum aut. Maxime recusandae qui nam iste soluta molestiae
              dolorum? Nobis, harum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Molestias tempore aliquam quisquam sed, delectus
              voluptas ratione ab distinctio, dolorem libero nobis nesciunt
              error hic assumenda ea accusamus maiores fuga eveniet.
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
      <ImageOverlaysCenter title="VIEW OUR PROJECTS" />
    </div>
  );
};

export default About;
