"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Draw_YMar from "@/components/Lottie/Draw_YMar";
import YMar_json from "/public/Motion/YMar.json";
import { getServices } from "../../../../../utils/Y_MarketingApi";
import { useSearchParams } from "next/navigation";
import ScrollToTopButton from "@/components/scrollTop";
import { useTranslation } from "react-i18next";

const Services = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const { t } = useTranslation();

  const searchParams = useSearchParams();
  const search = searchParams.get("serviceId");
  const [data, setData] = useState([]);
  const [selectedService, setSelectedService] = useState(data[0]);
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);

  const handleServiceClick = (index) => {
    setActiveServiceIndex(index === activeServiceIndex ? null : index);
  };
  const getServices_ = useCallback(() => {
    getServices(lan).then((res) => {
      setData(res.data.data);
    });
  }, [lan]);

  useEffect(() => {
    getServices_();
  }, [getServices_]);
  useEffect(() => {
    setSelectedService(data[0]);
    data.find((item) => {
      if (item.id == search) return setSelectedService(item);
    });
    data.find((item) => {
      if (item.id == search) return setActiveServiceIndex(item.id);
    });
  }, [data, search]);
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
      >
        <Draw_YMar animationData={YMar_json} delay={500} speed={0.4} />

        <ImageOverlaysTop dir={document.dir} title={t("SERVICES")} />
        <div className=" flex flex-col  justify-center md:flex-row min-h-screen lg:py-5 lg:my-5 max-w-screen-xxl m-auto relative z-10 overflow-hidden">
          <div className="w-full md:w-2/5 px-4  pt-4 md:px-7">
            <motion.h1
              initial={{
                x: document.dir === "ltr" ? "-100%" : "+100%",
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className={` text-3xl lg:text-5xl text-yMarketing !leading-[60px] font-extrabold py-2 sm:py-10 text-center md:text-start`}
            >
              WHAT WE OFFER TO YOUR
              <span className="bg-yMarketing text-shockersAECYellow px-2">
                BUSINESS
              </span>
            </motion.h1>
          </div>
          <motion.div className="md:w-3/5 p-4 md:p-4">
            <ul className="space-y-2">
              {data.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{
                    x: document.dir === "ltr" ? "100%" : "-100%",
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <li
                    className={` text-2xl lg:text-3xl text-yMarketing  font-bold py-5 sm:py-6 lg:py-10`}
                  >
                    {service?.attributes.title}
                  </li>
                  <p className="text-xl min-h-[200px] lg:min-h-[150px] lg:text-2xl !leading-[40px] md:!leading-[45px] lg:!leading-[50px]  whitespace-pre-line text-justify hyphens-auto">
                    {service?.attributes.description}
                  </p>
                  <div className="w-full h-[2px] bg-yMarketing"></div>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
      <ScrollToTopButton />
    </>
  );
};

export default Services;
