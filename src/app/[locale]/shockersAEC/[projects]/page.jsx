"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { getProjects } from "../../../../../utils/ShockersApi";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const Projects = ({ params: { locale, projects } }) => {
  const router = useRouter();

  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const { t } = useTranslation();

  const [nameCat, setNameCat] = useState();
  const [projectsCat, setProjectsCat] = useState();

  const getProjects_ = useCallback(() => {
    getProjects(lan, projects)
      .then((res) => {
        if (!res.data) {
          router.push("/404");
        } else {
          setNameCat(res.data.data?.attributes?.title);
          setProjectsCat(res.data.data?.attributes?.shockers_projects?.data);
        }
      })
      .catch(() => {
        router.push("/404");
      });
  }, [lan, projects, router]);
  useEffect(() => {
    getProjects_();
  }, [getProjects_]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_S speed={4} animationData={S_json} />
      <section className="w-full h-full">
        <div className="h-screen sticky top-0">
          <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
            <motion.h1
              initial={{ x: "-100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 0.3,
              }}
              className="w-full p-2 absolute left-0 bottom-14 text-6xl md:text-8xl lg:text-9xl font-extrabold m-auto lg:mb-12 text-seconds"
            >
              {nameCat}
            </motion.h1>
          </div>
        </div>

        {projectsCat?.length > 0 ? (
          projectsCat?.map((item, index) => (
            <div key={index} className="sticky top-0">
              <Link href={`/shockersAEC/${projects}/${item.id}`}>
                <ImageOverlaysCenter
                  title={item?.attributes?.name}
                  imgURl={item?.attributes?.imgURl?.data?.attributes.url}
                />
              </Link>
            </div>
          ))
        ) : (
          <div className="sticky top-0 ">
            <ImageOverlaysCenter
              title={t("COMING_SOON")}
              imgURl="/img/imageOverlays.jpg"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default Projects;
