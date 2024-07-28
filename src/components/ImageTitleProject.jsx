import Image from "next/image";
import React from "react";

const ImageTitleProject = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image
        className=" object-cover"
        src="/img/projects.jpg"
        fill={true}
        alt="ImageTitleProject"
        quality={75}
      />
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
      <div className="flex items-center justify-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 absolute bottom-0 max-w-screen-xxl w-full p-2 lg:p-6 bg-shockersAEC/85 text-white ">
          <div className="p-2 mb-2">
            <h2 className="font-bold text-xl md:text-2x lg:text-[24px]  mb-2">
              DESCRIPTION
            </h2>
            <span className="text-base md:text-xl lg:text-[20px] mb-2">
              Architectural Design
            </span>
          </div>
          <div className="p-2 mb-2">
            <h2 className="font-bold text-xl md:text-2x lg:text-[24px]  mb-2">
              LOCATION
            </h2>
            <span className="text-base md:text-xl lg:text-[20px]">
              Sulaymaiyah
            </span>
          </div>
          <div className="p-2 mb-2">
            <h2 className="font-bold text-xl md:text-2x lg:text-[24px]  mb-2">
              STARTING YEAR
            </h2>
            <span className="text-base md:text-xl lg:text-[20px]">2019</span>
          </div>
          <div className="p-2 mb-2">
            <h2 className="font-bold text-xl md:text-2x lg:text-[24px]  mb-2">
              ENDING YEAR
            </h2>
            <span className="text-base md:text-xl lg:text-[20px]">2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTitleProject;
