"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Draw_B from "@/components/Lottie/Draw_B";
import B_json from "/public/Motion/B.json";
import { getAboutUS, getTopAbout } from "../../../../../utils/BaytunaApi";
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <ImageOverlaysTop
        title={topAbout?.attributes?.title}
        imgURL={topAbout?.attributes?.imgURL.data?.attributes.url}
      />
      <Draw_B animationData={B_json} />
      <section className="overflow-hidden relative z-10">
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
      </section>
    </motion.div>
  );
};

export default About;
