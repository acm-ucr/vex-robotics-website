import React from "react";
import RightPattern from "@/public/assets/RightPattern.svg";
import Logo from "../../public/assets/logo.webp";
import BottomPattern from "../../public/assets/BottomPattern.svg";
import LeftPattern from "../../public/assets/LeftPattern.svg";
import Image from "next/image";
import { ICONS } from "../data/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-vex-black w-full">
      <div className="flex justify-between flex-row items-center">
        <div className="md:mr-10 md:w-1/3 w-1/4">
          <Image src={LeftPattern} alt="left-pattern" />
        </div>
        <div className="w-1/2 md:1/3">
          <div className="bg-vex-purple-400 flex flex-col items-center justify-center rounded-lg">
            <div className="w-7/12 md:w-2/5 ">
              <Image src={Logo} alt="logo" className="p-2" />
            </div>
            <div className="flex flex-row justify-around items-center w-4/5 pb-7 h-2/5">
              {ICONS.map((icon, index) => {
                return (
                  <Link
                    key={index}
                    href={icon.link}
                    target="_blank"
                    className="hover:scale-110 duration-300 md:text-6xl sm:text-3xl text-xl text-white"
                  >
                    {icon.logo}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row justify-between mx-10">
            <div className="w-1/4">
              <Image src={BottomPattern} alt="bottom-pattern" />
            </div>
            <div className="w-1/4">
              <Image src={BottomPattern} alt="bottom-pattern" />
            </div>
          </div>
        </div>
        <div className="md:ml-10 w-1/4 md:w-1/3">
          <Image src={RightPattern} alt="right-pattern" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
