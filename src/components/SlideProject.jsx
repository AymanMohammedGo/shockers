"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation } from "swiper/modules";

export default function SlideProject({
  categoriesProjects,
  title,
  link,
  ColorText,
}) {
  const swiperRef = useRef(null);
  const isDelay = useRef(false);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX } = event;
      if (!isDelay.current) {
        if (clientX >= window.innerWidth - 10) {
          swiperRef.current.swiper.slideNext();
          startThrottle();
        } else if (clientX <= 10) {
          swiperRef.current.swiper.slidePrev();
          startThrottle();
        }
      }
    };
    const startThrottle = () => {
      isDelay.current = true;
      setTimeout(() => {
        isDelay.current = false;
      }, 100);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      <h2
        id="projects"
        className={`font-bold overflow-hidden   ${ColorText}  w-fit px-4 py-3 z-0 text-3xl  lg:text-4xl  mx-auto mt-6 mb-[16px]`}
      >
        {title}
      </h2>
      <div className="flex-grow">
        <Swiper
          className="w-full h-full  "
          ref={swiperRef}
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
          {categoriesProjects?.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <Link href={`/${link}/projects/${item?.id}`}>
                <Image
                  className=" object-cover"
                  src={item?.attributes.imgURL.data?.attributes.url}
                  fill={true}
                  alt={item.id}
                  quality={75}
                />
                <div className="absolute  inset-0 image-gradient" />
                <span className="absolute  bottom-0 p-4 text-white text-2xl">
                  {item?.attributes?.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
