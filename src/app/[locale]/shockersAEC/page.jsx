"use client";
import SlideCategories from "@/components/SlideCategories";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import {
  getHome,
  getServices,
  getCategoriesProjects,
} from "../../../../utils/ShockersApi";
import { getName_Solgan } from "../../../../utils/GlobleApi";
import { useCallback, useState, useEffect, useRef } from "react";
import "../globals.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

const ShockersHome = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [solgan, setSolgan] = useState([]);
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  const [categoriesProjects, setCategoriesProjects] = useState([]);
  const getName_Solgan_ = useCallback(() => {
    getName_Solgan(lan).then((res) => {
      const newSolgan = [];
      res.data.data?.attributes?.ShockersHome.map((item, index) => {
        newSolgan.push({
          text: item?.children[0].text,
          delay: 2.5 + (index + 1) / 2,
        });
      });
      setSolgan(newSolgan);
    });
  }, [lan]);
  const getHome_ = useCallback(() => {
    getHome(lan).then((res) => {
      setData(res.data.data);
    });
  }, [lan]);
  const getServices_ = useCallback(() => {
    getServices(lan).then((res) => {
      const newServices = res.data.data.map((item, index) => ({
        name: item,
        effect: {
          hidden: { left: "-100%", opacity: 0 },
          visible: {
            opacity: 1,
            left: 0,
            transition: {
              duration: 1,
              delay: 0.3,
            },
          },
        },
      }));
      setServices(newServices);
    });
  }, [lan]);
  const getCategoriesProjects_ = useCallback(() => {
    getCategoriesProjects(lan).then((res) => {
      setCategoriesProjects(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getHome_();
    getServices_();
    getCategoriesProjects_();
    getName_Solgan_();
  }, [getHome_, getServices_, getCategoriesProjects_, getName_Solgan_]);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [actionName, setActionName] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleGoToFirstSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideTo(0, 1000);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 2000);
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

  const handleKeyDown = useCallback((event) => {
    console.log("Key pressed:", event.key);
    if (event.key === "ArrowDown" || event.key === "PageDown") {
      // console.log("a");
      setActionName(true); // يتم تحديث actionName إلى true عند الضغط على ArrowDown
    } else if (event.key === "ArrowUp" || event.key === "PageUp") {
      // console.log("b");
      setActionName(false); // يتم تحديث actionName إلى false عند الضغط على ArrowUp
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  const handleTransitionEnd = useCallback(
    (swiper) => {
      if (swiper.activeIndex === swiper.slides.length - 1) {
        if (scrollingDown) {
          swiper.mousewheel.disable();
          swiper.keyboard.disable();
          window.scrollTo(0, 1);
        } else {
          swiper.mousewheel.enable();
          swiper.keyboard.enable();

          window.scrollTo(0, 1);
        }
      } else {
        swiper.mousewheel.enable();
        swiper.keyboard.enable();

        window.scrollTo(0, 1);
      }
    },
    [scrollingDown]
  );

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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_S animationData={S_json} delay={500} speed={0.4} />
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
          {" "}
          <SalgonSection titleText={solgan} dir={document.dir} />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <AboutSection
            link="shockersAEC"
            videoMobile="/ShockersMobile.mp4"
            videoLoptap="/ShockersAECAboutUs.mp4"
            title={data?.attributes?.TitleAbout}
            description={data?.attributes?.DescriptionAbout}
            textButton={data?.attributes?.TextButton}
            bg="bg-white"
            tc="text-shockersAEC"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <ServicesSection
            services={services}
            title={data?.attributes?.NameServices}
            link="shockersAEC"
            bg="bg-Hover-gradient"
            tc="text-shockersAEC"
            dir={document.dir}
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <SlideCategories
            categoriesProjects={categoriesProjects}
            link="shockersAEC"
          />
        </SwiperSlide>
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

export default ShockersHome;
