import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import SlideProject from "@/components/SlideProject";
import React from "react";

const Projects = () => {
  return (
    <div>
      <ImageOverlaysTop namePage="PROJECTS" title="Shockers AEC" />
      <section className="lg:my-5 max-w-screen-xxl m-auto lg:px-2">
        <ImageOverlaysCenter title=" PROJECTS 1 " />
        <ImageOverlaysCenter title=" PROJECTS 2" />
        <ImageOverlaysCenter title=" PROJECTS 3" />
        <ImageOverlaysCenter title=" PROJECTS 4" />
      </section>
      <h2 className="font-bold  text-seconds  text-3xl text-center my-12">
        PROJECTS
      </h2>
      <SlideProject />
    </div>
  );
};

export default Projects;
