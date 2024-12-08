"use client";
import SlideCategories from "@/components/SlideCategories";
import Draw_YMar from "@/components/Lottie/Draw_YMar";
import YMar_json from "/public/Motion/y Bg.json";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import {
  getHome,
  getServices,
  getSuccess,
  getHowAdaptive,
  getProjects,
} from "../../../../utils/Y_MarketingApi";
import { getName_Solgan } from "../../../../utils/GlobleApi";
import { useCallback, useState, useEffect, useRef } from "react";
import "../globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSearchParams, usePathname } from "next/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Keyboard } from "swiper/modules";
import SlideProjectsOneItems from "@/components/SlideProjectsOneItems";
import SlideServicesSection from "@/components/SlideServicesSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScuccessInNumber from "@/components/ScuccessInNumber";
import ClientsLogo from "@/components/clientsLogo";
import ProjectsSection from "@/components/ProjectsSection";

const Y_MarketingHome = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [solgan, setSolgan] = useState([]);
  const [data, setData] = useState([]);
  const [clients, setClients] = useState([]);
  const [scuccessInNumber, setScuccessInNumber] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const getName_Solgan_ = useCallback(() => {
    getName_Solgan(lan).then((res) => {
      const newSolgan = [];
      res.data.data?.attributes?.YmarketingHome.map((item, index) => {
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
  console.log(data);
  const getSuccess_ = useCallback(() => {
    getSuccess(lan).then((res) => {
      setScuccessInNumber(res.data.data);
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
  const getHowAdaptive_ = useCallback(() => {
    getHowAdaptive(lan).then((res) => {
      setClients(res.data.data);
    });
  }, [lan]);
  console.log(projects);
  const getProjects_ = useCallback(() => {
    getProjects(lan).then((res) => {
      setProjects(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getHome_();
    getServices_();
    getName_Solgan_();
    getSuccess_();
    getHowAdaptive_();
    getProjects_();
  }, [
    getHome_,
    getServices_,
    getName_Solgan_,
    getSuccess_,
    getHowAdaptive_,
    getProjects_,
  ]);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

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
        handleGoToBeforeLastSlide(7);
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
      window.scrollTo(0, 2);
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
        endY = e.touches[0].clientY;
        const deltaY = endY - startY;
        if (isLastSlide && deltaY < -200) {
          swiperInstance.allowTouchMove = false;
          window.scrollTo(0, 650);
        } else if (isFirstSlide && deltaY > +200) {
          // console.log(isFirstSlide, deltaY);
          window.alert(window.scrollY, document.documentElement.scrollTop);
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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
      >
        <Draw_YMar animationData={YMar_json} delay={500} speed={0.4} />
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
            <SalgonSection
              titleText={solgan}
              colorText="text-yMarketing"
              dir={document.dir}
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <AboutSection
              link="ymarketing"
              videoMobile="/Y website mobile version1.mp4"
              videoLoptap="/Y website PC version1.mp4"
              title={data?.attributes?.TitleAbout}
              description={data?.attributes?.DescriptionAbout}
              textButton={data?.attributes?.TextButton}
              bg="bg-white"
              tc="text-shockersAEC"
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <SlideServicesSection
              services={services}
              title={data?.attributes?.NameServices}
              link="ymarketing"
              bg="bg-Hover-gradient"
              tc="text-white"
              dir={document.dir}
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <ScuccessInNumber
              data={scuccessInNumber}
              title={data?.attributes?.NameServices}
              link="ymarketing"
              bg="bg-Hover-gradient"
              tc="text-white"
              dir={document.dir}
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <ClientsLogo data={clients} />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <ProjectsSection data={projects?.attributes} />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <div className="flex flex-col justify-center items-center h-full max-w-screen-xl text-center m-auto">
              <div className="bg-yMarketing m-3 px-5 py-20 lg:p-20 rounded-2xl text-white">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-12">
                  {data?.attributes?.ARE_YOU_INTERESTED}
                </h1>
                <Link href="/ymarketing/contact">
                  <button className="w-fit text-xl lg:text-2xl xl:text-3xl font-medium bg-shockerYellow text-yMarketing rounded-xl hover:bg-white hover:text-yMarketing  py-3 px-10">
                    {data?.attributes?.Contact_Us}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <div className="fixed  bottom-2 right-2 lg:bottom-8 lg:right-8 z-30">
        {isVisible && (
          <button
            onClick={handleGoToFirstSlide}
            className="p-3 rounded-full text-white  bg-shockersAEC/20  shadow-2xl   transition-transform transform hover:scale-110 focus:outline-none "
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
    </>
  );
};

export default Y_MarketingHome;
