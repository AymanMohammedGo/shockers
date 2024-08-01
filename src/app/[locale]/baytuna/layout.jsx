"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useEffect, useState, useCallback, createRef } from "react";
import DrawLogoBaytuna from "@/components/Lottie/DrawLogoBaytuna";
import Transition from "@/components/Motion/Transition";
import baytuna from "/public/Motion/LogoBaytuna";
import lottie from "lottie-web";

import { getName_HeaderLinks } from "../../../../utils/GlobleApi";
export default function RootLayout({ children, params: { locale } }) {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  let animation = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/Motion/LogoBaytuna.json",
    });
    anim.addEventListener("complete", () => {
      setIsAnimationCompleted(true); // استدعاء onComplete عند انتهاء الرسوم المتحركة
    });
    return () => anim.destroy();
  }, []);

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
      {/* {!isAnimationCompleted && (
        <DrawLogoBaytuna
          animationData={baytuna}
          onComplete={() => setIsAnimationCompleted(true)}
        />
      )} */}
      {!isAnimationCompleted && (
        <div
          className="flex justify-center items-center w-screen h-screen"
          ref={animation}
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
