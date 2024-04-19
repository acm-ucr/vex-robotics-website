"use client";
import logo from "@/public/assets/logo.webp";
import React, { useState } from "react";
import Link from "next/link";
import { items } from "@/data/navigation";
import Image from "next/image";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="md:px-7 z-30 h-8 md:h-[22vh] bg-vex-black bg-opacity-80 w-full flex md:justify-between items-center backdrop-blur font-righteous text-[10px] md:text-lg 2xl:text-2xl pl-2 pt-11">
      <Link
        onClick={() => {
          setSelected("");
        }}
        className="pt-6 ml-32 hover:opacity-60 duration-300 w-1/5 2xl:w-1/4 max-w-[8%]"
        href="/"
      >
        <Image alt="logo" src={logo} />
      </Link>
      <div className="md:pl-0 pl-3 pr-7 mr-24 flex items-center md:w-1/2 justify-between w-3/4">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`hover:text-vex-grey duration-300 border-dashed ${
              selected === item.name
                ? "border-b-2 border-vex-white text-vex-white"
                : "text-vex-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
