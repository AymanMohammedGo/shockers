"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useEffect, useState, useCallback } from "react";
import { getName_HeaderLinks } from "../../../../utils/GlobleApi";
import Transition from "@/components/Motion/Transition";
import DrawLogo from "@/components/Lottie/DrawLogo";
import Shockers from "/public/Motion/Shockers";
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
  //   NameMainPage:"Main Page"
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

  const [isVideoEnded, setIsVideoEnded] = useState(true);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const [showContent, setShowContent] = useState(false);
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
  useEffect(() => {
    if (isAnimationCompleted) {
      setShowContent(true);
    }
  }, [isAnimationCompleted]);
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between">
      {!isAnimationCompleted && (
        <DrawLogo
          animationData={Shockers}
          onComplete={() => setIsAnimationCompleted(true)}
        />
      )}
      {showContent && (
        <>
          <Transition bg="bg-shockersAEC" />
          <Header
            logo="/img/LogosHeader/logoShocker.svg"
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
            logo="/img/LogosFooter/logoShockerWhite.svg"
            nameFooter="SHOCKERSAEC"
            linksNames={linksNames}
            socialMedia={socialMedia}
          />
        </>
      )}
    </div>
  );
}
