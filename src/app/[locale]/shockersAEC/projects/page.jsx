import SlideProject from "@/components/SlideProject";
const Projects = () => {
  const projects = [
    {
      name: "Urban_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Residential_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Commercial_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Industrial_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Institutional_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Recreational_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Building_Restoration",
      image: "/assets/project.jpg",
    },
    {
      name: "Interior_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Sustainability_and_Energy",
      image: "/assets/project.jpg",
    },
    {
      name: "Environmental_Design",
      image: "/assets/project.jpg",
    },
    {
      name: "Electrical_Engineering",
      image: "/assets/project.jpg",
    },
    {
      name: "Civil_Engineering",
      image: "/assets/project.jpg",
    },
  ];
  return (
    <SlideProject
      projects={projects}
      link="shockersAEC"
      ColorText="text-shockersAEC"
    />
  );
};

export default Projects;
