"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { getProjects } from "../../../../../utils/ShockyApi";
import Image from "next/image";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Autoplay } from "swiper/modules";

const Projects = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [data, setData] = useState([]);
  const getProjects_ = useCallback(() => {
    getProjects(lan).then((res) => {
      setData(res.data.data.attributes);
    });
    window.scrollTo({
      top: (0.5 / 100) * window.innerHeight,
      behavior: "smooth", // التمرير السلس
    });
  }, [lan]);
  useEffect(() => {
    getProjects_();
  }, [getProjects_]);
  const numberOfProjects = 12;
  const projects = useMemo(() => {
    const totalImages =
      data?.images?.data?.map((item) => item?.attributes.url) || [];
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
  //button scroll top
  const [isVisible, setIsVisible] = useState(false);

  const handleGoToFirstSlide = () => {
    window.scrollTo(0, 0);
    // if (swiperInstance) {

    //   swiperInstance.update();
    //   // swiperInstance.mousewheel.enable();
    //   swiperInstance.slideTo(0, 2000);
    //   // setTimeout(() => {
    //   //   window.scrollTo(0, 0);
    //   // }, 2000);
    // }
  };
  const toggleVisibility = () => {
    if (window.pageYOffset >= 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <section className="w-screen h-screen">
      <div className="bg-shocky w-full h-full flex items-center justify-center relative z-10">
        <div className="flex w-full h-full flex-col  justify-center items-center lg:px-2 overflow-hidden">
          <div className="text-white w-full h-full flex flex-1 p-3 md:p-7 flex-col md:flex-row lg:max-h-[800px]">
            <div className="grid grid-cols-3 md:grid-cols-6 md:grid-rows-3 gap-3 md:gap-4 w-full  h-full p-0 md:p-4">
              {projects.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={
                    i === 0 || i == 6
                      ? "col-span-2 row-span-2 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                      : "col-span-1 row-span-1 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
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
                    direction={Math.random() > 0.5 ? "vertical" : "horizontal"}
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
                          src={img}
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
      <div className="fixed  bottom-2 right-2 lg:bottom-8 lg:right-8 z-30">
        {isVisible && (
          <button
            onClick={handleGoToFirstSlide}
            className="p-3 rounded-full   text-white  bg-shockersAEC/20  shadow-2xl   transition-transform transform hover:scale-110 focus:outline-none "
            style={{ transition: "transform 0.2s ease-in-out" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-arrow-up"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m16 12-4-4-4 4" />
              <path d="M12 16V8" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
