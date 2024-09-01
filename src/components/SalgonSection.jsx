import AnimatedText from "@/components/Motion/AnimatedText";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SalgonSection = ({ titleText, dir }) => {
  const { t } = useTranslation();

  return (
    <section className=" ">
      <div className="w-screen h-screen">
        <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 sm:px-6 md:px-10 lg:px-14 overflow-hidden">
          <div className="absolute bottom-2  leading-none text-[67px]  sm:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-shockersAEC">
            {titleText.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: item.delay, duration: 1.5 },
                }}
                key={index}
              >
                {item.text}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, bottom: 0 }}
            animate={{
              bottom: [0, 50, 50, 0], // تبدأ من 0، ثم تنتقل إلى 10، ثم تبقى عند 10، ثم تعود إلى 0
              opacity: [0, 1, 1, 0], // بدء الظهور، ثم البقاء مرئيًا، ثم الاختفاء
              transition: {
                delay: parseFloat(titleText.length + 6), // التأخير قبل بدء الأنيميشن
                duration: 5, // إجمالي مدة الأنيميشن
                times: [0, 0.3, 0.6, 1], // التوقيت النسبي للتحولات
              },
            }}
            className={`absolute ${
              dir === "rtl" ? "left-10" : "right-10"
            }  bottom-10 hidden md:flex lg:mb-12 text-shockersAEC text-base lg:text-xl font-bold  items-center justify-center`}
          >
            {t("SCROLL_DOWN")}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevrons-down"
            >
              <path d="m7 6 5 5 5-5" />
              <path d="m7 13 5 5 5-5" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SalgonSection;
