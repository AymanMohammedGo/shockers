"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import SlideProject from "@/components/SlideProject";
import React from "react";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/assets/S.json";
import AnimatedText from "@/components/Motion/AnimatedText";
import Link from "next/link";

const Projects = () => {
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
    <div>
      {/* <Draw_S animationData={S_json} /> */}
      <section className=" w-full h-full ">
        <div className="h-screen sticky top-0">
          <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
            <div className="absolute bottom-14 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
              <AnimatedText text="PROJECTS" delay={1}></AnimatedText>
            </div>
          </div>
        </div>
        {projects.map((item, index) => (
          <div key={index} className="sticky top-0">
            <Link href={`/baytuna/projects/${item.id}`}>
              <ImageOverlaysCenter title={item.name} />
            </Link>
          </div>
        ))}

        <div className="sticky top-0 bg-primary ">
          <SlideProject
            projects={projects}
            link="shockersAEC"
            bgText="bg-baytuna"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
