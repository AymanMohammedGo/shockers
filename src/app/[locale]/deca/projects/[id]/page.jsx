"use client";
import React from "react";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import ImageTitleProject from "@/components/ImageTitleProject";
import Image from "next/image";

const SubProject = ({ params }) => {
  return (
    <div>
      <ImageOverlaysTop namePage="Sub Project" title={params.id} />
      <ImageTitleProject />
      <div className="sticky top-0">
        <div className="relative h-screen w-screen">
          <Image
            className="object-cover"
            src="/assets/projects1.jpg"
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
            src="/assets/projects2.jpg"
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
            src="/assets/projects1.jpg"
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
            src="/assets/projects2.jpg"
            fill={true}
            alt=""
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0" />
        </div>
      </div>
    </div>
  );
};

export default SubProject;
