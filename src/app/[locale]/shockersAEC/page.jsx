"use client";
import SlideProject from "@/components/SlideProject";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import {
  getHome,
  getServices,
  getCategoriesProjects,
} from "../../../../utils/ShockersApi";
import { useCallback, useState, useEffect } from "react";
import "../globals.css";

const ShockersHome = ({ params: { locale } }) => {
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
      text: "DARE",
      delay: 3,
    },
    {
      text: "TO BE",
      delay: 3.5,
    },
    {
      text: "SHOCKED",
      delay: 4.6,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_S animationData={S_json} delay={500} />
      <SalgonSection titleText={titleText} />
      <AboutSection
        link="shockersAEC"
        videoMobile="/ShockersAECwebsiteVideoMobile.mp4"
        videoLoptap="/ShockersAECwebsiteVideoLaptop.mp4"
        title={data?.attributes?.TitleAbout}
        description={data?.attributes?.DescriptionAbout}
        textButton={data?.attributes?.TextButton}
        bg="bg-white"
        tc="text-shockersAEC"
      />
      <ServicesSection
        services={services}
        title={data?.attributes?.NameServices}
        textButton={data?.attributes?.TextButton}
        link="shockersAEC"
        image={data?.attributes?.ImgServices.data.attributes.url}
        // image="/"
        bg="bg-white"
        tc="text-shockersAEC"
      />
      <SlideProject
        title={data?.attributes?.NameProjects}
        categoriesProjects={categoriesProjects}
        link="shockersAEC"
        ColorText="text-shockersAEC"
      />
    </motion.div>
  );
};

export default ShockersHome;
