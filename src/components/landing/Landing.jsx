import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div >
        <Image
          className="-z-10"
          objectFit="cover"
          src="/images/vexrobo.webp"
          layout="fill"
          alt="background image"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-screen md:w-full w-[70%] ">
        <Title />

        <div className="flex justify-center mt-10">
          <Button link={"/"} text={"Join Us"} color={"bg-vex-purple-300"} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
