"use client";
import SlideProject from "@/components/SlideProject";
import Draw_D from "@/components/Lottie/Draw_D";
import D_json from "/public/Motion/D.json";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import { getHome, getServices } from "../../../../utils/DecaApi";
import { useCallback, useState, useEffect } from "react";
import { getName_Solgan } from "../../../../utils/GlobleApi";

import "../globals.css";
import { getCategoriesProjects } from "../../../../utils/ShockersApi";
const DecaHome = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }

  const [solgan, setSolgan] = useState([]);
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  const [categoriesProjects, setCategoriesProjects] = useState([]);
  const getName_Solgan_ = useCallback(() => {
    getName_Solgan(lan).then((res) => {
      const newSolgan = [];
      res.data.data?.attributes?.DecaHome.map((item, index) => {
        newSolgan.push({
          text: item?.children[0].text,
          delay: 2.5 + (index + 1) / 2,
        });
      });
      setSolgan(newSolgan);
    });
  }, [lan]);
  const getHome_ = useCallback(() => {
    getHome(lan).then((res) => {
      setData(res.data.data);
    });
  }, [lan]);
  const getServices_ = useCallback(() => {
    getServices(lan).then((res) => {
      const newServices = res.data.data.map((item, index) => ({
        name: item,
        effect: {
          hidden: { left: "-100%", opacity: 0 },
          visible: {
            opacity: 1,
            left: 0,
            transition: {
              duration: 1,
              delay: 0.3,
            },
          },
        },
      }));
      setServices(newServices);
    });
  }, [lan]);
  const getCategoriesProjects_ = useCallback(() => {
    getCategoriesProjects(lan).then((res) => {
      setCategoriesProjects(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getHome_();
    getServices_();
    getCategoriesProjects_();
    getName_Solgan_();
  }, [getHome_, getServices_, getCategoriesProjects_, getName_Solgan_]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_D animationData={D_json} delay={500} speed={0.5} />
      <section className="w-full h-full">
        <SalgonSection titleText={solgan} dir={document.dir} />

        <AboutSection
          link="deca"
          videoMobile="/DecaMobile.mp4"
          videoLoptap="/DecaAboutUs.mp4"
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
          bg="bg-Hover-gradient-Deca"
          tc="text-shockersAEC"
        />
        <SlideProject categoriesProjects={categoriesProjects} link="deca" />
      </section>
    </motion.div>
  );
};

export default DecaHome;
