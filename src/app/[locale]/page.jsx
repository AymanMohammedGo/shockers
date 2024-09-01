"use client";
import { useEffect, useState, useCallback, createRef } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import Link from "next/link";
import Image from "next/image";
import { getName_Solgan } from "../../../utils/GlobleApi";
export default function Home({ params: { locale } }) {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  let animation = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/Motion/Shockers.json",
    });
    anim.addEventListener("complete", () => {
      setIsAnimationCompleted(true); // استدعاء onComplete عند انتهاء الرسوم المتحركة
    });
    return () => anim.destroy();
  }, []);
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [solgan, setSolgan] = useState([]);
  const getName_Solgan_ = useCallback(() => {
    getName_Solgan(lan).then((res) => {
      setSolgan(res.data.data.attributes);
    });
  }, [lan]);
  useEffect(() => {
    getName_Solgan_();
  }, [getName_Solgan_]);

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const brond = [
    {
      name: "shockersAEC",
      link: "/shockersAEC",
      imageLogo: "/img/MainPage/shockers.svg",
      imageHoverLogo: "/img/MainPage/shockers.svg",
      bgColorHover: "hover:bg-shockersAECYellow",
      textHover: solgan.Shockers,
      duration: 1,
      delay: 0.5,
      hoverIndex: 1,
      textColor: "text-seconds",
    },
    {
      name: "BAYTUNA",
      link: "/baytuna",
      imageLogo: "/img/MainPage/Baytuna.svg",
      imageHoverLogo: "/img/MainPage/BaytunaWhite.svg",
      bgColorHover: "hover:bg-baytuna",
      textHover: solgan.Baytuna,
      duration: 2,
      delay: 1,
      hoverIndex: 2,
      textColor: "text-white",
    },
    {
      name: "YARD",
      link: "/yard",
      // "/yard"
      imageLogo: "/img/MainPage/yard.svg",
      imageHoverLogo: "/img/MainPage/yard.svg",
      bgColorHover: "hover:bg-yard",
      textHover: solgan.Yard,
      duration: 2,
      delay: 1.5,
      hoverIndex: 3,
      textColor: "text-seconds",
    },
    {
      name: "DECA",
      link: "/deca",
      // "deca"
      imageLogo: "/img/MainPage/Deca.svg",
      imageHoverLogo: "/img/MainPage/DecaWhite.svg",
      textHover: solgan.Deca,
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
      imageLogo: "/img/MainPage/yMarketing.svg",
      imageHoverLogo: "/img/MainPage/yMarketingYellow.svg",
      bgColorHover: "hover:bg-yMarketing",
      textHover: solgan.Ymarketing,
      duration: 2,
      delay: 2.5,
      hoverIndex: 5,
      textColor: "text-shockerYellow",
    },
    {
      name: "SHOCKY",
      link: "#",
      // "/shocky"
      imageLogo: "/img/MainPage/shocky.svg",
      imageHoverLogo: "/img/MainPage/shockyWhite.svg",
      bgColorHover: "hover:bg-shocky",
      textHover: solgan.Shocky,
      duration: 2,
      delay: 3,
      hoverIndex: 6,
      textColor: "text-white",
    },
  ];
  useEffect(() => {
    if (isAnimationCompleted) {
      setShowContent(true);
    }
  }, [isAnimationCompleted]);
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {!isAnimationCompleted && (
        <div
          className="flex justify-center items-center w-screen h-screen"
          ref={animation}
        />
      )}
      {showContent && (
        <main className="flex items-center justify-center h-screen w-screen bg-primary ">
          <div className=" grid relative w-full h-full  items-center justify-center grid-cols-2  sm:grid-cols-3  ">
            {/* 
            <button
              onClick={async () => {
                await fetch("/en/api/emails", { method: "POST" });
              }}
            >
              SEND EMAIL
            </button> 
            */}
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
                    className={`  opacity-1 transition-opacity duration-100 ${
                      hoveredIndex === item.hoverIndex &&
                      "opacity-0  transition-opacity duration-100"
                    }`}
                    src={`${item.imageLogo}`}
                    alt={`${item.name}`}
                    width={450}
                    height={450}
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
                      // className=" xlgl:w-[600px] xlgl:h-[600px] "
                      src={item.imageHoverLogo}
                      alt={item.name}
                      width={450}
                      height={450}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ bottom: 0, opacity: 1 }}
                    animate={
                      hoveredIndex === item.hoverIndex
                        ? { bottom: 0, opacity: 1 }
                        : { bottom: -65, opacity: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0,
                    }}
                    className={`${item.textColor} whitespace-break-spaces pointer-events-none  absolute  font-medium  text-center xl:mb-1 xxl:mb-3  text-sm sm:text-lg md:text-xl xxl:text-2xl    overflow-hidden`}
                  >
                    {item.textHover}
                  </motion.div>
                </motion.div>
              </Link>
            ))}
            {/* gap */}
            <motion.div
              className="hidden sm:flex bg-shockersAEC h-[5px] absolute z-10 left-0"
              animate={{
                width: ["0%", "100%"],
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
            />

            <motion.div
              className="hidden sm:flex bg-shockersAEC w-[5px] absolute top-0 left-1/3 z-10"
              animate={{
                height: ["0%", "100%"],
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            />
            <motion.div
              className="hidden sm:flex bg-shockersAEC w-[5px] absolute top-0 right-1/3 z-10"
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
              className="flex sm:hidden bg-shockersAEC h-[4px] absolute z-10 top-1/3"
              animate={{
                width: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            />
            <motion.div
              className="flex sm:hidden bg-shockersAEC h-[4px] absolute z-10 bottom-1/3"
              animate={{
                width: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1.5,
              }}
            />
            <motion.div
              className="flex sm:hidden bg-shockersAEC w-[4px] absolute z-10 left-1/2  top-0"
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
      )}
    </div>
  );
}
