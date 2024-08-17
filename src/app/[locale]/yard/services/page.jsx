"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import { getServices } from "../../../../../utils/ShockersApi";
import { useSearchParams } from "next/navigation";

const Services = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const searchParams = useSearchParams();
  const search = searchParams.get("serviceId");
  const [data, setData] = useState([]);
  const [selectedService, setSelectedService] = useState(data[0]);

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
  }, [data, search]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_S animationData={S_json} delay={500} speed={0.4} />
      <ImageOverlaysTop
        dir={document.dir}
        title={selectedService?.attributes?.title}
        imgURL={selectedService?.attributes?.imgURL?.data?.attributes.url}
      />
      <div className="flex flex-col   justify-center md:flex-row min-h-screen lg:py-5 lg:my-5 max-w-screen-xxl m-auto relative z-10 overflow-hidden">
        <motion.div
          initial={{
            x: document.dir === "ltr" ? "-100%" : "+100%",
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="w-full md:w-1/3 px-2  pt-4 md:p-4"
        >
          <ul className="space-y-2">
            {data.map((service, index) => (
              <li
                key={index}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer text-2xl lg:text-3xl p-4 py-6 lg:!mb-5 font-bold ${
                  selectedService?.attributes.title ===
                  service?.attributes.title
                    ? `${
                        document.dir === "ltr"
                          ? "border-l-[6px]"
                          : "border-r-[6px]"
                      } border-yard bg-[#eeeeee] text-yard`
                    : "text-[#9b9999] hover:text-yard"
                }`}
              >
                {service?.attributes.title}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{
            x: document.dir === "ltr" ? "100%" : "-100%",
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="md:w-2/3 p-2 md:p-4"
        >
          <div className="mb-6 text-xl  lg:text-2xl !leading-[40px] lg:!leading-[50px] py-0 lg:py-4 px-4 lg:px-10 whitespace-pre-line text-justify hyphens-auto">
            {selectedService?.attributes?.description
              .split("\n")
              .map((service, index) => {
                const trimmedService = service.trim();
                const startsWithDash = trimmedService.startsWith("-");
                const bullet = startsWithDash ? "" : "•";
                const extraSpacing = startsWithDash ? "mx-6 lg:mx-8" : ""; // Add margin-left for extra spacing

                return (
                  <div key={index} className="flex items-start ">
                    <span
                      className={`w-2 ${
                        document.dir === "ltr" ? "mr-2" : "ml-2"
                      }  ${extraSpacing}`}
                    >
                      {bullet}
                    </span>
                    <p className="flex-1">{trimmedService}</p>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
