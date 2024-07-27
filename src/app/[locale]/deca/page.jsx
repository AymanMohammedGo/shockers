"use client";
import SlideProject from "@/components/SlideProject";
import Draw_S from "@/components/Lottie/Draw_S";
import D_json from "/public/Motion/Deca.json";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import { getHome, getServices } from "../../../../utils/DecaApi";
import { useCallback, useState, useEffect } from "react";
import "../globals.css";
import { getCategoriesProjects } from "../../../../utils/ShockersApi";
const DecaHome = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  const [categoriesProjects, setCategoriesProjects] = useState([]);

  const getHome_ = useCallback(() => {
    getHome(lan).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, [lan]);
  const getServices_ = useCallback(() => {
    getServices(lan).then((res) => {
      console.log(res.data.data);
      const newServices = res.data.data.map((item, index) => ({
        name: item,
        effect: {
          hidden: { x: "-100%", opacity: 0 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.3 * (index + 1),
            },
          },
        },
      }));
      setServices(newServices);
    });
  }, [lan]);
  const getCategoriesProjects_ = useCallback(() => {
    getCategoriesProjects(lan).then((res) => {
      console.log(res.data.data);
      setCategoriesProjects(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getHome_();
    getServices_();
    getCategoriesProjects_();
  }, [getHome_, getServices_, getCategoriesProjects_]);

  const titleText = [
    {
      text: "WHERE",
      delay: 3,
    },
    {
      text: "DETAILS",
      delay: 3.5,
    },
    {
      text: "MATTER",
      delay: 4,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_S animationData={D_json} />
      <SalgonSection titleText={titleText} />
      <AboutSection
        link="deca"
        video="/video2.mp4"
        title={data?.attributes?.TitleAbout}
        description={data?.attributes?.DescriptionAbout}
        textButton={data?.attributes?.TextButton}
        bg="bg-deca"
        tc="text-white"
      />
      <ServicesSection
        services={services}
        title={data?.attributes?.NameServices}
        textButton={data?.attributes?.TextButton}
        link="deca"
        image={data?.attributes?.ImgServices.data.attributes.url}
        // image="/"
        bg="bg-deca"
        tc="text-white"
      />
      <SlideProject
        title={data?.attributes?.NameProjects}
        categoriesProjects={categoriesProjects}
        link="deca"
        ColorText="text-shockersAEC"
      />
    </motion.div>
  );
};

export default DecaHome;
