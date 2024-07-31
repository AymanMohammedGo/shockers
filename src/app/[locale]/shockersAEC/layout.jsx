"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingVideo from "@/components/LoadingVideo";
import { useEffect, useState, useCallback } from "react";
import { getName_HeaderLinks } from "../../../../utils/GlobleApi";
import { getFooter, getSocialMedias } from "../../../../utils/ShockersApi";
import Transition from "@/components/Motion/Transition";
import DrawLogo from "@/components/Lottie/DrawLogo";
import Shockers from "/Motion/Baytuna.json";
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
  const [footerNames, setFooterNames] = useState([]);
  const [socialMedias, setSocialMedias] = useState([]);

  const getName_HeaderLinks_ = useCallback(() => {
    getName_HeaderLinks(lan).then((res) => {
      console.log(res.data.data.attributes);
      setLinksNames(res.data.data.attributes);
    });
  }, [lan]);
  const getFooter_ = useCallback(() => {
    getFooter(lan).then((res) => {
      console.log(res.data.data.attributes);
      setFooterNames(res.data.data.attributes);
    });
  }, [lan]);
  const getSocialMedias_ = useCallback(() => {
    getSocialMedias(lan).then((res) => {
      console.log(res.data.data);
      setSocialMedias(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getName_HeaderLinks_();
    getFooter_();
    getSocialMedias_();
  }, [getName_HeaderLinks_, getFooter_, getSocialMedias_]);

  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const [showContent, setShowContent] = useState(false);

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
            Dir={document.dir}
          />
          {children}
          <Footer
            width="240"
            name="shockersAEC"
            logo="/img/LogosFooter/logoShockerWhite.svg"
            linksNames={linksNames}
            Dir={document.dir}
            Lan={locale}
            data={footerNames}
            socialMedia={socialMedias}
          />
        </>
      )}
    </div>
  );
}
