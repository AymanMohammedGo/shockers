"use client";
import React from "react";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import { useParams } from "next/navigation";

const SubProject = () => {
  const params = useParams();
  const param = params.param;

  //   if (!param) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <ImageOverlaysTop namePage="Sub Project" title={param} />
    </div>
  );
};

export default SubProject;
