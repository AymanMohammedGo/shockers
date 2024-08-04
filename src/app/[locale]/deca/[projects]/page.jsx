"use client";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import SlideProject from "@/components/SlideProject";
import Draw_D from "@/components/Lottie/Draw_D";
import D_json from "/public/Motion/D.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCategoriesProjects } from "../../../../../utils/ShockersApi";
import { useCallback, useState, useEffect } from "react";

const Projects = ({ params: { locale, projects } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [categoriesProjects, setCategoriesProjects] = useState([]);

  const getCategoriesProjects_ = useCallback(() => {
    getCategoriesProjects(lan).then((res) => {
      setCategoriesProjects(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
    getCategoriesProjects_();
  }, [getCategoriesProjects_]);
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
      <Draw_D animationData={D_json} delay={500} />
      <section className="w-full h-full">
        <div className="h-screen sticky top-0">
          <div className="max-w-screen-xxl w-full h-full m-auto relative p-2 overflow-hidden">
            <motion.div
              initial={{ x: "-100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 2,
              }}
              className="w-[96%] absolute bottom-14 text-6xl md:text-8xl lg:text-9xl font-extrabold mb-3 m-auto lg:mb-12 text-seconds"
            >
              {projects}
            </motion.div>
          </div>
        </div>
        {project.map((item, index) => (
          <div key={index} className="sticky top-0">
            <Link href={`/deca/${projects}/${item.name}`}>
              <ImageOverlaysCenter title={item.name} />
            </Link>
          </div>
        ))}

        <div className="sticky top-0 bg-primary ">
          <SlideProject
            categoriesProjects={categoriesProjects}
            link="deca"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
