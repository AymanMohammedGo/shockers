"use client";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Draw_B from "@/components/Lottie/Draw_B";
import B_json from "/public/Motion/B.json";
import { getAboutUS } from "../../../../../utils/YardApi";
import { useRef } from "react";
import AboutTopSection from "@/components/AboutTopVideo";
import { useTranslation } from "react-i18next";

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <div className="sticky top-0 w-screen h-screen   ">
        <AboutTopSection
          title={t("YARD")}
          videoMobile="/YardMobile.mp4"
          videoLoptap="/YardAbout.mp4"
          dir={locale === "ar" || locale === "kr" ? "rtl" : "ltr"}
        />
      </div>
      <section ref={ref} className="overflow-hidden  sticky top-0 bg-primary">
        <div className="max-w-screen-xxl px-4 xxl:px-0 h-full m-auto">
          <motion.div className="absolute h-full   top-0 left-[calc(100px + 10px)] w-[5px] bg-shockersAEC z-10" />
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
              <Draw_B
                animationData={B_json}
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
                      x: locale === "en"  ? "-100%" : "100%",
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
                          locale === "en" ? " -ml-[10px]" : " -mr-[10px]"
                        }`}
                      ></div>
                    </div>
                  </motion.div>
                  {/* العنوان */}
                  <motion.h2
                    initial={{
                      x: locale === "en" ? "100%" : "-100%",
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
                    x: locale === "en" ? "100%" : "-100%",
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                  }}
                  className={`${
                    locale === "en"
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
