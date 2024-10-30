import Image from "next/image";
import { motion } from "framer-motion";

const ImageOverlaysTop = ({ title, imgURL, dir, bgColor }) => {
  return (
    <div className="relative w-screen h-screen z-10">
      <Image
        className=" object-cover"
        src={imgURL}
        fill={true}
        alt="imageOverlays"
        quality={75}
        placeholder="blur"
        blurDataURL="/img/imageOverlays.jpg"
      />
      {bgColor && (
        <div className={`${bgColor}  w-full h-full absolute top-0`} />
      )}
      {!bgColor && (
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
      )}
      <div className="absolute bottom-10 lg:bottom-20 w-full ">
        <div className="m-auto px-2 lg:px-0 overflow-hidden max-w-screen-xxl text-center lg:text-start text-white lg:p-10  xxl:p-2">
          <motion.h1
            initial={{
              x: dir === "ltr" ? "-100%" : "+100%",
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
            }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold "
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysTop;
