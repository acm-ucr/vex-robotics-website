"use client";
import React from "react";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.webp";
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
          <Image src={Placeholder} alt="Placeholder" className="w-4/5" />
          <p className="text-center font-saira md:text-xl text-lg">
            We are Ursa Mechanica, the VexU robotics team at the University of
            California, Riverside. We are an official UCR Robotics Club
            specialized in furthering engineering knowledge and excellence in
            the field of robotics. We have a proud team of 10+ members who
            placed in the 90th-percentile at the 2023 Vex World Championship and
            qualified for 2024 Worlds by winning the most prestigious award, the
            Excellence Award, at our last competition. In our team, students
            will have a practical hands-on experience with engineering and
            science concepts.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
