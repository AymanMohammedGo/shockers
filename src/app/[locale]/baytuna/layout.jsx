"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useEffect, useState, useCallback } from "react";
import Shockers from "/public/Motion/Shockers";

import Transition from "@/components/Motion/Transition";
import DrawLogo from "@/components/Lottie/DrawLogo";

import { getName_HeaderLinks } from "../../../../utils/GlobleApi";
export default function RootLayout({ children, params: { locale } }) {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }

  // const [linksNames, setLinksNames] = useState({
  //   NamePageHome: "HOME",
  //   NamePageAbout: "ABOUT US",
  //   NamePageServices: "SERVICES",
  //   NamePageProjects: "PROJECTS",
  //   NameMainPage: "Main Page",
  // });
  const [linksNames, setLinksNames] = useState([]);
  const getName_HeaderLinks_ = useCallback(() => {
    getName_HeaderLinks(lan).then((res) => {
      console.log(res.data.data.attributes);
      setLinksNames(res.data.data.attributes);
    });
  }, [lan]);
  useEffect(() => {
    getName_HeaderLinks_();
  }, [getName_HeaderLinks_]);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const [showContent, setShowContent] = useState(false);
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
  useEffect(() => {
    if (isAnimationCompleted) {
      setShowContent(true);
    }
  }, [isAnimationCompleted]);
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {!isAnimationCompleted && (
        <DrawLogo
          animationData={Shockers}
          onComplete={() => setIsAnimationCompleted(true)}
        />
      )}
      {showContent && (
        <>
          <Transition bg="bg-baytuna" />
          <Header
            logo="/img/LogosHeader/logoBaytuna.svg"
            width="80"
            name="baytuna"
            bg="bg-baytuna"
            hover="hover:bg-baytuna"
            text="text-shockersAEC"
            linksNames={linksNames}
          />

          {children}
          <Footer
            width="140"
            name="baytuna"
            logo="/img/LogosFooter/logoBaytunaWhite.svg"
            nameFooter="BAYTUNA"
            linksNames={linksNames}
            socialMedia={socialMedia}
          />
        </>
      )}
    </div>
  );
}
