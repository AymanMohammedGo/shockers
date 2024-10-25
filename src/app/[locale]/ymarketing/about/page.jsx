"use client";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Draw_YMar from "@/components/Lottie/Draw_YMar";
import YMar_json from "/public/Motion/YMar.json";
import { getAboutUS } from "../../../../../utils/Y_MarketingApi";
import { useRef } from "react";
import AboutTopSection from "@/components/AboutTopVideo";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Keyboard } from "swiper/modules";
const About = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [data, setData] = useState([]);
  const getAboutUS_ = useCallback(() => {
    getAboutUS(lan).then((res) => {
      setData(res.data.data);
    });
  }, [lan]);

  useEffect(() => {
    getAboutUS_();
  }, [getAboutUS_]);
  const ref = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = useRef([]);
  const { t } = useTranslation();

  const [scrollingDown, setScrollingDown] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const animationVariants = {
    hidden: (direction) => ({
      x: direction === "ltr" ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  //button scroll top
  const [isVisible, setIsVisible] = useState(false);

  const handleGoToFirstSlide = () => {
    if (swiperInstance) {
      // document.body.style.overflow = "auto";
      window.scrollTo(0, 1);
      swiperInstance.update();
      // swiperInstance.mousewheel.enable();
      swiperInstance.slideTo(0, 2000);
      // setTimeout(() => {
      //   window.scrollTo(0, 0);
      // }, 2000);
    }
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

  //Moving mouse

  const handleTransitionEnd = useCallback((swiper) => {
    if (swiper.activeIndex === swiper.slides.length - 1) {
      swiper.mousewheel.disable();
      document.body.style.overflow = "auto";
    } else if (swiper.activeIndex === 0) {
      //swiper.mousewheel.disable();
      //document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    } else {
      swiper.mousewheel.enable();
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 1);
    }
  }, []);
  const handleWheel = useCallback((event) => {
    const delta = event.deltaY;
    if (delta > 0) {
      setScrollingDown(true);
      window.scrollTo(0, 1);
    } else {
      setScrollingDown(false);
      window.scrollTo(0, 1);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    if (scrollTop === 0) {
      swiperInstance.mousewheel.enable();
    }
  }, [swiperInstance]);
  useEffect(() => {
    if (swiperInstance) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [swiperInstance, handleScroll]);

  //buttons

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsLastSlide(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  useEffect(() => {
    if (isLastSlide) {
      const handleWheel = (e) => {
        if (e.deltaY > 0) {
          swiperInstance.allowTouchMove = false;
          swiperInstance.allowSlidePrev = false;
          swiperInstance.allowSlideNext = false;
        }
        if (e.deltaY < 0) {
          swiperInstance.allowTouchMove = true;
          swiperInstance.allowSlidePrev = true;
          swiperInstance.allowSlideNext = true;
        }
      };

      const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
          swiperInstance.allowTouchMove = false;
          swiperInstance.allowSlidePrev = false;
          swiperInstance.allowSlideNext = false;
        }
        if (e.key === "ArrowUp") {
          swiperInstance.allowTouchMove = true;
          swiperInstance.allowSlidePrev = true;
          swiperInstance.allowSlideNext = true;
        }
      };

      window.addEventListener("wheel", handleWheel);
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("keydown", handleKeyDown);
        swiperInstance.allowTouchMove = true;
        swiperInstance.allowSlidePrev = true;
        swiperInstance.allowSlideNext = true;
      };
    }
  }, [isLastSlide, swiperInstance]);

  //Mobile

  const [isFirstSlide, setIsFirstSlide] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsLastSlide(swiperInstance.isEnd);
        setIsFirstSlide(swiperInstance.isBeginning);
      });
    }
  }, [swiperInstance]);

  useEffect(() => {
    if (swiperInstance) {
      let startY = 0;
      let endY = 0;

      const handleTouchStart = (e) => {
        startY = e.touches[0].clientY;
      };

      const handleTouchMove = (e) => {
        endY = e.touches[0].clientY;
        const deltaY = endY - startY;
        console.log(deltaY);
        if (isLastSlide && deltaY < -200) {
          swiperInstance.allowTouchMove = false;
          window.scrollTo(0, 650);
        } else if (isFirstSlide && deltaY > +200) {
          swiperInstance.allowTouchMove = false;
          window.scrollTo(0, 0);
        } else {
          swiperInstance.allowTouchMove = true;
        }
      };

      const handleTouchEnd = () => {
        swiperInstance.allowTouchMove = true;
      };

      swiperInstance?.el?.addEventListener("touchstart", handleTouchStart);
      swiperInstance?.el?.addEventListener("touchmove", handleTouchMove);
      swiperInstance?.el?.addEventListener("touchend", handleTouchEnd);

      return () => {
        if (swiperInstance) {
          swiperInstance?.el?.removeEventListener(
            "touchstart",
            handleTouchStart
          );
          swiperInstance?.el?.removeEventListener("touchmove", handleTouchMove);
          swiperInstance?.el?.removeEventListener("touchend", handleTouchEnd);
        }
      };
    }
  }, [isLastSlide, isFirstSlide, swiperInstance]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Swiper
        onSwiper={setSwiperInstance}
        className="w-screen h-screen"
        direction={"vertical"}
        speed={1000}
        grabCursor={true}
        modules={[Mousewheel, Keyboard]}
        mousewheel={{
          releaseOnEdges: true,
        }}
        keyboard={{
          releaseOnEdges: true,
        }}
        onWheel={handleWheel}
        onTransitionEnd={handleTransitionEnd}
      >
        <SwiperSlide className="relative w-full h-full">
          <AboutTopSection
            link="ymarketing"
            videoMobile="/y marketing website video mobile.mp4"
            videoLoptap="/y marketing website video.mp4"
            dir={document.dir}
          />
        </SwiperSlide>

        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div
              ref={(el) => (sectionRefs.current[index] = el)}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="px-4 h-screen text-shockersAEC flex flex-col items-start"
            >
              <div className="absolute h-screen w-full">
                <Draw_YMar
                  animationData={YMar_json}
                  delay={500}
                  speed={0.4}
                  postion={"absolute right-0"}
                />
              </div>

              <div className="relative max-w-screen-xxl m-auto flex flex-col items-start overflow-hidden">
                <motion.div className="absolute h-full hidden sm:flex top-0 left-[calc(100px + 10px)] w-[5px] bg-shockersAEC z-10" />

                <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
                  <div className="relative flex items-center z-10 w-full ">
                    {/* الخط الأفقي والدائرة */}
                    <motion.div
                      initial={{
                        x: document.dir === "ltr" ? "-100%" : "100%",
                        opacity: 0,
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                      }}
                      className="relative  items-center hidden sm:flex"
                    >
                      <div className="w-0 md:w-[50px] lg:w-[100px] h-[5px] bg-shockersAEC"></div>
                      <div className="relative">
                        <div
                          className={`w-[20px] h-[20px] rounded-full bg-shockersAEC ${
                            document.dir === "ltr"
                              ? " -ml-[10px]"
                              : " -mr-[10px]"
                          }`}
                        ></div>
                      </div>
                    </motion.div>
                    {/* العنوان */}
                    <motion.h2
                     custom={document.dir}
                     variants={animationVariants}
                     initial="hidden"
                     whileInView="visible"
                      className="sm:mx-4 w-full text-shockersAEC font-bold text-4xl md:text-5xl lg:text-6xl my-3 lg:mb-6 !leading-[50px] lg:!leading-[70px]"
                    >
                      {item?.attributes.title}
                    </motion.h2>
                  </div>
                  {/* النص */}
                  <motion.p
                    custom={document.dir}
                    variants={animationVariants}
                    initial="hidden"
                    whileInView="visible"
                    className={`${
                      document.dir === "ltr"
                        ? "sm:ml-[26px] md:ml-[78px] lg:ml-[130px]"
                        : "sm:mr-[26px] md:mr-[78px] lg:mr-[130px]"
                    } text-justify hyphens-auto text-shockersAEC text-xl lg:text-2xl mb-3 lg:mb-0 !leading-8 lg:!leading-10`}
                  >
                    {item?.attributes.description}
                  </motion.p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
    </motion.div>
  );
};

export default About;