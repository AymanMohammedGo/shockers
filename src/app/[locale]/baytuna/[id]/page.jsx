"use client";
import SlideProject from "@/components/SlideProject";
import ImageTitleProject from "@/components/ImageTitleProject";
import Image from "next/image";
import { motion } from "framer-motion";
import { getDetail_project } from "../../../../../utils/GlobleApi";
import { getProject, getProjects } from "../../../../../utils/BaytunaApi";
import { useCallback, useState, useEffect } from "react";
const SubProject = ({ params: { locale, id } }) => {
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();
  const [getDetailProject, setGetDetailProject] = useState();
  const getProjects_ = useCallback(() => {
    getProjects(lan).then((res) => {
      setProjects(res.data.data);
    });
  }, [lan]);

  const getProject_ = useCallback(() => {
    getProject(lan, id).then((res) => {
      setProject(res.data.data);
    });
  }, [lan, id]);
  const getDetail_project_ = useCallback(() => {
    getDetail_project(lan).then((res) => {
      setGetDetailProject(res.data.data.attributes);
    });
  }, [lan]);
  useEffect(() => {
    getProjects_();
    getProject_();
    getDetail_project_();
  }, [getProjects_, getProject_, getDetail_project_]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <div className="sticky top-0">
        <ImageTitleProject
          detail={getDetailProject}
          name={project?.attributes?.name}
          description={project?.attributes?.description}
          location={project?.attributes?.location}
          StartingEndingYear={project?.attributes?.StartingEndingYear}
          imgURL={project?.attributes?.imgURl?.data?.attributes?.url}
        />
      </div>
      {project?.attributes?.imgesGroup?.data?.map((item, index) => (
        <div key={index} className="sticky top-0">
          <div className="relative h-screen w-screen my-40">
            <Image
              className="object-cover"
              src={item?.attributes?.url}
              fill={true}
              alt=""
            />
            <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
          </div>
        </div>
      ))}

      <div className="sticky top-0 bg-primary ">
        <SlideProject allProjects={projects} link="baytuna" />
      </div>
    </motion.div>
  );
};

export default SubProject;
