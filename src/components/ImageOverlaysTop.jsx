import Image from "next/image";
import { motion } from "framer-motion";

const ImageOverlaysTop = ({ namePage, title }) => {
  return (
    <div className="relative w-screen h-screen z-10">
      <Image
        className=" object-cover"
        src="/assets/imageOverlays.jpg"
        fill={true}
        alt="imageOverlays"
        quality={75}
      />
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
      <div className="absolute top-2/3  w-full ">
        <div className="m-auto max-w-screen-xxl text-center lg:text-start    text-white p-2">
          <p className=" text-3xl  font-bold mb-6">{namePage}</p>
          <h1 className="text-6xl lg:text-8xl font-bold mb-5 lg:mb-6 ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysTop;
