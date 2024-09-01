"use client";
import React from "react";
import { useCallback, useState, useEffect } from "react";
import Draw_Y from "@/components/Lottie/Draw_Y";
import Y_json from "/public/Motion/Y.json";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SalgonSection from "@/components/SalgonSection";
import { getHome, getServices, getProjects } from "../../../../utils/YardApi";
import { getName_Solgan } from "../../../../utils/GlobleApi";
import "../globals.css";
import SlideProjectsOneItems from "@/components/SlideProjectsOneItems";
const Page = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [solgan, setSolgan] = useState([]);
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);

  const getName_Solgan_ = useCallback(() => {
    getName_Solgan(lan).then((res) => {
      const newSolgan = [];
      res.data.data?.attributes?.YardHome.map((item, index) => {
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
  const getProjects_ = useCallback(() => {
    getProjects(lan).then((res) => {
      setProjects(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getHome_();
    getServices_();
    getProjects_();
    getName_Solgan_();
  }, [getHome_, getServices_, getProjects_, getName_Solgan_]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_Y animationData={Y_json} delay={500} speed={0.5} />
      <section className="w-full h-full">
        <SalgonSection
          titleText={solgan}
          dir={locale === "ar" || locale === "kr" ? "rtl" : "ltr"}
        />

        <AboutSection
          link="yard"
          videoMobile="/YardMobile.mp4"
          videoLoptap="/YardAbout.mp4"
          title={data?.attributes?.TitleAbout}
          description={data?.attributes?.DescriptionAbout}
          textButton={data?.attributes?.TextButton}
          bg="bg-yard"
          tc="text-white"
        />
        <ServicesSection
          services={services}
          title={data?.attributes?.NameServices}
          link="yard"
          bg="bg-Hover-gradient-yard"
          tc="text-shockersAEC"
          dir={locale === "ar" || locale === "kr" ? "rtl" : "ltr"}
        />
        <SlideProjectsOneItems allProjects={projects} link="yard" />
      </section>
    </motion.div>
  );
};

export default Page;
