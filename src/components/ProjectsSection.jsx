import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Autoplay, Pagination } from "swiper/modules";

const ProjectsSection = ({
  data,
  bg_color = "bg-yMarketing",
  link = "ymarketing",
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const totalImages =
    data?.images?.data?.map((item) => item?.attributes.url) || [];

  const numberOfProjects = 6;
  const imagesPerProject = Math.ceil(totalImages.length / numberOfProjects);
  const shuffledImages = totalImages.sort(() => Math.random() - 0.5);

  const projects = Array.from({ length: numberOfProjects }, (_, index) => {
    return {
      id: index + 1,
      images: shuffledImages.slice(
        index * imagesPerProject,
        (index + 1) * imagesPerProject
      ),
      interval: 3000 + Math.random() * 2000,
    };
  });

  useEffect(() => {
    if (totalImages.length > 0) {
      setIsLoading(true);
    }
  }, [totalImages]);

  return (
    <section className="w-screen h-screen">
      <div
        className={`${bg_color} w-full h-full flex items-center justify-center relative z-10`}
      >
        <div className="flex w-full h-full flex-col justify-center items-center lg:px-2 overflow-hidden">
          <div className="text-white w-full h-full flex flex-1 p-3 md:p-7 flex-col md:flex-row lg:max-h-[800px]">
            <div className="w-full h-full sm:h-[400px] md:w-5/12 rounded-xl overflow-hidden relative text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mx-auto lg:my-10 my-5 ">
                {data?.title}
              </h1>
              <span className="text-lg lg:text-xl xl:text-2xl">
                {data?.des}
              </span>
            </div>
            <Link
              href={`${link}/projects`}
              className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 w-full md:w-7/12 h-full min-h-[70%] p-0 md:p-4"
            >
              {isLoading &&
                projects?.map((item, i) => (
                  <motion.div
                    key={""}
                    className={
                      i === 0 || i == 6
                        ? "col-span-2 row-span-2 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                        : "col-span-1 row-span-1 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                    }
                  >
                    <Swiper
                      initialSlide={0}
                      key={i}
                      effect={"cube"}
                      grabCursor={true}
                      cubeEffect={{
                        shadow: false,
                        slideShadows: false,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      direction={
                        Math.random() > 0.5 ? "vertical" : "horizontal"
                      }
                      //direction={directions[i]}
                      autoplay={{
                        delay: projects[i].interval,
                        disableOnInteraction: false,
                      }}
                      //pagination={true}
                      // pagination={{ clickable: true }}
                      modules={[EffectCube, Autoplay]}
                      className={" mySwiper h-full w-full"}
                      loop={true}
                      speed={2000}
                    >
                      {item?.images?.map((img, index) => (
                        <SwiperSlide key={index} className="h-full w-full">
                          <Image
                            src={img}
                            alt={``}
                            fill={true}
                            objectFit="cover"
                            className={`transition-transform duration-500 h-full w-full object-cover rounded-lg md:rounded-xl`}
                            priority
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                ))}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
