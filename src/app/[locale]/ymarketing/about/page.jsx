"use client";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Draw_YMar from "@/components/Lottie/Draw_YMar";
import Draw_YAbout from "@/components/Lottie/Draw_YAbout";
import YMar_json from "/public/Motion/y Bg.json";
import about_us_json from "/public/Motion/about us.json";
import mission_json from "/public/Motion/mission.json";
import vision1_json from "/public/Motion/vision1.json";
import value_json from "/public/Motion/value.json";
import staff_json from "/public/Motion/staff.json";
import yearsExperience_json from "/public/Motion/years of experience2.json";
import { useSearchParams, usePathname } from "next/navigation";

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

  const searchParams = useSearchParams();
  const pathname = usePathname();
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
  // when open page project
  const handleGoToBeforeLastSlide = (number) => {
    if (swiperInstance) {
      window.scrollTo(0, 2);
      swiperInstance.update();

      const lastSlideIndex = swiperInstance.slides.length - number;
      swiperInstance.slideTo(lastSlideIndex, 2000);
    }
  };
  const [urlParams, setUrlParams] = useState(
    new URLSearchParams(window.location.search)
  );
  useEffect(() => {
    const search = searchParams.get("projects");
    const searchClient = searchParams.get("clients");
    const scroll = searchParams.get("scroll");

    if (search === "show") {
      setTimeout(() => {
        handleGoToBeforeLastSlide(2);
      }, 0);
    }
    if (searchClient === "show") {
      setTimeout(() => {
        handleGoToBeforeLastSlide(3);
      }, 0);
    }
    if (scroll === "show") {
      setTimeout(() => {
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
          // إذا كان الجهاز iPhone
          window.scrollTo(0, -60);
        } else {
          // إذا لم يكن iPhone
          window.scrollTo(0, 0);
        }
      }, 0);
    }
  }, [urlParams, searchParams, pathname, swiperInstance]);

  // button scroll top
  // const [isVisible, setIsVisible] = useState(false);

  const handleGoToFirstSlide = () => {
    const url = new URL(window.location);
    const scroll = new URLSearchParams(url.search);
    scroll.delete("scroll");
    scroll.delete("projects");
    scroll.delete("clients");

    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });

    // إعادة تعيين المعاملة إلى قيمة مؤقتة
    scroll.set("scroll", "temp");
    url.search = scroll.toString();
    window.history.pushState({}, "", url);
    setUrlParams(new URLSearchParams(url.search));

    // تحديث المعاملة إلى القيمة النهائية
    scroll.set("scroll", "show");
    url.search = scroll.toString();
    window.history.pushState({}, "", url);
    if (swiperInstance) {
      swiperInstance.update();
      swiperInstance.slideTo(0, 2000);
    }
    setUrlParams(new URLSearchParams(url.search));
  };
  // const handleGoToFirstSlide = () => {
  //   // if (swiperInstance) {
  //   //   // document.body.style.overflow = "auto";

  //   //   swiperInstance.update();
  //   //   swiperInstance.slideTo(0, 2000);

  //   //   // window.scrollTo(0, 2);
  //   //   // swiperInstance.mousewheel.enable();
  //   //   // setTimeout(() => {
  //   //   //   window.scrollTo(0, 0);
  //   //   // }, 2000);
  //   // }
  //   document.body.style.overflow = "hidden";
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  // // const toggleVisibility = () => {
  // //   if (window.pageYOffset >= 1) {
  // //     setIsVisible(true);
  // //   } else {
  // //     setIsVisible(false);
  // //   }
  // // };
  // const toggleVisibility = () => {
  //   requestAnimationFrame(() => {
  //     if (window.pageYOffset >= 1) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //Moving mouse

  const handleTransitionEnd = useCallback((swiper) => {
    // window.alert(swiper.activeIndex);
    if (swiper.activeIndex === swiper.slides.length - 1) {
      swiper.mousewheel.disable();
      document.body.style.overflow = "auto";
    } else if (swiper.activeIndex === 0) {
      //swiper.mousewheel.disable();
      //document.body.style.overflow = "auto";
      swiper.mousewheel.enable();
      document.body.style.overflow = "hidden";
      if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        // إذا كان الجهاز iPhone
        window.scrollTo(0, -60);
      } else {
        // إذا لم يكن iPhone
        window.scrollTo(0, 0);
      }
    } else {
      swiper.mousewheel.enable();
      document.body.style.overflow = "hidden";

      window.scrollTo(0, 2);

      // window.scrollTo(0, 55);
    }
  }, []);
  const handleWheel = useCallback((event) => {
    const delta = event.deltaY;
    if (delta > 0) {
      setScrollingDown(true);
      window.scrollTo(0, 2);
    } else {
      setScrollingDown(false);
      window.scrollTo(0, 2);
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
        e.preventDefault();
        endY = e.touches[0].clientY;
        const deltaY = endY - startY;
        if (isLastSlide && deltaY < -200) {
          swiperInstance.allowTouchMove = false;
          window.scrollTo(0, 650);
        } else if (isFirstSlide && deltaY > +200) {
          // console.log(isFirstSlide, deltaY);
          // window.alert(window.scrollY);
          // window.alert(deltaY);
          window.setTimeout(() => {
            window.scrollTo(0, 0);
          }, 50); ////////////////////////////////////////////////////
          // document.documentElement.scrollTop = 0;
          // document.body.scrollTop = 0;
          swiperInstance.allowTouchMove = false;
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
            title={t("YMARKETING")}
            videoMobile="/Y website mobile version1.mp4"
            videoLoptap="/Y website PC version1.mp4"
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
                <div
                  className={`flex flex-col ${
                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  }   items-center justify-center md:justify-between h-screen overflow-hidden`}
                >
                  <motion.div
                    custom={document.dir}
                    variants={animationVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="relative w-full md:w-3/5 flex flex-col  z-10 "
                  >
                    <h2 className="relative border-b-8 w-fit text-shockersAEC font-bold text-4xl md:text-5xl lg:text-6xl my-3 lg:mb-6 !leading-[50px] lg:!leading-[70px]">
                      <span className="relative z-10 ">
                        {item?.attributes.title}
                      </span>
                      {/* <span className="absolute left-0 bottom-2 h-5 bg-shockerYellow w-full -z-10"></span>*/}
                    </h2>

                    <p
                      className={`text-justify hyphens-auto text-shockersAEC text-xl lg:text-2xl mb-3 lg:mb-0 !leading-8 lg:!leading-10`}
                    >
                      {item?.attributes.description}
                    </p>
                  </motion.div>
                  <motion.div
                    custom={document.dir}
                    variants={animationVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <Draw_YAbout
                      animationData={
                        index === 0
                          ? about_us_json
                          : index === 1
                          ? yearsExperience_json
                          : index === 2
                          ? mission_json
                          : index === 3
                          ? vision1_json
                          : index === 4
                          ? value_json
                          : staff_json
                      }
                    />
                  </motion.div>
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
