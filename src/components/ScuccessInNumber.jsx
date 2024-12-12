"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "/src/app/[locale]/globals.css";
// import required modules
import { Scrollbar } from "swiper/modules";
import CountUp from "react-countup";
const ScuccessInNumber = ({
  data,
  title,
  bg,
  link,
  tc,
  dir,
  groupHover,
  tc2,
}) => {
  const var1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);
  ///
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="w-screen h-screen ">
      <div className="w-full h-full flex items-center justify-center relative z-10">
        <div className="flex  w-full h-full flex-col xl:flex-row justify-center items-center lg:px-2 overflow-hidden">
          <div className=" text-white  w-full h-full  p-3 sm:p-7  flex flex-col items-center justify-center max-w-screen-xlgl ">
            <motion.h1
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={var1}
              className={`text-[45px]  ${tc} text-center sm:text-6xl lg:text-[65px] FHD125:text-7xl FHD110:text-8xl font-bold mb-0 sm:mb-6 md:mb-8 lg:mb-12 FHD125:mb-16 FHD110:mb-20`}
            >
              {data?.attributes?.title}
            </motion.h1>
            <Swiper
              className="w-full p-0 sm:p-2 transition-timing-linear"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              //speed={3000}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              modules={[Autoplay]}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <div
                  ref={ref}
                  className={`group h-full  relative bg-transparent  overflow-hidden ${tc} w-full   pt-6 pb-3 lg:pb-6 px-4 sm:px-6 hover:text-white flex flex-col items-center  transition-all duration-300 ease-in-out`}
                >
                  {/* الخلفية المتحركة */}
                  <div
                    className={`absolute inset-1 ${bg}  transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0`}
                  ></div>

                  {/* المحتوى */}
                  <div className="relative z-10 flex w-full">
                    <span
                      className={`relative w-fit flex items-end font-extrabold text-6xl lg:text-7xl FHD125:text-8xl FHD110:text-9xl  pb-3`}
                    >
                      {inView ? (
                        <CountUp
                          start={0}
                          end={data?.attributes?.numberOne || 0}
                          duration={3}
                          // separator=","
                        />
                      ) : (
                        0
                      )}
                    </span>
                    <span
                      className={`relative flex items-end font-bold w-full text-2xl lg:text-[28px] FHD125:text-3xl FHD110:text-4xl pb-5 ${groupHover}`}
                    >
                      {data?.attributes?.subNumberOne}
                    </span>
                  </div>
                  <span
                    className={`relative font-medium w-full text-xl lg:text-2xl FHD125:text-3xl FHD110:text-4xl  sm:py-5 pt-3 pb-3 ${groupHover}`}
                  >
                    {data?.attributes?.titleOne}
                  </span>
                  <span
                    className={`relative w-full text-base lg:text-lg FHD125:text-xl FHD110:text-2xl min-h-[236px]`}
                  >
                    {data?.attributes?.desOne}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`group relative bg-transparent h-full overflow-hidden ${tc} w-full  pt-6 pb-3 lg:pb-6 px-4 sm:px-6 hover:text-white flex flex-col items-center  transition-all duration-300 ease-in-out`}
                >
                  {/* الخلفية المتحركة */}
                  <div
                    className={`absolute inset-1 ${bg} transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0`}
                  ></div>

                  {/* المحتوى */}
                  <div className="relative z-10 flex w-full">
                    <span
                      className={`relative w-fit flex items-end font-extrabold text-6xl lg:text-7xl FHD125:text-8xl FHD110:text-9xl pb-3`}
                    >
                      {inView ? (
                        <CountUp
                          start={0}
                          end={data?.attributes?.numberTwo || 0}
                          duration={3}
                          // separator=","
                        />
                      ) : (
                        0
                      )}
                      <span className={`${tc2}`}>+</span>
                    </span>
                  </div>
                  <span
                    className={`relative font-medium w-full text-xl lg:text-2xl FHD125:text-3xl FHD110:text-4xl sm:py-5 pt-3 pb-3 ${groupHover}`}
                  >
                    {data?.attributes?.titleTwo}
                  </span>
                  <span
                    className={`relative w-full text-base lg:text-lg FHD125:text-xl FHD110:text-2xl pb-3 min-h-[236px]`}
                  >
                    {data?.attributes?.desTwo}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`group relative bg-transparent h-full overflow-hidden ${tc} w-full pt-6 pb-3 lg:pb-6 px-4 sm:px-6 hover:text-white flex flex-col items-center  transition-all duration-300 ease-in-out`}
                >
                  {/* الخلفية المتحركة */}
                  <div
                    className={`absolute inset-1 ${bg} transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0`}
                  ></div>

                  {/* المحتوى */}
                  <div className="relative z-10 flex w-full">
                    <span
                      className={`relative w-fit flex items-end font-extrabold text-6xl lg:text-7xl FHD125:text-8xl FHD110:text-9xl pb-3`}
                    >
                      {inView ? (
                        <CountUp
                          start={0}
                          end={data?.attributes?.numberThree || 0}
                          duration={3}
                          // separator=","
                        />
                      ) : (
                        0
                      )}
                      <span className={`${tc2}`}>+</span>
                    </span>
                  </div>
                  <span
                    className={`relative font-medium w-full text-xl lg:text-2xl FHD125:text-3xl FHD110:text-4xl sm:py-5 pt-3 pb-3 ${groupHover}`}
                  >
                    {data?.attributes?.titleThree}
                  </span>
                  <span
                    className={`relative w-full text-base lg:text-lg FHD125:text-xl FHD110:text-2xl pb-3 min-h-[236px] `}
                  >
                    {data?.attributes?.desThree}
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScuccessInNumber;
