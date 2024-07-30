"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import SlideProject from "@/components/SlideProject";
import React from "react";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import AnimatedText from "@/components/Motion/AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = ({ params }) => {
  const projects1 = [
    {
      name: "Urban_Design",
      image: "/img/project.jpg",
    },
    {
      name: "Residential_Design",
      image: "/img/project.jpg",
    },
    {
      name: "Commercial_Design",
      image: "/img/project.jpg",
    },
    {
      name: "Industrial_Design",
      image: "/img/project.jpg",
    },
    {
      name: "Institutional_Design",
      image: "/img/project.jpg",
    },
    {
      name: "Recreational_Design",
      image: "/img/project.jpg",
    },
    {
      name: "Building_Restoration",
      image: "/img/project.jpg",
    },
    {
      name: "Interior_Design",
      image: "/img/project.jpg",
    },
    {
      name: "Sustainability_and_Energy",
      image: "/img/project.jpg",
    },
    {
      name: "Environmental_Design",
      image: "/img/project.jpg",
    },
    {
      name: "Electrical_Engineering",
      image: "/img/project.jpg",
    },
    {
      name: "Civil_Engineering",
      image: "/img/project.jpg",
    },
  ];
  const projects = [
    {
      name: `${params.projects} 1`,
      image: "/img/project.jpg",
    },
    {
      name: `${params.projects} 2`,
      image: "/img/project.jpg",
    },
    {
      name: `${params.projects} 3`,
      image: "/img/project.jpg",
    },
    {
      name: `${params.projects} 4`,
      image: "/img/project.jpg",
    },
    {
      name: `${params.projects} 5`,
      image: "/img/project.jpg",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_S animationData={S_json} delay={800} />
      <section className=" w-full h-full ">
        <div className="h-screen sticky top-0">
          <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
            <div className="w-[96%] absolute bottom-14 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
              <AnimatedText text={params.projects} delay={3}></AnimatedText>
            </div>
          </div>
        </div>
        {projects.map((item, index) => (
          <div key={index} className="sticky top-0">
            <Link href={`/shockersAEC/${params.projects}/${item.name}`}>
              <ImageOverlaysCenter title={item.name} />
            </Link>
          </div>
        ))}

        <div className="sticky top-0 bg-primary ">
          <SlideProject
            projects={projects1}
            link="shockersAEC"
            bgText="bg-shockersAEC"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
