"use client";
import React from "react";
import Board from "./Board";
import { boards } from "@/data/boards";
import { motion } from "framer-motion";

const Boards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center w-4/5 md:w-3/4 gap-7 md:gap-14"
    >
      {boards.map((item, index) => (
        <Board
          key={index}
          image={item.image}
          name={item.name}
          role={item.role}
          major={item.major}
        />
      ))}
    </motion.div>
  );
};

export default Boards;
