"use client";
import logo from "@/public/assets/logo.webp";
import React, { useState } from "react";
import Link from "next/link";
import { items } from "@/data/navigation";
import Image from "next/image";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="md:pl-0 pl-2 mr-5 md:ml-12 ml-9  h-8 md:h-[22vh] bg-vex-black bg-opacity-80 w-full flex md:justify-between items-center backdrop-blur font-righteous text-[10px] md:text-lg 2xl:text-2xl pt-11">
      <Link
        onClick={() => {
          setSelected("");
        }}
        className="md:mr-0 mr-5 pt-10 hover:opacity-60 duration-300 w-1/5 2xl:w-1/4"
        href="/"
      >
        <Image
          alt="logo"
          src={logo}
          className="md:ml-24 md:max-w-[45%] max-w-full pb-12"
        />
      </Link>
      <div className="md:pl-0 pl-3 pr-7 mr-24 items-center flex flex-row whitespace-nowrap gap-4 md:w-1/2 justify-around w-3/5">
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
