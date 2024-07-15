"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import SlideProject from "@/components/SlideProject";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div>
      <ImageOverlaysTop namePage="PROJECTS" title="Shockers AEC" />
      <section className=" w-full h-full ">
        <div className="sticky top-0">
          <ImageOverlaysCenter title=" PROJECTS 1 " />
        </div>
        <div className="sticky top-0">
          <ImageOverlaysCenter title=" PROJECTS 2 " />
        </div>
        <div className="sticky top-0">
          <ImageOverlaysCenter title=" PROJECTS 3 " />
        </div>
        <div className="sticky top-0">
          <ImageOverlaysCenter title=" PROJECTS 4 " />
        </div>
        <div className="sticky top-0">
          <ImageOverlaysCenter title=" PROJECTS 5 " />
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
      <h2 className="font-bold  text-seconds  text-3xl text-center my-12">
        PROJECTS
      </h2>
      <SlideProject />
    </div>
  );
};

export default Projects;
