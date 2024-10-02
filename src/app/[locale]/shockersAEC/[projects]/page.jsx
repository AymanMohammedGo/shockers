"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import {
  getProjects,
  getCategoriesProject,
} from "../../../../../utils/ShockersApi";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Keyboard } from "swiper/modules";
const Projects = ({ params: { locale, projects } }) => {
  const router = useRouter();
  const lanID = {
    en: 0,
    ar: 0,
    af: 0,
  };

  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }

  const { t } = useTranslation();

  const [nameCat, setNameCat] = useState();
  const [projectsCat, setProjectsCat] = useState();
  const assignLocalizationIDs = (locale, id, localizations) => {
    lanID[locale] = id;
    localizations.forEach((localization) => {
      const loc = localization.attributes.locale;
      if (loc === "af") {
        lanID.af = localization.id;
      } else if (loc === "ar") {
        lanID.ar = localization.id;
      } else if (loc === "en") {
        lanID.en = localization.id;
      }
      console.log(lanID);
    });
    if (lan === "ar") {
      router.push(`/shockersAEC/${lanID.ar}`);
    } else if (lan === "en") {
      router.push(`/shockersAEC/${lanID.en}`);
    } else {
      router.push(`/shockersAEC/${lanID.af}`);
    }
  };

  const getCategoriesProject_ = useCallback(() => {
    getCategoriesProject(lan, projects).then((res) => {
      if (res.data) {
        const { locale, localizations } = res.data.data.attributes;
        assignLocalizationIDs(locale, res.data.data.id, localizations.data);
      }
    });
  }, [lan, projects]);

  const getProjects_ = useCallback(() => {
    getProjects(lan, projects)
      .then((res) => {
        if (!res.data) {
          router.push(`/en/shockersAEC`);
        } else {
          setNameCat(res.data.data?.attributes?.title);
          setProjectsCat(res.data.data?.attributes?.shockers_projects?.data);
        }
      })
      .catch(() => {
        router.push(`/en/shockersAEC`);
      });
  }, [lan, projects, router]);
  useEffect(() => {
    getProjects_();
    getCategoriesProject_();
  }, [getProjects_, getCategoriesProject_]);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

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
    console.log(swiper.activeIndex, swiper.slides.length);
    if (swiper.activeIndex === swiper.slides.length - 1) {
      swiper.mousewheel.disable();
      document.body.style.overflow = "auto";
      window.scrollTo(0, 1);
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
      <Draw_S speed={4} animationData={S_json} />
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
          <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
            <motion.h1
              initial={{ x: "-100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 0.3,
              }}
              className="w-full break-words p-2 absolute text-center lg:text-start !leading-[65px] md:!leading-[145px] left-0 bottom-7 lg:bottom-14 text-6xl md:text-8xl lg:text-9xl font-extrabold m-auto lg:mb-10 text-seconds"
            >
              {nameCat}
            </motion.h1>
          </div>
        </SwiperSlide>

        {projectsCat
          ?.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
          .map((item, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <Link href={`/shockersAEC/${projects}/${item.id}`}>
                <ImageOverlaysCenter
                  title={item?.attributes?.name}
                  imgURl={item?.attributes?.imgURl?.data?.attributes.url}
                />
              </Link>
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

export default Projects;
