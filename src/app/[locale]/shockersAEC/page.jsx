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
import { getName_Solgan } from "../../../../utils/GlobleApi";
import { useCallback, useState, useEffect } from "react";
import "../globals.css";

const ShockersHome = ({ params: { locale } }) => {
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
      res.data.data?.attributes?.ShockersHome.map((item, index) => {
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
          hidden:
            index === 0
              ? { left: "-100%", opacity: 0 }
              : index === 1
              ? { top: "100%", opacity: 0 }
              : { right: "-100%", opacity: 0 },
          visible:
            index === 1
              ? {
                  opacity: 1,
                  top: 0,
                  transition: {
                    duration: 1,
                    delay: 0.3,
                  },
                }
              : index === 0
              ? {
                  opacity: 1,
                  left: 0,
                  transition: {
                    duration: 1,
                    delay: 0.3,
                  },
                }
              : {
                  opacity: 1,
                  right: 0,
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
      <Draw_S animationData={S_json} delay={500} />
      <section className="w-full h-full">
        <SalgonSection titleText={solgan} />

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
          bg="bg-shockersAECYellow"
          tc="text-shockersAEC"
        />
        <SlideProject
          categoriesProjects={categoriesProjects}
          link="shockersAEC"
        />
      </section>
    </motion.div>
  );
};

export default ShockersHome;
