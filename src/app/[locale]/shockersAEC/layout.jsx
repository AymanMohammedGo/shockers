"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useEffect, useState, useCallback } from "react";
import getName_HeaderLinks from "../../../../utils/GlobleApi";
import Transition from "@/components/Motion/Transition";
export default function RootLayout({ children, params: { locale } }) {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }

  const [linksNames, setLinksNames] = useState({
    NamePageHome: "HOME",
    NamePageAbout: "ABOUT US",
    NamePageServices: "SERVICES",
    NamePageProjects: "PROJECTS",
  });
  // const [linksNames, setLinksNames] = useState([]);
  // const getName_HeaderLinks_ = useCallback(() => {
  //   getName_HeaderLinks(lan).then((res) => {
  //     console.log(res.data.data.attributes);
  //     setLinksNames(res.data.data.attributes);
  //   });
  // }, [lan]);
  // useEffect(() => {
  //   getName_HeaderLinks_();
  // }, [getName_HeaderLinks_]);

  const [isVideoEnded, setIsVideoEnded] = useState(true);

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
        <Transition />
        <Header
          logo="/assets/logoShocker.svg"
          width="140"
          name="shockersAEC"
          bg="bg-shockersAEC"
          hover="hover:bg-shockersAEC"
          text="text-shockersAEC"
          linksNames={linksNames}
        />
        {children}
        <Footer
          width="240"
          name="shockersAEC"
          logo="/assets/logoShockerWhite.svg"
          nameFooter="SHOCKERSAEC"
          linksNames={linksNames}
          socialMedia={socialMedia}
        />
      </>
      {/* )} */}
    </div>
  );
}
