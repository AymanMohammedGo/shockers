"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({
  animationData,
  speed,
  delay = 0,
  postion = "fixed",
}) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    // تحميل الرسوم المتحركة
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false, // اجعل الرسوم المتحركة لا تتكرر
      animationData: animationData,
    });

    // ضبط سرعة الرسوم المتحركة
    animationInstance.setSpeed(speed);

    // تطبيق التأخير قبل بدء الرسوم المتحركة
    const startAnimation = setTimeout(() => {
      animationInstance.goToAndPlay(0, true); // ابدأ الرسوم المتحركة من البداية
    }, delay);

    // تنظيف عند تدمير المكون
    return () => {
      clearTimeout(startAnimation); // إزالة التأخير عند التدمير
      animationInstance.destroy(); // تنظيف الرسوم المتحركة
    };
  }, [animationData, speed, delay]);

  return (
    <div
      ref={animationContainer}
      className={`${postion} min-w-[700px] right-0 h-screen pt-[135px] object-cover z-0`}
      // className="fixed top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-[1350px] md:w-[1472px] lg:w-[1756px] xxxl:w-[2000px] xlgl:w-[2200px] xlxl:w-[2600px]"
    ></div>
  );
};

export default LottieAnimation;
