import React from "react";
import Image from "next/image";
import JoinUs from "../../public/assets/JoinUs.svg";

const Button = () => {
  return (
    <div className="">
      <button className="bg-vex-purple-300 rounded-2xl h-24 w-60 flex justify-center items-center">
        <Image src={JoinUs} alt="Join Us" />
      </button>
    </div>
  );
};

export default Button;
