"use client";
import SlideProject from "@/components/SlideProject";
import Draw_B from "@/components/Lottie/Draw_B";
import B_json from "/public/Motion/B.json";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import { getHome, getServices } from "../../../../utils/BaytunaApi";
import { getName_Solgan } from "../../../../utils/GlobleApi";

import { useCallback, useState, useEffect } from "react";
import { getCategoriesProjects } from "../../../../utils/ShockersApi";
import "../globals.css";

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
      res.data.data?.attributes?.baytunaHome.map((item, index) => {
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
      <Draw_B animationData={B_json} delay={500} speed={0.5} />
      <section className="w-full h-full">
        <SalgonSection titleText={solgan} dir={document.dir} />

        <AboutSection
          link="baytuna"
          videoMobile="/BaytunaMobile.mp4"
          videoLoptap="/BaytunaAbout.mp4"
          title={data?.attributes?.TitleAbout}
          description={data?.attributes?.DescriptionAbout}
          textButton={data?.attributes?.TextButton}
          bg="bg-baytuna"
          tc="text-white"
        />

        <ServicesSection
          services={services}
          title={data?.attributes?.NameServices}
          link="baytuna"
          bg="bg-Hover-gradient-Baytuna"
          tc="text-shockersAEC"
          dir={document.dir}
        />
        <SlideProject categoriesProjects={categoriesProjects} link="baytuna" />
      </section>
    </motion.div>
  );
};

export default DecaHome;
