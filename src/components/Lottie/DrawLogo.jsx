"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const DrawLogo = ({ animationData, speed = 0.8, delay = 0, onComplete }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      animationData: animationData,
    });

    animationInstance.setSpeed(speed);

    const startAnimation = setTimeout(() => {
      animationInstance.goToAndPlay(0, true);
    }, delay);

    animationInstance.addEventListener("complete", () => {
      if (onComplete) onComplete(); // استدعاء onComplete عند انتهاء الرسوم المتحركة
    });

    return () => {
      clearTimeout(startAnimation);
      animationInstance.destroy();
    };
  }, [animationData, speed, delay, onComplete]);

  return (
    <div
      className="flex justify-center items-center w-screen h-screen"
      ref={animationContainer}
    ></div>
  );
};

export default DrawLogo;
