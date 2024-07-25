import React from "react";
import AnimatedText from "@/components/Motion/AnimatedText";

const SalgonSection = ({ titleText }) => {
  return (
    <section className=" w-screen h-screen ">
      <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
        <div className="absolute bottom-0 text-[67px] leading-none md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds">
          {titleText.map((item, index) => (
            <AnimatedText
              key={index}
              text={item.text}
              delay={item.delay}
            ></AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalgonSection;
