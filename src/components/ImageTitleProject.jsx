import Image from "next/image";
import React from "react";

const ImageTitleProject = ({
  detail,
  name,
  description,
  location,
  StartingEndingYear,
  imgURL,
}) => {
  const details = [
    { value: name, label: detail?.Name },
    { value: description, label: detail?.Description },
    { value: location, label: detail?.Location },
    { value: StartingEndingYear, label: detail?.StartingEndingYear },
  ];
  return (
    <div className="relative h-screen w-screen">
      <Image
        className=" object-cover"
        src={imgURL}
        fill={true}
        alt="ImageTitleProject"
        quality={75}
        placeholder="blur"
        blurDataURL="/img/imageOverlays.jpg"
      />
      {/* <div className="bg-black bg-opacity-40 w-full h-full absolute top-0" /> */}
      <div className="flex items-center justify-center text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 absolute bottom-0 max-w-screen-xxl w-full p-2 lg:p-6 bg-shockersAEC/85 text-white ">
          {details.map((item, index) => (
            <div key={index} className="p-2 mb-2">
              <h2 className="font-bold text-lg sm:text-xl md:text-2x lg:text-[24px] mb-2">
                {item.label}
              </h2>
              <span className="text-base md:text-xl lg:text-[20px]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageTitleProject;
