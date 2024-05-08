import React from "react";
import Image from "next/image";
import SubteamTag from "../SubteamTag";

const Subteam = ({ text, img, float = "left" }) => {
  return (
    <div className="text-vex-white py-2">
      <div
        className={`pb-3 flex items-center ${
          float === "right" ? "justify-end" : ""
        }`}
      >
        <SubteamTag text={"SUBTEAM"} />
      </div>
      <div
        className={`flex items-center ${
          float === "right" ? "justify-end" : ""
        }`}
      >
        {float === "left" ? (
          <Image
            src={img}
            alt="Placeholder"
            className="aspect-square size-1/6 rounded-full"
          />
        ) : null}
        <p className="px-4 max-w-sm text-center lg:text-xl sm:text-sm font-saira">
          {text}
        </p>
        {float === "right" ? (
          <Image
            src={img}
            alt="Placeholder"
            className="aspect-square size-1/6 rounded-full"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Subteam;
