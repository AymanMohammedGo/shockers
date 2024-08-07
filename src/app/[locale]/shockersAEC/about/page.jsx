"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import { getAboutUS, getTopAbout } from "../../../../../utils/ShockersApi";
import { useScroll, useTransform } from "framer-motion";

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
  const { scrollYProgress } = useScroll(); // استخدام scrollYProgress للحصول على تقدم التمرير كنسبة مئوية

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 100], // من 0% إلى 100% من التمرير
    ["0%", "100%"]
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      {/* <ImageOverlaysTop
        title={topAbout?.attributes?.title}
        imgURL={topAbout?.attributes?.imgURL.data?.attributes.url}
      /> */}
      <div className="sticky top-0 w-screen h-screen   z-0">
        <Image
          className=" object-cover"
          src={topAbout?.attributes?.imgURL.data?.attributes.url}
          fill={true}
          alt="imageOverlays"
          quality={75}
        />
        <div className="bg-shockersAEC bg-opacity-60 w-full h-full absolute top-0" />
        <div className="absolute bottom-10 lg:bottom-20 w-full ">
          <div className="m-auto max-w-screen-xxl text-center lg:text-start text-white lg:p-10  xxl:p-2">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold ">
              {topAbout?.attributes?.title}
            </h1>
          </div>
        </div>
      </div>
      {/* <Draw_S animationData={S_json} /> */}
      {/* <section className="overflow-hidden relative z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`max-w-screen-xxxl m-auto min-h-screen  flex flex-col items-center  ${
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            } justify-center lg:justify-between overflow-hidden`}
          >
            <motion.div
              initial={{ x: index % 2 === 0 ? "100%" : "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="p-4 sm:px-24 md:px-36 lg:px-44 lg:py-20 xl:p-8 xl:w-[60%]   text-shockersAEC  flex flex-col items-start"
            >
              <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl my-3  lg:mb-6 !leading-[50px] lg:!leading-[70px]">
                {item?.attributes.title}
              </h2>
              <p className="text-xl lg:text-2xl mb-3 lg:mb-0 !leading-8 lg:!leading-10 text-justify">
                {item?.attributes.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ x: index % 2 === 0 ? "100%" : "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className=" p-4 "
            >
              <Image
                src={item?.attributes.imgURL.data?.attributes.url}
                alt="aboutUs"
                quality={75}
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        ))}
      </section> */}

      {/* <section className="overflow-hidden  "> */}
      {data.map((item, index) => (
        <div
          key={index}
          className="sticky top-0   px-4 h-screen  bg-primary   text-shockersAEC flex flex-col items-start"
        >
          <div className="relative max-w-screen-xxl m-auto  flex flex-col items-start">
            {/* الخط العمودي */}
            {/* <div className="absolute top-0 h-screen left-[calc(100px + 10px)] w-[5px] bg-shockersAEC"></div> */}
            <motion.div
              initial={{
                height: "0",
              }}
              whileInView={{ height: "100vh" }}
              transition={{
                duration: 3,
              }}
              className="absolute top-0 left-[calc(100px + 10px)] w-[5px] bg-shockersAEC"
            />
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
                  className="ml-4  font-bold text-4xl md:text-5xl lg:text-6xl my-3 lg:mb-6 !leading-[50px] lg:!leading-[70px]"
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
                className="ml-[78px] lg:ml-[130px] text-xl lg:text-2xl mb-3 lg:mb-0 !leading-8 lg:!leading-10 text-justify"
              >
                {item?.attributes.description}
              </motion.p>
            </div>
          </div>
        </div>
      ))}
      {/* </section> */}
    </motion.div>
  );
};

export default About;
