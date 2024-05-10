import React from "react";
import PurpleBar from "../../../public/assets/PurpleBar.svg";
import Image from "next/image";

const AboutHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" text-vex-white font-russo text-8xl">ABOUT US</div>
      <div>
        <Image src={PurpleBar} alt="purple-bar" />
      </div>
    </div>
  );
};

export default AboutHeader;
