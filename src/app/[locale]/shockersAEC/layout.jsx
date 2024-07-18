"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useState } from "react";
export default function RootLayout({ children }) {
  const [isVideoEnded, setIsVideoEnded] = useState(true);
  const links = [
    {
      name: "HOME",
      link: "/shockersAEC",
    },
    {
      name: "ABOUT US",
      link: "/shockersAEC/about",
    },
    {
      name: "SERVICES",
      link: "/shockersAEC/services",
    },
    {
      name: "PROJECTS",
      link: "/shockersAEC/projects",
    },
  ];
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/done8_2.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <>
        <Header
          logo="/assets/logoShocker.png"
          width="140"
          name="shockersAEC"
          bg="bg-shockersAEC"
          hover="hover:bg-shockersAEC"
          text="text-shockersAEC"
          links={links}
        />

        {children}
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}
