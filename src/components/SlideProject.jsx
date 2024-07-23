"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { motion } from "framer-motion";

import { FreeMode, Navigation } from "swiper/modules";

export default function SlideProject({ projects, link, ColorText }) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <h2
        id="projects"
        className={`font-bold overflow-hidden   ${ColorText}  w-fit px-4 py-3 z-0 text-2xl  lg:text-3xl mx-auto mt-6 mb-[16px]`}
      >
        PROJECTS
      </h2>
      <div className="flex-grow">
        <Swiper
          className="w-full h-full  "
          slidesPerView={1.1}
          spaceBetween={0}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            600: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 0,
            },
            1400: {
              slidesPerView: 4.5,
              spaceBetween: 0,
            },
            1705: {
              slidesPerView: 5.5,
              spaceBetween: 0,
            },
            2000: {
              slidesPerView: 6.5,
              spaceBetween: 0,
            },
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <Link href={`/${link}/projects/${item.name}`}>
                <Image
                  className=" object-cover"
                  src={item.image}
                  fill={true}
                  alt={item.id}
                  quality={100}
                />
                <div className="absolute  inset-0 image-gradient" />
                <span className="absolute  bottom-0 p-4 text-white text-2xl">
                  {item.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
