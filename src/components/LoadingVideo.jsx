import React from "react";

const loading = ({ URL, setIsVideoEnded }) => {
  const handleVideoEnded = () => {
    setIsVideoEnded(false);
  };
  return (
    <div className="fixed bg top-0 left-0 flex items-center justify-center w-screen h-screen ">
      <video
        autoPlay
        muted
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
      >
        <source src={URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default loading;
