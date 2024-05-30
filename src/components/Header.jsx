import React from "react";
import PurpleBar from "../../public/assets/PurpleBar.svg";
import Image from "next/image";

const Header = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-8">
      <div className=" text-vex-white font-russo text-4xl p-2 md:text-8xl md:p-8">
        {text}
      </div>
      <div>
        <Image src={PurpleBar} alt="purple-bar" />
      </div>
    </div>
  );
};

export default Header;
