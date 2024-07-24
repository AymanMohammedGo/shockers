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
      text: "DARED",
      delay: 3,
    },
    {
      text: "TO BE",
      delay: 3.5,
    },
    {
      text: "SHOCKED",
      delay: 4,
    },
  ];
  const projects = [
    {
      name: "Urban_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Residential_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Commercial_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Industrial_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Institutional_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Recreational_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Building_Restoration",
      image: "/assets/project.jpg",
    },
    {
      name: "Interior_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Sustainability_and_Energy",
      image: "/assets/project.jpg",
    },
    {
      name: "Environmental_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Electrical_Engineering",
      image: "/assets/project.jpg",
    },
    {
      name: "Civil_Engineering",
      image: "/assets/project.jpg",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
      >
        <Draw_S animationData={S_json} delay={800} />
        <SalgonSection titleText={titleText} />
        <AboutSection
          link="shockersAEC"
          video="/video2.mp4"
          text="Shockers AEC (Architecture, Engineering, and Construction)"
          bg="bg-white"
          tc="text-shockersAEC"
        />
        <ServicesSection
          services={services}
          link="shockersAEC"
          image="/assets/services.jpg"
          bg="bg-white"
          tc="text-shockersAEC"
        />
        <SlideProject
          projects={projects}
          link="shockersAEC"
          ColorText="text-shockersAEC"
        />
      </motion.div>
    </>
  );
};

export default ShockersHome;
