import React from "react";
import Image from "next/image";
import PurpleBar from "../../public/assets/PurpleBar.svg";

const Header = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" text-vex-white font-russo text-8xl">{text}</div>
      <div>
        <Image src={PurpleBar} alt="purple-bar" />
      </div>
    </div>
  );
};

export default Header;
