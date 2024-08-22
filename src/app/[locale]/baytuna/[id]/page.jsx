"use client";
import SlideProject from "@/components/SlideProject";
import ImageTitleProject from "@/components/ImageTitleProject";
import Image from "next/image";
import { motion } from "framer-motion";
import { getDetail_project } from "../../../../../utils/GlobleApi";
import { getProject, getProjects } from "../../../../../utils/BaytunaApi";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SubProject = ({ params: { locale, id } }) => {
  const router = useRouter();
  const lanID = {
    en: 0,
    ar: 0,
    af: 0,
  };
  let lan = locale;
  if (locale === "kr") {
    lan = "af";
  }
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();
  const [getDetailProject, setGetDetailProject] = useState();
  const assignLocalizationIDs = (locale, id, localizations) => {
    lanID[locale] = id;
    localizations.forEach((localization) => {
      const loc = localization?.attributes?.locale;
      if (loc === "af") {
        lanID.af = localization.id;
      } else if (loc === "ar") {
        lanID.ar = localization.id;
      } else if (loc === "en") {
        lanID.en = localization.id;
      }
      console.log(lanID);
    });
    if (lan === "ar") {
      router.push(`/baytuna/${lanID.ar}`);
    } else if (lan === "en") {
      router.push(`/baytuna/${lanID.en}`);
    } else {
      router.push(`/baytuna/${lanID.af}`);
    }
  };
  const getProjects_ = useCallback(() => {
    getProjects(lan).then((res) => {
      setProjects(res.data.data);
    });
  }, [lan]);

  const getProject_ = useCallback(() => {
    getProject(lan, id)
      .then((res) => {
        if (!res.data) {
          router.push("/en/baytuna");
        } else {
          setProject(res.data.data);
          const { locale, localizations } = res.data.data.attributes;
          assignLocalizationIDs(locale, res.data.data.id, localizations.data);
        }
      })
      .catch(() => {
        router.push("/en/baytuna");
      });
  }, [lan, id, router]);
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
              alt="imageOverlays"
              quality={75}
              placeholder="blur"
              blurDataURL="/img/imageOverlays.jpg"
            />
            {/* <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" /> */}
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
