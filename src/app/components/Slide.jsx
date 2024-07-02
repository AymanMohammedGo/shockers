"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "@/app/styles/slide.css";
const MySwiper = () => {
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
      }, 250);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex justify-items-center	 items-center bg-slate-950		">
      <Swiper
        modules={[Pagination]}
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        pagination={{
          type: "progressbar",
        }}
      >
        <SwiperSlide>
          <Image
            className="rounded-lg

"
            src="/assets/logo.jpg"
            alt="brand"
            width={400}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            src="/assets/logo.jpg"
            alt="brand"
            width={400}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            src="/assets/logo.jpg"
            alt="brand"
            width={400}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            src="/assets/logo.jpg"
            alt="brand"
            width={400}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            src="/assets/logo.jpg"
            alt="brand"
            width={400}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            src="/assets/logo.jpg"
            alt="brand"
            width={400}
            height={200}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
