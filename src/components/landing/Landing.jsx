"use client";
import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { motion } from "framer-motion";
const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Image
          className="-z-10"
          objectFit="cover"
          src="/images/vexrobo.webp"
          layout="fill"
          alt="background image"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-screen md:w-full w-[70%] ">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0.1 }}
        >
          <Title />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0.1 }}
        >
          <div className="flex justify-center mt-10 hover:-translate-y-1 duration-300">
            <Button
              link="https://discord.gg/mvAKvydA"
              text={"Join Us"}
              color={"bg-vex-purple-300"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
