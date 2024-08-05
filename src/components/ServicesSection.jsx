"use client";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const ServicesSection = ({ services, title, textButton, link, bg, tc }) => {
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

  const var5 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5,
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
    <section className="sticky top-0">
      <div className="bg-shockersAEC  w-screen h-screen flex items-center justify-center relative z-10">
        <div className="flex  w-full h-full flex-col xl:flex-row justify-center items-center lg:px-2 overflow-hidden">
          <div className=" text-white w-full h-full flex-1 p-7  flex flex-col items-center justify-center ">
            <motion.h1
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={var1}
              className="text-[55px] sm:text-6xl lg:text-8xl font-bold mb-10 lg:mb-16 xl:mb-20  "
            >
              {title}
            </motion.h1>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-screen-xl lg:w-full ">
              {services.map((item, index) => (
                <motion.li
                  key={index}
                  ref={ref1}
                  initial="hidden"
                  animate={controls1}
                  variants={item.effect}
                  className="relative group"
                >
                  <div className="absolute left-0 top-0 h-[15vh] md:h-[20vh] lg:h-[60vh] w-full border-white border-2 rounded-md"></div>
                  <Link href="/shockersAEC/services">
                    <div
                      className={`bg-gradient -translate-x-4 translate-y-4 h-[15vh] md:h-[20vh] lg:h-[60vh] relative hover:translate-x-0 hover:translate-y-0 rounded-md ${bg} p-2 text-center ${tc} flex items-center justify-center transition-transform duration-300 ease-in-out`}
                    >
                      <span
                        className={`relative font-medium w-full text-xl lg:min-w-[250px] lg:text-2xl xl:text-3xl group-hover:after:content-[''] group-hover:after:block group-hover:after:absolute group-hover:after:left-1/2 group-hover:after:bottom-0 group-hover:after:-translate-x-1/2 group-hover:after:w-[40%] pb-3 group-hover:after:h-[2px] group-hover:after:bg-shockersAEC transition-all duration-300 ease-in-out`}
                      >
                        {item?.name?.attributes?.title}
                      </span>
                      <div className="w-[18px] translate-x-6 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 absolute right-0 bottom-0 m-6 transition-all duration-300 ease-in-out">
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
                          class="lucide lucide-chevron-right"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
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

export default ServicesSection;
