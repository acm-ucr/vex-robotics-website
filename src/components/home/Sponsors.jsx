"use client";
import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import Header from "../Header";
const Sponsors = () => {
  return (
    <div className="w-2/3 flex flex-col items-center">
      <Header text="OUR SPONSORS" />
      <p className="my-6 md:text-3xl text-xl font-saira text-vex-white text-center">
        Sponsors can contribute funds for purchasing robot kits, tools, and
        competition entry fees, or donate equipment and software. Additionally,
        they may offer technical expertise, mentorship, or internships to club
        members, enhancing their practical skills and career opportunities. In
        return, sponsors gain visibility and branding opportunities, fostering
        community engagement and promoting STEM education.
      </p>
      <div className="my-3 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Button
            link="mailto:ucrvexrobotics@gmail.com"
            text="Sponsor Us"
            color="bg-vex-black"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
