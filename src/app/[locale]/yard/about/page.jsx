"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import { getAboutUS, getTopAbout } from "../../../../../utils/ShockersApi";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [data, setData] = useState([]);
  const [topAbout, setTopAbout] = useState([]);
  const getAboutUS_ = useCallback(() => {
    getAboutUS(lan).then((res) => {
      setData(res.data.data);
    });
  }, [lan]);
  const getTopAbout_ = useCallback(() => {
    getTopAbout(lan).then((res) => {
      setTopAbout(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getAboutUS_();
    getTopAbout_();
  }, [getAboutUS_, getTopAbout_]);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "105%"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = useRef([]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <div className="sticky top-0 w-screen h-screen   ">
        <ImageOverlaysTop
          dir={document.dir}
          title={topAbout?.attributes?.title}
          imgURL={topAbout?.attributes?.imgURL.data?.attributes.url}
        />
      </div>
      <section ref={ref} className="overflow-hidden  sticky top-0 bg-primary">
        <div className="max-w-screen-xxl px-4 xxl:px-0 h-full m-auto">
          <motion.div
            // style={{ height: height }}
            className="absolute h-full   top-0 left-[calc(100px + 10px)] w-[5px] bg-shockersAEC z-10"
          />
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 h-screen text-shockersAEC flex flex-col items-start"
          >
            <div className="absolute h-screen w-full">
              <Draw_S
                animationData={S_json}
                delay={500}
                speed={0.4}
                postion={"absolute"}
              />
            </div>

            <div className="relative max-w-screen-xxl m-auto flex flex-col items-start overflow-hidden">
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
                    className="relative flex items-center"
                  >
                    <div className="w-0 md:w-[50px] lg:w-[100px] h-[5px] bg-shockersAEC"></div>
                    <div className="relative">
                      <div
                        className={`w-[20px] h-[20px] rounded-full bg-shockersAEC ${
                          document.dir === "ltr" ? " -ml-[10px]" : " -mr-[10px]"
                        }`}
                      ></div>
                    </div>
                  </motion.div>
                  {/* العنوان */}
                  <motion.h2
                    initial={{
                      x: document.dir === "ltr" ? "100%" : "-100%",
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="mx-4 text-shockersAEC font-bold text-4xl md:text-5xl lg:text-6xl my-3 lg:mb-6 !leading-[50px] lg:!leading-[70px]"
                  >
                    {item?.attributes.title}
                  </motion.h2>
                </div>
                {/* النص */}
                <motion.p
                  initial={{
                    x: document.dir === "ltr" ? "100%" : "-100%",
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                  }}
                  className={`${
                    document.dir === "ltr"
                      ? "ml-[26px] md:ml-[78px] lg:ml-[130px]"
                      : "mr-[26px] md:mr-[78px] lg:mr-[130px]"
                  } text-justify hyphens-auto text-shockersAEC text-xl lg:text-2xl mb-3 lg:mb-0 !leading-8 lg:!leading-10`}
                >
                  {item?.attributes.description}
                </motion.p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default About;
