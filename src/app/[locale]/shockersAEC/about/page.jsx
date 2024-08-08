"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import Image from "next/image";
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
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = useRef([]);

  // إنشاء Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // نسبة الرؤية التي تعتبر بأنها مرئية
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setCurrentIndex(index);
          }
        }
      });
    }, options);

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [data]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <div className="sticky top-0 w-screen h-screen   ">
        <ImageOverlaysTop
          title={topAbout?.attributes?.title}
          imgURL={topAbout?.attributes?.imgURL.data?.attributes.url}
        />
      </div>
      <section className="overflow-hidden  sticky top-0 bg-primary">
        {/* <Draw_S speed={4} animationData={S_json} /> */}
        <div className="max-w-screen-xxl px-4 xxl:px-0 h-full m-auto">
          <motion.div
            style={{ height: lineHeight }}
            className="absolute  top-0 left-[calc(100px + 10px)] w-[5px] bg-shockersAEC"
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
            <div className="relative  max-w-screen-xxl m-auto  flex flex-col items-start overflow-hidden">
              {/* الخط العمودي */}
              {/* <div className="absolute top-0 h-screen left-[calc(100px + 10px)] w-[5px] bg-shockersAEC"></div> */}

              {/*الخط السابق*/}
              {data[index - 1] && (
                <div
                  style={{ display: index === currentIndex ? "flex" : "none" }}
                  className="hidden md:flex items-center absolute top-[40px] "
                >
                  <motion.div
                    initial={{
                      x: "-100%",
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="flex items-center"
                  >
                    <div className=" w-[50px] lg:w-[100px] h-[5px] bg-shockersAEC/10 "></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-shockersAEC/10 -ml-[1px]"></div>
                  </motion.div>
                  <motion.span
                    initial={{
                      x: "100%",
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="ml-3 flex-1 text-shockersAEC/10  w-full font-bold text-3xl md:text-4xl lg:text-5xl !leading-[50px] lg:!leading-[70px]"
                  >
                    {data[index - 1]?.attributes.title}
                  </motion.span>
                </div>
              )}
              {data[index + 1] && (
                <div
                  style={{ display: index === currentIndex ? "flex" : "none" }}
                  className="hidden md:flex items-center absolute bottom-[40px] "
                >
                  <motion.div
                    initial={{
                      x: "-100%",
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="flex items-center"
                  >
                    <div className=" w-[50px] lg:w-[100px] h-[5px] bg-shockersAEC/10 "></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-shockersAEC/10 -ml-[1px]"></div>
                  </motion.div>
                  <motion.span
                    initial={{
                      x: "100%",
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="ml-3 flex-1 text-shockersAEC/10  w-full font-bold text-3xl md:text-4xl lg:text-5xl !leading-[50px] lg:!leading-[70px]"
                  >
                    {data[index + 1]?.attributes.title}
                  </motion.span>
                </div>
              )}
              {/* <div className="absolute bottom-[20vh] w-[25px] lg:w-[50px] h-[5px] bg-shockersAEC/20"></div> */}

              <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
                <div className="relative flex items-center z-10 w-full overflow-hidden">
                  {/* الخط الأفقي والدائرة */}
                  <motion.div
                    initial={{
                      x: "-100%",
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="relative flex items-center"
                  >
                    <div className="w-[50px] lg:w-[100px] h-[5px] bg-shockersAEC"></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-shockersAEC -ml-[10px]"></div>
                  </motion.div>
                  {/* العنوان */}
                  <motion.h2
                    initial={{
                      x: "100%",
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="ml-4 text-shockersAEC font-bold text-4xl md:text-5xl lg:text-6xl my-3 lg:mb-6 !leading-[50px] lg:!leading-[70px]"
                  >
                    {item?.attributes.title}
                  </motion.h2>
                </div>
                {/* النص */}
                <motion.p
                  initial={{
                    x: "100%",
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                  }}
                  className="ml-[78px] text-shockersAEC lg:ml-[130px] text-xl lg:text-2xl mb-3 lg:mb-0 !leading-8 lg:!leading-10 text-justify"
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
