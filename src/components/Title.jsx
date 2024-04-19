import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/VEXROBOTICS.svg";
import Location from "../../public/assets/UCR.svg";

const Title = () => {
  return (
    <div className="">
      <Image src={Logo} alt="VEX Robotics Logo" width={964} height={66} />
      <div className="flex justify-center">
        <div class="font-russo text-white text-8xl">ABOUT US</div>
      </div>
    </div>
  );

export default Title;
