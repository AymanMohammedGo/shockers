"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation } from "swiper/modules";

export default function SlideProject({ categoriesProjects, link }) {
  const swiperRef = useRef(null);
  const isDelay = useRef(false);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const isRTL = document.dir === "rtl";
      const { clientX } = event;

      if (!isDelay.current) {
        if (clientX >= window.innerWidth - 10) {
          if (isRTL) {
            swiperRef.current.swiper.slidePrev();
          } else {
            swiperRef.current.swiper.slideNext();
          }
          startThrottle();
        } else if (clientX <= 10) {
          if (isRTL) {
            swiperRef.current.swiper.slideNext();
          } else {
            swiperRef.current.swiper.slidePrev();
          }
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
    <div id="projects">
      <div className="sticky top-0 w-screen h-screen flex flex-col bg-primary ">
        {/* <h2
        id="projects"
        className={`font-bold overflow-hidden   ${ColorText}  w-fit px-4 py-3 z-0 text-3xl  lg:text-4xl  mx-auto mt-6 mb-[16px]`}
      >
        {title}
      </h2> */}
        <div className="flex-grow my-5 md:my-10 lg:my-20">
          <Swiper
            className="w-full h-full  "
            ref={swiperRef}
            slidesPerView={1.1}
            spaceBetween={10}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            breakpoints={{
              600: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
              1400: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
              1705: {
                slidesPerView: 5.5,
                spaceBetween: 10,
              },
              2000: {
                slidesPerView: 6.5,
                spaceBetween: 10,
              },
            }}
          >
            {categoriesProjects?.map((item, index) => (
              <SwiperSlide key={index} className="relative">
                <Link href={`/${link}/${item?.id}`}>
                  <div className="relative w-full h-full overflow-hidden ">
                    <motion.div
                      className="relative w-full h-full"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }} // تأثير التكبير عند hover
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <Image
                        className="object-cover"
                        src={item?.attributes.imgURL.data?.attributes.url}
                        layout="fill"
                        alt={item.id}
                        quality={75}
                      />
                      <div className="absolute  inset-0 image-gradient" />
                    </motion.div>
                  </div>
                  <span className="absolute  bottom-0 p-4 text-white text-2xl">
                    {item?.attributes?.title}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
