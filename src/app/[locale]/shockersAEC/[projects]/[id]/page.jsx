"use client";
import SlideCategories from "@/components/SlideCategories";
import ImageTitleProject from "@/components/ImageTitleProject";
import Image from "next/image";
import { motion } from "framer-motion";
import { getDetail_project } from "../../../../../../utils/GlobleApi";
import {
  getCategoriesProjects,
  getProject,
} from "../../../../../../utils/ShockersApi";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const SubProject = ({ params: { locale, id } }) => {
  const router = useRouter();
  const lanID = {
    en: 0,
    ar: 0,
    af: 0,
  };
  let lan = locale;
  const params = useParams();
  if (locale === "kr") {
    lan = "af";
  }
  const [categoriesProjects, setCategoriesProjects] = useState([]);
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
      router.push(`/shockersAEC/${params.projects}/${lanID.ar}`);
    } else if (lan === "en") {
      router.push(`/shockersAEC/${params.projects}/${lanID.en}`);
    } else {
      router.push(`/shockersAEC/${params.projects}/${lanID.af}`);
    }
  };
  const getCategoriesProjects_ = useCallback(() => {
    getCategoriesProjects(lan).then((res) => {
      setCategoriesProjects(res.data.data);
    });
  }, [lan]);
  const getProject_ = useCallback(() => {
    getProject(lan, id)
      .then((res) => {
        if (!res.data) {
          router.push(`/en/shockersAEC`);
        } else {
          setProject(res.data.data);
          const { locale, localizations } = res.data.data.attributes;
          assignLocalizationIDs(locale, res.data.data.id, localizations.data);
        }
      })
      .catch(() => {
        router.push(`/en/shockersAEC`);
      });
  }, [lan, id, router]);
  const getDetail_project_ = useCallback(() => {
    getDetail_project(lan).then((res) => {
      setGetDetailProject(res.data.data.attributes);
    });
  }, [lan]);
  useEffect(() => {
    getCategoriesProjects_();
    getProject_();
    getDetail_project_();
  }, [getCategoriesProjects_, getProject_, getDetail_project_]);
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
        <SlideCategories
          categoriesProjects={categoriesProjects}
          link="shockersAEC"
        />
      </div>
    </motion.div>
  );
};

export default SubProject;
