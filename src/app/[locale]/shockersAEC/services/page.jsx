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
      <Draw_S animationData={S_json} />
      <ImageOverlaysTop
        title={selectedService?.attributes?.title}
        imgURL={selectedService?.attributes?.imgURL?.data?.attributes.url}
      />
      <div className="flex flex-col  justify-center md:flex-row min-h-screen lg:py-5 max-w-screen-xxl m-auto relative z-10 overflow-hidden">
        <motion.div
          initial={{
            x: document.dir === "ltr" ? "-100%" : "+100%",
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="w-full md:w-1/3 p-2  pt-8 md:p-4"
        >
          <ul className="space-y-2">
            {data.map((service, index) => (
              <li
                key={index}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer text-xl lg:text-3xl p-4 py-6 lg:!mb-5 font-bold ${
                  selectedService?.attributes.title ===
                  service?.attributes.title
                    ? `${
                        document.dir === "ltr"
                          ? "border-l-[6px]"
                          : "border-r-[6px]"
                      } border-shockersAEC bg-[#eeeeee] text-shockersAEC`
                    : "text-[#9b9999] hover:text-shockersAEC"
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
          <p className="mb-6 text-lg md:text-xl lg:text-2xl  !leading-[40px] md:!leading-[45px] lg:!leading-[50px]  py-4 px-4 lg:px-10  whitespace-pre-line">
            {selectedService?.attributes?.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
