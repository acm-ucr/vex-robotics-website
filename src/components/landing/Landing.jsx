import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div>
      <div>
        <Image
          className="-z-10"
          objectFit="cover"
          src="/images/vexrobo.webp"
          layout="fill"
          alt="background image"
        />
      </div>
      <div className="content-center h-screen">
        <Title />
        <div className="flex justify-center mt-10">
          <Button link={"/"} text={"Join Us"} color={"bg-vex-purple-300"} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
