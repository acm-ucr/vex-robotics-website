import React from "react";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.webp";

const Media = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-64 h-42 border-4 border-vex-purple-300 rounded-xl overflow-hidden mb-2">
        <Image src={Placeholder} alt="Placeholder" className="w-full h-full" />
      </div>
      <p className="text-xl text-vex-white font-bold font-saira">
        {" "}
        EVENT NAME{" "}
      </p>
      <p className="text-sm text-vex-purple-400  font-saira">5.3.2024</p>
      <p className="text-vex-white font-saira italic max-w-xs text-center">
        Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod
      </p>
    </div>
  );
};

export default Media;
