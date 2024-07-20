"use client";

import SlideProject from "@/components/SlideProject";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/assets/S.json";

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
      delay: 1.5,
    },
    {
      text: "TO BE",
      delay: 2,
    },
    {
      text: "SHOCKED",
      delay: 2.5,
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
        bgText="bg-shockersAEC"
      />
    </>
  );
};

export default ShockersHome;
