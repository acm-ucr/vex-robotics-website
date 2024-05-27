"use client";
import React from "react";
import Subteam from "./Subteam";
import { items } from "@/data/subteam";
import { motion } from "framer-motion";

const Subteams = () => {
  return (
    <div className="pb-12">
      {items.map((item, index) => {
        const slideanimation = {
          hidden: { opacity: 0, y: -10 },
          show: {
            opacity: 1,
            x: 0,
          },
        };

        return (
          <motion.div
            key={index}
            variants={slideanimation}
            transition={{ duration: 0.4, delay: item.delay }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Subteam
              key={index}
              text={item.text}
              img={item.img}
              float={item.float}
              delay={item.delay}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Subteams;
