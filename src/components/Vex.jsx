import React from "react";
import Placeholder from "@/public/images/placeholder.webp";
import Image from "next/image";

const Vex = () => {
  return (
    <div className="w-1/3">
      <Image
        src={Placeholder}
        alt="Placeholder"
        className="size-1/2 ml-[10px] float-right"
      />
      <p className="first-line:font-bold text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Vex;
