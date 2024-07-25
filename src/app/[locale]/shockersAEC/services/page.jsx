"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import { motion } from "framer-motion";
import { useState } from "react";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import Image from "next/image";
const Services = () => {
  const servicesData = [
    {
      name: "Architectural Services",
      description:
        "We offer comprehensive architectural design for various project types. Our team creates highly detailed 2D drawings, and 3D visualizations, handles approvals, and detailed design. We even provide on-site measurement and compelling presentations, ensuring your project's success from concept to completion. ",
      imageUrl: "/img/services.jpg",
    },
    {
      name: "Engineering Services",
      description:
        "We offer structural, mechanical, electrical, civil, and environmental engineering. Our team utilizes advanced technology to ensure your project's safety, functionality, and sustainability. We handle project management, geotechnical services, and secure approvals – all under one roof.",
      imageUrl: "/img/services.jpg",
    },
    {
      name: "Construction Services",
      description:
        "Our skilled construction team delivers reliable services. We handle everything, from planning and cost estimates to efficient execution and Reliable quality control. Safety is our priority, ensuring international building standards. We also offer construction management, material procurement, and expert project consultation.",
      imageUrl: "/img/services.jpg",
    },
  ];
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_S animationData={S_json} />
      <ImageOverlaysTop namePage="SERVICES" title={selectedService.name} />

      <div className="flex flex-col md:flex-row min-h-screen  max-w-screen-xxl m-auto relative z-10">
        <div className="md:w-1/3 p-4">
          <ul className="space-y-2">
            {servicesData.map((service, index) => (
              <li
                key={index}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer text-xl lg:text-3xl p-4 font-bold  ${
                  selectedService.name === service.name
                    ? " border-l-[6px] border-shockersAEC  text-shockersAEC"
                    : "text-[#9b9999]   hover:text-shockersAEC"
                }`}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/3 p-4">
          <p className="mb-6 text-xl lg:text-2xl ">
            {selectedService.description}
          </p>
          <Image
            className="!relative  rounded-xl object-cover "
            src={selectedService.imageUrl}
            width={1200}
            height={600}
            alt={selectedService.name}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
