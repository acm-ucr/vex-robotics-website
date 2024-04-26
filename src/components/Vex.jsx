import React from "react";
import Placeholder from "@/public/images/placeholder.webp";
import Image from "next/image";

const Vex = () => {
  return (
    <div className="w-3/4">
      <Image
        src={Placeholder}
        alt="Placeholder"
        className=" size-3/5 ml-5 my-2 float-right"
      />
      <p className="text-left font-saira text-vex-white text-base md:text-2xl xl:text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
};

export default Vex;
