"use client";
import { useEffect, useState, useCallback, createRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getName_HeaderLinks } from "../../../../utils/GlobleApi";
import { getFooter, getSocialMedias } from "../../../../utils/YardApi";
import Transition from "@/components/Motion/Transition";
import lottie from "lottie-web";
import ScrollToTopButton from "@/components/scrollTop";

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
      path: "/Motion/Yard LogoMotion fixed.json",
    });
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
      setLinksNames(res.data.data.attributes);
    });
  }, [lan]);
  const getFooter_ = useCallback(() => {
    getFooter(lan).then((res) => {
      setFooterNames(res.data.data.attributes);
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
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      {!isAnimationCompleted && (
        <div
          className="flex justify-center items-center w-screen h-screen"
          ref={animation}
        />
      )}
      {showContent && (
        <>
          <Transition bg="bg-yard" />
          <Header
            logo="/img/LogosHeader/logoYard.svg"
            width="70"
            name="yard"
            hover="hover:bg-yard"
            text="text-shockersAEC"
            linksNames={linksNames}
            Dir={locale === "ar" || locale === "kr" ? "rtl" : "ltr"}
          />
          {children}
          <ScrollToTopButton />

          <Footer
            width="120"
            name="yard"
            logo="/img/LogosFooter/logoYardWhite.svg"
            data={footerNames}
            socialMedia={socialMedias}
          />
        </>
      )}
    </div>
  );
}
