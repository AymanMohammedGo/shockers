import Image from "next/image";
import React from "react";

const ImageTitleProject = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image
        className="w-full h-full object-cover"
        src="/assets/projects.jpg"
        width={1000}
        height={500}
        alt=""
      />
      <div className="flex items-center justify-center text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 absolute bottom-0 max-w-screen-xxl w-full p-2 lg:p-6    bg-seconds text-white ">
          <div className="p-2">
            <h2 className="font-bold text-base md:text-lg lg:text-xl  mb-2">
              DESCRIPTION
            </h2>
            <span className="text-sm md:text-base lg:text-lg">
              Architectural Design
            </span>
          </div>
          <div className="p-2">
            <h2 className="font-bold text-base md:text-lg lg:text-xl  mb-2">
              LOCATION
            </h2>
            <span className="text-sm md:text-base lg:text-lg">Sulaymaiyah</span>
          </div>
          <div className="p-2">
            <h2 className="font-bold text-base md:text-lg lg:text-xl  mb-2">
              STARTING YEAR
            </h2>
            <span className="text-sm md:text-base lg:text-lg">2019</span>
          </div>
          <div className="p-2">
            <h2 className="font-bold text-base md:text-lg lg:text-xl  mb-2">
              ENDING YEAR
            </h2>
            <span className="text-sm md:text-base lg:text-lg">2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTitleProject;
