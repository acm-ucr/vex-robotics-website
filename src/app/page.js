"use client";
import Landing from "@/components/landing/Landing";
import Vex from "@/components/Vex";
import Sponsors from "@/components/home/Sponsors";
import Companies from "@/components/Companies";
import Image from "next/image";
import purpleBar from "@/public/assets/PurpleBar.svg";
import { motion } from "framer-motion";
import { useEffect } from "react";
const Home = () => {
  const slideInFromLeft = {
    hidden: { x: "-75vw" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  const slideInFromRight = {
    hidden: { x: "75vw" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10 overflow-x-hidden">
      <Landing />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft}
        className="w-full flex justify-center"
      >
        <Vex />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromRight}
        className="w-full flex justify-center"
      >
        <Sponsors />
      </motion.div>
      <Companies />
      <Image alt="bottom pattern" src={purpleBar} className="w-3/4" />
    </div>
  );
};
export default Home;
