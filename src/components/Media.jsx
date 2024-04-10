import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/logo.svg";
const Media = () => {
  return (
    <div className="w-full h-full flex-center">
      <div className="flex justify-center bg-blue-950 px-2 py-2">
        <Image alt="" src={image1} className="" />
      </div>
      <div className="w-full h-full flex-center bg-blue-950 text-center text-white text-3xl whitespace-normal px-2 py-1">
        {" "}
        Title/Date/Event
      </div>
      <div className="w-full h-full flex-center bg-blue-950 text-center italic text-white text-3xl whitespace-normal px-2 pt-1 pb-3">
        {" "}
        Description
      </div>
    </div>
  );
};

export default Media;
