"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState, useCallback, createRef } from "react";
import { getName_HeaderLinks } from "../../../../utils/GlobleApi";
import { getFooter, getSocialMedias } from "../../../../utils/Y_MarketingApi";
import Transition from "@/components/Motion/Transition";
import lottie from "lottie-web";

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
      path: "/Motion/y marketing website logo motion.json",
    });
    anim.setSpeed(2);

    anim.addEventListener("complete", () => {
      setIsAnimationCompleted(true);
    });
    return () => anim.destroy();
  }, []);

  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [linksNames, setLinksNames] = useState([]);
  const [footerNames, setFooterNames] = useState([]);
  const [socialMedias, setSocialMedias] = useState([]);

  const getName_HeaderLinks_ = useCallback(() => {
    getName_HeaderLinks(lan).then((res) => {
      setLinksNames(res.data.data);
    });
  }, [lan]);
  const getFooter_ = useCallback(() => {
    getFooter(lan).then((res) => {
      setFooterNames(res.data.data);
    });
  }, [lan]);
  const getSocialMedias_ = useCallback(() => {
    getSocialMedias(lan).then((res) => {
      setSocialMedias(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getName_HeaderLinks_();
    getFooter_();
    getSocialMedias_();
  }, [getName_HeaderLinks_, getFooter_, getSocialMedias_]);

  useEffect(() => {
    if (isAnimationCompleted) {
      setShowContent(true);
    }
  }, [isAnimationCompleted]);
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between">
      {!isAnimationCompleted && (
        <div
          className="flex justify-center items-center w-screen h-screen"
          ref={animation}
        />
      )}

      {showContent && (
        <>
          <Transition bg="bg-yMarketing" />
          <Header
            logo="/img/LogosHeader/logoY_Marketing.svg"
            width="60"
            name="ymarketing"
            hover="hover:bg-yMarketing"
            text="text-shockersAEC"
            linksNames={linksNames}
            Dir={document.dir}
          />
          {children}
          <Footer
            width="130"
            name="yMarketing"
            background="bg-yMarketing"
            logo="/img/LogosFooter/logoY_MarketingWhite.svg"
            data={footerNames}
            socialMedia={socialMedias}
          />
        </>
      )}
    </div>
  );
}
