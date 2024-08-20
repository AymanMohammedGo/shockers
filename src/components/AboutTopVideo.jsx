import { motion } from "framer-motion";

const AboutTopSection = ({ videoMobile, videoLoptap, title, dir }) => {
  return (
    <div className="relative w-screen h-screen z-10 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoLoptap} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoMobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

export default AboutTopSection;
