import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectsSection = ({ data }) => {
  const totalImages =
    data?.images.data.map((item) => item?.attributes.url) || []; // الحصول على جميع الصور
  const numberOfProjects = 6; // عدد الكائنات
  const imagesPerProject = Math.ceil(totalImages.length / numberOfProjects); // عدد الصور لكل كائن

  // خلط جميع الصور
  const shuffledImages = totalImages.sort(() => Math.random() - 0.5);

  // إنشاء الكائنات مع تقسيم الصور بشكل ديناميكي
  const projects = Array.from({ length: numberOfProjects }, (_, index) => {
    return {
      id: index + 1,
      images: shuffledImages.slice(
        index * imagesPerProject,
        (index + 1) * imagesPerProject
      ),
      interval: 3000 + index * 100, // يمكن تعديل الفاصل الزمني حسب الحاجة
    };
  });

  const [currentImages, setCurrentImages] = useState(
    projects.map((p) => {
      if (Array.isArray(p?.images)) {
        p.images[0];
      }
    })
  );

  const [projectOrder, setProjectOrder] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const intervals = projects.map((project, index) =>
      setInterval(() => {
        setCurrentImages((prevImages) =>
          prevImages.map((currentImage, i) => {
            if (i === index) {
              const projectImages = project.images;
              const nextIndex =
                (projectImages?.indexOf(currentImage) + 1) %
                projectImages?.length;
              return projectImages[nextIndex];
            }
            return currentImage;
          })
        );
      }, project.interval)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [data]);

  // تغيير ترتيب المستطيلات كل 10 ثوانٍ
  useEffect(() => {
    const reorderInterval = setInterval(() => {
      setProjectOrder((prevOrder) => [...prevOrder.slice(1), prevOrder[0]]);
    }, 30000);

    return () => clearInterval(reorderInterval);
  }, []);

  return (
    <section className="w-screen h-screen">
      <div className="bg-yMarketing  w-full h-full flex items-center justify-center relative z-10">
        <div className="flex  w-full h-full flex-col xl:flex-row justify-center items-center lg:px-2 overflow-hidden">
          <div className=" text-white w-full h-full flex  flex-1 p-3 md:p-7 flex-col  md:flex-row lg:max-h-[800px] ">
            <div
              className={
                "w-full h-[400px] md:w-5/12 rounded-xl overflow-hidden  relative text-white"
              }
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold  mx-auto lg:my-10 my-5 ">
                {data?.title}
              </h1>
              <span className="text-lg  lg:text-xl xl:text-2xl">
                {data?.des}
              </span>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 w-full md:w-7/12 h-full p-0 md:p-4">
              {projectOrder.map((order, i) => (
                <motion.div
                  key={projects[order].id}
                  className={
                    i === 0
                      ? "col-span-2 row-span-2 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                      : "col-span-1 row-span-1 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 relative"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.div
                    key={currentImages[order]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={currentImages[order]}
                      alt={`Project ${order + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
