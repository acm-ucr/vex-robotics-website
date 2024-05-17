"use client";
import React from "react";
import Placeholder from "@/public/images/placeholder.webp";
import Image from "next/image";
import DotBar from "@/public/assets/DotBar.svg";
import CrossBar from "@/public/assets/CrossBar.svg";
import { motion } from "framer-motion";

const Vex = () => {
  return (
    <div className="flex flex-col xl:flex-row w-5/6 xl:w-3/4 items-center align-middle">
      <div className="flex flex-row w-full items-center mb-3 xl:mb-0">
        <div className="flex mr-2 xl:w-1/6  ">
          <Image src={DotBar} alt="Purple DotBar" className="w-2/5 xl:w-1/4" />
        </div>
        <div className="flex flex-col mr-2  w-full xl:w-full xl:mr-10">
          <p className="text-left font-saira mb-2 font-bold text-vex-purple-100 text-lg xl:text-4xl xl:mb-8 ">
            WHAT IS VEX ROBOTICS
          </p>
          <p className="text-left font-saira text-vex-white  text-sm xl:text-3xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-3/4  items-center xl:w-3/4">
        <Image
          src={CrossBar}
          alt="CrossBar"
          className=" -mb-2  z-0 w-full xl:-mb-3"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Image src={Placeholder} alt="Placeholder" className="w-full z-10" />
        </motion.div>
        <Image
          src={CrossBar}
          alt="CrossBar"
          className="-mt-2  z-1 w-full xl:-mt-3"
        />
      </div>
    </div>
  );
};

export default Vex;
