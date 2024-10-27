"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "/src/app/[locale]/globals.css";
import { Typewriter } from "react-simple-typewriter";

import Image from "next/image";
const clientsLogo = ({ data }) => {
  console.log(data);

  return (
    <section className="w-screen h-screen ">
      <div className=" text-yMarketing w-full h-full flex-1 p-7  flex flex-col items-center justify-center  ">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-screen-xl mx-auto">
          {data?.attributes?.HOW_ADAPTIVE}
          <span className="text-shockerYellow">
            <Typewriter
              words={[
                data?.attributes?.titleOne ?? "",
                data?.attributes?.titleTwo ?? "",
                data?.attributes?.titleThree ?? "",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <Swiper
          className="w-full  p-2 transition-timing-linear my-10 lg:my-20 xl:my-32"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 5.5,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 6.5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="object-cover rounded-xl"
              src="/img/logo.png"
              width={300}
              height={100}
              alt="logo"
              quality={75}
            />
          </SwiperSlide>
        </Swiper>
        <motion.h1 className="text-xl  lg:text-2xl xl:text-3xl max-w-screen-xl mx-auto  ">
          {data?.attributes?.des_Adaptive}
        </motion.h1>
      </div>
    </section>
  );
};

export default clientsLogo;