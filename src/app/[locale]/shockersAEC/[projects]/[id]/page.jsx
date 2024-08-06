"use client";
import SlideProject from "@/components/SlideProject";
import ImageTitleProject from "@/components/ImageTitleProject";
import Image from "next/image";
import { motion } from "framer-motion";
import { getCategoriesProjects } from "../../../../../../utils/ShockersApi";
import { useCallback, useState, useEffect } from "react";
const SubProject = ({ params: { locale } }) => {
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <div className="sticky top-0">
        <ImageTitleProject />
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/img/projects1.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/img/projects2.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/img/projects1.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/img/projects2.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
      <div className="sticky top-0 bg-primary ">
        <SlideProject
          categoriesProjects={categoriesProjects}
          link="shockersAEC"
        />
      </div>
    </motion.div>
  );
};

export default SubProject;
