import Accordion from "@/components/Accordion";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import React from "react";

const Services = () => {
  return (
    <>
      <ImageOverlaysTop namePage="SERVICES" title="Shockers AEC" />
      <div className="max-w-screen-xxl m-auto w-full my-6">
        <Accordion />
      </div>
    </>
  );
};

export default Services;
