"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
const Services = () => {
  const service = [
    {
      name: "Architectural Services",
      description:
        "We offer comprehensive architectural design for various project types. Our team creates highly detailed 2D drawings, and 3D visualizations, handles approvals, and detailed design. We even provide on-site measurement and compelling presentations, ensuring your project's success from concept to completion. ",
      image: "/assets/services.jpg",
    },
    {
      name: "Engineering Services",
      description:
        "We offer structural, mechanical, electrical, civil, and environmental engineering. Our team utilizes advanced technology to ensure your project's safety, functionality, and sustainability. We handle project management, geotechnical services, and secure approvals – all under one roof.",
      image: "/assets/services.jpg",
    },
    {
      name: "Construction Services",
      description:
        "Our skilled construction team delivers reliable services. We handle everything, from planning and cost estimates to efficient execution and Reliable quality control. Safety is our priority, ensuring international building standards. We also offer construction management, material procurement, and expert project consultation.",
      image: "/assets/services.jpg",
    },
  ];
  return (
    <>
      <ImageOverlaysTop namePage="SERVICES" title="Shockers AEC" />
      <div className="max-w-screen-xxl m-auto w-full  p-2">
        <Accordion type="single" collapsible className="w-full">
          {service.map((item, index) => (
            <AccordionItem key={index} value={item.name} className="my-5">
              <AccordionTrigger className="font-bold text-2xl md:text-4xl text-seconds">
                {item.name}
              </AccordionTrigger>
              <AccordionContent className="text-xl ">
                {item.description}
                <Image
                  className="  my-3 !relative   object-cover"
                  src={item.image}
                  fill={true}
                  alt={item.name}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Services;
