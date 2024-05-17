import React from "react";
<<<<<<< HEAD
=======
import PurpleBar from "../../public/assets/PurpleBar.svg";
>>>>>>> 80afb43ee97eb8cd1836acedc432f7a968da838e
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
