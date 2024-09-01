"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Draw_S from "@/components/Lottie/Draw_S";
import ComingSoonBG from "/public/Motion/ComingSoonBG";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation } from "swiper/modules";

const VideoItem = ({ src, title }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="relative w-full h-full bg-shockersAEC">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          loop
          muted
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <span className="absolute text-center w-full bottom-0 p-4 text-white text-2xl">
        {title}
      </span>
    </div>
  );
};
export default function SlideCategories({ categoriesProjects, link }) {
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
  const validProjects = categoriesProjects?.filter(
    (item) => item?.attributes?.shockers_projects?.data?.length > 0
  );
  const invalidProjects = categoriesProjects?.filter(
    (item) => item?.attributes?.shockers_projects?.data?.length === 0
  );
  return (
    <div className="   bg-primary ">
      <div id="projects" className=" w-screen h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="flex-grow my-5 md:my-10 lg:my-20">
            <Swiper
              className="w-full h-full  "
              ref={swiperRef}
              slidesPerView={1.1}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode]}
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
              {validProjects?.map((item, index) => (
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
                          src={item?.attributes?.imgURL?.data?.attributes?.url}
                          layout="fill"
                          alt={item.id}
                          quality={75}
                        />
                        <div className="bg-black bg-opacity-20 w-full h-full absolute top-0" />
                        <div className="absolute  inset-0 image-gradient" />
                      </motion.div>
                    </div>
                    <span className="absolute text-center w-full  bottom-0 p-4 text-white text-2xl">
                      {item?.attributes?.title}
                    </span>
                  </Link>
                </SwiperSlide>
              ))}
              {invalidProjects?.map((item, index) => (
                <SwiperSlide key={index} className="relative">
                  <VideoItem
                    key={index}
                    src="/ComingSoon.mp4"
                    title={item?.attributes?.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
