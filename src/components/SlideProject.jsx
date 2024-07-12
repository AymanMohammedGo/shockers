"use client";
import React from "react";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation } from "swiper/modules";

export default function SlideProject() {
  return (
    <>
      <Swiper
        className="w-full h-full my-6 !p-2 max-w-screen-xxl"
        slidesPerView={2}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
        }}
      >
        <SwiperSlide className="relative">
          <Image
            className="rounded-lg "
            src="/assets/project.jpg"
            width={300}
            height={500}
            alt="project"
          />
          <div className="absolute rounded-lg inset-0 image-gradient" />
          <span className="absolute  bottom-0 p-4 text-white text-xl">
            Urban & Infrastructures
          </span>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            className="rounded-lg "
            src="/assets/project.jpg"
            width={300}
            height={500}
            alt="project"
          />
          <div className="absolute rounded-lg inset-0 image-gradient" />
          <span className="absolute  bottom-0 p-4 text-white text-xl">
            Urban & Infrastructures
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide className="relative">
          <Image
            className="rounded-lg "
            src="/assets/project.jpg"
            width={300}
            height={500}
            alt="project"
          />
          <div className="absolute rounded-lg inset-0 image-gradient" />
          <span className="absolute  bottom-0 p-4 text-white text-xl">
            Urban & Infrastructures
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide className="relative">
          <Image
            className="rounded-lg "
            src="/assets/project.jpg"
            width={300}
            height={500}
            alt="project"
          />
          <div className="absolute rounded-lg inset-0 image-gradient" />
          <span className="absolute  bottom-0 p-4 text-white text-xl">
            Urban & Infrastructures
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide className="relative">
          <Image
            className="rounded-lg "
            src="/assets/project.jpg"
            width={300}
            height={500}
            alt="project"
          />
          <div className="absolute rounded-lg inset-0 image-gradient" />
          <span className="absolute  bottom-0 p-4 text-white text-xl">
            Urban & Infrastructures
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide className="relative">
          <Image
            className="rounded-lg "
            src="/assets/project.jpg"
            width={300}
            height={500}
            alt="project"
          />
          <div className="absolute rounded-lg inset-0 image-gradient" />
          <span className="absolute  bottom-0 p-4 text-white text-xl">
            Urban & Infrastructures
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide className="relative">
          <Image
            className="rounded-lg "
            src="/assets/project.jpg"
            width={300}
            height={500}
            alt="project"
          />
          <div className="absolute rounded-lg inset-0 image-gradient" />
          <span className="absolute  bottom-0 p-4 text-white text-xl">
            Urban & Infrastructures
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide className="relative">
          <Image
            className="rounded-lg "
            src="/assets/project.jpg"
            width={300}
            height={500}
            alt="project"
          />
          <div className="absolute rounded-lg inset-0 image-gradient" />
          <span className="absolute  bottom-0 p-4 text-white text-xl">
            Urban & Infrastructures
          </span>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
}
