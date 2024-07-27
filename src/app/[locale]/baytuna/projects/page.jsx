"use client";
import SlideProject from "@/components/SlideProject";
import { motion } from "framer-motion";
import { useCallback, useState, useEffect } from "react";
import { getCategoriesProjects } from "../../../../../utils/ShockersApi";
const Projects = ({ params: { locale } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }

  const [categoriesProjects, setCategoriesProjects] = useState([]);

  const getCategoriesProjects_ = useCallback(() => {
    getCategoriesProjects(lan).then((res) => {
      console.log(res.data.data);
      setCategoriesProjects(res.data.data);
    });
  }, [lan]);
  useEffect(() => {
   
    getCategoriesProjects_();
  }, [getCategoriesProjects_]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <SlideProject
        title="PROJECTS"
        categoriesProjects={categoriesProjects }
        link="shockersAEC"
        ColorText="text-shockersAEC"
      />
    </motion.div>
  );
};

export default Projects;
