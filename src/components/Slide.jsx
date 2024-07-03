"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "@/styles/slide.css";
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
    <div className="w-screen height_40px flex justify-items-center	 items-center 		">
      <Swiper
        modules={[Pagination]}
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        pagination={{
          type: "progressbar",
        }}
        breakpoints={{
          824: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              className="rounded-lg "
              src="/assets/logo.jpg"
              alt="brand"
              width={400}
              height={200}
            />
            <div className="absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="rounded-lg"
                src="/assets/hover.jpg"
                alt="hovered image"
                width={400}
                height={200}
              />
              <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                Architectural
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              className="rounded-lg "
              src="/assets/logo.jpg"
              alt="brand"
              width={400}
              height={200}
            />
            <div className="absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="rounded-lg"
                src="/assets/hover.jpg"
                alt="hovered image"
                width={400}
                height={200}
              />
              <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                Architectural
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="relative">
            <Image
              className="rounded-lg "
              src="/assets/logo.jpg"
              alt="brand"
              width={400}
              height={200}
            />
            <div className="absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="rounded-lg"
                src="/assets/hover.jpg"
                alt="hovered image"
                width={400}
                height={200}
              />
              <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                Architectural
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="relative">
            <Image
              className="rounded-lg "
              src="/assets/logo.jpg"
              alt="brand"
              width={400}
              height={200}
            />
            <div className="absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="rounded-lg"
                src="/assets/hover.jpg"
                alt="hovered image"
                width={400}
                height={200}
              />
              <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                Architectural
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="relative">
            <Image
              className="rounded-lg "
              src="/assets/logo.jpg"
              alt="brand"
              width={400}
              height={200}
            />
            <div className="absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="rounded-lg"
                src="/assets/hover.jpg"
                alt="hovered image"
                width={400}
                height={200}
              />
              <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                Architectural
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="relative">
            <Image
              className="rounded-lg "
              src="/assets/logo.jpg"
              alt="brand"
              width={400}
              height={200}
            />
            <div className="absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                className="rounded-lg"
                src="/assets/hover.jpg"
                alt="hovered image"
                width={400}
                height={200}
              />
              <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                Architectural
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
