import React from "react";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.webp";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center text-vex-white md:mt-0 mt-8">
      <div className="md:w-2/5 w-4/5 flex flex-col justify-center items-center text-vex-white">
        <Image src={Placeholder} alt="Placeholder" className="mb-11 w-4/5" />
        <p className="text-center font-saira md:text-xl text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
