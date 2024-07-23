"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import SlideProject from "@/components/SlideProject";
import React from "react";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/assets/S.json";
import AnimatedText from "@/components/Motion/AnimatedText";
import Link from "next/link";

const Projects = ({ params }) => {
  const projects1 = [
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
  const projects = [
    {
      name: `${params.projects} 1`,
      image: "/assets/project.jpg",
    },
    {
      name: `${params.projects} 2`,
      image: "/assets/project.jpg",
    },
    {
      name: `${params.projects} 3`,
      image: "/assets/project.jpg",
    },
    {
      name: `${params.projects} 4`,
      image: "/assets/project.jpg",
    },
    {
      name: `${params.projects} 5`,
      image: "/assets/project.jpg",
    },
  ];
  return (
    <div>
      <Draw_S animationData={S_json} />
      <section className=" w-full h-full ">
        <div className="h-screen sticky top-0">
          <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
            <div className="absolute bottom-14 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
              <AnimatedText text={params.projects} delay={2.5}></AnimatedText>
            </div>
          </div>
        </div>
        {projects.map((item, index) => (
          <div key={index} className="sticky top-0">
            <Link
              href={`/shockersAEC/projects/${params.projects}/${item.name}`}
            >
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
    </div>
  );
};

export default Projects;
