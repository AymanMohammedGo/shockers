"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { getProjects } from "../../../../../utils/ShockyApi";
import Image from "next/image";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Autoplay } from "swiper/modules";
import { useSearchParams, usePathname } from "next/navigation";
import { Mousewheel, Keyboard } from "swiper/modules";

const Projects = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [data, setData] = useState([]);
  const getProjects_ = useCallback(() => {
    getProjects(lan).then((res) => {
      setData(res.data.data.attributes);
    });
    window.scrollTo({
      top: (0.5 / 100) * window.innerHeight,
      behavior: "smooth", // التمرير السلس
    });
  }, [lan]);
  useEffect(() => {
    getProjects_();
  }, [getProjects_]);
  const numberOfProjects = 12;
  const projects = useMemo(() => {
    const totalImages =
      data?.images?.data?.map((item) => item?.attributes.url) || [];
    if (totalImages.length === 0) return [];

    const imagesPerProject = Math.ceil(totalImages.length / numberOfProjects);
    const shuffledImages = totalImages.sort(() => Math.random() - 0.5);
    return Array.from({ length: numberOfProjects }, (_, index) => ({
      id: index + 1,
      images: shuffledImages.slice(
        index * imagesPerProject,
        (index + 1) * imagesPerProject
      ),
      interval: 3000 + Math.random() * 1000,
    }));
  }, [data]);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  // when open page project
  const handleGoToBeforeLastSlide = (number) => {
    if (swiperInstance) {
      window.scrollTo({
        top: (0.5 / 100) * window.innerHeight,
        behavior: "smooth", // التمرير السلس
      });
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
        // swiperInstance?.slideTo(0, 2000);
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

      window.scrollTo({
        top: (0.5 / 100) * window.innerHeight,
        behavior: "smooth", // التمرير السلس
      });

      // window.scrollTo(0, 55);
    }
  }, []);
  const handleWheel = useCallback((event) => {
    const delta = event.deltaY;
    if (delta > 0) {
      setScrollingDown(true);
      window.scrollTo({
        top: (0.5 / 100) * window.innerHeight,
        behavior: "smooth", // التمرير السلس
      });
    } else {
      setScrollingDown(false);
      window.scrollTo({
        top: (0.5 / 100) * window.innerHeight,
        behavior: "smooth", // التمرير السلس
      });
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
    <>
      <div className="w-screen h-screen">
        <div className="bg-shocky w-full h-full flex items-center justify-center relative z-10">
          <div className="flex w-full h-full flex-col  justify-center items-center lg:px-2 overflow-hidden">
            <div className="text-white w-full h-full flex flex-1 p-3 md:p-7 flex-col md:flex-row xl:max-h-[800px]">
              <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-6  md:grid-rows-3 gap-3 md:gap-4 w-full  h-full p-0 md:p-4">
                {projects.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className={
                      i === 0 || i == 6
                        ? "col-span-2 row-span-2 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                        : "col-span-1 row-span-1 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                    }
                  >
                    <Swiper
                      observer={true}
                      observeParents={true}
                      key={item.id}
                      effect={"cube"}
                      grabCursor={true}
                      cubeEffect={{
                        shadow: false,
                        slideShadows: false,
                      }}
                      direction={i % 2 === 0 ? "vertical" : "horizontal"}
                      autoplay={{
                        delay: item.interval,
                        disableOnInteraction: false,
                      }}
                      modules={[EffectCube, Autoplay]}
                      className="mySwiper h-full w-full"
                      loop={true}
                      speed={2000}
                    >
                      {item.images.map((img, index) => (
                        <SwiperSlide key={index} className="h-full w-full">
                          <Image
                            src={img}
                            alt=""
                            fill={true}
                            className="transition-transform duration-500 h-full w-full object-cover rounded-lg md:rounded-xl"
                            priority
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Projects;
