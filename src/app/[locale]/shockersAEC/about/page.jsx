"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import { getAboutUS, getTopAbout } from "../../../../../utils/ShockersApi";
const About = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  // const linkData = "http://localhost:1337";
  const [data, setData] = useState([]);
  const [topAbout, setTopAbout] = useState([]);
  const getAboutUS_ = useCallback(() => {
    getAboutUS(lan).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, [lan]);
  const getTopAbout_ = useCallback(() => {
    getTopAbout(lan).then((res) => {
      console.log(res.data.data);
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
      <Draw_S animationData={S_json} />
      <section className="overflow-hidden relative z-10">
        {data.map((item, index) => (
          <motion.div
            initial={{ x: index % 2 === 0 ? "100%" : "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            key={index}
            className={`w-screen h-screen  flex flex-col items-center ${
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            } justify-center lg:justify-between`}
          >
            <div className="p-4 lg:p-24 xl:p-32  text-shockersAEC flex-1 flex flex-col items-start">
              <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl my-3  lg:mb-6 !leading-[50px] lg:!leading-[70px]">
                {item?.attributes.title}
              </h2>
              <p className="text-xl lg:text-2xl mb-3 lg:mb-0 !leading-8 lg:!leading-10 text-justify">
                {item?.attributes.description}
              </p>
            </div>
            <div className="relative p-4 w-full h-full xl:h-screen xl:w-[50vw] flex items-center justify-center   ">
              <Image
                src="/img/about.svg"
                alt="aboutUs"
                quality={75}
                width={500}
                height={500}
                // className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* <Link href="/shockersAEC/projects">
        <ImageOverlaysCenter title="VIEW OUR PROJECTS" />
      </Link> */}
    </motion.div>
  );
};

export default About;
