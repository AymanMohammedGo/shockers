"use client";
import Image from "next/image";
import HeaderBrond from "../../components/BrondHome/HeaderBrond";
import MySwiper from "../../components/BrondHome/SlideBrond";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LoadingVideo from "../../components/LoadingVideo";
import SelectLanguage from "@/components/SelectLanguage";
const hiddenMask = `repeating-linear-gradient(to top  , rgba(0,0,0,0) 0px, rgba(0,0,0,0) 20px, rgba(0,0,0,1) 20px, rgba(0,0,0,1) 20px)`;
const visibleMask = `repeating-linear-gradient(to top  , rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 20px)`;

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(true);

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
          <div className="grid  items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mx-40  gap-2 ">
            <motion.div
              className="flex items-center justify-center"
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <div className="relative w-full h-full">
                <Link href="./shockers">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    onLoad={() => setIsLoaded(true)}
                    src="/assets/shockers.jpg"
                    alt=""
                  />
                  <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/logo.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    {/* <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                      Architectural
                    </div> */}
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <div className="relative w-full h-full">
                <Link href="./shockers">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    onLoad={() => setIsLoaded(true)}
                    src="/assets/BAYTUNA.jpg"
                    alt=""
                  />
                  <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/BAYTUNA1.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    {/* <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                      Architectural
                    </div> */}
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <div className="relative w-full h-full">
                <Link href="./shockers">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    onLoad={() => setIsLoaded(true)}
                    src="/assets/YARD.jpg"
                    alt=""
                  />
                  <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/YARD1.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    {/* <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                      Architectural
                    </div> */}
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <div className="relative w-full h-full">
                <Link href="./shockers">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    onLoad={() => setIsLoaded(true)}
                    src="/assets/ECA.jpg"
                    alt=""
                  />
                  <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/ECA1.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    {/* <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                      Architectural
                    </div> */}
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <div className="relative w-full h-full">
                <Link href="./shockers">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    onLoad={() => setIsLoaded(true)}
                    src="/assets/YMARKETING.jpg"
                    alt=""
                  />
                  <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/YMARKETING1.png"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    {/* <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                      Architectural
                    </div> */}
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <div className="relative w-full h-full">
                <Link href="./shockers">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    onLoad={() => setIsLoaded(true)}
                    src="/assets/SHOCKY.jpg"
                    alt=""
                  />
                  <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/Shocky1.png"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    {/* <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                      Architectural
                    </div> */}
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      {/* )} */}
    </>
  );
};
export default Home;
