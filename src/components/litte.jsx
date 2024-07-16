// components/LottieAnimation.js
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({ animationData, speed = 0.8 }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false, // اجعل الرسوم المتحركة لا تتكرر
      animationData: animationData,
    });

    // ضبط سرعة الرسوم المتحركة
    animationInstance.setSpeed(speed);

    // تنظيف عند تدمير المكون
    return () => {
      animationInstance.destroy();
    };
  }, [animationData, speed]);

  return (
    <div
      ref={animationContainer}
      className="fixed  top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-[1350px] md:w-[1472px]  lg:w-[1756px]  xxxl:w-[2000px] xlgl:w-[2200px]  xlxl:w-[2500px]  "
      // style={{
      // minWidth: "100vw",
      // minHeight: "100vh",
      // width: "1200px",
      // position: "fixed",
      // top: "57%",
      // left: "50%",
      // transform: "translate(-50%, -50%)",
      // zIndex: 0,
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // overflow: "hidden",
      // }}
    ></div>
  );
};

export default LottieAnimation;
