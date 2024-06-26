"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Board = ({ image, name, role, major }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div>
        <Image
          className="size-full rounded-xl"
          src={image}
          alt="Board Member"
        />

        <p className="text-vex-purple-100 text-2xl md:text-4xl font-bold font-saira">
          {name}
        </p>

        <p className="text-vex-grey text-xl md:text-2xl font-medium uppercase font-saira">
          {role}
        </p>

        <p className="text-vex-grey text-lg md:text-xl font-medium italic ">
          {major}
        </p>
      </div>
    </motion.div>
  );
};

export default Board;
