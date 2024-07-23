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
        "We offer comprehensive architectural design of residential projects of different scales. Our detailed 2D and 3D designs and renderings ensure clear communication of your vision. We understand your needs and budget, providing sustainable, semi-sustainable, or typical design options.",
      image: "/assets/services.jpg",
    },
    {
      name: "Engineering Services",
      description:
        "Our collaborative environment pairs seasoned engineers with architects. This ensures every project prioritizes structural integrity, functionality, and resource efficiency. We create architectural, structural, mechanical, and electrical designs that meet all regulatory standards.",
      image: "/assets/services.jpg",
    },
    {
      name: "Construction Services",
      description:
        "Our skilled team uses best practices to deliver your project on time and within budget. We offer comprehensive services including implementation, maintenance, cost estimation, project management, and expert consultancy.",
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
                  className="  my-3 !relative    object-cover"
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
