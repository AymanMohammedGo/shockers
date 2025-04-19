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
import { Navigation } from "swiper/modules";
import { FreeMode } from "swiper/modules";
import ImageOverlaysCenter from "./ImageOverlaysCenter";

export default function SlideProjectsOneItems({ allProjects, link }) {
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
      }, 1000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-primary ">
      <div id="projects" className=" w-screen h-screen">
        <Swiper
          className={`${link} w-full h-full`}
          ref={swiperRef}
          freeMode={true}
          navigation={true}
          // modules={[FreeMode, Navigation]}
          modules={[Navigation]}
        >
          {allProjects
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative w-full h-full overflow-hidden"
              >
                <Link href={`/${link}/${item?.id}`}>
                  <ImageOverlaysCenter
                    title={item?.name}
                    imgURl={item?.imgURLHome?.url}
                  />
                  {/* <div className="relative w-full h-full overflow-hidden ">
                    <motion.div
                      className="relative w-full h-full overflow-hidden"
                      initial={{ scale: 1.15 }}
                      whileHover={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <Image
                        className="object-cover"
                        src={
                          item?.imgURLHome?.data?.url
                        }
                        fill={true}
                        alt={item.id}
                        quality={75}
                      />
                      <div className="bg-black bg-opacity-20 w-full h-full absolute top-0" />

                      <div className="absolute  inset-0 image-gradient" />
                    </motion.div>
                  </div>
                  <span className="absolute text-center w-full  bottom-5 p-4 text-white text-2xl lg:text-3xl xl:text-4xl">
                    {item?.name}
                  </span> */}
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
