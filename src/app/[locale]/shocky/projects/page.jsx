"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { getProjects } from "../../../../../utils/ShockyApi";
import Image from "next/image";
const Projects = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
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

  const [isLoading, setIsLoading] = useState(true);

  const totalImages =
    data?.images?.data.map((item) => item?.attributes.url) || []; // الحصول على جميع الصور
  const numberOfProjects = 12; // عدد الكائنات
  const imagesPerProject = Math.ceil(totalImages.length / numberOfProjects); // عدد الصور لكل كائن

  const repeatedImages = Array.from(
    { length: numberOfProjects * 2 },
    (_, i) => totalImages[i % totalImages.length]
  );

  // خلط جميع الصور
  const shuffledImages = totalImages.sort(() => Math.random() - 0.5);

  // إنشاء الكائنات مع تقسيم الصور بشكل ديناميكي
  const projects = Array.from({ length: numberOfProjects }, (_, index) => {
    return {
      id: index + 1,
      images:
        totalImages.length < 24
          ? repeatedImages.slice(
              index * imagesPerProject,
              (index + 1) * imagesPerProject
            )
          : shuffledImages.slice(
              index * imagesPerProject,
              (index + 1) * imagesPerProject
            ),
      interval: 3000 + index * 100, // يمكن تعديل الفاصل الزمني حسب الحاجة
    };
  });

  const [currentImages, setCurrentImages] = useState(
    projects.map((p) => {
      if (Array.isArray(p?.images)) {
        p.images[0];
      }
    })
  );

  const [projectOrder, setProjectOrder] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

  useEffect(() => {
    const intervals = projects.map((project, index) =>
      setInterval(() => {
        setCurrentImages((prevImages) =>
          prevImages.map((currentImage, i) => {
            if (i === index) {
              const projectImages = project.images;
              const nextIndex =
                (projectImages?.indexOf(currentImage) + 1) %
                projectImages?.length;
              return projectImages[nextIndex];
            }
            return currentImage;
          })
        );
      }, project.interval)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [data]);

  // تغيير ترتيب المستطيلات كل 30 ثانية
  useEffect(() => {
    const reorderInterval = setInterval(() => {
      setProjectOrder((prevOrder) => [...prevOrder.slice(1), prevOrder[0]]);
    }, 30000);

    return () => clearInterval(reorderInterval);
  }, [data]);
  //button scroll top
  const [isVisible, setIsVisible] = useState(false);

  const handleGoToFirstSlide = () => {
    window.scrollTo(0, 0);
    // if (swiperInstance) {
  
    //   swiperInstance.update();
    //   // swiperInstance.mousewheel.enable();
    //   swiperInstance.slideTo(0, 2000);
    //   // setTimeout(() => {
    //   //   window.scrollTo(0, 0);
    //   // }, 2000);
    // }
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

  return (
    <section className="w-screen h-screen">
      <div className="bg-shocky w-full h-full flex items-center justify-center relative z-10">
        <div className="flex w-full h-full flex-col  justify-center items-center lg:px-2 overflow-hidden">
          <div className="text-white w-full h-full flex flex-1 p-3 md:p-7 flex-col md:flex-row lg:max-h-[800px]">
            <div className="grid grid-cols-3 md:grid-cols-6 md:grid-rows-3 gap-3 md:gap-4 w-full  h-full p-0 md:p-4">
              {projectOrder.map((order, i) => (
                <motion.div
                  key={projects[order].id}
                  className={
                    i === 0 || i == 6
                      ? "col-span-2 row-span-2 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                      : "col-span-1 row-span-1 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                  }
                  initial={{ opacity: 0, scale: 0.95 }} // تأثير البداية
                  animate={{ opacity: 1, scale: 1 }} // التأثير أثناء الظهور
                  exit={{ opacity: 0, scale: 0.95 }} // التأثير أثناء الاختفاء
                  transition={{ duration: 0.5 }} // مدة الانتقال
                >
                  <motion.div
                    key={currentImages[order]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full relative"
                  >
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                      </div>
                    )}
                    <Image
                      src={currentImages[order]}
                      alt={isLoading ? "" : `Project ${order + 1}`}
                      fill={true}
                      objectFit="cover"
                      className={`transition-transform duration-500 hover:scale-110 ${
                        isLoading ? "opacity-0" : "opacity-100"
                      }`}
                      priority
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default Projects;
