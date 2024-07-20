"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LoadingVideo from "../../components/LoadingVideo";
const Home = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const brond = [
    {
      name: "shockersAEC",
      link: "/shockersAEC",
      imageLogo: "/assets/SHOCKERS.svg",
      imageHoverLogo: "/assets/SHOCKERS1.svg",
      textHover: "Dared To Be Shocked",
      bottomText: 0,
      duration: 1,
      delay: 0.5,
      hoverIndex: 1,
      textColor: "text-seconds",
    },
    {
      name: "BAYTUNA",
      link: "/baytuna",
      imageLogo: "/assets/BAYTUNA.svg",
      imageHoverLogo: "/assets/BAYTUNA1.svg",
      textHover: " When Your House ",
      textHoverLine2: "Becomes Your Home",
      bottomText: -7,
      duration: 2,
      delay: 1,
      hoverIndex: 2,
      textColor: "text-white",
    },
    {
      name: "YARD",
      link: "#",
      // "/yard"
      imageLogo: "/assets/YARD.svg",
      imageHoverLogo: "/assets/YARD1.svg",
      textHover: "Ever Green",
      bottomText: 0,
      duration: 2,
      delay: 1.5,
      hoverIndex: 3,
      textColor: "text-seconds",
    },
    {
      name: "ECA",
      link: "#",
      // "/eca"
      imageLogo: "/assets/ECA.svg",
      imageHoverLogo: "/assets/ECA1.svg",
      textHover: "Where Details Matter",
      bottomText: 0,
      duration: 2,
      delay: 2,
      hoverIndex: 4,
      textColor: "text-white",
    },
    {
      name: "YMARKETING",
      link: "#",
      // "/ymarketing"
      imageLogo: "/assets/YMARKETING.svg",
      imageHoverLogo: "/assets/YMARKETING1.svg",
      textHover: "Because You Need It",
      bottomText: 0,
      duration: 2,
      delay: 2.5,
      hoverIndex: 5,
      textColor: "text-shockerYellow",
    },
    {
      name: "SHOCKY",
      link: "#",
      // "/shocky"
      imageLogo: "/assets/SHOCKY.svg",
      imageHoverLogo: "/assets/SHOCKY0.svg",
      textHover: "Be The Shock",
      bottomText: 0,
      duration: 2,
      delay: 3,
      hoverIndex: 6,
      textColor: "text-white",
    },
  ];
  return (
    <>
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/done8_2.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <main className="bg-primary ">
        <div class="flex items-center justify-center min-h-screen ">
          <div className=" grid relative  items-center justify-center grid-cols-2  sm:grid-cols-3  ">
            {brond.map((item, index) => (
              <div key={index} className="flex items-center justify-center ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: item.duration,
                    delay: item.delay,
                  }}
                  className="relative "
                >
                  <Link href={`${item.link}`}>
                    <Image
                      className=" xlgl:w-[600px] xlgl:h-[600px]  "
                      src={`${item.imageLogo}`}
                      alt={`${item.name}`}
                      width={420}
                      height={420}
                    />
                    <div
                      onMouseEnter={() => setHoveredIndex(item.hoverIndex)}
                      onMouseLeave={() => setHoveredIndex(0)}
                      className="absolute top-0  overflow-hidden left-0  flex items-center justify-center opacity-0   hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        className=" xlgl:w-[600px] xlgl:h-[600px] object"
                        src={item.imageHoverLogo}
                        alt={item.name}
                        width={420}
                        height={420}
                      />
                      <motion.div
                        initial={{ bottom: -30 }}
                        animate={
                          hoveredIndex === item.hoverIndex
                            ? { bottom: item.bottomText }
                            : { bottom: -30 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0,
                        }}
                        className={`${item.textColor}  absolute mb-3 font-medium  text-center   text-sm sm:text-base md:text-xl xlgl:text-2xl   overflow-hidden`}
                      >
                        {item.textHover}
                        {item.textHoverLine2 && (
                          <div>{item.textHoverLine2}</div>
                        )}
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
            {/* gap */}
            <motion.div
              className="gap-animation   hidden sm:flex bg-seconds h-[5px] absolute z-10 left-0"
              animate={{
                width: ["0%", "100%"],
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
            />

            <motion.div
              className="gap-animation hidden sm:flex bg-seconds w-[5px] absolute top-0 left-1/3 z-10"
              animate={{
                height: ["0%", "100%"],
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            />
            <motion.div
              className="gap-animation hidden sm:flex bg-seconds w-[5px] absolute top-0 right-1/3 z-10"
              animate={{
                height: ["0%", "100%"],
              }}
              transition={{
                duration: 1,
                delay: 1.5,
              }}
            />
            {/* gap Mobile*/}
            <motion.div
              className="gap-animation  flex sm:hidden bg-seconds h-[4px] absolute z-10 top-1/3"
              animate={{
                width: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            />
            <motion.div
              className="gap-animation  flex sm:hidden bg-seconds h-[4px] absolute z-10 bottom-1/3"
              animate={{
                width: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1.5,
              }}
            />
            <motion.div
              className="gap-animation ro  flex sm:hidden bg-seconds w-[4px] absolute z-10 left-1/2 top-0"
              animate={{
                height: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 3,
                delay: 0.5,
              }}
            />
          </div>
        </div>
      </main>
      {/* )} */}
    </>
  );
};
export default Home;
