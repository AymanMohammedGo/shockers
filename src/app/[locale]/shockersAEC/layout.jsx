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
  const socialMedia = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/shockersaec/",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/Shockersaec/",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/shockers-advertising/",
    },
  ];
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {/* {isVideoEnded ? (
        <LoadingVideo URL="/done8_2.mp4" setIsVideoEnded={setIsVideoEnded} />
      ) : ( */}
      <>
        <Header
          logo="/assets/logoShocker.svg"
          width="140"
          name="shockersAEC"
          bg="bg-shockersAEC"
          hover="hover:bg-shockersAEC"
          text="text-shockersAEC"
          links={links}
        />
        {children}
        <Footer
          width="240"
          name="shockersAEC"
          logo="/assets/logoShockerWhite.svg"
          nameFooter="SHOCKERSAEC"
          links={links}
          socialMedia={socialMedia}
        />
      </>
      {/* )} */}
    </div>
  );
}
