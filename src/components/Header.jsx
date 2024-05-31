import React from "react";
import PurpleBar from "../../public/assets/PurpleBar.svg";
import Image from "next/image";

const Header = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-8 w-full">
      <div className="text-vex-white font-russo text-4xl p-2 md:text-8xl md:p-8">
        {text}
      </div>
      <div className="w-full">
        <Image alt="purple-bar" src={PurpleBar} className="w-3/4 mx-auto" />
      </div>
    </div>
  );
};

export default Header;
