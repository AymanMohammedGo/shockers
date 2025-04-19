import Image from "next/image";

const ImageOverlaysCenter = ({ title, imgURl }) => {
  return (
    <div className="relative w-screen h-screen ">
      <Image
        className="object-cover"
        src={`https://strapi.shockersgroup.com${imgURl}`}
        fill={true}
        alt="imageOverlays"
        quality={75}
        priority
      />
      <div className="bg-black bg-opacity-40 w-full h-full absolute top-0" />
      <div className="absolute flex items-center justify-center  inset-0 m-auto   ">
        <div className=" text-center lg:text-start   text-white p-2">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaysCenter;
