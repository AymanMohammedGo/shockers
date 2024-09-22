"use client";
import { useState, useEffect, useCallback } from "react";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import { motion } from "framer-motion";
import Draw_Y from "@/components/Lottie/Draw_Y";
import Y_json from "/public/Motion/Y.json";
import { useSearchParams } from "next/navigation";
import { getServices } from "../../../../../utils/YardApi";
import ScrollToTopButton from "@/components/scrollTop";

const Services = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
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
        <Draw_Y animationData={Y_json} delay={500} speed={0.5} />

        <ImageOverlaysTop
          dir={locale === "ar" || locale === "kr" ? "rtl" : "ltr"}
          title={selectedService?.attributes?.title}
          imgURL={selectedService?.attributes?.imgURL.data?.attributes.url}
        />

        <div className="hidden sm:flex flex-col  justify-center md:flex-row min-h-screen lg:py-5 lg:my-5 max-w-screen-xxl m-auto relative z-10 overflow-hidden">
          <motion.div
            initial={{
              x: locale === "en" ? "-100%" : "+100%",
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
                          locale === "en" ? "border-l-[6px]" : "border-r-[6px]"
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
              x: locale === "en" ? "100%" : "-100%",
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="md:w-2/3 p-2 md:p-4"
          >
            <div className="mb-6 text-xl lg:text-2xl !leading-[40px] md:!leading-[45px] lg:!leading-[50px] py-0 lg:py-4 px-4 lg:px-10 whitespace-pre-line text-justify hyphens-auto">
              {selectedService?.attributes?.description
                .split("\n")
                .map((service, index) => {
                  const trimmedService = service.trim();
                  const startsWithDash = trimmedService.startsWith("-");
                  const bullet = startsWithDash ? "" : "•";
                  const extraSpacing = startsWithDash ? "mx-6 lg:mx-8" : ""; // Add margin-left for extra spacing

                  return (
                    <div key={index} className="flex items-start">
                      <span
                        className={`w-2 ${
                          locale === "en" ? "mr-2" : "ml-2"
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
        <div className="flex sm:hidden flex-col  m-auto relative z-10 overflow-hidden">
          <motion.div
            initial={{
              x: document.dir === "ltr" ? "100%" : "-100%",
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="p-3 "
          >
            <div className="mb-6 text-xl  !leading-[40px]   whitespace-pre-line  hyphens-auto">
              {data.map((service) => (
                <div key={service.id} className="mb-6">
                  <h2
                    onClick={() => {
                      handleServiceClick(service.id);
                      setSelectedService(service);
                    }}
                    className={`cursor-pointer text-2xl  p-4 py-6  font-bold ${
                      activeServiceIndex === service.id
                        ? `${
                            document.dir === "ltr"
                              ? "border-l-[6px]"
                              : "border-r-[6px]"
                          } border-baytuna bg-[#eeeeee] text-baytuna`
                        : "text-[#9b9999] hover:text-baytuna"
                    }`}
                  >
                    {service?.attributes.title}
                  </h2>
                  {activeServiceIndex === service.id && (
                    <div className="text-xl my-3 !leading-[40px] text-justify whitespace-pre-line  hyphens-auto">
                      {service?.attributes.description
                        .split("\n")
                        .map((line, lineIndex) => {
                          const trimmedLine = line.trim();
                          const startsWithDash = trimmedLine.startsWith("-");
                          const bullet = startsWithDash ? "" : "•";
                          const extraSpacing = startsWithDash ? "mx-6 " : "";

                          return (
                            <div
                              key={lineIndex}
                              className="flex items-start mb-2"
                              onClick={() => handleServiceClick(service.id)}
                            >
                              <span
                                className={`w-2 ${
                                  document.dir === "ltr" ? "mr-2" : "ml-2"
                                } ${extraSpacing}`}
                              >
                                {bullet}
                              </span>
                              <p className="flex-1">{trimmedLine}</p>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <ScrollToTopButton />
    </>
  );
};

export default Services;
