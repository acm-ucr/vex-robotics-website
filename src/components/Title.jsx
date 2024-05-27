import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/VEXROBOTICS.svg";
import Location from "../../public/assets/UCR.svg";

const Title = () => {
  return (
    <div className="">
      <Image src={Logo} alt="VEX Robotics Logo" width={964} height={66} />
      <div className="flex justify-center mt-5">
        <Image src={Location} alt="UCR Logo" width={444} height={66} />
      </div>
    </div>
  );
};
export default Title;
