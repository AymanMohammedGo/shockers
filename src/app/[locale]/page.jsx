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
          <div className="grid relative  items-center justify-center grid-cols-2  md:grid-cols-3  ">
            <div className="flex items-center justify-center overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }} // يجعل العنصر خارج الشاشة من البداية
                animate={{ x: "0%" }} // حركة العنصر من اليسار إلى اليمين
                transition={{
                  duration: 1,
                  delay: 2,
                }}
                className="relative w-full h-full"
              >
                <Link href="#">
                  <Image
                    className="w-full h-full object-cover"
                    width={350}
                    height={350}
                    src="/assets/SHOCKERS.jpg"
                    alt=""
                  />
                  <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/SHOCKERS1.jpg"
                      alt="hovered image"
                      width={350}
                      height={350}
                    />
                    {/* <div className=" py-3 px-4 absolute bottom-0 left-0 text-black text-lg font-bold">
                      Architectural
                    </div> */}
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }} // يجعل العنصر خارج الشاشة من البداية
                animate={{ x: "0%" }} // حركة العنصر من اليسار إلى اليمين
                transition={{
                  duration: 1,
                  delay: 2,
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
              </motion.div>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }} // يجعل العنصر خارج الشاشة من البداية
                animate={{ x: "0%" }} // حركة العنصر من اليسار إلى اليمين
                transition={{
                  duration: 1,
                  delay: 2,
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
              </motion.div>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }} // يجعل العنصر خارج الشاشة من البداية
                animate={{ x: "0%" }} // حركة العنصر من اليسار إلى اليمين
                transition={{
                  duration: 1,
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
              </motion.div>
            </div>
            <div className="flex items-center justify-center h-full overflow-hidden">
              <motion.div
                className="relative w-full h-full"
                initial={{ x: "-100%" }} // يجعل العنصر خارج الشاشة من البداية
                animate={{ x: "0%" }} // حركة العنصر من اليسار إلى اليمين
                transition={{
                  duration: 1,
                  delay: 2,
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
              </motion.div>
            </div>
            <div className="flex items-center justify-center h-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }} // يجعل العنصر خارج الشاشة من البداية
                animate={{ x: "0%" }} // حركة العنصر من اليسار إلى اليمين
                transition={{
                  duration: 1,
                  delay: 2,
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
              </motion.div>
            </div>
            {/* gap */}
            <motion.div
              className="gap-animation  hidden md:flex bg-black h-[6px] absolute z-10 left-1/2"
              animate={{
                width: ["0%", "50%"], // حركة الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            />
            <motion.div
              className="gap-animation hidden md:flex bg-black h-[6px] absolute z-10 right-1/2"
              animate={{
                width: ["0%", "50%"], // حركة الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            />
            <motion.div
              className="gap-animation hidden md:flex bg-black w-[6px] absolute left-1/3 z-10"
              animate={{
                height: ["0%", "100%"], // حركة الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            />
            <motion.div
              className="gap-animation hidden md:flex bg-black w-[6px] absolute right-1/3 z-10"
              animate={{
                height: ["0%", "100%"], // حركة الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            />
            {/* gap Mobile*/}
            <motion.div
              className="gap-animation  flex md:hidden bg-black h-[4px] absolute z-10 top-1/3"
              animate={{
                width: ["0%", "100%"], // حركة الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            />
            <motion.div
              className="gap-animation  flex md:hidden bg-black h-[4px] absolute z-10 bottom-1/3"
              animate={{
                width: ["0%", "100%"], // حركة الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            />
            <motion.div
              className="gap-animation ro  flex md:hidden bg-black w-[4px] absolute z-10 left-1/2"
              animate={{
                height: ["0%", "100%"], // حركة الـ gap من اليسار إلى اليمين
              }}
              transition={{
                duration: 1,
                delay: 1,
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
