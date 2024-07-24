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
      imageLogo: "/assets/MainPage/shockers.svg",
      imageHoverLogo: "/assets/MainPage/shockers.svg",
      bgColorHover: "hover:bg-shockersAECYellow",
      textHover: "Dare to be shocked",
      duration: 1,
      delay: 0.5,
      hoverIndex: 1,
      textColor: "text-seconds",
    },
    {
      name: "BAYTUNA",
      link: "/baytuna",
      imageLogo: "/assets/MainPage/Baytuna.svg",
      imageHoverLogo: "/assets/MainPage/BaytunaWhite.svg",
      bgColorHover: "hover:bg-baytuna",
      textHover: "Where your house becomes your home",
      duration: 2,
      delay: 1,
      hoverIndex: 2,
      textColor: "text-white",
    },
    {
      name: "YARD",
      link: "#",
      // "/yard"
      imageLogo: "/assets/MainPage/yard.svg",
      imageHoverLogo: "/assets/MainPage/yard.svg",
      bgColorHover: "hover:bg-yard",
      textHover: "Ever Green",
      duration: 2,
      delay: 1.5,
      hoverIndex: 3,
      textColor: "text-seconds",
    },
    {
      name: "DECA",
      link: "#",
      // "deca"
      imageLogo: "/assets/MainPage/Deca.svg",
      imageHoverLogo: "/assets/MainPage/DecaWhite.svg",
      textHover: "Where Details Matter",
      bgColorHover: "hover:bg-deca",
      duration: 2,
      delay: 2,
      hoverIndex: 4,
      textColor: "text-white",
    },
    {
      name: "YMARKETING",
      link: "#",
      // "/ymarketing"
      imageLogo: "/assets/MainPage/yMarketing.svg",
      imageHoverLogo: "/assets/MainPage/yMarketingYellow.svg",
      bgColorHover: "hover:bg-yMarketing",
      textHover: "Because You Need It",
      duration: 2,
      delay: 2.5,
      hoverIndex: 5,
      textColor: "text-shockerYellow",
    },
    {
      name: "SHOCKY",
      link: "#",
      // "/shocky"
      imageLogo: "/assets/MainPage/shocky.svg",
      imageHoverLogo: "/assets/MainPage/shockyWhite.svg",
      bgColorHover: "hover:bg-shocky",
      textHover: "Be The Shock",
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
      <main className="flex items-center justify-center h-screen w-screen bg-primary ">
        <div className=" grid relative w-full h-full  items-center justify-center grid-cols-2  sm:grid-cols-3  ">
          {brond.map((item, index) => (
            <Link
              href={`${item.link}`}
              key={index}
              className={`p-2 flex items-center ${item.bgColorHover} w-full h-full justify-center`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: item.duration,
                  delay: item.delay,
                }}
                className="relative flex items-center w-full h-full justify-center overflow-hidden"
              >
                <Image
                  className={`xlgl:w-[600px] xlgl:h-[600px]  opacity-1 transition-opacity duration-100 ${
                    hoveredIndex === item.hoverIndex &&
                    "opacity-0  transition-opacity duration-100"
                  }`}
                  src={`${item.imageLogo}`}
                  alt={`${item.name}`}
                  width={420}
                  height={420}
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.02 }}
                  transition={{
                    duration: 0.5,
                  }}
                  onMouseEnter={() => setHoveredIndex(item.hoverIndex)}
                  onMouseLeave={() => setHoveredIndex(0)}
                  className={`absolute top-0 w-full h-full  overflow-hidden left-0  flex items-center justify-center  opacity-0   hover:opacity-100 transition-opacity duration-100`}
                >
                  <Image
                    className=" xlgl:w-[600px] xlgl:h-[600px] "
                    src={item.imageHoverLogo}
                    alt={item.name}
                    width={420}
                    height={420}
                  />
                </motion.div>
                <motion.div
                  initial={{ bottom: 0 }}
                  animate={
                    hoveredIndex === item.hoverIndex
                      ? { bottom: 0 }
                      : { bottom: -60 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0,
                  }}
                  className={`${item.textColor}  absolute mb-3 font-medium  text-center   text-sm sm:text-lg md:text-2xl xlgl:text-3xl   overflow-hidden`}
                >
                  {item.textHover}
                </motion.div>
              </motion.div>
            </Link>
          ))}
          {/* gap */}
          <motion.div
            className="hidden sm:flex bg-seconds h-[5px] absolute z-10 left-0"
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
          />

          <motion.div
            className="hidden sm:flex bg-seconds w-[5px] absolute top-0 left-1/3 z-10"
            animate={{
              height: ["0%", "100%"],
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          />
          <motion.div
            className="hidden sm:flex bg-seconds w-[5px] absolute top-0 right-1/3 z-10"
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
            className="flex sm:hidden bg-seconds h-[4px] absolute z-10 top-1/3"
            animate={{
              width: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          />
          <motion.div
            className="flex sm:hidden bg-seconds h-[4px] absolute z-10 bottom-1/3"
            animate={{
              width: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
            }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
          />
          <motion.div
            className="flex sm:hidden bg-seconds w-[4px] absolute z-10 left-1/2  top-0"
            animate={{
              height: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
            }}
            transition={{
              duration: 3,
              delay: 0.5,
            }}
          />
        </div>
      </main>
      {/* )} */}
    </>
  );
};
export default Home;
