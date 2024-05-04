import React from "react";
import Button from "../Button";

const Sponsors = () => {
  return (
    <div className="w-2/3 text-white">
      <p className="text-4xl font-russo text-vex-white text-center">
        OUR SPONSORS
      </p>
      <p className=" my-2 font-saira text-vex-white text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
      <div className="my-3 flex justify-center">
        <Button link="/sponsors" text="Sponsor Us" color="bg-vex-black" />
      </div>
    </div>
  );
};

export default Sponsors;
