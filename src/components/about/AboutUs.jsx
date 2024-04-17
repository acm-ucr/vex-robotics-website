import React from "react";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.webp";

const AboutUs = () => {
  return (
    <div className="w-2/5 flex flex-col justify-center items-center">
      <Image src={Placeholder} alt="Placeholder" className="mb-5 w-4/5" />
      <p className="text-center font-saira text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default AboutUs;
