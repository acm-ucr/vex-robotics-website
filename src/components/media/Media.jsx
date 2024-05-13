import React from "react";
import Image from "next/image";

const Media = ({ image, date, title, event }) => {
  return (
    <div className="md:mt-0 mt-8 flex flex-col justify-center items-center">
      <div className="w-64 h-42 border-4 border-vex-purple-300 rounded-xl overflow-hidden mb-2">
        <Image src={image} alt="Placeholder" className="w-full h-full" />
      </div>
      <p className="md:text-sm text-[13px] text-vex-purple-400 font-saira">
        {date}{" "}
      </p>
      <p className="md:text-xl text-sm text-vex-white font-bold font-saira">
        {title}
      </p>
      <p className="text-vex-white font-saira italic max-w-xs text-center">
        {event}
      </p>
    </div>
  );
};

export default Media;
