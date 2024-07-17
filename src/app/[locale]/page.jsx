"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LoadingVideo from "../../components/LoadingVideo";
const Home = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <>
      {isVideoEnded ? (
        <LoadingVideo URL="/done8_2.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : (
        <main className="  bg-primary ">
          <div class="flex items-center justify-center min-h-screen">
            <div className=" grid relative  items-center justify-center grid-cols-2  sm:grid-cols-3  ">
              <div className="flex items-center justify-center ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="relative "
                >
                  <Link href="/shockersAEC">
                    <Image
                      className=" xlgl:w-[600px] xlgl:h-[600px] object "
                      src="/assets/SHOCKERS.svg"
                      alt=""
                      width={420}
                      height={420}
                    />
                    <div
                      onMouseEnter={() => setHoveredIndex(1)}
                      onMouseLeave={() => setHoveredIndex(0)}
                      className="absolute top-0  overflow-hidden left-0  flex items-center justify-center opacity-0   hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        className=" xlgl:w-[600px] xlgl:h-[600px] object"
                        src="/assets/SHOCKERS1.svg"
                        alt="hovered image"
                        width={420}
                        height={420}
                      />
                      <motion.div
                        initial={{ bottom: -30 }}
                        animate={
                          hoveredIndex === 1 ? { bottom: 0 } : { bottom: -30 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0,
                        }}
                        className="absolute mb-3 font-medium  text-center text-seconds text-sm sm:text-base md:text-xl xlgl:text-2xl   overflow-hidden"
                      >
                        Dared To Be Shocked
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center justify-center ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                  }}
                  className="relative "
                >
                  <Link href="#">
                    <Image
                      className=" xlgl:w-[600px] xlgl:h-[600px] object"
                      width={420}
                      height={420}
                      src="/assets/BAYTUNA.svg"
                      alt=""
                    />
                    <div
                      onMouseEnter={() => setHoveredIndex(2)}
                      onMouseLeave={() => setHoveredIndex(0)}
                      className="absolute top-0 overflow-hidden left-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        className=" xlgl:w-[600px] xlgl:h-[600px] object"
                        src="/assets/BAYTUNA1.svg"
                        alt="hovered image"
                        width={420}
                        height={420}
                      />
                      <motion.div
                        initial={{ bottom: -30 }}
                        animate={
                          hoveredIndex === 2 ? { bottom: -7 } : { bottom: -30 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0,
                        }}
                        className="absolute mb-3 font-medium  text-center text-white text-sm sm:text-base md:text-xl xlgl:text-2xl  overflow-hidden"
                      >
                        When Your House <div>Becomes Your Home</div>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center justify-center ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1.5,
                  }}
                  className="relative "
                >
                  <Link href="#">
                    <Image
                      className=" xlgl:w-[600px] xlgl:h-[600px] object"
                      width={420}
                      height={420}
                      src="/assets/YARD.svg"
                      alt=""
                    />
                    <div
                      onMouseEnter={() => setHoveredIndex(3)}
                      onMouseLeave={() => setHoveredIndex(0)}
                      className="absolute top-0 overflow-hidden left-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        className=" xlgl:w-[600px] xlgl:h-[600px] object"
                        src="/assets/YARD1.svg"
                        alt="hovered image"
                        width={420}
                        height={420}
                      />
                      <motion.div
                        initial={{ bottom: -30 }}
                        animate={
                          hoveredIndex === 3 ? { bottom: 0 } : { bottom: -30 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0,
                        }}
                        className="absolute mb-3 font-medium  text-center text-seconds text-sm sm:text-base md:text-xl xlgl:text-2xl  overflow-hidden"
                      >
                        Ever Green
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center justify-center ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 2,
                  }}
                  className="relative "
                >
                  <Link href="#">
                    <Image
                      className=" xlgl:w-[600px] xlgl:h-[600px] object"
                      width={420}
                      height={420}
                      src="/assets/ECA.svg"
                      alt=""
                    />
                    <div
                      onMouseEnter={() => setHoveredIndex(4)}
                      onMouseLeave={() => setHoveredIndex(0)}
                      className="absolute top-0 overflow-hidden left-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        className=" xlgl:w-[600px] xlgl:h-[600px] object"
                        src="/assets/ECA1.svg"
                        alt="hovered image"
                        width={420}
                        height={420}
                      />
                      <motion.div
                        initial={{ bottom: -30 }}
                        animate={
                          hoveredIndex === 4 ? { bottom: 0 } : { bottom: -30 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0,
                        }}
                        className="absolute mb-3 font-medium  text-center text-white text-sm sm:text-base md:text-xl xlgl:text-2xl  overflow-hidden"
                      >
                        Where Details Matter
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center justify-center ">
                <motion.div
                  className="relative "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 2.5,
                  }}
                >
                  <Link href="#">
                    <Image
                      className=" xlgl:w-[600px] xlgl:h-[600px] object"
                      width={420}
                      height={420}
                      src="/assets/YMARKETING.svg"
                      alt=""
                    />
                    <div
                      onMouseEnter={() => setHoveredIndex(5)}
                      onMouseLeave={() => setHoveredIndex(0)}
                      className="absolute top-0 overflow-hidden left-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        className=" xlgl:w-[600px] xlgl:h-[600px] object"
                        src="/assets/YMARKETING1.svg"
                        alt="hovered image"
                        width={420}
                        height={420}
                      />
                      <motion.div
                        initial={{ bottom: -30 }}
                        animate={
                          hoveredIndex === 5 ? { bottom: 0 } : { bottom: -30 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0,
                        }}
                        className="absolute mb-3 font-medium  text-center text-[#FECE00] text-sm sm:text-base md:text-xl xlgl:text-2xl  overflow-hidden"
                      >
                        Because You Need It
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center justify-center ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 3,
                  }}
                  className="relative "
                >
                  <Link href="#">
                    <Image
                      className=" xlgl:w-[600px] xlgl:h-[600px] object"
                      width={420}
                      height={420}
                      src="/assets/SHOCKY.svg"
                      alt=""
                    />
                    <div
                      onMouseEnter={() => setHoveredIndex(6)}
                      onMouseLeave={() => setHoveredIndex(0)}
                      className="absolute top-0 overflow-hidden left-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        className=" xlgl:w-[600px] xlgl:h-[600px] object"
                        src="/assets/Shocky1.svg"
                        alt="hovered image"
                        width={420}
                        height={420}
                      />
                      <motion.div
                        initial={{ bottom: -30 }}
                        animate={
                          hoveredIndex === 6 ? { bottom: 0 } : { bottom: -30 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0,
                        }}
                        className="absolute mb-3 font-medium   text-center text-white text-sm sm:text-base md:text-xl xlgl:text-2xl  overflow-hidden"
                      >
                        Be The Shock
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </div>
              {/* gap */}
              <motion.div
                className="gap-animation  hidden sm:flex bg-black h-[5px] absolute z-10 left-0"
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                }}
              />

              <motion.div
                className="gap-animation hidden sm:flex bg-black w-[5px] absolute top-0 left-1/3 z-10"
                animate={{
                  height: ["0%", "100%"],
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
              />
              <motion.div
                className="gap-animation hidden sm:flex bg-black w-[5px] absolute top-0 right-1/3 z-10"
                animate={{
                  height: ["0%", "100%"],
                }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                }}
              />
              {/* gap Mobile*/}
              <motion.div
                className="gap-animation  flex sm:hidden bg-black h-[4px] absolute z-10 top-1/3"
                animate={{
                  width: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="gap-animation  flex sm:hidden bg-black h-[4px] absolute z-10 bottom-1/3"
                animate={{
                  width: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
                }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                }}
              />
              <motion.div
                className="gap-animation ro  flex sm:hidden bg-black w-[4px] absolute z-10 left-1/2 top-0"
                animate={{
                  height: ["0%", "100%"], // حرك الـ gap من اليسار إلى اليمين
                }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                }}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
};
export default Home;
