"use client";
import React from "react";
import Image from "next/image";
import clubPhoto from "@/public/images/VexRoboticsClubPhoto.webp";
import Header from "../Header";
import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeanimation = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeanimation}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center text-vex-white md:mt-0 mt-8 gap-10">
        <Header text="ABOUT US" />
        <div className="md:w-2/5 w-4/5 flex flex-col justify-center items-center text-vex-white gap-10">
          <Image src={clubPhoto} alt="Placeholder" className="w-4/5" />
          <p className="text-center font-saira md:text-xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
