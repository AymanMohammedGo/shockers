"use client";

import SlideProject from "@/components/SlideProject";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/assets/S.json";
import Link from "next/link";

import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import "../globals.css";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";

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
      name: "Deca's Collaborative Design Advantage",
      effect: var2,
    },
    {
      name: "Streamlined Project Management",
      effect: var3,
    },
  ];
  const titleText = [
    {
      text: "WHERE",
      delay: 1.5,
    },
    {
      text: "DETAILS",
      delay: 2,
    },
    {
      text: "MATTER",
      delay: 2.5,
    },
  ];

  return (
    <>
      {/* <Draw_S animationData={S_json} /> */}
      <SalgonSection titleText={titleText} />
      <AboutSection
        link="deca"
        video="/video2.mp4"
        text="In 2022,Deca emerged as a leader in comprehensive interior and exterior designs"
        bg="bg-deca"
        tc="text-white"
      />
      <ServicesSection
        services={services}
        link="deca"
        image="/assets/services.jpg"
        bg="bg-deca"
        tc="text-white"
      />
      <Link href="/deca/projects">
        <ImageOverlaysCenter title="VIEW OUR PROJECTS" />
      </Link>
    </>
  );
};

export default ShockersHome;
