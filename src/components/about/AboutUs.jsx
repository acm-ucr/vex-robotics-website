import React from "react";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.webp";
import Subteam from "./Subteam";
import Button from "../Button";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center text-vex-white">
      <p className="text-center font-russo text-4xl mb-9">ABOUT US</p>
      <div className="w-2/5 flex flex-col justify-center items-center text-vex-white">
        <Image src={Placeholder} alt="Placeholder" className="mb-11 w-4/5" />
        <p className="text-center font-saira text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="mr-72 my-12">
        <Subteam
          text="Duis aute irure dolor in -reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        ></Subteam>
      </div>
      <div className="mb-12 ml-[550px]">
        <Subteam
          text="Duis aute irure dolor in -reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident."
        ></Subteam>
      </div>
      <div className="mr-[300px]">
        <Subteam
          text="Duis aute irure dolor in -reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident."
        ></Subteam>
      </div>

      <div className="my-12 flex justify-center border-indigo-500 border-2 rounded-lg text-xl">
        <Button link="/" text="Contact Us" color="bg-vex-black" />
      </div>
    </div>
  );
};

export default AboutUs;
