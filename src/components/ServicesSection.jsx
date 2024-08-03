"use client";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const ServicesSection = ({
  services,
  title,
  textButton,
  link,
  image,
  bg,
  tc,
}) => {
  const var1 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };

  const var5 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5,
      },
    },
  };
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);
  return (
    <section className="sticky top-0">
      <div className="bg-shockersAEC  w-screen h-screen flex items-center justify-center relative z-10">
        <div className="flex w-full h-full flex-col xl:flex-row justify-center items-center lg:px-2 overflow-hidden">
          <div className=" text-white flex-1 p-2 lg:p-4 flex flex-col items-center justify-center ">
            <motion.h1
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={var1}
              className="text-6xl lg:text-8xl font-bold my-8 "
            >
              {title}
            </motion.h1>
            <ul>
              {services.map((item, index) => (
                <motion.li
                  key={index}
                  ref={ref1}
                  initial="hidden"
                  animate={controls1}
                  variants={item.effect}
                  className="flex items-center  mb-7"
                >
                  <CircleCheckBig className="w-[25px] lg:w-[30px]" />
                  <span className="mx-4 w-full text-xl lg:text-2xl xl:text-3xl">
                    {item?.name?.attributes?.title}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={var5}
            >
              <Link href={`/${link}/services`}>
                <Button
                  className={`${bg} w-fit ${tc} hover:bg-shockersAEC hover:text-white hover:outline text-base my-8`}
                >
                  {textButton}
                </Button>
              </Link>
            </motion.div>
          </div>
          {/* <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 2,
          }}
          className="relative w-screen h-[50vh] xl:h-screen xl:w-[50vw] "
        >
          <Image
            src={image}
            fill={true}
            alt="services"
            quality={100}
            className="object-cover"
          />
        </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
