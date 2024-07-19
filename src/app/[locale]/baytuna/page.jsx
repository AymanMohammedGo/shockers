"use client";

import SlideProject from "@/components/SlideProject";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/assets/S.json";
import { motion } from "framer-motion";

import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import "../globals.css";

const ShockersHome = () => {
  const var2 = {
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
  const var3 = {
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
  const var4 = {
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
  const services = [
    {
      name: "Architectural Services",
      effect: var2,
    },
    {
      name: "Engineering Services",
      effect: var3,
    },
    {
      name: "Construction Services",
      effect: var4,
    },
  ];
  const titleText = [
    {
      text: "WHERE",
      delay: 1.5,
    },
    {
      text: "YOUR",
      delay: 2,
    },
    {
      text: "HOUSE",
      delay: 2.5,
    },
    {
      text: "BECOMES",
      delay: 3,
    },
    {
      text: "YOUR HOME",
      delay: 3.5,
    },
  ];
  const projects = [
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
    {
      id: "projects1",
      name: "Urban & Infrastructures",
      image: "/assets/project.jpg",
    },
  ];
  return (
    <>
      <Draw_S animationData={S_json} />
      <SalgonSection titleText={titleText} />
      <AboutSection
        link="baytuna"
        video="/video2.mp4"
        text="Baytuna is a new housing brand launched in December 2022..."
        bg="bg-baytuna"
        tc="text-white"
      />
      <ServicesSection
        services={services}
        link="baytuna"
        image="/assets/services.jpg"
        bg="bg-baytuna"
        tc="text-white"
      />
      <motion.h2
        initial={{ y: "-150%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 1,
        }}
        className="font-bold overflow-hidden  text-white bg-baytuna rounded-lg w-fit px-4 py-3 z-0 text-xl  lg:text-3xl mx-auto mt-6 mb-[16px]"
      >
        PROJECTS
      </motion.h2>
      <SlideProject projects={projects} link="shockersAEC" />
    </>
  );
};

export default ShockersHome;
