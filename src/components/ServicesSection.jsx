"use client";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const ServicesSection = ({ services, link, image, bg, tc }) => {
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
    <section className="bg-seconds w-screen h-screen flex items-center justify-center relative z-10">
      <div className="flex w-full h-full flex-col xl:flex-row justify-center items-center    lg:px-2 overflow-hidden">
        <div className=" text-white flex-1  flex flex-col items-center justify-center overflow-hidden">
          <motion.h1
            ref={ref1}
            initial="hidden"
            animate={controls1}
            variants={var1}
            className="text-6xl lg:text-8xl font-bold my-8 "
          >
            Services
          </motion.h1>
          <ul>
            {services.map((item, index) => (
              <motion.li
                key={index}
                ref={ref1}
                initial="hidden"
                animate={controls1}
                variants={item.effect}
                className="flex items-center text-xl xl:text-3xl mb-3"
              >
                <CircleCheckBig />
                <span className="mx-2">{item.name}</span>
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
                Read More..
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 2,
          }}
          className="relative w-screen h-[50vh] xl:h-screen xl:w-[50vw] "
        >
          <Image
            src={`${image}`}
            fill={true}
            alt="services"
            quality={100}
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
