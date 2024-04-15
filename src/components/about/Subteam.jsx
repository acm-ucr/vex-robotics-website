import React from "react";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.webp";
import SubteamTag from "../SubteamTag";

const Subteam = ({ text }) => {
  return (
    <div>
      <div className="pb-3 max-w-fit">
        <>
          <SubteamTag text={"SUBTEAM"} />
        </>
      </div>
      <div className="flex items-center">
        <Image
          src={Placeholder}
          alt="Placeholder"
          className="size-44 rounded-full float-left"
        />
        <p className="pl-4 max-w-sm text-center text-xl font-saira">{text}</p>
      </div>
    </div>
  );
};

export default Subteam;
