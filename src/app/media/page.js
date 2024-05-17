"use client";
import React from "react";
import { motion } from "framer-motion";
import Medias from "@/components/media/Medias";
import Button from "@/components/Button";

const MediaPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-5">
      <Medias />
      <motion.div
        className="pb-2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Button link="/contact" text="Contact Us" />
      </motion.div>
    </div>
  );
};

export default MediaPage;
