import AnimatedText from "@/components/Motion/AnimatedText";
import { motion } from "framer-motion";

const SalgonSection = ({ titleText }) => {
  return (
    <section className=" w-screen h-screen ">
      <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 sm:px-6 md:px-10 lg:px-14 overflow-hidden">
        <div className="absolute bottom-0  leading-none text-[67px]  sm:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-shockersAEC">
          {titleText.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: item.delay, duration: 1.5 },
              }}
              // initial={{ y: "100%", opacity: 0 }}
              // animate={{
              //   y: 0,
              //   opacity: 1,
              //   transition: { delay: item.delay, duration: 1.5 },
              // }}
              key={index}
            >
              {item.text}
            </motion.div>
            // <AnimatedText
            //   key={index}
            //   text={item.text}
            //   delay={item.delay}
            // ></AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalgonSection;
