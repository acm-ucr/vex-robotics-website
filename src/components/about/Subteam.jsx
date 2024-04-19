import React from "react";
import Image from "next/image";
import SubteamTag from "../SubteamTag";

const Subteam = ({ text, img }) => {
  return (
    <div>
      <div className="pb-3 max-w-fit">
        <>
          <SubteamTag text={"SUBTEAM"} />
        </>
      </div>
      <div className="flex items-center">
        <Image
          src={img}
          alt="Placeholder"
          className="aspect-square size-1/6 rounded-full float-left"
        />
        <p className="pl-4 max-w-sm text-center text-xl font-saira">{text}</p>
      </div>
    </div>
  );
};

export default Subteam;
