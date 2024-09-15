"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
const Services8Section = ({ services, title, bg, link, tc, dir }) => {
  const var1 = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
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
  return (
    <section className="w-screen h-screen ">
      <div className="bg-shockersAEC  w-full h-full flex items-center justify-center relative z-10">
        <div className="flex  w-full h-full flex-col xl:flex-row justify-center items-center lg:px-2 overflow-hidden">
          <div className=" text-white w-full h-full flex-1 py-4 sm:py-7 px-7  flex flex-col items-center justify-center ">
            <motion.h1
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={var1}
              className="text-[55px] sm:text-6xl lg:text-8xl font-bold mb-5 sm:mb-10 lg:mb-16 xl:mb-20  "
            >
              {title}
            </motion.h1>
            <ul
              className={`grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4  gap-4 sm:gap-8 lg:gap-12 xl:gap-20  max-w-screen-xlgl lg:w-full `}
            >
              {services.map((item) => (
                <motion.li
                  key={item?.name?.id}
                  initial={{ opacity: 1, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                  }}
                  className="relative hidden sm:block "
                >
                  <div
                    className={`absolute left-0 top-0  
                   w-full h-[10vh] sm:h-[15vh] lg:h-[30vh]  border-white border-2 `}
                  ></div>
                  <Link href={`/${link}/services?serviceId=${item?.name?.id}`}>
                    <div
                      className={`bg-gradient group -translate-x-4 translate-y-4 
                           w-full h-[10vh] sm:h-[15vh] lg:h-[30vh] relative hover:translate-x-0 hover:translate-y-0  ${bg} p-2 text-center ${tc} flex items-center justify-center transition-transform duration-300 ease-in-out`}
                    >
                      <span
                        className={`relative font-medium w-full text-2xl lg:text-3xl xl:text-4xl pb-3 group after:content-[''] after:block after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px]
                             after:transition-[width,left] after:duration-300 after:delay-100 after:ease-in-out group-hover:after:w-[40%]`}
                      >
                        {item?.name?.attributes?.title}
                      </span>
                      <div
                        className={`w-[18px] translate-x-6 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 absolute ${
                          dir === "ltr" ? "right-0" : "left-0"
                        }  bottom-0 m-6 transition-all duration-300 ease-in-out`}
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
                          className={`lucide  ${
                            dir === "ltr"
                              ? "lucide-chevron-right"
                              : "rotate-180"
                          }  `}
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
              {/* Mobile */}
              {services.map((item) => (
                <motion.li
                  key={item?.name?.id}
                  initial={{ opacity: 1, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                  }}
                  className="relative  sm:hidden "
                >
                  {/* <div
                    className={`absolute left-0 top-0  
                   w-full h-[10vh]  border-white border-2 `}
                  ></div> */}
                  <Link href={`/${link}/services?serviceId=${item?.name?.id}`}>
                    <div
                      className={`border-white border-2 text-white group 
                           w-full h-full relative  ${bg} p-2 text-center  flex items-center justify-center transition-transform duration-300 ease-in-out`}
                    >
                      <span
                        className={`relative font-normal w-full text-2xl  group after:content-[''] after:block after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px]
                             after:transition-[width,left] after:duration-300 after:delay-100 after:ease-in-out `}
                      >
                        {item?.name?.attributes?.title}
                      </span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services8Section;
