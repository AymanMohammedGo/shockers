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
      link: "/baytuna",
    },
    {
      name: "ABOUT US",
      link: "/baytuna/about",
    },
    {
      name: "SERVICES",
      link: "/baytuna/services",
    },
    {
      name: "PROJECTS",
      link: "/baytuna/projects",
    },
  ];
  const socialMedia = [
    {
      name: "Instagram",
      link: "",
    },
    {
      name: "Facebook",
      link: "",
    },
    {
      name: "Linkedin",
      link: "",
    },
  ];
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/done8_2.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <>
        <Header
          logo="/assets/logoBaytuna.svg"
          width="80"
          name="baytuna"
          bg="bg-baytuna"
          hover="hover:bg-baytuna"
          text="text-shockersAEC"
          links={links}
        />

        {children}
        <Footer
          width="140"
          name="baytuna"
          logo="/assets/logoBaytunaWhite.svg"
          nameFooter="BAYTUNA"
          links={links}
          socialMedia={socialMedia}
        />
      </>
      {/* )} */}
    </div>
  );
}
