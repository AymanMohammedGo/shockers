import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const ServicesSection = ({ services }) => {
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
  const var2 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
  const var3 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    },
  };
  const var4 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.9,
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
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <section className="bg-seconds w-screen h-screen flex items-center justify-center z-10">
      <div className="flex w-full h-full flex-col xl:flex-row justify-center items-center    lg:px-2 overflow-hidden">
        <div className=" text-white flex-1  flex flex-col items-center justify-center overflow-hidden">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={var1}
            className="text-6xl lg:text-8xl font-bold my-8 "
          >
            Services
          </motion.h1>
          <ul>
            <motion.li
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={var2}
              className="flex items-center text-xl xl:text-3xl mb-3"
            >
              <CircleCheckBig />
              <span className="mx-2">Architectural Services</span>
            </motion.li>
            <motion.li
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={var3}
              className="flex items-center text-xl xl:text-3xl mb-3"
            >
              <CircleCheckBig />
              <span className="mx-2">Engineering Services</span>
            </motion.li>
            <motion.li
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={var4}
              className="flex items-center text-xl xl:text-3xl mb-3"
            >
              <CircleCheckBig />
              <span className="mx-2">Construction Services</span>
            </motion.li>
          </ul>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={var5}
          >
            <Link href="/shockersAEC/projects">
              <Button className="bg-white w-fit text-seconds hover:bg-shockersAEC hover:text-white hover:outline text-base my-8  ">
                Read More..
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="relative w-screen h-[50vh] xl:h-screen xl:w-[50vw]">
          <Image
            src="/assets/services.jpg"
            layout="fill"
            objectFit="cover"
            alt="services"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
