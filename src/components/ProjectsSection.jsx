import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Autoplay } from "swiper/modules";
import { Button } from "./ui/button";

const ProjectsSection = ({
  textButton,
  data,
  bg_color = "bg-yMarketing",
  link = "ymarketing",
}) => {
  const numberOfProjects = 6;
  const projects = useMemo(() => {
    const totalImages = data?.images?.map((item) => item?.url) || [];
    if (totalImages.length === 0) return [];

    const imagesPerProject = Math.ceil(totalImages.length / numberOfProjects);
    const shuffledImages = totalImages.sort(() => Math.random() - 0.5);
    return Array.from({ length: numberOfProjects }, (_, index) => ({
      id: index + 1,
      images: shuffledImages.slice(
        index * imagesPerProject,
        (index + 1) * imagesPerProject
      ),
      interval: 3000 + Math.random() * 1000,
    }));
  }, [data]);
  return (
    <section className="w-screen h-screen">
      <div
        className={`${bg_color} w-full h-full flex items-center justify-center relative z-10`}
      >
        <div className="flex w-full h-full flex-col justify-center items-center lg:px-2">
          <div className="text-white w-full h-full flex flex-1 p-3 md:p-7 flex-col md:flex-row lg:max-h-[800px]">
            <div className="w-full h-full md:w-5/12 rounded-xl relative text-white flex-1 mb-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl  FHD125:text-[65px] FHD110:text-7xl font-bold mx-auto lg:my-10 my-3">
                {data?.title}
              </h1>
              <span className="text-base lg:text-lg FHD125:text-xl FHD110:text-2xl">
                {data?.des}
              </span>

              <Link href={`${link}/projects`}>
                <button
                  className={`py-2 px-3 rounded-lg font-medium w-fit block hover:bg-shockersAEC text-shockersAEC bg-white hover:text-white text-xs sm:text-sm lg:text-base my-1 lg:my-5`}
                >
                  {textButton}
                </button>
              </Link>
            </div>

            <div
              // href={`${link}/projects`}
              className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 w-full md:w-7/12 h-full min-h-[50%] p-0 md:p-4"
            >
              {projects.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={
                    i === 0 || i === 6
                      ? "col-span-2 row-span-2  overflow-hidden relative"
                      : "col-span-1 row-span-1 overflow-hidden relative"
                  }
                >
                  <Swiper
                    observer={true}
                    observeParents={true}
                    key={item.id}
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                      shadow: false,
                      slideShadows: false,
                    }}
                    direction={i % 2 === 0 ? "vertical" : "horizontal"}
                    autoplay={{
                      delay: item.interval,
                      disableOnInteraction: false,
                    }}
                    modules={[EffectCube, Autoplay]}
                    className="mySwiper h-full w-full"
                    loop={true}
                    speed={2000}
                  >
                    {item.images.map((img, index) => (
                      <SwiperSlide key={index} className="h-full w-full">
                        <Image
                          src={`https://strapi.shockersgroup.com${img}`}
                          alt=""
                          fill={true}
                          className="transition-transform duration-500 h-full w-full object-cover rounded-lg md:rounded-xl"
                          priority
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
