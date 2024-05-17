"use client";
import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";
const Sponsors = () => {
  return (
    <div className="w-2/3 text-white">
      <p className="text-5xl font-russo text-vex-white text-center">
        OUR SPONSORS
      </p>
      <p className=" my-6 md:text-3xl text-xl font-saira text-vex-white text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
      <div className="my-3 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Button link="/sponsors" text="Sponsor Us" color="bg-vex-black" />
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
