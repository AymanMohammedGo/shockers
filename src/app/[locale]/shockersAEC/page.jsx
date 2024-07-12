import SlideProject from "@/components/SlideProject";
import { Button } from "@/components/ui/button";

const ShockersHome = () => {
  return (
    <>
      <h2 className="font-bold  text-seconds  text-2xl text-center">
        PROJECTS
      </h2>
      <SlideProject />
      <Button className="bg-seconds w-fit text-white m-auto text-base mb-6 hover:text-seconds ">
        Read More..
      </Button>
    </>
  );
};

export default ShockersHome;
