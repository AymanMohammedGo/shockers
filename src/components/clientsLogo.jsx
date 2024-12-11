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
const clientsLogo = ({
  data,
  text_color = "text-yMarketing",
  text_active = "text-shockerYellow",
}) => {
  return (
    <section className="w-screen h-screen ">
      <div
        className={`${text_color} w-full h-full flex-1  flex flex-col items-center justify-center `}
      >
        <h1 className="w-full px-7    text-4xl sm:text-[40px] lg:text-5xl FHD125:text-6xl FHD110:text-7xl font-bold max-w-screen-xl mx-auto min-h-[160px] ">
          {data?.attributes?.HOW_ADAPTIVE}
          <span className={`${text_active}`}>
            <Typewriter
              words={[
                data?.attributes?.titleOne ?? "",
                data?.attributes?.titleTwo ?? "",
                data?.attributes?.titleThree ?? "",
              ]}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <Swiper
          className="w-full p-2 transition-timing-linear my-10 lg:my-20 FHD125:my-24 FHD110:my-32"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          slidesPerView={2.5}
          spaceBetween={30}
          modules={[Autoplay]}
          breakpoints={{
            450: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 6.5,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 7.5,
              spaceBetween: 30,
            },
            1700: {
              slidesPerView: 8.5,
              spaceBetween: 30,
            },
            1900: {
              slidesPerView: 9.5,
              spaceBetween: 30,
            },
          }}
        >
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
          {data?.attributes?.logos.data?.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Image
                className="object-cover rounded-xl"
                src={item.attributes.url}
                width={300}
                height={100}
                alt="logo"
                quality={75}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.h1 className="px-7  text-xl w-full  lg:text-2xl xl:text-3xl  max-w-screen-xl mx-auto  ">
          {data?.attributes?.des_Adaptive}
        </motion.h1>
      </div>
    </section>
  );
};

export default clientsLogo;
