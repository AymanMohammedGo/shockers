"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import { getAboutUS } from "../../../../../utils/DecaApi";
const About = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  // const linkData = "http://localhost:1337";
  const [data, setData] = useState([]);
  const getAboutUS_ = useCallback(() => {
    getAboutUS(lan).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getAboutUS_();
  }, [getAboutUS_]);

  // const aboutus = [
  //   {
  //     title: "About ShockersAEC",
  //     des: "Shockers AEC is a full-service firm encompassing architecture, engineering, and construction. Through collaborative practices and a dedication to innovation, they serve as a leading force in shaping the built environment",
  //     image: "/img/services.jpg",
  //     x: "-100%",
  //     left: "xl:flex-row",
  //   },
  //   {
  //     title: "Years of experience and performance",
  //     des: "Since 2017, our architects, engineers, and managers teams have grown through dedication and continuous learning. We combine experience and creativity, transforming your vision into a remarkable reality. Every project reflects our commitment to top quality and designs that impress and inspire every client.",
  //     image: "/img/services.jpg",
  //     x: "100%",
  //     left: "xl:flex-row-reverse",
  //   },
  //   {
  //     title: "Mission",
  //     des: "Our mission is to enhance society through the application of innovative architectural designs that embody imaginative and creative thinking. Our team of skilled architects is dedicated to unlocking the full potential of your projects, offering solutions even for the most intricate design challenges. By providing creative and effective solutions, we strive to enhance the lives and businesses of our clients.",
  //     image: "/img/services.jpg",
  //     x: "-100%",
  //     left: "xl:flex-row",
  //   },
  //   {
  //     title: "Vision",
  //     des: "Our vision is to deliver exceptional design solutions of the highest quality by leveraging our imaginative visualization skills and transforming them into tangible reality. We aim to create captivating and innovative designs that inspire and surpass expectations, leaving a lasting impact on the built environment.",
  //     image: "/img/services.jpg",
  //     x: "100%",
  //     left: "xl:flex-row-reverse",
  //   },
  //   {
  //     title: "Value and quality",
  //     des: "At Shockers AEC, integrity guides everything. Honesty, trust, and commitment to excellence fuel our passion for continuous learning and innovation. We value diversity and teamwork, striving for constant improvement to deliver superior results for every client.",
  //     image: "/img/services.jpg",
  //     x: "-100%",
  //     left: "xl:flex-row",
  //   },
  //   {
  //     title: "Staff",
  //     des: "Our team is led by highly skilled architectural, engineering, and construction design teams. we are constantly expanding across all the departments to meet our targets. ",
  //     image: "/img/services.jpg",
  //     x: "100%",
  //     left: "xl:flex-row-reverse",
  //   },
  // ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <ImageOverlaysTop namePage="ABOUT" title="Shockers AEC" />
      {/* <Draw_S animationData={S_json} /> */}
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
            }   justify-center lg:justify-between`}
          >
            <div className="p-2 lg:p-24 xl:p-32  text-shockersAEC flex-1 flex flex-col items-start">
              <span className="font-bold text-4xl md:text-5xl lg:text-6xl my-3  lg:mb-6">
                {item?.attributes.title}
              </span>
              <p className="text-xl lg:text-2xl mb-3 lg:mb-0">
                {item?.attributes.description}
              </p>
            </div>
            <div className="relative w-screen h-full xl:h-screen xl:w-[50vw] ">
              <Image
                src={item?.attributes.imgURL.data?.attributes.url}
                fill={true}
                alt="aboutUs"
                quality={75}
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </section>
      {/* <section className="overflow-hidden">
        {aboutus.map((item, index) => (
          <motion.div
            initial={{ x: item.x, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            key={index}
            className={`w-screen h-screen  flex flex-col items-center ${item.left} justify-center lg:justify-between`}
          >
            <div className="p-2 md:p-4 lg:p-16 xl:p-28 xxl:p-32 text-shockersAEC flex-1 flex flex-col items-start">
              <span className="font-bold text-4xl md:text-5xl lg:text-6xl my-3  lg:mb-6">
                {item.title}
              </span>
              <p className="text-xl lg:text-2xl mb-3 lg:mb-0">{item.des}</p>
            </div>
            <div className="relative w-screen h-full xl:h-screen xl:w-[50vw] ">
              <Image
                src={item.image}
                fill={true}
                alt="aboutus"
                quality={75}
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </section> */}
      <Link href="/shockersAEC/projects">
        <ImageOverlaysCenter title="VIEW OUR PROJECTS" />
      </Link>
    </motion.div>
  );
};

export default About;
