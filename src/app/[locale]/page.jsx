"use client";
import Image from "next/image";
import HeaderBrond from "../../components/BrondHome/HeaderBrond";
import MySwiper from "../../components/BrondHome/SlideBrond";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LoadingVideo from "../../components/LoadingVideo";

const Home = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <>
      {/* <SelectLanguage /> */}
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/video.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <main className="min-h-screen  bg-primary ">
        {/* <HeaderBrond /> */}
        {/* <MySwiper /> */}
        {/* <div className="flex items-center justify-center flex-wrap gap-2 py-8"> */}

        <div class="flex items-center justify-center min-h-screen">
          <div className="grid relative  items-center justify-center grid-cols-2  sm:grid-cols-3  ">
            <div className="flex items-center justify-center ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                className="relative w-full h-full"
              >
                <Link href="/shockersAEC">
                  <Image
                    className="w-full h-full object-cover "
                    width={350}
                    height={350}
                    src="/assets/SHOCKERS.jpg"
                    alt=""
                  />
                  <div
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(0)}
                    className="absolute top-0 overflow-hidden left-0 w-full h-full flex items-center justify-center opacity-0   hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/SHOCKERS1.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    <motion.div
                      initial={{ bottom: -30 }}
                      animate={
                        hoveredIndex === 1 ? { bottom: 0 } : { bottom: -30 }
                      }
                      transition={{
                        duration: 1,
                        delay: 0,
                      }}
                      className="absolute mb-3  text-center text-seconds text-sm sm:text-base md:text-xl overflow-hidden"
                    >
                      Dared to be shocked
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
                className="relative w-full h-full"
              >
                <Link href="#">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    src="/assets/BAYTUNA.jpg"
                    alt=""
                  />
                  <div
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(0)}
                    className="absolute top-0 overflow-hidden left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/BAYTUNA1.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    <motion.div
                      initial={{ bottom: -30 }}
                      animate={
                        hoveredIndex === 2 ? { bottom: -7 } : { bottom: -30 }
                      }
                      transition={{
                        duration: 1,
                        delay: 0,
                      }}
                      className="absolute mb-3  text-center text-white text-sm sm:text-base md:text-xl overflow-hidden"
                    >
                      When your house becomes <div>your home</div>
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
                className="relative w-full h-full"
              >
                <Link href="#">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    src="/assets/YARD.jpg"
                    alt=""
                  />
                  <div
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(0)}
                    className="absolute top-0 overflow-hidden left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/YARD1.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    <motion.div
                      initial={{ bottom: -30 }}
                      animate={
                        hoveredIndex === 3 ? { bottom: 0 } : { bottom: -30 }
                      }
                      transition={{
                        duration: 1,
                        delay: 0,
                      }}
                      className="absolute mb-3  text-center text-seconds text-sm sm:text-base md:text-xl overflow-hidden"
                    >
                      Ever green
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
                className="relative w-full h-full"
              >
                <Link href="#">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    src="/assets/ECA.jpg"
                    alt=""
                  />
                  <div
                    onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(0)}
                    className="absolute top-0 overflow-hidden left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/ECA1.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    <motion.div
                      initial={{ bottom: -30 }}
                      animate={
                        hoveredIndex === 4 ? { bottom: 0 } : { bottom: -30 }
                      }
                      transition={{
                        duration: 1,
                        delay: 0,
                      }}
                      className="absolute mb-3  text-center text-white text-sm sm:text-base md:text-xl overflow-hidden"
                    >
                      where details matter
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className="flex items-center justify-center ">
              <motion.div
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: 2.5,
                }}
              >
                <Link href="#">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    src="/assets/YMARKETING.jpg"
                    alt=""
                  />
                  <div
                    onMouseEnter={() => setHoveredIndex(5)}
                    onMouseLeave={() => setHoveredIndex(0)}
                    className="absolute top-0 overflow-hidden left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/YMARKETING1.png"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    <motion.div
                      initial={{ bottom: -30 }}
                      animate={
                        hoveredIndex === 5 ? { bottom: 0 } : { bottom: -30 }
                      }
                      transition={{
                        duration: 1,
                        delay: 0,
                      }}
                      className="absolute mb-3  text-center text-[#FECE00] text-sm sm:text-base md:text-xl overflow-hidden"
                    >
                      because you need it
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
                className="relative w-full h-full"
              >
                <Link href="#">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    src="/assets/SHOCKY.jpg"
                    alt=""
                  />
                  <div
                    onMouseEnter={() => setHoveredIndex(6)}
                    onMouseLeave={() => setHoveredIndex(0)}
                    className="absolute top-0 overflow-hidden left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/Shocky1.png"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    <motion.div
                      initial={{ bottom: -30 }}
                      animate={
                        hoveredIndex === 6 ? { bottom: 0 } : { bottom: -30 }
                      }
                      transition={{
                        duration: 1,
                        delay: 0,
                      }}
                      className="absolute mb-3  text-center text-white text-sm sm:text-base md:text-xl overflow-hidden"
                    >
                      be the shock
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
      {/* )} */}
    </>
  );
};
export default Home;
