"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import Draw_S from "@/components/Lottie/Draw_S";
import S_json from "/public/Motion/S.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProject } from "../../../../../utils/ShockersApi";
import { useEffect, useState, useCallback } from "react";

const Projects = ({ params: { locale, projects } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [nameCat, setNameCat] = useState();
  const [projectsCat, setProjectsCat] = useState();

  const getProject_ = useCallback(() => {
    getProject(lan, projects).then((res) => {
      console.log(res.data.data?.attributes?.shockers_projects);
      setNameCat(res.data.data?.attributes?.title);
      setProjectsCat(res.data.data?.attributes?.shockers_projects?.data);
    });
  }, [lan, projects]);
  useEffect(() => {
    getProject_();
  }, [getProject_]);
  const project = [
    {
      name: `${projects} 1`,
      image: "/img/project.jpg",
    },
    {
      name: `${projects} 2`,
      image: "/img/project.jpg",
    },
    {
      name: `${projects} 3`,
      image: "/img/project.jpg",
    },
    {
      name: `${projects} 4`,
      image: "/img/project.jpg",
    },
    {
      name: `${projects} 5`,
      image: "/img/project.jpg",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Draw_S speed={4} animationData={S_json} />
      <section className="w-full h-full">
        <div className="h-screen sticky top-0">
          <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
            <motion.div
              initial={{ x: "-100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 0.3,
              }}
              className="w-[96%] absolute bottom-14 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds"
            >
              {nameCat}
            </motion.div>
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
              title="COMING SOON"
              imgURl="/img/imageOverlays.jpg"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default Projects;
