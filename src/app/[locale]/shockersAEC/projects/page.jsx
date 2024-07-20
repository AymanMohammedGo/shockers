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
      <Draw_S animationData={S_json} />

      <section className=" w-full h-full ">
        <div className="h-lvh sticky top-0">
          <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
            <div className="absolute bottom-0 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
              <AnimatedText text="PROJECTS" delay={1}></AnimatedText>
            </div>
          </div>
        </div>
        <div className="sticky top-0">
          <Link href="/shockersAEC/projects/projects1">
            <ImageOverlaysCenter title=" PROJECTS 1 " />
          </Link>
        </div>
        <div className="sticky top-0">
          <Link href="/shockersAEC/projects/projects2">
            <ImageOverlaysCenter title=" PROJECTS 2 " />
          </Link>
        </div>
        <div className="sticky top-0">
          <Link href="/shockersAEC/projects/projects3">
            <ImageOverlaysCenter title=" PROJECTS 3 " />
          </Link>
        </div>
        <div className="sticky top-0">
          <Link href="/shockersAEC/projects/projects4">
            <ImageOverlaysCenter title=" PROJECTS 4 " />
          </Link>
        </div>

        <div className="sticky top-0 bg-primary ">
          <h2 className="font-bold  text-seconds  text-3xl text-center py-8">
            PROJECTS
          </h2>
          <div className="w-screen h-screen mb-2">
            <SlideProject projects={projects} link="shockersAEC" />
          </div>
        </div>
      </section>

      {/* <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full  h-[600px] "
      >

        <SwiperSlide>
          <ImageOverlaysCenter title=" PROJECTS 1 " />
        </SwiperSlide>
        <SwiperSlide>
          <ImageOverlaysCenter title=" PROJECTS 2" />
        </SwiperSlide>
        <SwiperSlide>
          <ImageOverlaysCenter title=" PROJECTS 3" />
        </SwiperSlide>
        <SwiperSlide>
          <ImageOverlaysCenter title=" PROJECTS 4" />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Projects;
